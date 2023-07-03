import { TypeArticleSkeleton } from "./types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./contentfulClient";
import { ContentImage, parseContentfulContentImage } from "./contentImage";

type ArticleEntry = Entry<TypeArticleSkeleton, undefined, string>;

export interface Article {
  id: string;
  title: string;
  content: RichTextDocument;
  thumbnail: ContentImage | null;
  updatedAt?: string;
}

export function parseContentfulArticle(
  articleEntry?: ArticleEntry
): Article | null {
  if (!articleEntry) {
    return null;
  }

  return {
    id: articleEntry.sys.id,
    title: articleEntry.fields.title,
    content: articleEntry.fields.content,
    thumbnail: articleEntry.fields.thumbnail
      ? parseContentfulContentImage(articleEntry.fields.thumbnail)
      : null,
    updatedAt: articleEntry.sys.updatedAt,
  };
}

interface FetchArticlesOptions {
  limit?: number;
  keyword?: string;
}
export async function fetchArticles({
  limit,
  keyword,
}: FetchArticlesOptions): Promise<Article[]> {
  const contentful = contentfulClient();

  const ArticleResult = await contentful.getEntries<TypeArticleSkeleton>({
    content_type: "article",
    include: 2,
    limit,
    query: keyword,
    order: ["sys.updatedAt"],
  });

  return ArticleResult.items.map(
    (articleEntry) => parseContentfulArticle(articleEntry) as Article
  );
}

interface FetchArticleOptions {
  id: string;
}
export const fetchArticle = async ({
  id,
}: FetchArticleOptions): Promise<Article | null> => {
  const contentful = contentfulClient();

  const ArticleResult = await contentful.getEntries<TypeArticleSkeleton>({
    content_type: "article",
    "sys.id": id,
    include: 2,
  });

  return parseContentfulArticle(ArticleResult.items[0]);
};

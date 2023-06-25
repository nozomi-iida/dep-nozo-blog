import { Article } from "@/lib/contentful/articles";
import Link from "next/link";
import { Image } from "../Image";
import dayjs from "dayjs";

type ArticleWidgetProps = {
  article: Article;
};

export function ArticleWidget({ article }: ArticleWidgetProps) {
  return (
    <Link href={`/articles/${article.id}`} className="relative shadow group">
      <Image
        src={`https:${article.thumbnail?.src}` ?? ""}
        alt={article.thumbnail?.alt ?? ""}
        className="h-48"
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-black transition-opacity group-hover:opacity-30" />
      <div className="absolute bg-white bottom-5 w-5/6 p-4 transition-transform group-hover:-translate-y-4">
        <p className="font-semibold group-hover:underline group-hover:text-primary">
          {article.title}
        </p>
        <p className="text-sm text-subInfo font-medium">
          {dayjs(article.updatedAt).format("YYYY-MM-DD")}
        </p>
      </div>
    </Link>
  );
}

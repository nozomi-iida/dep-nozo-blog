import { Article } from "@/lib/contentful/Articles";
import Image from "next/image";
import dayjs from "dayjs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className={`bg p-7`}>
      <div className="relative h-52">
        <Image
          fill
          src={`https:${article.thumbnail?.src}` ?? ""}
          alt={article.thumbnail?.alt ?? ""}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 p-7">
        <p className="text-sm text-subInfoText font-bold">
          {dayjs(article.updatedAt).format("YYYY-MM-DD")}
        </p>
        <a
          // href={pagesPath.articles._id(article.articleId).$url()}
          className="group"
        >
          <h2
            className="text-2xl font-bold leading-snug group-hover:underline overflow-hidden"
            style={{
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
            }}
          >
            {article.title}
          </h2>
        </a>
        <p
          className="overflow-hidden"
          style={{
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
          }}
        >
          {documentToReactComponents(article.content)}
        </p>
        <a
          // href={pagesPath.articles._id(article.articleId).$url()}
          className="group"
        >
          <p className="text-md underline group-hover:text-activeColor">
            Read more
          </p>
        </a>
      </div>
    </div>
  );
}

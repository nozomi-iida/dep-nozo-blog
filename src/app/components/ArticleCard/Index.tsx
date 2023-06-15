import { Article } from "@/lib/articles/types";
import { ItemResType } from "@/lib/contentful/types";
import Image from "next/image";

type ArticleCardProps = {
  article: ItemResType<Article>;
};

export function ArticleCard({ article }: ArticleCardProps) {
  console.log(article.fields.thumbnail);

  return (
    <div className={`bg p-7`}>
      <Image alt={article.fields.title} src={""} className="w-full h-48" />
      <div className="flex flex-col space-y-4">
        <p className="text-sm text-subInfoText font-bold">
          {/* {dayjs(article.publishedAt).format("YYYY-MM-DD")} */}
        </p>
        <a
          // href={pagesPath.articles._id(article.articleId).$url()}
          className="group"
        >
          <h2
            className="text-2xl leading-snug group-hover:underline overflow-hidden"
            style={{
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
            }}
          >
            {article.fields.title}
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
          {/* {normalContent} */}
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

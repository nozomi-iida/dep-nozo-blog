import { Article } from "@/lib/contentful/articles";
import Image from "next/image";
import dayjs from "dayjs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white">
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
        <Link href={`/articles/${article.id}`} className="group">
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
        </Link>
        <div
          className="overflow-hidden"
          style={{
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
          }}
        >
          {documentToReactComponents(article.content)}
        </div>
        <Link href={`/articles/${article.id}`} className="group">
          <p className="text-md underline group-hover:text-activeColor">
            Read more
          </p>
        </Link>
      </div>
    </div>
  );
}

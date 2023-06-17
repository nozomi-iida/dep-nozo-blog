import { Article } from "@/lib/contentful/articles";
import Link from "next/link";
import { Image } from "../Image";
import dayjs from "dayjs";

type ArticleWidgetProps = {
  article: Article;
};

export function ArticleWidget({ article }: ArticleWidgetProps) {
  return (
    <Link href="" className="relative shadow">
      <Image
        src={`https:${article.thumbnail?.src}` ?? ""}
        alt={article.thumbnail?.alt ?? ""}
        className="h-48"
      />
      <div className="absolute bg-white bottom-5 w-5/6 p-4">
        <p className="font-semibold">{article.title}</p>
        <p className="text-sm text-subInfo font-medium">
          {dayjs(article.updatedAt).format("YYYY-MM-DD")}
        </p>
      </div>
    </Link>
  );
}

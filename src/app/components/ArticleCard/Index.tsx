import { Article } from "@/lib/articles/types";
import { ItemResType } from "@/lib/contentful/types";

type ArticleCardProps = {
  article: ItemResType<Article>;
};
export function ArticleCard({ article }: ArticleCardProps) {
  return <div>{article.fields.title}</div>;
}

import { getArticles } from "@/lib/articles/getArticles";
import { ArticleCard } from "./components/ArticleCard/Index";

export default async function Home() {
  const articles = await getArticles();

  return (
    <div>
      {articles.items.map((item) => (
        <ArticleCard article={item} key={item.sys.id} />
      ))}
    </div>
  );
}

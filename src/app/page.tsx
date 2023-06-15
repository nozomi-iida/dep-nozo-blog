import { ArticleCard } from "../components/ArticleCard/Index";
import { fetchArticles } from "@/lib/contentful/Articles";

export default async function Home() {
  const articles = await fetchArticles({ preview: false });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
}

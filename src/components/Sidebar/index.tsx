import { fetchArticles } from "@/lib/contentful/articles";
import { ArticleWidget } from "../ArticleWidget";

export async function Sidebar() {
  const articles = await fetchArticles({ limit: 5 });
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white p-4 w-full">
        <h4 className="font-bold text-xl">Latest artciles</h4>
      </div>
      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <ArticleWidget key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

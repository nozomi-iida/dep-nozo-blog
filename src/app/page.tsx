import { Header } from "@/components/Header";
import { ArticleCard } from "../components/ArticleCard/Index";
import { fetchArticles } from "@/lib/contentful/articles";
import { Layout } from "@/components/Layout";

export default async function Home() {
  const articles = await fetchArticles({ preview: false });
  return (
    <Layout>
      <Layout.Content>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      </Layout.Content>
    </Layout>
  );
}

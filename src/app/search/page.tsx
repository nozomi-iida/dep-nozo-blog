import { fetchArticles } from "@/lib/contentful/articles";
import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard/Index";

export type OptionalQuery = {
  keyword?: string;
};

type SearchProps = {
  searchParams: OptionalQuery;
};

export default async function Search({
  searchParams: { keyword },
}: SearchProps) {
  const articles = await fetchArticles({ keyword });
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

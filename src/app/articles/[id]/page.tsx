import { Image } from "@/components/Image";
import { Layout } from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";
import RichText from "@/lib/contentful/RichText";
import { fetchArticle } from "@/lib/contentful/articles";
import dayjs from "dayjs";

type ArticleDetailProps = {
  params: { id: string };
};

export default async function ArticleDetail({
  params: { id },
}: ArticleDetailProps) {
  const article = await fetchArticle({ id });

  if (!article) {
    return <div />;
  }

  return (
    <Layout>
      <Layout.Content>
        <Image
          src={`https:${article.thumbnail?.src}` ?? ""}
          alt={article.thumbnail?.alt ?? ""}
          className="h-52"
        />
        <div className="bg-white p-8 flex gap-4 flex-col">
          <div className="flex gap-2">
            <p className="text-subInfo">
              {dayjs(article?.updatedAt).format("YYYY-MM-DD")}
            </p>
          </div>
          <h2 className="text-3xl font-bold">{article.title}</h2>
          <RichText document={article.content} />
        </div>
      </Layout.Content>
      <Layout.Sidebar>
        <Sidebar />
      </Layout.Sidebar>
    </Layout>
  );
}

import { ListResType } from "../contentful/types";
import { Article } from "./types";

export async function getArticles() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/0rhyy8w1qpwd/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    { cache: "no-cache" }
  );
  const data: ListResType<Article> = await res.json();
  return data;
}

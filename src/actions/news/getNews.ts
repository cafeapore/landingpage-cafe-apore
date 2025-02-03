import { payload } from "@/lib/payload";
import { News } from "@/types/cms";
import { PaginatedDocs } from "payload";

type GetNewsData = {
  page: number;
};

export const getNewsData = async ({
  page,
}: GetNewsData): Promise<PaginatedDocs<News>> => {
  return (await payload.find({
    collection: "news",
    limit: 3,
    page,
  })) as PaginatedDocs<News>;
};

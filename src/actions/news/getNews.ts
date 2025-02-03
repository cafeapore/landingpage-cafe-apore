import { payload } from "@/lib/payload";
import { News } from "@/types/cms";
import { PaginatedDocs, Where } from "payload";

type GetNewsData = {
  page: number;
  where?: Where;
};

export const getNewsData = async ({
  page,
  where,
}: GetNewsData): Promise<PaginatedDocs<News>> => {
  return (await payload.find({
    collection: "news",
    limit: 3,
    page,
    where,
  })) as PaginatedDocs<News>;
};

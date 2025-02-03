import { payload } from "@/lib/payload";
import { News } from "@/types/cms";
import { PaginatedDocs } from "payload";

type GetNewsData = {
  page: number;
  query?: string;
};

export const getNewsData = async ({
  page,
  query,
}: GetNewsData): Promise<PaginatedDocs<News>> => {
  return (await payload.find({
    collection: "news",
    limit: 3,
    page,
    ...(query && {
      where: {
        or: [
          {
            title: {
              like: query,
            },
          },
          {
            description: {
              like: query,
            },
          },
        ],
      },
    }),
  })) as PaginatedDocs<News>;
};

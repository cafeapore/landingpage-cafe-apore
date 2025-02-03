"use server";

import { payload } from "@/lib/payload";
import { News } from "@/types/cms";
import { PaginatedDocs } from "payload";

export const getNewsBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<PaginatedDocs<News>> => {
  return (await payload.find({
    collection: "news",
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
    select: {
      id: true,
      image: true,
      content: true,
      description: true,
      title: true,
      createdAt: true,
      slug: true,
    },
  })) as PaginatedDocs<News>;
};

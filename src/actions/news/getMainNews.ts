"use server";

import { payload } from "@/lib/payload";
import { MainNews } from "@/types/cms";

export const getMainNewsData = async (): Promise<MainNews> => {
  return (await payload.findGlobal({
    slug: "mainNews",
    select: {
      id: true,
      image: true,
      content: true,
      description: true,
      title: true,
      createdAt: true,
    },
  })) as MainNews;
};

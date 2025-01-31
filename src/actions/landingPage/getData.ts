"use server";

import { payload } from "@/lib/payload";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export type LandingPageData = {
  id: string | number;
  heroVideo: string;
  locations: [
    {
      location: string;
      id: string;
    },
  ];
  history: SerializedEditorState;
  products: [
    {
      image: string;
      name: string;
      description: string;
    },
  ];
};

export const getLandingPageData = async (): Promise<LandingPageData> => {
  return (await payload.findGlobal({
    slug: "landingPage",
  })) as LandingPageData;
};

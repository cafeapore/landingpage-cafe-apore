"use server";
import { payload } from "@/lib/payload";
import { LandingPageData } from "@/types/cms";

export const getLandingPageData = async (): Promise<LandingPageData> => {
  return (await payload.findGlobal({
    slug: "landingPage",
  })) as LandingPageData;
};

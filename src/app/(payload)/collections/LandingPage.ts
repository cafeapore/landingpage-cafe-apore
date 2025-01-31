import { CollectionConfig } from "payload";

export const LandingPage: CollectionConfig = {
  slug: "landingpage",

  fields: [
    {
      name: "heroVideo",
      type: "upload",
      required: true,
      relationTo: "media",
    },
  ],
};

import { genSlug } from "@/utils/genSlug";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "media",
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data, req }) => {
        if (req.file) {
          req.file.name = genSlug(req.file.name);
        }
        return data;
      },
    ],
  },
};

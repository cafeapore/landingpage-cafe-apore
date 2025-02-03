import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { LandingPage } from "@/app/(payload)/collections/LandingPage";
import { pt } from "@payloadcms/translations/languages/pt";
import { MainNews } from "@/app/(payload)/collections/MainNews";
import { Media } from "@/app/(payload)/collections/Media";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";

export default buildConfig({
  editor: lexicalEditor({}),

  collections: [Media],

  upload: {
    limits: {
      fileSize: 1000000,
    },
  },

  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: "public-read",
      },
    }),
  ],

  globals: [LandingPage, MainNews],

  secret: process.env.PAYLOAD_SECRET || "",

  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),

  sharp,

  i18n: {
    supportedLanguages: { pt },
  },
});

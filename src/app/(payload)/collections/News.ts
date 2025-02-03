import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: "news",
  labels: {
    plural: "Notícias",
    singular: "Notícia",
  },
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "title",
      type: "text",
      label: "Título",
    },
    {
      name: "description",
      type: "text",
      label: "Descrição",
      maxLength: 240,
    },
    {
      name: "content",
      label: "Conteúdo",
      type: "richText",
      editor: lexicalEditor({}),
    },
  ],
};

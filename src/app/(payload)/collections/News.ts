import { genSlug } from "@/utils/genSlug";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";
import { v4 as uuidv4 } from "uuid";

export const News: CollectionConfig = {
  slug: "news",
  labels: {
    plural: "Notícias",
    singular: "Notícia",
  },
  fields: [
    {
      name: "image",
      label: "Imagem",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "title",
      type: "text",
      label: "Título",
      required: true,
    },

    {
      name: "description",
      type: "text",
      label: "Descrição",
      required: true,
      maxLength: 240,
    },
    {
      name: "content",
      label: "Conteúdo",
      type: "richText",
      editor: lexicalEditor({}),
    },
    {
      name: "main",
      type: "checkbox",
      label: "Principal",
      admin: {
        position: "sidebar",
      },
      defaultValue: false,
    },
    {
      name: "slug",
      type: "text",
      label: "Slug (Automático)",
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data.slug) {
          data.slug = genSlug(`${data.title}-${uuidv4().slice(0, 10)}`);
        }

        return data;
      },
    ],
  },
};

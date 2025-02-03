import { genSlug } from "@/utils/genSlug";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { GlobalConfig } from "payload";

export const MainNews: GlobalConfig = {
  slug: "mainNews",
  label: "Notícia Destaque",
  fields: [
    {
      name: "image",
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
      maxLength: 240,
      required: true,
    },
    {
      name: "content",
      label: "Conteúdo",
      type: "richText",
      editor: lexicalEditor({}),
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
        data.slug = genSlug(data.title);

        return data;
      },
    ],
  },
};

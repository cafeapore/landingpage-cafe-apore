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

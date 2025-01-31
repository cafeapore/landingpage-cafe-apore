import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { GlobalConfig } from "payload";

export const LandingPage: GlobalConfig = {
  slug: "landingPage",
  label: "Landing Page",
  fields: [
    {
      name: "heroVideo",
      type: "text",
      required: true,

      label: "Vídeo da Primeira Seção",
    },
    {
      name: "history",
      label: "História",
      type: "richText",
      editor: lexicalEditor({}),
    },

    {
      name: "products",
      type: "array",
      label: "Produtos",
      fields: [
        {
          type: "text",
          name: "image",
          label: "Imagem",
        },
        {
          type: "text",
          name: "name",
          label: "Nome",
        },
        {
          type: "text",
          name: "description",
          label: "Descrição",
        },
      ],
    },

    {
      name: "locations",
      type: "array",
      label: "Localizações",
      fields: [
        {
          type: "text",
          name: "location",
          label: "Nome da Localização",
        },
      ],
    },
  ],
};

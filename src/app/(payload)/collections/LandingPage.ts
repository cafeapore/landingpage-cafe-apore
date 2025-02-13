import { validatePayloadURL } from "@/utils/validatePayloadURL";
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
      validate: validatePayloadURL,
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
          name: "image",
          label: "Imagem",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          type: "text",
          name: "name",
          label: "Nome",
          required: true,
        },
        {
          type: "text",
          name: "description",
          label: "Descrição",
          required: true,
        },
      ],
    },

    // {
    //   name: "locations",
    //   type: "array",
    //   label: "Localizações",
    //   fields: [
    //     {
    //       type: "text",
    //       name: "text",
    //       label: "Nome da Localização",
    //     },
    //   ],
    // },
  ],
};

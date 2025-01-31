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
      validate: (value: any) => {
        const urlPattern = new RegExp(
          "^(https?:\\/\\/)?" + // Validate protocol (http or https)
            "((([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})|" + // Domain name
            "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%._+~#=]*)*" + // Port and path
            "(\\?[;&a-zA-Z0-9@:%_+.~#?&//=]*)?" + // Query string
            "i"
        );

        if (!value.match(urlPattern)) {
          return "URL Inválida";
        }
        return true;
      },
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
          name: "text",
          label: "Nome da Localização",
        },
      ],
    },
  ],
};

export type LandingPageData = {
  id: string | number;
  heroVideo: string;
  locations: [
    {
      location: string;
      id: string;
    },
  ];
  history: SerializedEditorState;
  products: ProductsProps[];
};

export type ProductsProps = {
  id: string;
  image: string;
  name: string;
  description: string;
};

import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { Media } from "payload/generated-types";

export type LandingPageData = {
  id: string | number;
  heroVideo: string;
  locations: LocationProps[];
  history: SerializedEditorState;
  products: ProductsProps[];
};

export type ProductsProps = {
  id: string;
  image: string;
  name: string;
  description: string;
};

export type LocationProps = {
  id: string;
  text: string;
};

export type MainNews = {
  id: string;
  image: Media;
  content: SerializedEditorState;
  description: string;
  title: string;
};

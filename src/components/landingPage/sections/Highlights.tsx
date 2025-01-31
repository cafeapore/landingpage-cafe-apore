"use client";
import { ProductsProps } from "@/types/cms";
import HighlightCard from "../HighlightCard";

type HighlightsSectionProps = {
  products: ProductsProps[];
};

const HighlightsSection = ({ products }: HighlightsSectionProps) => {
  return (
    <section
      className="max-w-6xl flex flex-col w-full h-full flex-1 min-h-svh mx-auto p-10 tablet:px-0 gap-10"
      id="products"
    >
      <div className="font-bold text-5xl border-l-2 mr-auto border-red-700 pl-2 h-32">
        <p>Nossos</p>
        <p>Destaques</p>
      </div>

      <div className="grid grid-cols-2 tablet:grid-cols-4 gap-5">
        {products.map((product) => (
          <HighlightCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;

"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { ProductsProps } from "@/types/cms";

type HighlightCardProps = {
  product: ProductsProps;
};

const HighlightCard = ({ product }: HighlightCardProps) => {
  return (
    <Card className="bg-background border-ring group overflow-hidden p-0">
      <CardContent className="flex flex-col min-h-52 h-full p-5 gap-2 relative">
        <div className="absolute h-full w-full bg-gradient-to-t via-transparent from-background to-transparent rounded-lg z-10" />
        <Image
          priority
          alt="Imagem do produto"
          src={product.image.url}
          height={1000}
          width={1000}
          className="h-52 w-full object-contain tablet:group-hover:scale-110 transition"
        />

        <p className="font-bold text-yellow-500 leading-none z-20 tablet:group-hover:translate-y-2 transition text-center">
          {product.name}
        </p>
        <p className="text-xs text-ring z-20 tablet:group-hover:translate-y-2 transition text-center">
          {product.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;

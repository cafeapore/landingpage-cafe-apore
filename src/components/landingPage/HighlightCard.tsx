import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { ProductsProps } from "@/types/cms";

type HighlightCardProps = {
  product: ProductsProps;
};

const HighlightCard = ({ product }: HighlightCardProps) => {
  return (
    <Card className="bg-ring relative hover:scale-105 transition -z-10">
      <div className="absolute h-full w-full bg-gradient-to-t from-ring to-transparent rounded-lg" />

      <CardContent className="flex flex-col  h-full p-5 gap-2">
        <Image
          alt="Imagem do produto"
          src={product.image}
          height={1000}
          width={1000}
          className="h-52 w-full object-contain"
        />

        <p className="font-bold text-yellow-500 leading-none z-10">
          {product.name}
        </p>
        <p className="text-xs text-background z-10">{product.description}</p>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;

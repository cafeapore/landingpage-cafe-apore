import Image from "next/image";
import { Card, CardContent } from "./ui/card";

type HighlightCardProps = {
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
};

const HighlightCard = ({ data }: HighlightCardProps) => {
  return (
    <Card className="bg-ring relative hover:scale-105 transition">
      <div className="absolute h-full w-full bg-gradient-to-t from-ring to-transparent rounded-lg" />

      <CardContent className="flex flex-col  h-full p-5 gap-2">
        <Image
          alt="Imagem do produto"
          src={data.image}
          height={1000}
          width={1000}
          className="h-52 w-full object-contain"
        />

        <p className="font-bold text-yellow-500 leading-none z-10">
          {data.title}
        </p>
        <p className="text-xs text-background z-10">{data.description}</p>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;

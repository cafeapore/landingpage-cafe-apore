import { MainNews } from "@/types/cms";
import { format } from "date-fns";
import Image from "next/image";

type MainNewsCard = {
  data: MainNews;
};

const MainNewsCard = ({ data }: MainNewsCard) => {
  return (
    <div className="flex-1 w-full h-full">
      <div className="h-full w-full relative min-h-[400px]">
        <Image
          alt="Hightlight"
          src={`${data.image.url}`}
          height={1000}
          width={1000}
          className="h-full w-full object-cover absolute rounded tablet:rounded-br-[10rem]"
        />
      </div>

      <p className="font-semibold text-ring">
        {data.title} |{" "}
        <span className="text-ring/50">
          {format(data.createdAt, "dd/MM/yyyy")}
        </span>
      </p>

      <p className="text-sm text-justify text-ring">{data.description}</p>
    </div>
  );
};

export default MainNewsCard;

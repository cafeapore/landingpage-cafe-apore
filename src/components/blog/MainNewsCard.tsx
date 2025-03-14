import { MainNews } from "@/types/cms";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

type MainNewsCard = {
  data: MainNews;
};

const MainNewsCard = ({ data }: MainNewsCard) => {
  return (
    <Link
      href={`/blog/${data.slug}`}
      className="flex-1 w-full h-full group cursor-default"
    >
      <div className="h-[50svh] tablet:max-h-[350px] w-full relative">
        <Image
          alt="Hightlight"
          src={`${data.image.url}`}
          height={1000}
          width={1000}
          className="h-full w-full object-cover absolute rounded tablet:rounded-br-[10rem] tablet:group-hover:scale-105 transition"
        />
      </div>

      <p className="font-semibold text-ring tablet:group-hover:translate-y-2 transition">
        {data.title} |{" "}
        <span className="text-ring/50">
          {format(data.createdAt, "dd/MM/yyyy")}
        </span>
      </p>

      <p className="text-sm text-justify text-ring tablet:group-hover:translate-y-2  transition">
        {data.description}
      </p>
    </Link>
  );
};

export default MainNewsCard;

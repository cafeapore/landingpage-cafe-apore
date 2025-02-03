import { News } from "@/types/cms";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  data: News;
};

const NewsCard = ({ data }: NewsCardProps) => {
  return (
    <Link
      href={`/blog/${data.slug}`}
      className="flex flex-col mobile:flex-row gap-2 group cursor-default"
    >
      <Image
        src={data.image.url}
        alt="Imagem Notícia"
        height={1000}
        width={1000}
        className="w-full h-64 tablet:w-32 tablet:h-32 rounded object-cover tablet:group-hover:scale-105 transition"
      />

      <div className="tablet:group-hover:translate-x-2 transition">
        <p className="font-semibold text-ring">
          {data.title} |{" "}
          <span className="text-ring/50">
            {format(data.createdAt, "dd/MM/yyyy")}
          </span>
        </p>
        <p className="text-sm text-justify text-ring">{data.description}</p>
      </div>
    </Link>
  );
};

export default NewsCard;

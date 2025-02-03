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
      className="flex gap-2 group cursor-default"
    >
      <Image
        src={data.image.url}
        alt="Imagem Notícia"
        height={1000}
        width={1000}
        className="h-40 w-40 tablet:w-[18svh] tablet:h-[18svh] max-h-40 max-w-40 rounded object-cover group-hover:scale-105 transition"
      />

      <div className="group-hover:translate-x-2 transition">
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

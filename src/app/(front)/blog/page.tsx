import NewsCard from "@/components/blog/NewsCard";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div className="min-h-[calc(100svh-10rem)] w-full py-5 h-full flex items-center">
      <div className="max-w-screen-desktop mx-auto h-full w-full flex items-center justify-center flex-col gap-5 px-5">
        <p className="text-center text-2xl font-semibold text-ring">
          Últimas Notícias
        </p>

        <div className="flex flex-col items-center tablet:flex-row gap-10 h-full">
          <div className="flex-1 w-full h-full">
            <div className="h-full w-full relative min-h-[400px]">
              <Image
                alt="Hightlight"
                src="/pic-1.png"
                height={1000}
                width={1000}
                className="h-full w-full object-cover absolute rounded rounded-br-[10rem]"
              />
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

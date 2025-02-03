import { getMainNewsData } from "@/actions/news/getMainNews";
import { getNewsData } from "@/actions/news/getNews";
import MainNewsCard from "@/components/blog/MainNewsCard";
import NewsCard from "@/components/blog/NewsCard";
import Paginate from "@/components/blog/Paginate";
import { Separator } from "@/components/ui/separator";

type BlogPage = {
  searchParams?: Promise<{
    page: number | null;
    query: string;
  }>;
};

const BlogPage = async ({ searchParams }: BlogPage) => {
  const sParams = await searchParams;
  const page = Number(sParams?.page) || 1;
  const query = sParams?.query;

  const mainNews = await getMainNewsData();
  const news = await getNewsData({ page, query });

  return (
    <div className="min-h-[calc(100svh-10rem)] w-full py-5 h-full flex items-center">
      <div className="max-w-screen-desktop mx-auto h-full w-full flex items-center justify-center flex-col gap-5 px-5">
        {!query && (
          <p className="text-center text-2xl font-semibold text-ring">
            Últimas Notícias
          </p>
        )}

        <div className="flex flex-col items-start tablet:flex-row gap-10 h-full">
          {!query && <MainNewsCard data={mainNews} />}

          <Separator className="block tablet:hidden" />

          <div className="flex-1 space-y-2">
            {news.docs.map((data) => (
              <NewsCard data={data} key={data.id} />
            ))}

            <Separator />

            {news.docs.length ? (
              <div className="flex  justify-around tablet:justify-end w-full gap-5">
                <Paginate
                  hasNextPage={news.hasNextPage}
                  hasPrevPage={news.hasPrevPage}
                  currentPage={page}
                />
              </div>
            ) : (
              <p>Nada encontrado.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

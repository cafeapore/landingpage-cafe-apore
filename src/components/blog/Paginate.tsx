"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginateProps = {
  hasPrevPage: boolean;
  hasNextPage: boolean;
  currentPage: number;
};

const Paginate = ({ hasNextPage, hasPrevPage, currentPage }: PaginateProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handlePrev = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", (currentPage - 1).toString());
    router.push(`${pathname}?${params}`);
  };

  const handleNext = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", (currentPage + 1).toString());
    router.push(`${pathname}?${params}`);
  };

  return (
    <>
      <Button
        className="px-10 tablet:px-4"
        disabled={!hasPrevPage}
        onClick={handlePrev}
      >
        <ChevronLeft />
      </Button>

      <Button
        className="px-10 tablet:px-4"
        disabled={!hasNextPage}
        onClick={handleNext}
      >
        <ChevronRight />
      </Button>
    </>
  );
};

export default Paginate;

"use client";

import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchField = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("query", query);
    router.push(`${pathname}?${params}`);
  };

  return (
    <div className="flex w-full justify-center">
      <Input
        className="border-ring tablet:max-w-80 rounded-r-none"
        placeholder="Buscar"
        onKeyDown={(e) => e.key == "Enter" && handleSearch()}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Button
        className="rounded-l-none border-l-0 bg-yellow-500"
        variant="outline"
        onClick={handleSearch}
      >
        <Search className="text-ring" />
      </Button>
    </div>
  );
};

export default SearchField;

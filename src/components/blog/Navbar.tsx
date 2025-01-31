import Image from "next/image";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const NavbarBlog = () => {
  return (
    <nav className="h-full tablet:h-20 px-5 py-5">
      <div className="max-w-screen-desktop w-full mx-auto flex flex-col tablet:flex-row items-center gap-5 justify-between">
        <div className="flex items-center gap-1">
          <p className="-rotate-90">Blog</p>
          <Separator orientation="vertical" className="h-20 w-1 bg-red-500" />
          <Image
            alt="Logo"
            src="/logo-preto.png"
            height={200}
            width={200}
            className="h-10 w-auto"
          />
        </div>

        <div className="flex w-full justify-center">
          <Input
            className="border-ring tablet:max-w-80 rounded-r-none"
            placeholder="Buscar"
          />

          <Button
            className="rounded-l-none border-l-0 bg-yellow-500"
            variant="outline"
          >
            <Search className="text-ring" />
          </Button>
        </div>

        <Button className="text-ring font-semibold bg-yellow-500 px-10 w-full tablet:w-min">
          Site
        </Button>
      </div>
    </nav>
  );
};

export default NavbarBlog;

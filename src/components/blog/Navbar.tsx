import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import SearchField from "./SearchField";
import Link from "next/link";

const NavbarBlog = () => {
  return (
    <nav className="h-full px-5 py-5 sticky top-0 bg-background/50 backdrop-blur-sm z-50">
      <div className="max-w-screen-desktop w-full mx-auto flex flex-col tablet:flex-row items-center gap-5 justify-between">
        <div className="flex justify-between items-center w-full">
          <Link href="/blog">
            <div className="flex items-center gap-1">
              <p className="-rotate-90">Blog</p>
              <Separator
                orientation="vertical"
                className="h-10 w-1 bg-red-500"
              />
              <Image
                alt="Logo"
                src="/logo-preto.png"
                height={200}
                width={200}
                className="h-10 w-auto"
              />
            </div>
          </Link>

          <Link href="/" className="block tablet:hidden">
            <Button className="text-ring font-semibold bg-yellow-500 px-10 w-full tablet:w-min">
              Site
            </Button>
          </Link>
        </div>

        <SearchField />

        <Link href="/" className="hidden tablet:block">
          <Button className="text-ring font-semibold bg-yellow-500 px-10 w-full tablet:w-min">
            Site
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarBlog;

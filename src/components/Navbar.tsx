"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

const Navbar = () => {
  const menuOptions = [
    {
      title: "Início",
      route: "#hero",
    },
    {
      title: "Sobre",
      route: "#about",
    },
    {
      title: "Produtos",
      route: "#products",
    },
    {
      title: "Regiões",
      route: "#provinces",
    },
    {
      title: "Blog",
      route: "/blog",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center bg-ring">
      {/*Mobile*/}
      <div className="mx-auto max-w-desktop px-10 py-5 flex justify-between items-center w-full">
        <Image
          alt="Logo"
          src="/logo.png"
          height={300}
          width={300}
          className="h-10 w-auto"
        />

        <Sheet>
          <SheetTrigger>
            <Menu size={32} className="text-secondary" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="space-y-2">
              {menuOptions.map((option, index) => (
                <Link
                  href={option.route}
                  key={index}
                  className="flex gap-2 p-2 border border-ring rounded"
                >
                  <p className="font-semibold">{option.title}</p>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

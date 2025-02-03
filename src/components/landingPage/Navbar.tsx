"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

  const contactButton = (
    <Link
      href="https://api.whatsapp.com/send?phone=5517981643029"
      target="_blank"
    >
      <Button className="bg-yellow-500 text-foreground font-bold px-10">
        Contato
      </Button>
    </Link>
  );

  return (
    <header
      className="w-full flex items-center justify-center bg-ring top-0"
      id="hero"
    >
      <nav className="mx-auto max-w-desktop px-10 py-5 flex justify-between items-center w-full">
        <Image
          alt="Logo"
          src="/logo.png"
          height={300}
          width={300}
          className="h-10 w-auto"
        />

        {/*Mobile navbar*/}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="tablet:hidden">
            <Menu size={32} className="text-secondary" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2">
              {menuOptions.map((option, index) => (
                <Link
                  href={option.route}
                  key={index}
                  className="flex gap-2 p-2 border border-ring rounded"
                  onClick={() => setOpen(false)}
                >
                  <p className="font-semibold">{option.title}</p>
                </Link>
              ))}

              {contactButton}
            </div>
          </SheetContent>
        </Sheet>

        {/*Desktop navbar*/}

        <div className="hidden tablet:flex gap-10 text-background ">
          {menuOptions.map((option, index) => (
            <Link href={option.route} key={index}>
              <p className="font-light hover:scale-110 hover:text-yellow-500 transition">
                {option.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="hidden tablet:block">{contactButton}</div>
      </nav>
    </header>
  );
};

export default Navbar;

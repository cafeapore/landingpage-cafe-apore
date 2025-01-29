"use client";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";

const NavbarScroll = () => {
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
    <Button className="bg-yellow-500 text-foreground font-bold px-10">
      Contato
    </Button>
  );

  const navbarRef = useRef<HTMLDivElement>(null);

  const scrollNav = () => {
    var y = window.scrollY;
    if (y >= 300) {
      console.log(true);
      navbarRef!.current!.classList.add("block");
      navbarRef!.current!.classList.remove("hidden");
    } else {
      console.log(false);
      navbarRef!.current!.classList.add("hidden");
      navbarRef!.current!.classList.remove("block");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
  }, []);

  return (
    <div className="top-0 sticky transition hidden" id="hero" ref={navbarRef}>
      <Navbar />
    </div>
  );
};

export default NavbarScroll;

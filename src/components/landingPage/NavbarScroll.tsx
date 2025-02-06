"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

const NavbarScroll = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(false);

  const scrollNav = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 400) {
      // Rolando para baixo → Mostrar Navbar
      setVisible(true);
    } else {
      // Rolando para cima → Esconder Navbar
      setVisible(false);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
    return () => window.removeEventListener("scroll", scrollNav);
  }, []);

  return (
    <div
      className={`top-0 left-0 fixed w-full transition-all z-[100] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
      ref={navbarRef}
    >
      <Navbar />
    </div>
  );
};

export default NavbarScroll;

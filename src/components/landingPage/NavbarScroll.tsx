"use client";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";

const NavbarScroll = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  const scrollNav = () => {
    var y = window.scrollY;
    if (y >= 400) {
      navbarRef?.current?.classList.add("opacity-100");
      navbarRef?.current?.classList.remove("opacity-0");
    } else {
      navbarRef?.current?.classList.add("opacity-0");
      navbarRef?.current?.classList.remove("opacity-100");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
  }, []);

  return (
    <div
      className="top-0 left-0 fixed w-full transition z-[100]"
      id="hero"
      ref={navbarRef}
    >
      <Navbar />
    </div>
  );
};

export default NavbarScroll;

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarScroll from "@/components/NavbarScroll";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <NavbarScroll />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

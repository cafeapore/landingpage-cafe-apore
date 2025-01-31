import NavbarBlog from "@/components/blog/Navbar";
import Footer from "@/components/landingPage/Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavbarBlog />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

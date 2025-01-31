import NavbarBlog from "@/components/blog/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavbarBlog />
      {children}
    </>
  );
};

export default Layout;

"üse client";

import revalidateRoute from "@/actions/revalidateRoute";
import NavbarBlog from "@/components/blog/Navbar";
import Footer from "@/components/landingPage/Footer";
import { ReactNode, useEffect } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    revalidateRoute({ route: "/" });
  }, []);

  return (
    <>
      <NavbarBlog />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

"use client";
import revalidateRoute from "@/actions/revalidateRoute";
import Footer from "@/components/landingPage/Footer";
import Navbar from "@/components/landingPage/Navbar";
import Lenis from "@studio-freight/lenis";
import { ReactNode, useEffect } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    revalidateRoute({ route: "/" });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />

      {children}
      <Footer />
    </>
  );
};

export default Layout;

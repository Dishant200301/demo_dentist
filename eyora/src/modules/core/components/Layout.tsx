import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import PageLoader from "./PageLoader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Layout = () => {
  useScrollReveal();

  return (
    <>
      <ScrollToTop />
      <PageLoader />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

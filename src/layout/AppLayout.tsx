import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const AppLayout = () => {
  return (
    <Fragment>
      <Header />
      <main className="min-h-screen mt-6 px-4 sm:px-8 lg:px-16 xl:px-22 2xl:px-24">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default AppLayout;

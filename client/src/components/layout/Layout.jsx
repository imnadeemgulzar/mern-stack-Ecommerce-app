import Footer from "./Footer";
import Header from "./Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto w-[90%]">
      <Header />
      <main className="min-h-[90vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

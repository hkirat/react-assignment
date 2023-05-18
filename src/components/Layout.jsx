import React from "react";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
const Layout = ({ children }) => {
  return (
    <div className=" dark:bg-black text-gray-300 font-light   min-h-screen overflow-scroll">
      <Navbar />
      <Toaster />
      <main className="mt-4">{children}</main>
    </div>
  );
};

export default Layout;

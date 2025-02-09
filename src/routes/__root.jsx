import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "../pages/footer/footer";
import Navbar from "../pages/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  ),
});

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import "./index.css";
import { routeTree } from "./routeTree.gen";

// Initialize the router with your route tree
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultLinkPreloadMaxAge: 5000,
  basepath: import.meta.env.BASE_URL || "",
});


// Create root and render the app with RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

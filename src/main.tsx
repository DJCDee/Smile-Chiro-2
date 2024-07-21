import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import "./assets/normalize.css";

import { createRouter, RouterProvider } from "@tanstack/react-router";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree, defaultPendingMinMs: 0 });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const documentRoot = document.getElementById("root")!;

createRoot(documentRoot).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

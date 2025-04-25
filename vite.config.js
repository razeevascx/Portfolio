// vite.config.ts
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base :'./',
  plugins: [
    viteReact(),
      ],
});

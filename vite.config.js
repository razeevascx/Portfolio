import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import mdx from '@mdx-js/rollup';

export default defineConfig({
  base: "./",
  plugins: [viteReact(),mdx()],
});

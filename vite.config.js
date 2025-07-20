import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import mdx from '@mdx-js/rollup';

export default defineConfig({
  base: "./",
  plugins: [viteReact(), VitePWA(),mdx()],
});

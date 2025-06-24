import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";

import { createRequire } from "node:module";
import { viteStaticCopy } from "vite-plugin-static-copy";
const require = createRequire(import.meta.url);
const pdfjsDistPath = path.dirname(require.resolve("pdfjs-dist/package.json"));
const cMapsDir = normalizePath(path.join(pdfjsDistPath, "cmaps"));
const standardFontsDir = normalizePath(
  path.join(
    path.dirname(require.resolve("pdfjs-dist/package.json")),
    "standard_fonts"
  )
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({ svgrOptions: { icon: true, include: "**/*.svg?react" } }),
    viteStaticCopy({
      targets: [
        {
          src: cMapsDir,
          dest: "",
        },
        { src: standardFontsDir, dest: "" },
      ],
    }),
  ],
  base: '/vntrip/',
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  resolve: {
    alias: {
      // now '@' maps to '<project-root>/src'
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "src"),
      // "@widgets": path.resolve("src/widgets"),
      // "@features": path.resolve("src/features"),
      // "@entities": path.resolve("src/entities"),
    },
  },
});

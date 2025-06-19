import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({ svgrOptions: { icon: true, include: "**/*.svg?react" } }),
  ],
  base: "/onboarding/",
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

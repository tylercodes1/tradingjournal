/// <reference types="vitest/config" />

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    watch: {
      usePolling: true, // sometimes needed on Windows / WSL
    },
  },
  test: {
    server: {
      deps: {
        inline: ["@mui/x-data-grid"],
      },
    },
  },
});

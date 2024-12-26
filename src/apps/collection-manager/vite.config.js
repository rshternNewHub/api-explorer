import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "collection_manager",
      filename: "remoteEntry.js",
      exposes: {
        './CollectionManager': './src/CollectionManager',
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    host: "localhost",
    port: 4004,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
})

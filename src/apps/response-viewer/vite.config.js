import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "response_viewer",
      filename: "remoteEntry.js",
      exposes: {
        './ResponseViewer': './src/ResponseViewer',
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
  preview: {
    host: "localhost",
    port: 4002,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
})

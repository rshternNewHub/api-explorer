import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "analytics",
      filename: "remoteEntry.js",
      exposes: {
        './Analytics': './src/Analytics',
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
    port: 4001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "request_builder",
      filename: "remoteEntry.js",
      exposes: {
        './RequestBuilder': './src/RequestBuilder',
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
    port: 4003,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
})

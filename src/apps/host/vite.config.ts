
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      remotes: {
        analytics: "http://localhost:4001/assets/remoteEntry.js",
        response_viewer: "http://localhost:4002/assets/remoteEntry.js",
        request_builder: "http://localhost:4003/assets/remoteEntry.js",
        collection_manager: "http://localhost:4004/assets/remoteEntry.js"
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
});
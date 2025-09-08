import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/RafaelPortfolio", // Use "/" for local, "/RafaelPortfolio" for Netlify
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  define: {
    "process.env": {
      VITE_KEY: JSON.stringify(process.env.VITE_KEY),
      VITE_API_URL: JSON.stringify(process.env.VITE_API_URL),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true, // Optional: helpful for debugging Netlify deploys
  },
});

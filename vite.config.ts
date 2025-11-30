import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
   server: {
    host: true, 
    
  },
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
       "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
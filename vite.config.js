import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: process.env.VITE_HOST || "0.0.0.0",
    port: Number(process.env.VITE_PORT || 5173),
    strictPort: true,
    watch: {
      usePolling: true,
    },
    hmr: {
      host: "localhost",
      port: Number(process.env.VITE_PORT || 5173),
      protocol: "ws",
    },
  },
});

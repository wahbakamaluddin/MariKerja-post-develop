import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this configuration to enable the Vite development server to be accessible from the network
  server: {
    host: "0.0.0.0", // Default: 'localhost'
  },
});

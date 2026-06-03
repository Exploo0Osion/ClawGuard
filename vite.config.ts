import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function isTruthy(value?: string) {
  return ["1", "true", "yes", "on"].includes((value ?? "").trim().toLowerCase());
}

const host = process.env.VITE_HOST ?? (isTruthy(process.env.CLAWGUARD_EXPOSE) ? "0.0.0.0" : "127.0.0.1");
const port = Number(process.env.VITE_PORT ?? "4174");
const previewPort = Number(process.env.VITE_PREVIEW_PORT ?? "4175");
const backendUrl = process.env.VITE_BACKEND_URL ?? "http://127.0.0.1:8123";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host,
    port,
    strictPort: false,
    watch: {
      ignored: [
        "**/backend/runtime/**",
        "**/backend/__pycache__/**",
        "**/backend/detectors/__pycache__/**",
      ],
    },
    proxy: {
      "/api": {
        target: backendUrl,
        changeOrigin: true,
      },
    },
  },
  preview: {
    host,
    port: previewPort,
  },
});

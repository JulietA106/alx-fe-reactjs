import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // This allows you to use `describe`, `it`, `expect` without importing from Vitest
    environment: "jsdom"
  },
});



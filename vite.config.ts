import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@sounds": path.resolve(__dirname, "./src/assets/sounds"),
    },
  },
});

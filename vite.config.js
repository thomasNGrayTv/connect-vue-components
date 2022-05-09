import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/install.js",
      formats: ["es", "cjs"],
      name: "ConnectVueComponents",
      fileName: (format) => {
        return format === "es" ? "index.js" : "index.cjs";
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

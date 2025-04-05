import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  root: "src",
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        join: resolve(__dirname, "src/join.html"),
        staff: resolve(__dirname, "src/staff.html"),
        gangs: resolve(__dirname, "src/gangs.html"),
        events: resolve(__dirname, "src/events.html"),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})


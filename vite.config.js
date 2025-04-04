import { defineConfig } from "vite"

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "src/index.html",
        about: "src/about.html",
        join: "src/join.html",
        staff: "src/staff.html",
        gangs: "src/gangs.html",
        events: "src/events.html",
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})


import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  optimizeDeps: { include: ["firebase/app", "firebase/firestore"] },
  server: {
    fsServe: {
      // Allow serving all files starting from two levels above the current directory in the fs hierarchy
      root: "../../",
    },
  },
});

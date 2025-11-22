import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const repoName = "Khalid-Abdelrazk-Portifolio";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Khalid-Abdelrazk-Portifolio/", // ✅ important for GitHub Pages
  server: {
    host: "::", // allows LAN access
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // for absolute imports
    },
  },
}));

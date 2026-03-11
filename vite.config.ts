import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const repoName = "Khalid-Abdelrazk-Portifolio";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ✅ Base URL for GitHub Pages
  base: `/${repoName}/`,

  // Dev server configuration
  server: {
    host: "::", // allows LAN access
    port: 8080,
  },

  // Plugins
  plugins: [
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean), // filter out false for production

  // Path alias
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // import from "@/components/..."
    },
  },
}));
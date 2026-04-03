// vite.config.ts
import { defineConfig } from "file:///C:/Users/khali/OneDrive/Desktop/Khalid-Abdelrazk-Portifolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/khali/OneDrive/Desktop/Khalid-Abdelrazk-Portifolio/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/khali/OneDrive/Desktop/Khalid-Abdelrazk-Portifolio/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\khali\\OneDrive\\Desktop\\Khalid-Abdelrazk-Portifolio";
var repoName = "Khalid-Abdelrazk-Portifolio";
var vite_config_default = defineConfig(({ mode }) => ({
  // ✅ Base URL for GitHub Pages
  base: `/${repoName}/`,
  // Dev server configuration
  server: {
    host: "::",
    // allows LAN access
    port: 8080
  },
  // Plugins
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  // filter out false for production
  // Path alias
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
      // import from "@/components/..."
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxraGFsaVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEtoYWxpZC1BYmRlbHJhemstUG9ydGlmb2xpb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxca2hhbGlcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxLaGFsaWQtQWJkZWxyYXprLVBvcnRpZm9saW9cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2toYWxpL09uZURyaXZlL0Rlc2t0b3AvS2hhbGlkLUFiZGVscmF6ay1Qb3J0aWZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XHJcblxyXG5jb25zdCByZXBvTmFtZSA9IFwiS2hhbGlkLUFiZGVscmF6ay1Qb3J0aWZvbGlvXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4gIC8vIFx1MjcwNSBCYXNlIFVSTCBmb3IgR2l0SHViIFBhZ2VzXHJcbiAgYmFzZTogYC8ke3JlcG9OYW1lfS9gLFxyXG5cclxuICAvLyBEZXYgc2VydmVyIGNvbmZpZ3VyYXRpb25cclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiOjpcIiwgLy8gYWxsb3dzIExBTiBhY2Nlc3NcclxuICAgIHBvcnQ6IDgwODAsXHJcbiAgfSxcclxuXHJcbiAgLy8gUGx1Z2luc1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksIFxyXG4gICAgbW9kZSA9PT0gXCJkZXZlbG9wbWVudFwiICYmIGNvbXBvbmVudFRhZ2dlcigpXHJcbiAgXS5maWx0ZXIoQm9vbGVhbiksIC8vIGZpbHRlciBvdXQgZmFsc2UgZm9yIHByb2R1Y3Rpb25cclxuXHJcbiAgLy8gUGF0aCBhbGlhc1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLCAvLyBpbXBvcnQgZnJvbSBcIkAvY29tcG9uZW50cy8uLi5cIlxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUErVyxTQUFTLG9CQUFvQjtBQUM1WSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBSGhDLElBQU0sbUNBQW1DO0FBS3pDLElBQU0sV0FBVztBQUdqQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBO0FBQUEsRUFFekMsTUFBTSxJQUFJLFFBQVE7QUFBQTtBQUFBLEVBR2xCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQTtBQUFBLEVBR0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUyxpQkFBaUIsZ0JBQWdCO0FBQUEsRUFDNUMsRUFBRSxPQUFPLE9BQU87QUFBQTtBQUFBO0FBQUEsRUFHaEIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K

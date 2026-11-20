import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/** Dev only: serve /sitemap.xml from seo.ts, the same source the build uses (the build writes dist/sitemap.xml). */
const devSitemap = (): Plugin => ({
  name: "dev-sitemap",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use("/sitemap.xml", async (_req, res, next) => {
      try {
        const { sitemapXml } = await server.ssrLoadModule("/src/lib/seo.ts");
        res.setHeader("Content-Type", "application/xml; charset=utf-8");
        res.end(sitemapXml());
      } catch (e) {
        next(e);
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), devSitemap()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

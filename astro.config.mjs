import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// 운영 도메인: https://dolyobab.org
export default defineConfig({
  site: "https://dolyobab.org",
  integrations: [sitemap()],
});

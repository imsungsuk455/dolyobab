import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO: 도메인 확정 후 site 교체 (예: https://dolyobab.com)
export default defineConfig({
  site: "https://dolyobab.com",
  integrations: [sitemap()],
});

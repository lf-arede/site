// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://arede.cloud",
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

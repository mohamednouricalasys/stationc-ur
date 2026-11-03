import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://nousavonsdeselles.fr", // le domaine seul
  base: "/station-coeur", // le sous-dossier
  trailingSlash: "ignore",
  output: "static",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: { prefixDefaultLocale: false },
  },
});


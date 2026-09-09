import sitemap from "@astrojs/sitemap"
import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"
import { SITE } from "./src/config/site.mjs"

export default defineConfig({
  site: SITE.origin,
  output: "static",
  trailingSlash: "always",
  devToolbar: { enabled: false },
  integrations: [
    sitemap(),
    starlight({
      title: SITE.name,
      description: SITE.description,
      favicon: "/favicon.svg",
      pagefind: true,
      lastUpdated: false,
      pagination: false,
      tableOfContents: false,
      credits: false,
      customCss: ["./src/styles/custom.css"],
      components: {
        Head: "./src/components/starlight/SeoHead.astro",
        Header: "./src/components/starlight/DocsHeader.astro",
        MarkdownContent: "./src/components/starlight/MarkdownContent.astro",
        PageTitle: "./src/components/starlight/PageTitle.astro",
        Sidebar: "./src/components/starlight/DocsSidebar.astro",
      },
      sidebar: [
        { label: "Overview", slug: "docs" },
        {
          label: "Interfaces",
          items: [
            { label: "Omarchy plugin", slug: "docs/plugin" },
            { label: "Web UI", slug: "docs/web" },
            { label: "Terminal (TUI)", slug: "docs/tui", badge: { text: "Planned", variant: "note" } },
            { label: "Desktop (GUI)", slug: "docs/desktop", badge: { text: "Planned", variant: "note" } },
          ],
        },
      ],
    }),
  ],
})

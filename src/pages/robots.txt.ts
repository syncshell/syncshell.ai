import { SITE } from "../config/site.mjs"
export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${SITE.origin}/sitemap-index.xml\n`, {
    headers: { "Content-Type": "text/plain" },
  })
}

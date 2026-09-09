import assert from "node:assert/strict"
import { readFile, readdir, stat } from "node:fs/promises"
import { resolve } from "node:path"

const root = resolve("dist")
const routes = ["/", "/docs/", "/docs/plugin/", "/docs/web/", "/docs/tui/", "/docs/desktop/"]
const htmlPath = (route) => resolve(root, "." + route, "index.html")
async function exists(path) {
  try {
    return (await stat(path)).isFile()
  } catch {
    return false
  }
}
async function files(path) {
  const result = []
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const full = resolve(path, entry.name)
    if (entry.isDirectory()) result.push(...(await files(full)))
    else result.push(full)
  }
  return result
}
for (const route of routes) {
  const html = await readFile(htmlPath(route), "utf8")
  assert(html.includes("Syncshell"), `${route}: missing identity`)
  assert(html.includes(`https://syncshell.ai${route}`), `${route}: missing canonical URL`)
  if (route.includes("tui") || route.includes("desktop")) {
    assert(html.includes("Planned"), `${route}: missing availability`)
    assert(!html.includes("language-bash"), `${route}: unexpected install command`)
  }
}
const all = await files(root)
for (const file of all) {
  assert((await stat(file)).size < 25 * 1024 * 1024, `Asset exceeds hosting limit: ${file}`)
  assert(!/\.(?:map|pem|key|toml)$/.test(file), `Unexpected publication artifact: ${file}`)
  if (!file.endsWith(".html")) continue
  const html = await readFile(file, "utf8")
  assert(
    !/Omarchy QOL|omarchyqol\.com|Plugin Control|Dropbox Quota|Metaplug/.test(html),
    `Old catalogue content: ${file}`,
  )
  assert(!/\/(?:home|Users)\/[^\s/"\x27]+\//.test(html), `Local workspace path: ${file}`)
  for (const match of html.matchAll(/(?:href|src|poster)="([^"]+)"/g)) {
    const link = match[1].replaceAll("&amp;", "&")
    if (/^(?:https?:|data:|mailto:|tel:|#)/.test(link)) continue
    const url = new URL(link, "https://syncshell.ai" + file.slice(root.length).replace(/index\.html$/, ""))
    const target = resolve(root, "." + decodeURIComponent(url.pathname))
    assert(target === root || target.startsWith(root + "/"), `Path outside site: ${link}`)
    const destination = (await exists(target)) ? target : resolve(target, "index.html")
    assert(await exists(destination), `Broken local link in ${file}: ${link}`)
    if (url.hash && destination.endsWith(".html")) {
      const content = await readFile(destination, "utf8")
      assert(content.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `Missing anchor: ${link}`)
    }
  }
}
assert(await exists(resolve(root, "pagefind/pagefind.js")), "Missing search index")
assert(await exists(resolve(root, "social-preview.png")), "Missing social preview")
const sitemap = await readFile(resolve(root, "sitemap-0.xml"), "utf8")
for (const route of routes) assert(sitemap.includes(`https://syncshell.ai${route}`), `Missing sitemap route: ${route}`)
console.log(`Verified ${routes.length} pages, local links, search assets, metadata, and ${all.length} deployment files`)

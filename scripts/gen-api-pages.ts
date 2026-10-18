import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { getPackages, getSymbols } from './generate.ts'
import { renderPackageHTML, renderSymbolPage } from './render.ts'

rmSync(resolve('.vitepress/cache'), { recursive: true, force: true })
mkdirSync(resolve('api/packages'), { recursive: true })

const packages = getPackages()
const titleSuffix = ' | API Reference'

function getPkgName(pkgName: string): string {
  if (pkgName.startsWith('workbox-')) {
    return `@vite-pwa/${pkgName}`
  }
  if (!pkgName.startsWith('unplugin-pwa-')) {
    return pkgName
  }
  // we're using unplugin-pwa-<package>, so we need to convert  itto @unplugin-pwa/<package>
  return `@unplugin-pwa/${pkgName.slice('unplugin-pwa-'.length)}`
}

for (let i = 0; i < packages.length; i++) {
  const pkg = packages[i]
  const title = getPkgName(pkg.label)
  console.log(pkg.label, title, getPkgName(pkg.label))
  const html = renderPackageHTML(pkg, {
    title,
    badge: 'package',
    frontmatter: i === packages.length - 1
      ? `---
title: '${title}${titleSuffix}'
prev:
  text: API Reference
  link: /api/
---

`
      : `---
title: '${title}${titleSuffix}' 
---

`,
  })
  const outPath = resolve(`api/packages/${pkg.slug}.md`)
  writeFileSync(outPath, html, 'utf-8')
  console.log(`✅ Generated package page: ${outPath}`)
}

// Wipe and recreate so stale files from old flat layout don't linger.
rmSync(resolve('api/symbols'), { recursive: true, force: true })
mkdirSync(resolve('api/symbols'), { recursive: true })

const symbols = getSymbols()
for (const s of symbols) {
  const page = renderSymbolPage(s)
  const outPath = resolve(`api/symbols/${s.slug}.md`)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, page, 'utf-8')
}
console.log(`✅ Generated ${symbols.length} symbol pages`)

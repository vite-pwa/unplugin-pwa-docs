export const API_CACHE_NAME = 'api-cache'
export const API_PAGE_REGEX = /^\/api\/(?:packages|symbols)\//i

export function prepareApiPages(): Map<string, string> {
  const indexPages = new Map<string, string>()
  for (const p of ['build', 'cli', 'swkit', 'window']) {
    const base = `/api/packages/workbox-${p}-index`
    const k = `${base}.html`
    indexPages.set(base, k)
    indexPages.set(k, k)
  }
  for (const p of ['core', 'vite']) {
    const base = `/api/packages/unplugin-pwa-${p}-index`
    const k = `${base}.html`
    indexPages.set(base, k)
    indexPages.set(k, k)
  }

  return indexPages
}

import { withPwa } from '@vite-pwa/vitepress'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import llmsVitePlugin, { copyOrDownloadAsMarkdownButtons } from 'vitepress-plugin-llms'
import { transformHead } from './conf/transform-head.ts'
import { description, ogImage, ogUrl } from './constants.ts'
import { nav, sidebar } from './nav/index.ts'

export default withPwa(defineConfig({
  lang: 'en-US',
  title: 'PWA Ecosystem',
  description,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'icon', href: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff' }],
    ['meta', { name: 'author', content: 'Anthony Fu, Joaquín Sánchez' }],
    ['meta', {
      name: 'keywords',
      content: 'PWA, React, Vue, VitePress, Preact, Svelte, SvelteKit, workbox, SolidJS, Vite, vite-plugin, íles, Astro, Nuxt 3, Nuxt module, React router, TanStack, Remix',
    }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'PWA Ecosystem' }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:title', content: 'PWA Ecosystem' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:site', content: '@antfu7' }],
    ['meta', { name: 'twitter:url', content: ogUrl }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  srcExclude: ['README.md', 'CONTRIBUTING.md'],
  // TODO: fix workbox dead links at workbox GH repo
  ignoreDeadLinks: ['/web/tools/workbox/guides/configure-workbox'],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    mermaid: true,
    config(md) {
      md.use(groupIconMdPlugin)
      md.use(copyOrDownloadAsMarkdownButtons)
    },
  },
  locales: {
    root: { label: 'English' },
    zh: { label: '简体中文', link: 'https://vite-pwa-org-zh.netlify.app/' },
  },
  themeConfig: {
    // logo: '/favicon.svg',
    editLink: {
      pattern: 'https://github.com/vite-pwa/unplugin-pwa-docs/edit/main/:path',
      text: 'Suggest changes to this page',
    },
    search: {
      provider: 'local',
      /*
      provider: 'algolia',
      options: {
        appId: 'TTO9T0AE3F',
        apiKey: '71bd3d3c7274205843267bb1ccb6b1a8',
        indexName: 'vite-plugin-pwa',
      },
       */
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/uccDuWkScq' },
      { icon: 'github', link: 'https://github.com/vite-pwa/unplugin-pwa-docs' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-PRESENT Anthony Fu, Joaquín Sánchez',
    },
    nav,
    sidebar,
  },
  vite: {
    logLevel: 'info',
    plugins: [
      groupIconVitePlugin(),
      llmsVitePlugin({
        title: description,
      }),
    ],
  },
  pwa: {
    path: '.vitepress/conf/pwa.ts',
  },
  transformHead,
}))

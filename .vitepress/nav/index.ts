import type { DefaultTheme } from 'vitepress'
import { apiSidebar } from './api-sidebar.ts'

const Guide: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/guide/',
  },
  {
    text: 'Register Service Worker',
    link: '/guide/register-service-worker',
  },
  {
    text: 'Service Worker Precache',
    link: '/guide/service-worker-precache',
  },
  {
    text: 'PWA Minimal Requirements',
    link: '/guide/pwa-minimal-requirements',
  },
  {
    text: 'Service Worker Strategies And Behaviors',
    link: '/guide/service-worker-strategies-and-behaviors',
  },
  {
    text: 'Automatic reload',
    link: '/guide/auto-update',
  },
  {
    text: 'Prompt for update',
    link: '/guide/prompt-for-update',
  },
  {
    text: 'Advanced (buildSW)',
    link: '/guide/build-sw',
  },
  {
    text: 'Static assets handling',
    link: '/guide/static-assets',
  },
  {
    text: 'Periodic SW updates',
    link: '/guide/periodic-sw-updates',
  },
  {
    text: 'Development',
    link: '/guide/development',
  },
  {
    text: 'Scaffolding Your First Vite PWA Project',
    link: '/guide/scaffolding',
  },
  {
    text: 'Service Worker without PWA capabilities',
    link: '/guide/service-worker-without-pwa-capabilities',
  },
  {
    text: 'Unregister Service Worker',
    link: '/guide/unregister-service-worker',
  },
  {
    text: 'Testing Service Worker',
    link: '/guide/testing-service-worker',
  },
  {
    text: 'Vite, Rollup, PWA and Workbox Cookbook',
    link: '/guide/cookbook',
  },
  {
    text: 'Change Log',
    link: '/guide/change-log',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const Deployment: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/deployment/',
  },
  {
    text: 'Netlify',
    link: '/deployment/netlify',
  },
  {
    text: 'AWS Amplify',
    link: '/deployment/aws',
  },
  {
    text: 'Vercel',
    link: '/deployment/vercel',
  },
  {
    text: 'NGINX',
    link: '/deployment/nginx',
  },
  {
    text: 'Apache Http Server 2.4+',
    link: '/deployment/apache',
  },
]

const AssetsGenerator: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/assets-generator/',
  },
  {
    text: 'CLI',
    link: '/assets-generator/cli',
  },
  {
    text: 'API',
    link: '/assets-generator/api',
  },
  {
    text: 'Integrations <sup class="VPBadgeCustom tip">Experimental</sup>',
    link: '/assets-generator/integrations',
  },
  {
    text: 'Migrations',
    link: '/assets-generator/migrations',
  },
]

const Frameworks: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/frameworks/',
  },
  {
    text: 'Vue',
    link: '/frameworks/vue',
  },
  {
    text: 'React',
    link: '/frameworks/react',
  },
  {
    text: 'Svelte',
    link: '/frameworks/svelte',
  },
  {
    text: 'SolidJS',
    link: '/frameworks/solidjs',
  },
  {
    text: 'Preact',
    link: '/frameworks/preact',
  },
  {
    text: 'îles',
    link: '/frameworks/iles',
  },
  {
    text: 'SvelteKit',
    link: '/frameworks/sveltekit',
  },
  {
    text: 'VitePress',
    link: '/frameworks/vitepress',
  },
  {
    text: 'Astro',
    link: '/frameworks/astro',
  },
  {
    text: 'Nuxt',
    link: '/frameworks/nuxt',
  },
  {
    text: 'Qwik',
    link: '/frameworks/qwik',
  },
  {
    text: 'Laravel',
    link: '/frameworks/laravel',
  },
  {
    text: 'React Router',
    link: '/frameworks/react-router',
  },
  {
    text: 'TanStack',
    link: '/frameworks/tanstack',
  },
  {
    text: 'Remix <sup class="VPBadgeCustom warning">Deprecated</sup>',
    link: '/frameworks/remix',
  },
]

const Examples: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/examples/',
  },
  {
    text: 'Vue',
    link: '/examples/vue',
  },
  {
    text: 'React',
    link: '/examples/react',
  },
  {
    text: 'Svelte',
    link: '/examples/svelte',
  },
  {
    text: 'SolidJS',
    link: '/examples/solidjs',
  },
  {
    text: 'Preact',
    link: '/examples/preact',
  },
  {
    text: 'îles',
    link: '/examples/iles',
  },
  {
    text: 'SvelteKit',
    link: '/examples/sveltekit',
  },
  {
    text: 'VitePress',
    link: '/examples/vitepress',
  },
  {
    text: 'Astro',
    link: '/examples/astro',
  },
  {
    text: 'Nuxt',
    link: '/examples/nuxt',
  },
  {
    text: 'Qwik',
    link: '/examples/qwik',
  },
  {
    text: 'React Router',
    link: '/examples/react-router',
  },
  {
    text: 'TanStack',
    link: '/examples/tanstack',
  },
  {
    text: 'Remix <sup class="VPBadgeCustom warning">Deprecated</sup>',
    link: '/examples/remix',
  },
]

const UnpluginPWA: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/unplugin-pwa/',
  },
  {
    text: 'Architecture Diagram',
    link: '/unplugin-pwa/architecture',
  },
  {
    text: '@unplugin-pwa/core',
    link: '/unplugin-pwa/core',
  },
  {
    text: '@unplugin-pwa/vite',
    link: '/unplugin-pwa/vite',
  },
  {
    text: '@unplugin-pwa/webpack',
    link: '/unplugin-pwa/webpack',
  },
  {
    text: '@unplugin-pwa/rspack',
    link: '/unplugin-pwa/rspack',
  },
  {
    text: '@unplugin-pwa/inspector',
    link: '/unplugin-pwa/inspector',
  },
]
const VitePWAWorkbox: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/vite-pwa-workbox/',
  },
  {
    text: '@vite-pwa/workbox-build',
    link: '/vite-pwa-workbox/build',
    collapsed: true,
    items: [
      {
        text: 'generateSW',
        link: '/vite-pwa-workbox/generate-sw',
      },
      {
        text: 'buildSW',
        link: '/vite-pwa-workbox/build-sw',
      },
      {
        text: 'injectManifest',
        link: '/vite-pwa-workbox/inject-manifest',
      },
    ],
  },
  {
    text: '@vite-pwa/workbox-cli',
    link: '/vite-pwa-workbox/cli',
  },
  {
    text: '@vite-pwa/workbox-swkit',
    link: '/vite-pwa-workbox/swkit',
  },
  {
    text: '@vite-pwa/workbox-window',
    link: '/vite-pwa-workbox/window',
  },
]

function prepareSidebar(idx: number) {
  return [
    {
      text: 'Guide',
      collapsible: true,
      collapsed: true,
      link: '/guide/',
      items: Guide,
    },
    {
      text: 'Unplugin PWA',
      collapsible: true,
      collapsed: true,
      link: '/unplugin-pwa/',
      activeMatch: '^/unplugin-pwa/',
      items: UnpluginPWA,
    },
    {
      text: 'Vite PWA Workbox',
      collapsible: true,
      collapsed: true,
      link: '/vite-pwa-workbox/',
      activeMatch: '^/vite-pwa-workbox/',
      items: VitePWAWorkbox,
    },
    {
      text: 'PWA Assets Generator',
      collapsible: true,
      collapsed: true,
      link: '/assets-generator/',
      items: AssetsGenerator,
    },
    {
      text: 'Frameworks',
      collapsible: true,
      collapsed: true,
      link: '/frameworks/',
      items: Frameworks,
    },
    {
      text: 'Examples',
      collapsible: true,
      collapsed: true,
      link: '/examples/',
      items: Examples,
    },
    {
      text: 'Deploy',
      collapsible: true,
      collapsed: true,
      link: '/deployment/',
      items: Deployment,
    },
    {
      text: 'API Reference',
      collapsible: true,
      collapsed: true,
      link: '/api/',
      activeMatch: '^/api/',
      items: apiSidebar(),
    },
    {
      text: '🚧 Documentation Status',
      link: '/docs-status',
    },
  ].map<DefaultTheme.SidebarItem>((entry, i) => {
    if (idx === i) {
      entry.collapsed = false
    }

    return entry
  })
}

export const sidebar: DefaultTheme.Sidebar = {
  '/guide/': prepareSidebar(0),
  '/unplugin-pwa/': prepareSidebar(1),
  '/vite-pwa-workbox/': prepareSidebar(2),
  '/assets-generator/': prepareSidebar(3),
  '/frameworks/': prepareSidebar(4),
  '/examples/': prepareSidebar(5),
  '/deployment/': prepareSidebar(6),
  '/api/': prepareSidebar(7),
  '/docs-status': prepareSidebar(8),
}

export const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    items: [
      {
        text: 'Getting Started',
        link: '/guide/',
        activeMatch: '^/guide/',
      },
      {
        text: 'PWA Assets Generator',
        link: '/assets-generator/',
        activeMatch: '^/assets-generator/',
      },
      {
        text: 'Frameworks',
        link: '/frameworks/',
        activeMatch: '^/frameworks/',
      },
      {
        text: 'Examples',
        link: '/examples/',
        activeMatch: '^/examples/',
      },
    ],
    activeMatch: '^/(guide|assets-generator|frameworks|examples)/',
  },
  {
    text: 'Deploy',
    link: '/deployment/',
    activeMatch: '^/deployment/',
  },
  {
    text: 'PWA Ecosystem',
    items: [
      {
        text: 'Unplugin PWA',
        items: [
          {
            text: 'Release Notes',
            link: 'https://github.com/vite-pwa/unplugin-pwa/releases',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/vite-pwa/unplugin-pwa/blob/main/CONTRIBUTING.md',
          },
        ],
      },
      {
        text: 'Vite PWA Workbox',
        items: [
          {
            text: 'Release Notes',
            link: 'https://github.com/vite-pwa/vite-pwa-workbox/releases',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/vite-pwa/vite-pwa-workbox/blob/main/CONTRIBUTING.md',
          },
        ],
      },
      {
        text: 'îles Module',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/ElMassimo/iles/tree/main/packages/pwa',
          },
          {
            text: 'Documentation',
            link: 'https://iles-docs.netlify.app/guide/pwa',
          },
        ],
      },
      {
        text: 'Integrations',
        items: [
          {
            text: 'SvelteKit',
            link: 'https://github.com/vite-pwa/sveltekit',
          },
          {
            text: 'VitePress',
            link: 'https://github.com/vite-pwa/vitepress',
          },
          {
            text: 'Astro',
            link: 'https://github.com/vite-pwa/astro',
          },
          {
            text: 'Nuxt',
            link: 'https://github.com/vite-pwa/nuxt',
          },
          {
            text: 'Qwik',
            link: 'https://github.com/QwikDev/pwa',
          },
          {
            text: 'React Router',
            link: 'https://github.com/vite-pwa/react-router',
          },
          {
            text: 'TanStack',
            link: 'https://github.com/vite-pwa/tanstack',
          },
          {
            text: 'Remix (deprecated)',
            link: 'https://github.com/vite-pwa/remix',
          },
        ],
      },
    ],
  },
  {
    text: 'API Reference',
    link: '/api/',
    activeMatch: '^/api/',
  },
]

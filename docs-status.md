---
title: Documentation Status
prev:
   text: esm-sw-detector | API Reference
   link: /api/packages/workbox-window-esm-sw-detector
---

# 🚧 Documentation Status

The `@unplugin-pwa` ecosystem is currently undergoing a massive architectural shift. We are evolving from a Vite-exclusive plugin (`vite-plugin-pwa`) to a universal, bundler-agnostic PWA solution powered by unplugin.

While the core engine and the Workbox fork have been integrated, **the documentation is still catching up**.

## What is outdated right now?
Currently, most of our **Guides**, **Assets Generator**, **Examples**, and **Frameworks** pages were ported directly from the current documentation. You will notice they heavily reference `vite-plugin-pwa`.

For the new architecture, the core package you will use depends on your bundler (e.g., `@unplugin-pwa/vite`), but the underlying configuration logic remains largely the same.

## The New Documentation Structure (WIP)
We are restructuring the documentation to follow a pattern similar to Google's *web.dev*: separating general PWA concepts from specific build tools. The upcoming structure will look like this:

1. **Core PWA Concepts (Bundler-Agnostic):** General guides on Service Workers, Manifest generation, Workbox strategies, and caching logic that apply everywhere.
2. **Bundler Integrations:** Specific setup instructions for:
    - `@unplugin-pwa/vite` (Replacing `vite-plugin-pwa`)
    - `@unplugin-pwa/webpack` & `@unplugin-pwa/rspack` (Build support available via `workbox-build`, Dev support is WIP)
    - `@unplugin-pwa/rsbuild` (Planned)
    - *Distant Future (Once Vite integration is fully stable):* `@unplugin-pwa/rolldown` and `@unplugin-pwa/bun`
3. **Framework Ecosystem:** Tailored guides using their respective bundlers under the hood.
    - **Current Integrations:** Nuxt, Astro, VitePress, and SvelteKit.
    - **Upcoming Integrations:** React Router and TanStack (with and without Nitro v3).

## How you can help
If you find broken links, missing Typedoc references, or outdated snippets that cause errors in the new Vite 8 environment, feel free to open an issue or submit a PR on our documentation repository.

*Thank you for your patience while we rebuild the ship while sailing!*
---
title: '@vite-pwa/workbox-swkit | Vite PWA Workbox'
---

# @vite-pwa/workbox-swkit

The modern toolkit for modern web apps. [@vite-pwa/workbox-swkit](https://github.com/vite-pwa/workbox/tree/main/packages/swkit) provides a consolidated, ESM-powered collection of JavaScript libraries to construct powerful, offline-first [Progressive Web Apps](https://web.dev/progressive-web-apps/) right inside your service worker context.


## Install

::: code-group
  ```bash [pnpm]
  pnpm add -D @vite-pwa/workbox-swkit
  ```
  ```bash [yarn]
  yarn add -D @vite-pwa/workbox-swkit
  ```
  ```bash [npm]
  npm i -D @vite-pwa/workbox-swkit
  ```
:::

## New Features

`@vite-pwa/workbox-swkit` introduces a major architectural shift alongside new capabilities:

- **Consolidated Architecture**: Everything that was previously scattered across multiple independent packages is now unified into this single package using subpackage exports.
- **Barrel Export**: It exports a main barrel file containing all APIs. **Important:** This is designed to be exclusively processed by `@vite-pwa/workbox-build` or `@vite-pwa/workbox-cli`. Their internal engines (Vite/Rolldown) handle the aggressive tree-shaking for your service worker. Consuming this barrel directly with your own application bundler is not supported.
- **Dual Build Orchestration**: when dual service workers are enabled (classic and ESM), the `@vite-pwa/workbox-build` engine compiles both builds independently and in parallel.
- **`@vite-pwa/workbox-swkit/precaching`**: Adds a new `parallel` option to allow precaching in parallel, instead of sequentially.
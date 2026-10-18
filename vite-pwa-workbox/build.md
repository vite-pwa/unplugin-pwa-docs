---
title: '@vite-pwa/workbox-build | Vite PWA Workbox'
---

# @vite-pwa/workbox-build

The modern toolkit for modern web apps. [@vite-pwa/workbox-build](https://github.com/vite-pwa/workbox/tree/main/packages/build) provides the essential, ESM-powered JavaScript libraries you need to build rock-solid, offline-ready [Progressive Web Apps](https://web.dev/progressive-web-apps/).

## Requirements

`@vite-pwa/workbox-build` requires **Node 22.14.0 or above**.

You need to install the following dependencies to run `@vite-pwa/workbox-build`:
- Rolldown 1.0.0 or above: if you've installed Vite 8 or above, you don't need to install Rolldown as a dependency, because Vite 8 uses Rolldown; you need to install Rolldown when using Webpack, Rspack or Rsbuild
- `magicast` 0.5.0 or above: when using `generateSW` strategy only

## Install

::: code-group
  ```bash [pnpm]
  pnpm add -D @vite-pwa/workbox-build
  ```
  ```bash [yarn]
  yarn add -D @vite-pwa/workbox-build
  ```
  ```bash [npm]
  npm i -D @vite-pwa/workbox-build
  ```
:::

## Breaking Changes

The following breaking changes were introduced in the packages:
- `injectManifest` strategy doesn't build your service worker, `@vite-pwa/workbox-build` just injects the manifest into your service worker
- removed service worker templates: consumer should use a custom service worker instead (using ESM notation)

## New Features

`@vite-pwa/workbox-build` adds these new features:
- `buildSW` strategy: builds your service worker and injects the manifest into it when enabled.
- Dual service worker generation, with `generateSW` and `buildSW` strategies: use `swType` option.
- Dot `env` files support: `.env`, `.env.local`, `.env.[mode]`, `.env.[mode].local` files are supported.
- Custom Rolldown/Vite plugins.
- Custom logs level configuration.
- Minify the service worker build, including comments (Rolldown options).
- Custom code splitting chunks: now it is possible to split your service worker code into multiple chunks, not just `workbox` service worker modules.
- New `additionalManifestEntriesGenerator` factory to allow using async generators to defer the manifest entries generation (read and calculate revision) until required.
- `generateSW` strategy supports configuring `parallel` option to allow precaching in parallel, instead of sequentially.
- `generateSW` strategy supports configuring `urlManipulation` option.
- Build plugins for Vite, Webpack, Rspack and Rsbuild.

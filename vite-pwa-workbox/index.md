---
title: Getting Started | Vite PWA Workbox
prev:
  text: Inspector Package | Unplugin PWA
  link: /unplugin-pwa/inspector/
---

# Getting Started

[Vite PWA Workbox](https://github.com/vite-pwa/workbox) is a fork of [**Google Workbox**](https://developer.chrome.com/docs/workbox/) built from scratch. It is a collection of packages with modules to make progressive web app (PWA) service worker development more enjoyable and remove the need to deal with the low-level service worker API.

## Requirements

`@vite-pwa/workbox-build` and `@vite-pwa/workbox-cli` require **Node 22.14.0 or above**.

You need to install the following dependencies to run `@vite-pwa/workbox-cli` or use `@vite-pwa/workbox-build`:
- Rolldown 1.0.0 or above: if you've installed Vite 8 or above, you don't need to install Rolldown as a dependency, because Vite 8 uses Rolldown; you need to install Rolldown when using Webpack, Rspack or Rsbuild.
- `magicast` 0.5.0 or above: when using `generateSW` strategy only.

## Breaking Changes

The following breaking changes were introduced in the packages:
- `injectManifest` strategy doesn't build your service worker, `@vite-pwa/workbox-build` just injects the manifest into your service worker.
- Removed service worker templates: consumers should use a custom service worker instead (using ESM notation).
- Removed offline Google Analytics support.
- `workbox-sw` not yet available (missing CDN distribution).

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

`@vite-pwa/workbox-swkit/precaching` package adds these new features:
- New `parallel` option to allow precaching in parallel, instead of sequentially.

`@vite-pwa/workbox-window` package adds these new features:
- Exported a new `esm-sw-detector` subpackage export to allow detecting ESM service worker support in the browser: based on [caniuse](https://caniuse.com/?search=service+worker) baseline specifications.

## The Modernized Workbox Fork (Powered by Rolldown Everywhere)

The legacy Workbox build system was designed in a different era of the web. By forking and rewriting its core internals, we've gotten rid of massive amounts of technical debt (like `magicast` manipulations and complex configuration layers).

- **Native Bundler Performance**: The new `buildSW` engine hooks directly into Vite 8 or Rolldown 1's native dependency graphs.
- **Service Worker Code-Splitting Support**: While the current `vite-plugin-pwa` forces the Service Worker to be built as a single monolith, the new version introduces full code-splitting support. The new engine checks if `inlineWorkboxRuntime` is disabled; if so, it automatically breaks down the monolith, computes the resulting dependency graphs, tracks internal synchronous imports, and guarantees that chunks are correctly structured and resolved whenever a Classic Service Worker build is targeted (either as a standalone choice or as part of the Dual Build strategy).
- **Advanced Custom Chunks & Visual Graphing (Experimental)**: Alongside standard code-splitting, we are introducing highly experimental support for user-defined `customChunks` via granular configuration callbacks. The engine will dynamically map these custom allocations, resolve complex internal dependencies, and orchestrate them seamlessly. To guarantee total safety, the engine features a built-in contention layer that blocks deployment errors (such as preventing a Service Worker or its internal synchronous runtime dependencies from accidentally precaching themselves) and intercepts circular graph conflicts before they can pollute your production environments.
- **Next-Gen ESM Service Worker Support**: Modern browser versions natively support Service Worker registration with `{ type: 'module' }`. To ensure compatibility with older browser versions, the new `buildSW` engine embraces this by offering native ESM Service Worker generation alongside an automated **Dual Build strategy** (or you can use the repository's `esm-sw-detector`). This allows you to compile a modern ESM Service Worker and a legacy Classic Service Worker fallback simultaneously from the same source. **Note that this strategy requires your source code to be written using strict ESM syntax (`import`/`export`)**; the engine will then automatically handle the down-leveling and inject the required internal orchestration whenever the Classic asset target is compiled.
- **Automatic Feature Detection**: We are introducing `@vite-pwa/workbox-window`, which exposes a lightweight `esm-sw-detector` runtime utility based on verified [CanIUse](https://caniuse.com/?search=service+worker) baseline specifications. This module determines browser capabilities on the fly to orchestrate modern asset loading.
- **Bundler Agnostic Future**: The separation of concerns makes the core engine completely agnostic. We will expose dedicated standalone plugins for **Webpack** and **Rspack** via `unplugin`. At the `buildEnd` phase of those bundlers, the plugin will seamlessly invoke **Rolldown internally** to bundle, resolve, and generate the final Service Worker.
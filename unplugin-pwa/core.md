---
title: '@unplugin-pwa/core | Unplugin PWA'
---

# @unplugin-pwa/core

The bundler-agnostic foundation of `unplugin-pwa`. It contains the shared PWA logic (configuration resolution, Web App Manifest, service worker registration, virtual modules, PWA assets and inspector utilities) with no dependency on any specific bundler.

> 💡 **Note:** This package is aimed at integration authors. If you just want to add PWA support to your app, use an integration such as [`@unplugin-pwa/vite`](https://npmx.dev/package/@unplugin-pwa/vite) instead.

## What's Inside?

Each area is exposed as its own subpath export, so you only import what you need and everything stays tree-shakable.

| Area | Subpaths |
| --- | --- |
| Configuration and context | `config`, `context`, `context-types`, `constants`, `prepare-pwa-context`, `prepare-sw-names` |
| Web App Manifest | `generate-web-manifest`, `create-web-manifest-html-link`, `inject-web-manifest-html-link` |
| Service worker registration | `generate-register-sw`, `create-generate-register-sw-script`, `inject-generate-register-sw`, `generate-virtual-module` |
| Service worker utilities | `additional-manifest-entries`, `dual-sw-utilities`, `build-pwa-asset` |
| Development | `dev/prepare-sw-names-and-glob-directory`, `dev/prepare-temp-folder` |
| PWA Assets | `pwa-assets/*` (`build`, `config`, `dev`, `generator`, `html`, `manifest`, `options`, `types`, `utils`) |
| Inspector | `inspector-utils`, `resolve-inspector-dist` |
| Misc | `html`, `helpers`, `logs` |

## Client Types

The virtual module and framework type declarations also live here, shared by all integrations:

| Subpath | Use it for |
| --- | --- |
| `@unplugin-pwa/core/client` | Virtual modules (base) |
| `@unplugin-pwa/core/vanillajs` | Vanilla JavaScript |
| `@unplugin-pwa/core/vue` | Vue 3 |
| `@unplugin-pwa/core/react` | React |
| `@unplugin-pwa/core/react-legacy` | React (legacy) |
| `@unplugin-pwa/core/preact` | Preact |
| `@unplugin-pwa/core/solid` | SolidJS |
| `@unplugin-pwa/core/svelte` | Svelte |
| `@unplugin-pwa/core/info` | `virtual:pwa-info` |
| `@unplugin-pwa/core/pwa-assets` | PWA Assets virtual modules |

```json
{
  "compilerOptions": {
    "types": ["@unplugin-pwa/core/vue"]
  }
}
```

## Requirements

`@unplugin-pwa/core` requires **Node 22.14.0 or above**.

The following peer dependencies are all optional; install them only if your integration needs them:

- `Vite`: from 3.1 to 8.
- `Rolldown`: 1.0.0 or above.
- `@vite-pwa/assets-generator`: 1.x or 2.x, only when using PWA Assets.

## Install

::: code-group
  ```bash [pnpm]
  pnpm add -D @unplugin-pwa/core
  ```
  ```bash [yarn]
  yarn add -D @unplugin-pwa/core
  ```
  ```bash [npm]
  npm i -D @unplugin-pwa/core
  ```
:::
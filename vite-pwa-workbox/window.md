---
title: '@vite-pwa/workbox-window | Vite PWA Workbox'
---

# @vite-pwa/workbox-window

The modern toolkit for modern web apps. [@vite-pwa/workbox-window](https://github.com/vite-pwa/workbox/tree/main/packages/window) provides the essential, ESM-ready JavaScript libraries you need to seamlessly register and manage your [Progressive Web Apps](https://web.dev/progressive-web-apps/) right in the browser.


## Install

::: code-group
  ```bash [pnpm]
  pnpm add -D @vite-pwa/workbox-window
  ```
  ```bash [yarn]
  yarn add -D @vite-pwa/workbox-window
  ```
  ```bash [npm]
  npm i -D @vite-pwa/workbox-window
  ```
:::

## New Features

`@vite-pwa/workbox-window` adds these new features:

- Exports the new `esm-sw-detector` subpackage to allow detecting ESM service worker support in the browser, based on [CanIUse](https://caniuse.com/?search=service+worker) baseline specifications.
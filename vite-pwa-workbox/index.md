---
title: Getting Started | Vite PWA Workbox
prev:
  text: API Reference | Unplugin PWA
  link: /unplugin-pwa/api/
---

# Getting Started

`@vite-pwa/workbox-build` a is fork of [**Goggle Workbox**](https://developer.chrome.com/docs/workbox/), it is a massive package with many modules to make service worker development more enjoyable and remove the need to deal with the low-level service worker API.

This module is for build process purposes (a `node` module); that is, `@unplugin-pwa/vite` or other integrations, will use it to build your service-worker.

We focus on 3 methods of this section:
- [generateSW](/vite-pwa-workbox/generate-sw): for generating the service worker.
- [buildSW](/vite-pwa-workbox/build-sw): for building your custom service worker.
- [injectManifest](/vite-pwa-workbox/inject-manifest): for when you need more control over your service worker.

## Which Mode to Use

### generateSW

The `generateSW` mode creates a service worker file for you, customized via configuration options, and writes it out to disk.

#### When to use generateSW
- You want to precache files.
- You have simple runtime caching needs.

#### When NOT to use generateSW
- You want to use other Service Worker features (i.e. [Web Push](https://developer.mozilla.org/docs/Web/API/Push_API)).
- You want to import additional scripts, or add additional logic for custom caching strategies.

### injectManifest

The `injectManifest` mode will generate a list of URLs to precache, and add that precache manifest to an existing service worker file.

#### When to use injectManifest
- You want more control over your service worker.
- You want to precache files.
- You need to customize routing and strategies.
- You would like to use your service worker with other platform features (i.e. [Web Push](https://developer.mozilla.org/docs/Web/API/Push_API)).

#### When NOT to use injectManifest
- You want the easiest path to adding a service worker to your site.

### buildSW

The `buildSW` mode will generate a list of URLs to precache, and add that precache manifest to an existing service worker file in your source codebase. `buildSW` is similar to `injectManifest`, but it will also build your service worker file using the Vite or Rolldown build process.

#### When to use buildSW
- You want more control over your service worker.
- You want to precache files.
- You need to customize routing and strategies.
- You would like to use your service worker with other platform features (i.e. [Web Push](https://developer.mozilla.org/docs/Web/API/Push_API)).

#### When NOT to use buildSW
- You want the easiest path to adding a service worker to your site.

## Additional modes

We expect that `generateSW`, `injectManifest` or `buildSW` will suit most developers' needs. However, there is one other mode supported by `@vite-pwa/workbox-build` that might be appropriate for certain use cases.

### `getManifest` mode

This is conceptually similar to the `injectManifest` mode, but instead of adding the manifest into the source service worker file, it returns the array of manifest entries, along with information about the number of entries and total size.

You can use the injectManifest mode within a node-based build script, using the most common [configuration options](/vite-pwa-workbox/api/symbols/workbox-build/getmanifestoptions), like so:

```ts
// Inside of build.js:
import { getManifest } from '@vite-pwa/workbox-build'

// These are some common options, and not all are required.
// Consult the docs for more info.
getManifest({
  dontCacheBustURLsMatching: [new RegExp('...')],
  globDirectory: '...',
  globPatterns: ['...', '...'],
  maximumFileSizeToCacheInBytes: ...,
}).then(({manifestEntries, count, size, warnings}) => {
  if (warnings.length > 0) {
    console.warn(
      'Warnings encountered while getting the manifest:',
      warnings.join('\n')
    )
  }

  // Do something with the manifestEntries, and potentially log count and size.
})
```

## How is `@vite-pwa/workbox-build` related to `@unplugin-pwa/vite`?

`@unplugin-pwa/vite` uses `generateSW`, `injectManifest` and `buildSW` methods internally when the `strategies` option is set to `generateSW`, `injectManifest` and `buildSW` respectively.

When you configure `strategies: 'generateSW'` option (the default value) in your `vite.config.*` file, the plugin invokes workbox' `generateSW` method. The options passed to the `@vite-pwa/workbox-build` method will be those provided via the `generateSW` option of the plugin configuration (`workbox` options has been deprecated).

When you configure `strategies: 'injectManifest'` option, the plugin will first build your custom service worker via custom `Vite` build. With the build result, `@unplugin-pwa/vite` will call Workbox's `injectManifest` method passing those options provided via the `injectManifest` option of the plugin configuration.

When you configure `strategies: 'buildSW'` option, the plugin will first build your custom service worker via custom `Vite` build. With the build result, `@unplugin-pwa/vite` will call Workbox's `buildSW` method passing those options provided via the `buildSW` option of the plugin configuration.

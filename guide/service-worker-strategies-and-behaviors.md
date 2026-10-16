---
title: Service Worker Strategies And Behaviors | Guide
---

# Service Worker Strategies And Behaviors

A service worker strategy is related to how the `@unplugin-pwa/vite` plugin will generate your service worker, while the behavior of a service worker is related to how the service worker will work in the browser once the browser detects a new version of your application.

## Service Worker Strategies

As we mention in [Configuring vite-plugin-pwa](/guide/#configuring-vite-plugin-pwa) section, `@unplugin-pwa/vite` plugin will use `workbox-build` node library to generate your service worker. There are 2 available strategies, `generateSW`, `buildSW` and `injectManifest`:
- `generateSW`: the `@unplugin-pwa/vite` will generate the service worker for you, you don't need to write the code for the service worker
- `buildSW`: the `@unplugin-pwa/vite` will build your custom service worker for you and inject its pre-cache manifest
- `injectManifest`: the `@unplugin-pwa/vite` plugin will inject its pre-cache manifest

To configure the service worker strategy, use the `strategies`' plugin option with [generateSW](/vite-pwa-workbox/generate-sw) (**default strategy**), [buildSW](/vite-pwa-workbox/build-sw) or [injectManifest](/vite-pwa-workbox/inject-manifest) value.

## Service Worker Behaviors

The behavior of the service worker will help you to update the application in the browser, that is, when the browser detects a new version of your application, you can control how the browser updates it.

You may want to not bother users and just have the browser update the application when there is a new version: the user will only see a reload of the page they are on.

Or you may want to inform the user that there is a new version of the application, and let the user decide when to update it: simply because you want it to behave that way or because your application requires it (for example, to prevent data loss if the user is filling out a form).

To configure the service worker behavior, use the `registerType` plugin option with `autoUpdate` or `prompt` (**default strategy**) value.

You can find more information about the behaviors in the [auto-update](/guide/auto-update) or [prompt-for-update](/guide/prompt-for-update) sections for `generateSW` strategy or in [buildSW](/guide/build-sw) section for `buildSW` strategy.

---
title: API Reference
prev:
  text: Apache Http Server 2.4+ | Deploy
  link: /deployment/apache
---

# API Reference

<script setup>
import { data } from './index.data';
const useGroups = data.groups.map(pkg => {
  const replace = pkg.pkg.startsWith('workbox-')
    ? ''
    : pkg.pkg.startsWith('unplugin-pwa-') 
        ? 'unplugin-pwa-' 
        : ''
  const prefix = pkg.pkg.startsWith('workbox-')
    ? '@vite-pwa/'
    : pkg.pkg.startsWith('unplugin-pwa-')
      ? '@unplugin-pwa/'
      : ''

  return {
    ...pkg,
    pkgName: replace ? `${prefix}${pkg.pkg.replace(replace, '')}` : `${prefix}${pkg.pkg}`
  }
});
</script>

<p>{{ data.total }} symbols across {{ data.groups.length }} packages, generated at build time from the published per-package JSON.</p>

<template v-for="g in useGroups" :key="g.pkg">
  <h2 :id="g.id">
    <a :href="`/api/packages/${g.packageSlug}`">{{ g.pkgName }}</a>
  </h2>
  <p>{{ g.items.length }} symbol(s)</p>
  <ul class="api">
    <li v-for="s in g.items" :key="s.slug">
      <a :href="`/api/symbols/${s.slug}`">{{ s.name }}</a>
      &nbsp;<Badge type="info" :text="s.kind" />
    </li>
  </ul>
</template>

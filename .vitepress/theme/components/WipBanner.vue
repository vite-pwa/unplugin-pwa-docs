<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed } from 'vue'

defineProps<{
  home?: true
}>()

const route = useRoute()
const visible = computed(() => {
  const r = route.path
  return r !== '/docs-status.html' && !r.startsWith('/api/') && !r.startsWith('/unplugin-pwa/') && !r.startsWith('/vite-pwa-workbox/') && !r.startsWith('/deployment/')
})
</script>

<template>
  <div
    v-if="visible"
    class="wip-banner flex items-center gap-4 rounded-xl bg-amber-100/50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700/50 text-amber-900 dark:text-amber-200 shadow-sm"
    :class="home ? 'p-6 mt-8 max-w-4xl mx-auto' : 'p-4 mb-6'"
  >
    <div class="text-3xl i-carbon:warning-hex flex-shrink-0" />

    <div class="flex-1">
      <p class="m-0 font-bold text-base">
        🚧 Documentation is being updated for the new architecture
      </p>
      <p class="m-0 text-sm mt-1 opacity-90">
        Most guides and examples have been ported from the previous version. We are currently adjusting them to reflect the new engine and API changes. Some details might still be outdated.
        <a
          href="/docs-status"
          class="font-semibold underline underline-offset-4 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
        >
          Check the pending documentation tweaks here.
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.wip-banner p {
  line-height: 1.4;
}
</style>

<script setup lang="ts">
const route = useRoute();

const isHome = computed(() => route.path === '/');
</script>

<template>
  <main id="favr_root">
    <NuxtLoadingIndicator color="#fbb20f" />
    <Nav />
    <div
      class="favr_contents"
      :class="{
        'pt-8': !isHome
      }"
    >
      <slot />
    </div>
    <Footer />
  </main>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.favr_contents {
  @apply min-h-screen;
}
</style>
<template>
  <main id="favr_root">
    <NuxtLoadingIndicator color="#fbb20f" />
    <Nav />
    <div class="favr_contents">
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
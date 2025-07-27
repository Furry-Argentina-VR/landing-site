<script setup lang="ts">
const isHome = ref(useRoute().fullPath === '/');
const hasScrolled = ref(false);
const handleScroll = () => hasScrolled.value = window.scrollY > 0;
useEventListener(window, 'scroll', handleScroll);

const navOpen = ref(false);
const navLinks = [
  {
    label: 'Nuestro equipo',
    to: '/equipo'
  },
  {
    label: 'Guías y ayuda',
    to: 'https://xaeky.cloud/vrchelp',
    external: true
  }
];

watch(() => useRoute().fullPath, (newPath) => {
  isHome.value = newPath === '/';
}, { immediate: true, deep: true })
</script>

<template>
  <nav
    :class="{
      'scrolled': hasScrolled,
      'home': isHome,
      'not-home': !isHome
    }"
  >
    <UContainer class="flex items-center justify-between">
      <div class="nav_start">
        <ULink to="/">
          <img src="/favicon.svg" class="w-12">
        </ULink>
      </div>
      <div class="nav_end">
        <USlideover v-model:open="navOpen">
          <button class="cursor-pointer">
            <UIcon
              name="i-lucide-menu" size="24"
            />
          </button>
          <template #body>
            <ul class="nav_slideover_body">
              <li v-for="link in navLinks" :key="link.to" @click.stop="() => { navOpen = false }">
                <ULink :to="link.to" :external="link.external">
                  <span v-text="link.label" />
                  <UIcon v-if="link.external" name="i-lucide-external-link" size="16" />
                </ULink>
              </li>
            </ul>
          </template>
        </USlideover>
      </div>
    </UContainer>
  </nav>
</template>

<style>
@reference '~/assets/css/main.css';

nav {
  @apply top-0 inset-x-0 py-2 z-50 duration-250 bg-transparent;
  &.not-home {
    @apply sticky
  }
  &.home {
    @apply fixed;
    .nav_end { @apply text-white; }
  }
  &.home.scrolled {
    .nav_end { @apply text-black; }
  }
  &.scrolled {
    @apply bg-white;
  }
}

.nav_slideover_body {
  @apply space-y-4;
  li > a { @apply flex items-center gap-2 text-black; }
  li > a span { @apply text-black underline text-2xl font-bold; }
}
</style>
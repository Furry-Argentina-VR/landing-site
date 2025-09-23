<script setup lang="ts">
const navLinks = [
  { label: 'Grupo de VRChat', to: 'https://vrc.group/FURARG.7248', external: true },
  { label: 'Guías y ayuda', to: 'https://xaeky.cloud/vrchelp', external: true }
]
</script>

<template>
  <footer id="favr_footer" class="bg-gradient-to-b from-[#88D1F4] to-[#C4EAFF] dark:from-neutral-900 dark:to-sky-950 py-8 overflow-hidden">
    <UContainer class="flex flex-col lg:flex-row lg:justify-between gap-16">
      <div id="footer_mark" class="text-6xl lg:text-4xl font-black text-sky-950 dark:text-white">
        <span>Furry Argentina VR</span>
      </div>
      <div id="footer_nav">
        <ul class="text-2xl lg:text-lg font-bold space-y-8 lg:space-y-4">
          <li v-for="link in navLinks" :key="link.to">
            <ULink :external="link.external ?? false" :to="link.to" class="text-sky-700 dark:text-white underline">
              <span v-text="link.label" />
            </ULink>
          </li>
        </ul>
      </div>
    </UContainer>
    <UContainer class="pt-8 text-center text-sky-950 dark:text-sky-200">
      <span>Furry Argentina VR © 2025</span>
    </UContainer>
  </footer>
</template>
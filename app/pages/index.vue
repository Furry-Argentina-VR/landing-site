<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/home').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
});

const vrcGroupLink = 'https://vrc.group/FURARG.7248';
const heroPhotographerLink = 'https://x.com/Drache_vrc';
</script>

<template>
  <div id="favr_home">
    <div id="favr_home_hero" class="relative">
      <NuxtImg src="/bg/0.png" class="max-h-[50vh] w-full object-cover" />
      <img src="/favicon.svg" alt="Logo de FAVR" class="absolute bottom-0 left-[50%] transform translate-x-[-50%] translate-y-[50%] w-32">
      <div class="absolute inset-x-0 top-0 lg:top-auto lg:bottom-0 py-4">
        <UContainer class="flex items-center justify-end">
          <ULink :to="heroPhotographerLink" class="inline-flex gap-2 items-center text-white hover:text-white underline">
            <UIcon name="i-lucide-aperture" />
            <span>@drache_vrc</span>
          </ULink>
        </UContainer>
      </div>
    </div>
    <div class="py-24">
      <UContainer class="text-lg space-y-8">
        <h2 class="text-3xl text-center lg:text-left font-black">Furry Argentina VR</h2>
        <div class="lg:max-w-xl space-y-4">
          <ContentRenderer v-if="home" :value="home" />
          <div class="font-bold text-center lg:text-left">
            <p>¡No hace falta que tengas un visor VR para participar!</p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row items-start lg:justify-start gap-4">
          <ULink class="w-full lg:w-auto" :to="vrcGroupLink" external target="_blank">
            <UButton color="info" label="¡Quiero unirme al grupo!" size="xl" class="w-full justify-center lg:w-auto" icon="i-lucide-external-link" trailing />
          </ULink>
        </div>
      </UContainer>
    </div>
  </div>
</template>
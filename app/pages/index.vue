<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/home').first());
const { data: nextMeetup } = await useAsyncData(() => queryCollection('content').path('/upcoming-meetup').first());

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
});

const vrcGroupLink = 'https://vrc.group/FURARG.7248';

const nextMeetupFormattedStatuses:Record<string, string> = {
  upcoming: 'Proximamente',
  happening: '¡Está pasando ahora!',
  finished: 'Concluida'
}
const nextMeetupData = computed(() => {
  if (!nextMeetup.value) return null;
  const meetupDate = new Date(nextMeetup.value.meta.epoch as number);
  const date = {
    now: new Date().getTime(),
    point: meetupDate.getTime(),
    later: meetupDate.getTime() + 4 * 60 * 60 * 1000
  }
  const status:Record<string, boolean> = {
    upcoming: date.now < date.point,
    happening: date.now > date.point && date.now < date.later,
    finished: date.now > date.later 
  }
  return {
    title: nextMeetup.value.title,
    formattedTime: new Intl.DateTimeFormat('es-AR', { timeStyle: 'short', dateStyle: 'long' }).format(meetupDate),
    status: Object.entries(status).find(([_, v]) => v)?.[0] ?? ''
  }
})
</script>

<template>
  <div id="favr_home">
    <div id="hero_head" class="relative">
      <NuxtImg v-if="home" id="hero_img" :src="(home.meta.heroPhotoUrl as string)" class="max-h-[50vh] w-full object-cover" />
      <img src="/favicon.svg" alt="Logo de FAVR" class="absolute bottom-0 left-[50%] transform translate-x-[-50%] translate-y-[50%] w-32">
      <div class="absolute inset-x-0 bottom-0 py-4">
        <UContainer v-if="home" class="flex items-center justify-end">
          <ULink :to="(home.meta.heroPhotographerLink as string)" class="inline-flex gap-2 items-center text-white hover:text-white underline">
            <UIcon name="i-lucide-aperture" />
            <span v-text="(home.meta.heroPhotographerName as string)" />
          </ULink>
        </UContainer>
      </div>
    </div>
    <div class="py-24">
      <UContainer class="text-lg space-y-8">
        <h2 class="text-3xl text-center lg:text-left font-black">Furry Argentina VR</h2>
        <div class="grid lg:grid-cols-2 gap-12">
          <div id="hero_home_contents">
            <ContentRenderer v-if="home" :value="home" />
            <div class="font-bold text-center lg:text-left">
              <p>¡No hace falta que tengas un visor VR para participar!</p>
            </div>
          </div>
          <div v-if="nextMeetupData" id="hero_nextmeetup_card">
            <h2 v-text="nextMeetupData.title" />
            <h3>{{ nextMeetupData.formattedTime }}</h3>
            <div class="status_tag_container">
              <span class="status_tag" v-text="nextMeetupFormattedStatuses[nextMeetupData.status]" />
            </div>
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

<style>
@reference '~/assets/css/main.css';

#hero_head {
  #hero_img { @apply brightness-50; }
}

#hero_home_contents {
  @apply space-y-4;
}

#hero_nextmeetup_card {
  @apply rounded-xl px-8 py-6 border border-neutral-200 shadow-xl;
  h2 { @apply text-3xl font-black; }
  .status_tag_container { @apply pt-4; }
  .status_tag { @apply bg-primary-500 text-white py-2 px-4 font-bold rounded-full; }
}
</style>
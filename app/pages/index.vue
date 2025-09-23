<script setup lang="ts">
// Fetch
const { data: home } = await useAsyncData(() => useContent('home.md'))
const { data: nextMeetup } = await useAsyncData(() => useContent('upcoming-meetup.md'));

useSeoMeta({
  title: home.value?.data.title,
  description: home.value?.data.description
});

const vrcGroupLink = 'https://vrc.group/FURARG.7248';

const nextMeetupFormattedStatuses:Record<string, string> = {
  upcoming: 'Proximamente',
  happening: '¡Está pasando ahora!',
  finished: 'Concluida'
}
const nextMeetupData = computed(() => {
  if (!nextMeetup.value) return null;
  const meetupDate = new Date(nextMeetup.value.data.epoch as number);
  const date = {
    now: new Date().getTime(),
    point: meetupDate.getTime(),
    later: meetupDate.getTime() + 3 * 60 * 60 * 1000
  }
  const status:Record<string, boolean> = {
    upcoming: date.now < date.point,
    happening: date.now > date.point && date.now < date.later,
    finished: date.now > date.later 
  }
  return {
    title: nextMeetup.value.data.title,
    formattedTime: new Intl.DateTimeFormat('es-AR', { timeStyle: 'short', dateStyle: 'long' }).format(meetupDate),
    status: nextMeetupFormattedStatuses[Object.entries(status).find(([_, v]) => v)?.[0] ?? ''] as string
  }
})
</script>

<template>
  <div id="favr_home">
    <div id="hero_head" class="relative">
      <NuxtImg v-if="home" id="hero_img" :src="(home.data.heroPhotoUrl as string)" class="max-h-[50vh] w-full object-cover" />
      <img src="/favicon.svg" alt="Logo de FAVR" class="absolute bottom-0 left-[50%] transform translate-x-[-50%] translate-y-[50%] w-32">
      <div class="absolute inset-x-0 bottom-0 py-4">
        <UContainer v-if="home" class="flex items-center justify-end">
          <ULink :to="(home.data.heroPhotographerLink as string)" class="inline-flex gap-2 items-center text-white hover:text-white underline">
            <UIcon name="i-lucide-aperture" />
            <span v-text="(home.data.heroPhotographerName as string)" />
          </ULink>
        </UContainer>
      </div>
    </div>
    <div class="py-24">
      <UContainer class="text-lg space-y-8">
        <h2 class="text-3xl text-center lg:text-left font-black">Furry Argentina VR</h2>
        <div class="grid lg:grid-cols-2 gap-12">
          <div id="hero_home_contents">
            <MDC v-if="home" :value="home" />
            <div class="font-bold text-center lg:text-left">
              <p>¡No hace falta que tengas un visor VR para participar!</p>
            </div>
          </div>
          <MeetupCard v-if="nextMeetupData" :meetup="nextMeetupData"/>
        </div>
        <div class="flex flex-col lg:flex-row items-start lg:justify-start gap-4">
          <ULink class="w-full lg:w-auto" :to="vrcGroupLink" external target="_blank">
            <UButton label="¡Quiero unirme al grupo!" size="xl" class="w-full justify-center lg:w-auto rounded-full py-3 px-6" icon="i-lucide-external-link" trailing />
          </ULink>
          <ULink class="w-full lg:w-auto" to="/galeria">
            <UButton color="neutral" variant="outline" label="Galeria" size="xl" class="w-full justify-center lg:w-auto rounded-full py-3 px-6" icon="i-lucide-camera" />
          </ULink>
        </div>
      </UContainer>
    </div>
  </div>
</template>

<style scoped>
@reference '~/assets/css/main.css';

#hero_head {
  #hero_img { @apply brightness-50; }
}

#hero_home_contents {
  @apply space-y-4;
}
</style>
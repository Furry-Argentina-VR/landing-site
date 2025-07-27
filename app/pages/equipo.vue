<script setup lang="ts">
const { data: staffList } = await useAsyncData(
  () => queryCollection('staff')
    .select('twitter_handler', 'name', 'role', 'picture').order('name', 'ASC').all()
);

useSeoMeta({
  title: 'Nuestro equipo'
})
</script>

<template>
  <div id="team_page">
    <UContainer class="space-y-8">
      <div class="prose">
        <h1>Nuestro equipo</h1>
        <p>Todas nuestras actividades son impulsadas por nuestro equipo (Staff). Agradecemos a todos quienes participan y ayuden no solo a la comunidad Furry Argentina VR, sino también al fandom furry.</p>
      </div>
      <div>
        <ul class="grid lg:grid-cols-2 gap-4 lg:gap-8">
          <li v-for="member in staffList" :key="member.name" class="flex gap-6 rounded-xl shadow-lg border border-neutral-200 p-4 lg:p-6">
            <div v-if="member.picture">
              <NuxtImg :src="`/staff_pictures/${member.picture}`" class="size-16 lg:size-32 rounded-full" />
            </div>
            <div class="space-y-4">
              <div>
                <h2 class="text-2xl font-bold" v-text="member.name" />
                <span v-text="member.role" />
              </div>
              <ul>
                <li v-if="member.twitter_handler">
                  <ULink :to="`https://x.com/${member.twitter_handler}`" target="_blank" class="text-primary-500">
                    <UIcon name="i-lucide-twitter" size="32" />
                  </ULink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </UContainer>
  </div>
</template>

<style>
@reference '~/assets/css/main.css';

#team_page {
  @apply pt-4;
}
</style>
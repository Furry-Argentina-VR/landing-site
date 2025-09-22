<script setup lang="ts">
const { data: staffList } = await useLazyAsyncData<StaffItem[]>(
  () => useContent('collections/staff.json')
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
            <div v-if="member.avatar_url">
              <NuxtImg :src="member.avatar_url" class="size-16 lg:size-32 rounded-full" />
            </div>
            <div class="space-y-4">
              <div>
                <h2 class="text-2xl font-bold" v-text="member.name" />
                <span v-text="member.role" />
              </div>
              <ul>
                <li v-if="member.social_handles.twitter">
                  <ULink :to="`https://x.com/${member.social_handles.twitter}`" target="_blank" class="text-primary-500">
                    <UIcon name="i-lucide-twitter" size="32" />
                  </ULink>
                </li>
                <li v-if="member.social_handles.twitch">
                  <ULink :to="`https://twitch.tv/${member.social_handles.twitch}`" target="_blank" class="text-primary-500">
                    <UIcon name="i-lucide-twitch" size="32" />
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
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
          <li v-for="member in staffList" :key="member.name" class="favr_team_member_card">
            <div class="card_background">
              <NuxtImg :src="member.avatar_url" class="staff_avatar_bg" />
            </div>
            <div class="card_foreground">
              <div v-if="member.avatar_url">
                <NuxtImg :src="member.avatar_url" class="size-16 lg:size-32 rounded-full" />
              </div>
              <div class="space-y-4">
                <div>
                  <h2 class="text-2xl font-bold" v-text="member.name" />
                  <span v-text="member.role" />
                </div>
                <ul class="flex gap-4">
                  <li v-if="member.social_handles.twitter">
                    <ULink :to="`https://x.com/${member.social_handles.twitter}`" target="_blank" class="text-primary-500">
                      <UIcon name="i-lucide-twitter" size="24" />
                    </ULink>
                  </li>
                  <li v-if="member.social_handles.twitch">
                    <ULink :to="`https://twitch.tv/${member.social_handles.twitch}`" target="_blank" class="text-primary-500">
                      <UIcon name="i-lucide-twitch" size="24" />
                    </ULink>
                  </li>
                  <li v-for="site in member.external_sites" :key="site">
                    <ULink :to="site" target="_blank" class="text-primary-500">
                      <UIcon name="i-lucide-link" size="24" />
                    </ULink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.favr_team_member_card {
  @apply relative bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 lg:p-6 shadow-lg overflow-hidden;
  .card_background {
    @apply absolute top-0 left-0 w-full h-full opacity-25 dark:opacity-15 z-10;
    .staff_avatar_bg {
      @apply size-64 brightness-150 dark:brightness-100 blur-sm top-1/2 -left-8 transform -translate-y-1/2 absolute;
      mask-image: linear-gradient(to right, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%);
    }
  }
  .card_foreground {
    @apply relative z-20 flex items-center gap-4 lg:gap-8;
  }
}
</style>
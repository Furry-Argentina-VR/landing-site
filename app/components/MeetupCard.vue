<script setup lang="ts">
interface Meetup {
  title: string;
  formattedTime: string;
  status: string;
}

defineProps<{
  meetup: Meetup
}>();
</script>

<template>
  <div class="hero_nextmeetup_card">
    <div class="status_title">
      <h2 v-text="meetup.title" />
      <h3>{{ meetup.formattedTime }}</h3>
    </div>
    <div class="status_tag_container">
      <span class="status_tag" v-text="meetup.status" />
    </div>
  </div>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.hero_nextmeetup_card {
  @apply rounded-xl px-8 py-6 border border-neutral-200 shadow-xl bg-white dark:bg-neutral-800 dark:border-neutral-700 space-y-4;
  h2 { @apply text-3xl font-black; }
  .status_tag { @apply bg-primary/25 text-primary-900 dark:text-white py-1 px-5 font-bold rounded-full inline-block; }
}
</style>
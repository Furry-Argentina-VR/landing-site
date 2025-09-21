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
    <h2 v-text="meetup.title" />
    <h3>{{ meetup.formattedTime }}</h3>
    <div class="status_tag_container">
      <span class="status_tag" v-text="meetup.status" />
    </div>
  </div>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.hero_nextmeetup_card {
  @apply rounded-xl px-8 py-6 border border-neutral-200 shadow-xl;
  h2 { @apply text-3xl font-black; }
  .status_tag_container { @apply pt-4; }
  .status_tag { @apply bg-primary text-white py-2 px-4 font-bold rounded-full; }
}
</style>
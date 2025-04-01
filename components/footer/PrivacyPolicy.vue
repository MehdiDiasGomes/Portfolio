<template>
  <ContentRenderer
    class="prose prose-invert animate-fade-up animate-once animate-duration-1000 p-5 py-44 text-white"
    v-if="home"
    :value="home"
  />
  <div v-else class="text-white">Home not found</div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path(`/${locale.value}/privacy`).first(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<style>
.prose {
  @apply text-white;
}

.prose h1 {
  @apply font-extrabold text-white;
}

.prose h2 {
  @apply text-2xl sm:text-3xl font-bold mt-10 mb-6 text-primaryPerso;
}

.prose p {
  @apply text-secondary my-4 leading-relaxed;
}

.prose ul {
  @apply my-6 list-disc pl-6;
}

.prose li {
  @apply text-secondary mb-2;
}

.prose strong {
  @apply text-primaryPerso font-semibold;
}

.prose a {
  @apply text-primaryPerso hover:underline transition;
}
</style>

<template>
  <About />
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t('pages.about.seo.title'),
  description: () => t('pages.about.seo.description'),
  ogTitle: () => t('pages.about.seo.title'),
  ogDescription: () => t('pages.about.seo.description'),
  ogUrl: 'https://www.mdiasgomes.dev/about',
  twitterTitle: () => t('pages.about.seo.title'),
  twitterDescription: () => t('pages.about.seo.description'),
});
</script>

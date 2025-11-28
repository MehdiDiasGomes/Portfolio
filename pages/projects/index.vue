<template>
  <InDevelopment />
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t('pages.projects.seo.title'),
  description: () => t('pages.projects.seo.description'),
  ogTitle: () => t('pages.projects.seo.title'),
  ogDescription: () => t('pages.projects.seo.description'),
  ogUrl: 'https://www.mdiasgomes.dev/projects',
  twitterTitle: () => t('pages.projects.seo.title'),
  twitterDescription: () => t('pages.projects.seo.description'),
});
</script>

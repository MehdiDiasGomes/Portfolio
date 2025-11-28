<template>
  <Header />
  <Projects />
  <WorkXp />

  <ButtonScroll side="top" />
</template>

<script lang="ts" setup>
import ButtonScroll from '~/components/ButtonScroll.vue';

const { t } = useI18n();

definePageMeta({
  layout: "default",
});

useSeoMeta({
  title: () => t('pages.portfolio.seo.title'),
  description: () => t('pages.portfolio.seo.description'),
  ogTitle: () => t('pages.portfolio.seo.title'),
  ogDescription: () => t('pages.portfolio.seo.description'),
  ogUrl: 'https://www.mdiasgomes.dev/portfolio',
  twitterTitle: () => t('pages.portfolio.seo.title'),
  twitterDescription: () => t('pages.portfolio.seo.description'),
});
</script>

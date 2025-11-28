<template>
  <PrivacyPolicys />
</template>

<script setup lang="ts">
const { t } = useI18n();

// SEO Meta tags for privacy page (EN)
useSeoMeta({
  title: () => t('pages.privacy.seo.title'),
  description: () => t('pages.privacy.seo.description'),
  ogTitle: () => t('pages.privacy.seo.title'),
  ogDescription: () => t('pages.privacy.seo.description'),
  ogUrl: 'https://www.mdiasgomes.dev/en/privacy',
  twitterTitle: () => t('pages.privacy.seo.title'),
  twitterDescription: () => t('pages.privacy.seo.description'),
  robots: 'noindex, nofollow',
});
</script>

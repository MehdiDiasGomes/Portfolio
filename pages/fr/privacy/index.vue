<template>
  <PrivacyPolicy />
</template>

<script setup lang="ts">
import PrivacyPolicy from "~/components/footer/PrivacyPolicy.vue";

const { t } = useI18n();

// SEO Meta tags for privacy page (FR)
useSeoMeta({
  title: () => t('pages.privacy.seo.title'),
  description: () => t('pages.privacy.seo.description'),
  ogTitle: () => t('pages.privacy.seo.title'),
  ogDescription: () => t('pages.privacy.seo.description'),
  ogUrl: 'https://www.mdiasgomes.dev/fr/privacy',
  twitterTitle: () => t('pages.privacy.seo.title'),
  twitterDescription: () => t('pages.privacy.seo.description'),
  robots: 'noindex, nofollow',
});
</script>

<template>
  <ContactForm />
</template>

<script setup lang="ts">
const { t } = useI18n();

// SEO Meta tags for contact page
useSeoMeta({
  title: () => t('pages.contact.seo.title'),
  description: () => t('pages.contact.seo.description'),
  ogTitle: () => t('pages.contact.seo.title'),
  ogDescription: () => t('pages.contact.seo.description'),
  ogUrl: 'https://www.mdiasgomes.dev/contact',
  twitterTitle: () => t('pages.contact.seo.title'),
  twitterDescription: () => t('pages.contact.seo.description'),
});
</script>

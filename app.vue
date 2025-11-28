<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

// SEO Meta tags with i18n support
useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('seo.description'),
  ogImage: 'https://www.mdiasgomes.dev/og-image.jpg',
  ogUrl: 'https://www.mdiasgomes.dev',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.title'),
  twitterDescription: () => t('seo.description'),
  twitterImage: 'https://www.mdiasgomes.dev/og-image.jpg',
});

// Additional head tags
useHead({
  htmlAttrs: {
    lang: () => locale.value,
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://www.mdiasgomes.dev'
    }
  ]
});
</script>

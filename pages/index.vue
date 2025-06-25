<template>
  <Header />
  <Projects />
  <WorkXp />

  <ButtonScroll side="top" />
</template>

<script lang="ts" setup>
import ButtonScroll from '~/components/ButtonScroll.vue';

definePageMeta({
  layout: "default",
});
</script>

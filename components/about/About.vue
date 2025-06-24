<template>
  <div class="relative mp-home mt-40 xl:mt-64 flex justify-center items-center">
    <div class="flex flex-col gap-20">
      <AboutHeader />
      <AboutExperiences />
      <AboutSkills />
      <AboutEducation />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AboutExperiences from './AboutExperiences.vue';

const { t } = useI18n();
</script>

<template>
  <div class="relative mp-home mt-40 xl:mt-64 flex justify-center items-center animate-fade animate-once animate-duration-1000 animate-ease-in">
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

<template>
  <div class="relative mp-home mt-40 flex justify-center items-center">
    <div class="flex flex-col">
      <AboutHeader />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { personalFacts, socials } from "~/constants/about";

const { t } = useI18n();
</script>

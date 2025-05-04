<template>
  <div class="">
    <div class="flex max-md:flex-col items-center gap-5">
      <div class="flex items-center justify-center p-3 border-2 border-foreground rounded-full">
        <img src="/assets/img/Avatar.jpg" alt="Photo de Mehdi DIAS GOMES"
          class="w-[210px] h-[210px] max-md:h-[110px] max-md:w-[110px] border border-mauve rounded-full object-cover">
      </div>
      <div class="flex flex-col max-md:items-center gap-4">
        <div class="flex flex-col max-md:items-center">
          <h1 class="font-bold text-white text-xl">Mehdi DIAS GOMES</h1>
          <h2 class="bg-gradient-to-r from-mauve to-foreground bg-clip-text text-transparent text-l">{{
            t('about.subTitle') }}</h2>
        </div>
        <ul class="flex items-center flex-wrap justify-center gap-[15px]">
          <li v-for="(about, index) in info" :key="index">
            <ButtonCta :icon="about.icon" :label="about.label" :cta="about.cta" :link="about.link" />
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-10 flex flex-col gap-5 text-white max-md:hidden">
      <p>{{ t("about.firstParagraph").replaceAll(",", " | ") }}</p>
      <p>{{ t("about.secondParagraph") }}</p>
    </div>
  </div>

</template>
<script setup lang="ts">
import { info } from "~/constants/about";
import ButtonCta from "../common/LinkButtonCta.vue";
const { t } = useI18n();
</script>

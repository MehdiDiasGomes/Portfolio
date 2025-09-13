<template>
  <div class="relative">
    <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12">
      <div class="relative group animate-fade-up animate-duration-700 animate-delay-100 flex-shrink-0">
        <div
          class="absolute -inset-1 bg-gradient-to-r from-mauve via-foreground to-mauve rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        </div>
        <div
          class="relative flex items-center justify-center p-2 lg:p-3 border-2 border-mauve rounded-full bg-gradient-to-br from-mauve/10 to-foreground/10 backdrop-blur-sm">
          <img src="/assets/img/Avatar.jpg" alt="Photo de Mehdi DIAS GOMES"
            class="w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 border-2 border-mauve/50 rounded-full object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105">
        </div>
        <div
          class="absolute -bottom-1 -right-1 lg:-bottom-2 lg:-right-2 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs font-semibold px-2 py-1 lg:px-3 lg:py-1 rounded-full shadow-lg animate-pulse">
          {{ t('about.status') }}
        </div>
      </div>

      <div class="flex flex-col items-center lg:items-start gap-4 lg:gap-6 flex-1 text-center lg:text-left">
        <div class="animate-fade-up animate-duration-700 animate-delay-200">
          <h1 class="font-bold text-white text-xl sm:text-2xl lg:text-3xl tracking-tight">Mehdi DIAS GOMES</h1>
          <h2
            class="bg-gradient-to-r from-mauve via-foreground to-mauve bg-clip-text text-transparent text-base sm:text-lg lg:text-xl font-medium mt-2">
            {{ t('about.subTitle') }}
          </h2>

          <div class="flex flex-wrap gap-2 justify-center lg:justify-start mt-3">
            <span class="px-2 py-1 text-xs bg-mauve/20 text-mauve rounded-full border border-mauve/30">Full-Stack</span>
            <span
              class="px-2 py-1 text-xs bg-mauve/20 text-mauve rounded-full border border-mauve/30">Vue.js</span>
            <span class="px-2 py-1 text-xs bg-mauve/20 text-mauve rounded-full border border-mauve/30">TypeScript</span>
          </div>
        </div>

        <div class="animate-fade-up animate-duration-700 animate-delay-300 w-full">
          <ul class="flex items-center flex-wrap justify-center lg:justify-start gap-2 lg:gap-3">
            <li v-for="(about, index) in info" :key="index" class="animate-fade-up animate-duration-500"
              :style="{ animationDelay: `${400 + index * 100}ms` }">
              <ButtonCta :icon="about.icon" :label="about.label" :cta="about.cta" :link="about.link"
                class="hover:scale-105 transition-transform duration-200 text-sm" />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-8 lg:mt-12 animate-fade-up animate-duration-700 animate-delay-500">
      <div
        class="bg-gradient-to-br from-darkblue/30 to-midnightBlue/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-mauve/20 shadow-2xl">
        <div class="flex flex-col gap-4 lg:gap-6 text-white">
          <div class="flex items-center gap-3 mb-2 lg:mb-4">
            <div class="w-8 lg:w-12 h-1 bg-gradient-to-r from-mauve to-foreground rounded-full"></div>
            <h3 class="text-base lg:text-lg font-semibold text-mauve">{{ t('about.aboutMe') }}</h3>
          </div>

          <div class="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
            <p class="text-gray-300 leading-relaxed text-sm lg:text-base">
              {{ t("about.firstParagraph").replaceAll(",", " | ") }}
            </p>
            <p class="text-gray-300 leading-relaxed text-sm lg:text-base">
              {{ t("about.secondParagraph") }}
            </p>
          </div>

          <div class="flex justify-between items-center px-4 sm:px-8 lg:px-64 lg:gap-4 mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-mauve/20">
            <div class="text-center">
              <div
                class="text-lg lg:text-2xl font-bold bg-gradient-to-r from-mauve to-foreground bg-clip-text text-transparent">
                2+</div>
              <div class="text-xs lg:text-sm text-gray-400">{{ t('about.yearsExperience') }}</div>
            </div>
            <div class="text-center">
              <div
                class="text-lg lg:text-2xl font-bold bg-gradient-to-r from-mauve to-foreground bg-clip-text text-transparent">
                2+</div>
              <div class="text-xs lg:text-sm text-gray-400">{{ t('about.projectsCount') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { info } from "~/constants/about";
import ButtonCta from "../common/LinkButtonCta.vue";
const { t } = useI18n();
</script>

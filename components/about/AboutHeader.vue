<template>
  <div class="relative">
    <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
      <div class="relative group fade-in flex-shrink-0">
        <div
          class="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-full blur-xl opacity-30 smooth-transition group-hover:opacity-50">
        </div>
        <div
          class="relative flex items-center justify-center p-3 lg:p-4 border-2 border-purple-500/30 rounded-full glass-effect">
          <img src="/assets/img/Avatar.jpg" alt="Photo de Mehdi DIAS GOMES"
            class="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 border-2 border-purple-500/50 group-hover:border-purple-400/70 rounded-full object-cover shadow-2xl smooth-transition group-hover:scale-105">
        </div>
      </div>

      <div class="flex flex-col items-center lg:items-start gap-6 flex-1 text-center lg:text-left">
        <div class="fade-in space-y-4">
          <h1 class="font-bold text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight">Mehdi DIAS GOMES</h1>
          <h2 class="text-gradient-primary text-lg sm:text-xl lg:text-2xl font-semibold">
            {{ t('about.subTitle') }}
          </h2>

          <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span class="glass-effect px-3 py-1.5 text-xs font-semibold text-purple-400 rounded-full border border-purple-500/30">Full-Stack</span>
            <span class="glass-effect px-3 py-1.5 text-xs font-semibold text-blue-400 rounded-full border border-blue-500/30">Vue.js</span>
            <span class="glass-effect px-3 py-1.5 text-xs font-semibold text-pink-400 rounded-full border border-pink-500/30">TypeScript</span>
          </div>
        </div>

        <div class="fade-in w-full">
          <ul ref="infoList" class="flex items-center flex-wrap justify-center lg:justify-start gap-3">
            <li v-for="(about, index) in info" :key="index">
              <a
                :href="about.link"
                :class="[
                  'inline-flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:scale-[0.98] rounded-[8px] px-4 py-2 text-sm',
                  about.cta
                    ? 'bg-purple-600 text-white border-2 border-purple-600 hover:bg-transparent hover:text-white'
                    : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border border-gray-600 hover:border-gray-500'
                ]"
              >
                <span>{{ about.label }}</span>
                <component :is="getIcon(about.icon)" class="w-5 h-5" :stroke-width="2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-10 lg:mt-14 fade-in">
      <div class="glass-effect-dark rounded-3xl p-6 lg:p-10 border border-purple-500/20 shadow-2xl">
        <div class="flex flex-col gap-6 lg:gap-8 text-white">
          <div class="flex items-center gap-4">
            <div class="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-purple-500 rounded-full"></div>
            <h3 class="text-lg lg:text-xl font-bold text-gradient-primary">{{ t('about.aboutMe') }}</h3>
            <div class="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500 to-blue-500 rounded-full"></div>
          </div>

          <div class="space-y-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
            <div class="glass-effect p-5 rounded-2xl border border-purple-500/20">
              <p class="text-gray-300 leading-relaxed text-sm lg:text-base">
                {{ t("about.firstParagraph").replaceAll(",", " | ") }}
              </p>
            </div>
            <div class="glass-effect p-5 rounded-2xl border border-blue-500/20">
              <p class="text-gray-300 leading-relaxed text-sm lg:text-base">
                {{ t("about.secondParagraph") }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-white/10">
            <div class="text-center glass-effect p-4 rounded-2xl border border-purple-500/20">
              <div class="text-2xl lg:text-3xl font-bold text-gradient-primary mb-2">
                2+
              </div>
              <div class="text-xs lg:text-sm text-gray-400">{{ t('about.yearsExperience') }}</div>
            </div>
            <div class="text-center glass-effect p-4 rounded-2xl border border-blue-500/20">
              <div class="text-2xl lg:text-3xl font-bold text-gradient-primary mb-2">
                2+
              </div>
              <div class="text-xs lg:text-sm text-gray-400">{{ t('about.projectsCount') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { info } from "~/constants/about";

const { t } = useI18n();
const [infoList] = useAutoAnimate();

const getIcon = (iconName: string) => {
  return defineAsyncComponent(() => import('lucide-vue-next').then(module => module[iconName]));
};
</script>

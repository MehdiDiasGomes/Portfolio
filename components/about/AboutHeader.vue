<template>
  <div class="relative">
    <div
      class="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
    >
      <div class="relative group fade-in flex-shrink-0">
        <div
          class="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-full blur-xl opacity-30 smooth-transition group-hover:opacity-50"
        ></div>
        <div
          class="relative flex items-center justify-center p-3 lg:p-4 border-2 border-purple-500/30 rounded-full glass-effect"
        >
          <img
            src="/assets/img/Avatar.jpg"
            alt="Photo de Mehdi DIAS GOMES"
            class="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 border-2 border-purple-500/50 group-hover:border-purple-400/70 rounded-full object-cover smooth-transition group-hover:scale-105"
          />
        </div>
      </div>

      <div
        class="flex flex-col items-center lg:items-start gap-6 flex-1 text-center lg:text-left"
      >
        <div class="fade-in space-y-4">
          <h1 class="tracking-tight">Mehdi DIAS GOMES</h1>
          <h2 class="text-gradient-primary">
            {{ t("about.subTitle") }}
          </h2>

          <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span
              class="glass-effect px-3 py-1.5 text-xs font-semibold text-purple-400 rounded-full border border-purple-500/30"
              >Laravel</span
            >
            <span
              class="glass-effect px-3 py-1.5 text-xs font-semibold text-blue-400 rounded-full border border-blue-500/30"
              >Vue.js</span
            >
            <span
              class="glass-effect px-3 py-1.5 text-xs font-semibold text-pink-400 rounded-full border border-pink-500/30"
              >TypeScript</span
            >
          </div>
        </div>

        <div class="fade-in w-full">
          <ul
            ref="infoList"
            class="flex items-center flex-wrap justify-center lg:justify-start gap-3"
          >
            <li v-for="(about, index) in info" :key="index">
              <a
                :href="about.link"
                :class="[
                  'inline-flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:scale-[0.98] rounded-[8px] px-4 py-2 text-sm',
                  about.cta
                    ? 'bg-purple-600 text-white border-2 border-purple-600 hover:bg-transparent hover:text-purple-600 dark:hover:text-white'
                    : 'bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800 from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 dark:text-white text-gray-800 border dark:border-gray-600 border-gray-300 dark:hover:border-gray-500 hover:border-gray-400',
                ]"
              >
                <span>{{ about.label }}</span>
                <component
                  :is="getIcon(about.icon)"
                  class="w-5 h-5"
                  :stroke-width="2"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-10 lg:mt-14 fade-in">
      <div class="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
        <div class="relative">
          <Icon
            name="User"
            :stroke-width="2"
            :size="32"
            class="w-8 h-8 lg:w-12 lg:h-12 text-mauve"
          />
          <div
            class="absolute -inset-1 lg:-inset-2 bg-mauve/20 rounded-full blur-lg"
          ></div>
        </div>
        <div class="flex-1">
          <h3 class="tracking-tight">{{ t("about.aboutMe") }}</h3>
          <div
            class="w-16 lg:w-20 h-1 bg-gradient-to-r from-mauve to-foreground rounded-full mt-2"
          ></div>
        </div>
      </div>

      <div class="space-y-4 lg:space-y-6">
        <p>
          {{ t("about.firstParagraph").replaceAll(",", " | ") }}
        </p>
        <p>
          {{ t("about.secondParagraph") }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { info } from "~/constants/about";

const { t } = useI18n();
const [infoList] = useAutoAnimate();

const getIcon = (iconName: string) => {
  return defineAsyncComponent(() =>
    import("lucide-vue-next").then((module) => module[iconName]),
  );
};
</script>

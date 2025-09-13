<template>
  <div class="animate-fade-up animate-duration-700 animate-delay-500">
    <div class="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
      <div class="relative">
        <component class="w-8 h-8 lg:w-12 lg:h-12 text-mauve drop-shadow-lg" :is="loadIconComponent('Skill')" />
        <div class="absolute -inset-1 lg:-inset-2 bg-mauve/20 rounded-full blur-lg"></div>
      </div>
      <div class="flex-1">
        <h2 class="text-white text-xl lg:text-2xl font-bold tracking-tight">{{ t('about.skill.title') }}</h2>
        <div class="w-16 lg:w-20 h-1 bg-gradient-to-r from-mauve to-foreground rounded-full mt-2"></div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-6">
      <div v-for="(skill, index) in skills" :key="index" class="relative group animate-fade-up animate-duration-500"
        :style="{ animationDelay: `${600 + index * 100}ms` }">

        <div
          class="relative bg-gradient-to-br from-darkblue/40 to-midnightBlue/40 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-6 border border-mauve/20 shadow-lg hover:shadow-mauve/20 transition-all duration-300 hover:scale-105 hover:border-mauve/40">

          <div
            class="absolute -inset-0.5 lg:-inset-1 bg-gradient-to-r from-mauve/0 via-mauve/10 to-foreground/0 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg">
          </div>

          <div class="relative">
            <Skills :title="skill.title" :sub-title="skill.subTitle" :icon="skill.icon" :flame="skill.flame" />
          </div>

          <Icon v-if="skill.flame"
            class="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-1.5 py-0.5 lg:px-2 lg:py-1 rounded-full shadow-lg animate-pulse"
            :stroke-width="2" :size="24" name="Flame" />

        </div>
      </div>
    </div>

    <div
      class="mt-8 lg:mt-12 p-4 lg:p-6 bg-gradient-to-r from-mauve/10 to-foreground/10 rounded-xl lg:rounded-2xl border border-mauve/20 backdrop-blur-sm">
      <div class="flex items-center justify-center gap-2 lg:gap-3 lg:mb-0">
        <Icon name="Flame" :stroke-width="2" :size="20" class="text-orange-500 animate-pulse lg:w-6 lg:h-6" />
        <p class="text-gray-300 font-medium text-center text-sm lg:text-base">
          {{ t('about.skill.footer') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { skills } from '~/constants/about'
import Skills from '../skills/Skills.vue';

const { t } = useI18n()
const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/about/${name}.vue`).catch(() => null),
  );
};
</script>

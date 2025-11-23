<template>
  <div class="fade-in">
    <div class="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
      <div class="relative">
        <Icon name="Code2" :stroke-width="2" :size="32" class="w-8 h-8 lg:w-12 lg:h-12 text-mauve drop-shadow-lg" />
        <div class="absolute -inset-1 lg:-inset-2 bg-mauve/20 rounded-full blur-lg"></div>
      </div>
      <div class="flex-1">
        <h2 class="text-white tracking-tight">{{ t('about.skill.title') }}</h2>
        <div class="w-16 lg:w-20 h-1 bg-gradient-to-r from-mauve to-foreground rounded-full mt-2"></div>
      </div>
    </div>

    <div ref="skillsGrid" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
      <div v-for="(skill, index) in skills" :key="index" class="relative group fade-in"
        :style="{ animationDelay: `${index * 30}ms` }">

        <div
          class="relative rounded-2xl p-5 lg:p-6 border smooth-transition border-purple-500/40">
          <Skills :title="skill.title" :sub-title="skill.subTitle" :icon="skill.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { skills } from '~/constants/about'
import Skills from '../skills/Skills.vue';

const { t } = useI18n()
const [skillsGrid] = useAutoAnimate()
</script>

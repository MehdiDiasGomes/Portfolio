<template>
  <div class="fade-in">
    <div class="flex items-center gap-4 mb-8 lg:mb-10">
      <div class="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-purple-500 rounded-full hidden sm:flex"></div>
      <div class="flex items-center gap-3">
        <div class="glass-effect p-3 rounded-xl border border-purple-500/30">
          <Icon name="Code2" :stroke-width="2" :size="24" class="text-purple-400" />
        </div>
        <h2 class="text-white tracking-tight">{{ t('about.skill.title') }}</h2>
      </div>
      <div class="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500 to-blue-500 rounded-full hidden sm:flex"></div>
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

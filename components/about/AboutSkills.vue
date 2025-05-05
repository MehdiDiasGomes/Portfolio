<template>
  <div>
    <div class="flex items-center gap-[15px]">
      <component :is="loadIconComponent('Skill')" />
      <h2 class="text-white text-l font-bold">{{ t('about.skill.title') }}</h2>
    </div>
    <div class="w-full my-[15px] h-[1px] bg-gray-400"></div>
    <ul class="mt-10 flex flex-wrap gap-[15px]">
      <li v-for="(skill, index) in skills" :key="index" class="w-full sm:w-[47%] p-2 box-border rounded-[25px]">
        <Skills :title="skill.title" :sub-title="skill.subTitle" :icon="skill.icon" />
      </li>
    </ul>
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

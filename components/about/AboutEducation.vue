<template>
  <div>
    <div class="flex items-center gap-[15px]">
      <component :is="loadIconComponent('Education')" />
      <h2 class="text-white text-l font-bold">{{ t('about.skill.title') }}</h2>
    </div>
    <div class="w-full my-[15px] h-[1px] bg-gray-400"></div>
    <ul class="mt-10 flex flex-wrap gap-[15px]">
      <li v-for="(content, index) in education" :key="index" class="w-full sm:w-[47%] p-2 box-border rounded-[25px]">
        <Education :title="content.title" :sub-title="content.subTitle" :icon="content.icon" :parag="content.parag" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { education } from '~/constants/about';
import Education from '../education/Education.vue';

const { t } = useI18n();
const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/about/${name}.vue`).catch(() => null),
  );
};
</script>

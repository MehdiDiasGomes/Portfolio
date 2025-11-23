<template>
  <div class="flex relative items-center gap-4">
    <div class="relative flex-shrink-0">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur-md opacity-40"></div>
      <div class="relative rounded-xl p-3 border border-purple-500/30">
        <component class="w-10 h-10 object-cover" :is="loadIconComponent(icon)" />
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <p class="text-white font-bold">{{ title }}</p>
      <span class="text-gray-400 text-sm">{{ subTitle }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SkillProps } from '~/types/components/about/SkillProps';

const { title, subTitle, icon } = defineProps<SkillProps>()
const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/projects/${name}.vue`).catch(() => null),
  );
};
</script>

<template>
  <div class="flex relative items-center gap-4">
    <div class="relative group flex-shrink-0">
      <div class="absolute -inset-0.5 lg:-inset-1 bg-gradient-to-r from-mauve to-foreground rounded-xl lg:rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
      <div class="relative bg-gradient-to-b dark:from-[#413075] dark:to-[#181818] from-gray-800 to-gray-900 rounded-xl lg:rounded-2xl p-2 lg:p-3 border border-mauve/30">
        <component class="w-10 h-10 object-contain rounded-lg" :is="loadIconComponent(icon)" />
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <p class="font-bold">{{ title }}</p>
      <span class="dark:text-gray-400 text-gray-600 text-sm">{{ subTitle }}</span>
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

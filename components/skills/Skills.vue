<template>
  <div class="flex items-center gap-[15px]">
    <div class="bg-gradient-to-b from-[#9b9b9b] to-[#000] rounded-[20px] p-[1px] w-fit">
      <div class="bg-gradient-to-b from-[#413075] to-[#181818] rounded-[20px] p-2 w-fit">
        <component class="w-[40px] h-[40px] object-cover rounded-[10px]" :is="loadIconComponent(icon)" />
      </div>
    </div>
    <div class="flex flex-col">
      <p class="text-white text-main font-bold">{{ title }}</p>
      <span class="text-[#7E7E7E]">{{ subTitle }}</span>
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

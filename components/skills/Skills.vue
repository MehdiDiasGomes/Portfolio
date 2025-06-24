<template>
  <div class="flex relative items-center gap-[15px]">
    <Icon v-if="flame" class="absolute -top-3 -left-2 text-mauve" :stroke-width="2" :size="24" name="Flame" />
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

const { title, subTitle, icon, flame } = defineProps<SkillProps>()
const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/projects/${name}.vue`).catch(() => null),
  );
};
</script>

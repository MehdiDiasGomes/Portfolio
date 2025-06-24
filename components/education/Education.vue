<template>
  <div class="flex flex-col gap-[15px]">
    <div class="flex items-center gap-[15px]">
      <div
        class="bg-gradient-to-b from-[#9b9b9b] to-[#000] rounded-[20px] p-[1px] w-fit flex items-center justify-center">
        <div
          class="bg-gradient-to-b from-[#413075] to-[#181818] rounded-[20px] p-2 w-fit flex items-center justify-center">
          <component class="w-[40px] h-[40px] object-cover rounded-[10px]" :is="loadIconComponent(icon)" />
        </div>
      </div>
      <div class="flex flex-col">
        <p class="text-white text-main font-bold">{{ t(title) }}</p>
        <span class="text-[#7E7E7E]">{{ t(subTitle) }}</span>
      </div>
    </div>
    <p class="text-white mt-5">{{ t(parag) }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { EducationProps } from '~/types/components/about/EducationProps';
const { t } = useI18n();

const { title, subTitle, icon, parag } = defineProps<EducationProps>()
const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/about/${name}.vue`).catch(() => null),
  );
};
</script>

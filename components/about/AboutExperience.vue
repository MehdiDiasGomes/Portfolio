<template>
  <div>
    <div class="flex items-center gap-[15px]">
      <component :is="loadIconComponent('WorkExperience')" />
      <h2 class="text-white text-l font-bold">{{ t('about.experience.title') }}</h2>
    </div>
    <div class="w-full my-[15px] h-[1px] bg-gray-400"></div>
    <ul class="mt-10">
      <li v-for="(experience, index) in aboutExperience" :key="index" class="flex flex-col gap-14">
        <div class="flex justify-between max-sm:flex-col max-md:gap-2 max-sm:items-start w-full items-center">
          <div class="flex items-center gap-[15px]">
            <div class="shrink-0">
              <div class="bg-gradient-to-b from-[#9b9b9b] to-[#000] rounded-[25px] p-[1px] w-fit">
                <div class="bg-gradient-to-b from-[#413075] to-[#181818] rounded-[25px] p-2 w-fit">
                  <img class="w-[47px] h-[47px] object-cover rounded-[15px]" src="/assets/img/flippad.jpg"
                    alt="Logo Flippad Digital Solutions">
                </div>
              </div>
            </div>

            <div class="flex flex-col">
              <h3 class="text-white text-m font-bold">{{ t(experience.organization.title) }}</h3>
              <h4 class="text-m bg-gradient-to-r from-mauve to-foreground bg-clip-text text-transparent">
                {{ t(experience.organization.subTitle) }}
              </h4>
            </div>
          </div>
          <span class="text-m text-white">{{ t(experience.organization.time) }}</span>
        </div>
        <ul class="flex flex-col pl-4 gap-14">
          <li v-for="(subExperience, subIdx) in experience.organization.list" class="flex items-start gap-[15px]">
            <div class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-b from-mauve to-foreground"></div>
            <div class="flex flex-col gap-4">
              <p class="text-white">{{ t(subExperience.parag) }}</p>
              <p class="text-white flex items-center max-xl:flex-col max-xl:items-start gap-1">{{
                t(subExperience.usedTechnos) }} <span class="font-bold">{{ t(subExperience.technos) }}</span></p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { aboutExperience } from '~/constants/about';

const { t } = useI18n()
const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/about/${name}.vue`).catch(() => null),
  );
};
</script>

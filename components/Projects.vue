<template>
  <div class="flex relative my-10 flex-col gap-3 z-30 items-center justify-center">
    <img class="absolute top-0 h-screen -z-10 w-full" src="../assets/img/grid-pattern.png" />

    <div class="w-full flex flex-col items-center mb-4">
      <h2 class="text-primaryPerso text-4xl text-center font-extrabold">
      {{ t("projects.title") }}
      </h2>
      <div class="h-1 w-16 bg-primaryPerso rounded mt-2"></div>
    </div>
    <div class="grid grid-cols-1 p-6 md:grid-cols-2 my-10 justify-center gap-4">
      <div
        v-for="(item, index) in projects"
        :key="index"
        class="p-4 inset-shadow-sm bg-gradient-to-r duration-200 transition-all from-[#04071D] to-[#0C0E23] inset-shadow-sm max-w-96 rounded-xl grid gap-2"
      >
        <img class="rounded-xl" :src="item.img" alt="Bannière projet" />
        <h3 class="text-white my-4 text-2xl font-bold">{{ t(`${item.titleKey}`) }}</h3>
        <span class="text-secondaryPerso">{{ t(`${item.descriptionKey}`) }}</span>
        <div class="flex justify-between items-center">
          <div class="flex items-center mt-4 gap-1">
            <i
              :class="
                index >= 3
                  ? 'hidden'
                  : 'w-10 h-10 bg-[#0C0E23] rounded-full p-3 flex items-center justify-center hover:scale-110 duration-200 ease-in-out'
              "
              v-for="(icon, index) in item.iconTech"
              :key="index"
            >
              <component :is="loadIconComponent(icon.name)" class="w-5 h-5" />
            </i>
            <Button
              v-if="item.iconTech.length > 3"
              class="group relative bgred w-10 cursor-default bg-[#0C0E23] rounded-full p-3 h-fit hover:scale-110 duration-200 hover:bg-[#0C0E23] ease-in-out"
            >
              +{{ item.iconTech.length - 3 }}
              <div
                class="tooltip bg-[#0C0E23] absolute z-50 whitespace-normal break-words rounded-lg py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
                style="top: 100%; left: 50%; transform: translateX(-50%); margin-top: 5px"
              >
                <div class="flex flex-row gap-2">
                  <component
                    v-for="(icon, i) in item.iconTech.slice(3)"
                    :key="i"
                    :is="loadIconComponent(icon.name)"
                    class="w-full h-full"
                  />
                </div>
              </div>
            </Button>
          </div>
          <template v-if="!item.inDevelopment">
            <component :data="item" :is="loadSheetComponent(item.sheet)" class="w-5 h-5" />
          </template>
          <template v-else>
            <InDevelopment />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { projects } from "~/constants/projects";
import InDevelopment from "./projects/inDevelopment.vue";
const { t } = useI18n();

const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/projects/${name}.vue`).catch(() => null),
  );
};

const loadSheetComponent = (name: string) => {
  return defineAsyncComponent(() => import(`~/components/projects/${name}.vue`).catch(() => null));
};
</script>

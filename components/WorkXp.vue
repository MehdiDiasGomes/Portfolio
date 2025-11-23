<template>
  <div class="flex relative flex-col mp-home mt-14 z-30">
    <img class="absolute top-0 h-full -z-10 w-full" src="../assets/img/grid-pattern.png" />
    <div class="w-full flex flex-col items-center mb-4">
      <h2 class="text-white text-center">
      {{ t("workXp.title_first") }}
      <span class="text-primaryPerso"> {{ t("workXp.title_second") }}</span>
      </h2>
      <div class="h-1 w-16 bg-primaryPerso rounded mt-2"></div>
    </div>
    <div class="my-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-xl">
        <div
          v-for="(item, index) in workXp"
          :key="index"
          class="bg-gradient-to-r inset-shadow-sm duration-200 transition-all from-[#04071D] to-[#0C0E23] p-7 flex flex-col md:flex-row items-start gap-4 md:items-center text-white rounded-lg"
        >
          <img :src="item.icon" :alt="item.alt" class="w-20 h-auto" />
          <div class="flex flex-col gap-2">
            <h3 class="text-white">{{ item.title }}</h3>
            <p class="text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import frontXp from "~/assets/img/frontXp.png";
import backXp from "~/assets/img/backXp.png";
import mobile from "~/assets/img/mobile.png";
import amp from "~/assets/img/amp.png";



const { t } = useI18n();

const workXp = computed(() => [
  {
    icon: frontXp,
    alt: "Icon front end",
    title: t("workXp.cardOne.title"),
    description: t("workXp.cardOne.description"),
  },
  {
    icon: backXp,
    alt: "Icon front end",
    title: t("workXp.cardTwo.title"),
    description: t("workXp.cardTwo.description"),
  },
  {
    icon: mobile,
    alt: "Icon front end",
    title: t("workXp.cardThree.title"),
    description: t("workXp.cardThree.description"),
  },
  {
    icon: amp,
    alt: "Icon front end",
    title: t("workXp.cardFour.title"),
    description: t("workXp.cardFour.description"),
  },
]);
</script>

<template>
  <div class="flex relative flex-col z-30 items-center justify-center">
    <img class="absolute top-0 h-screen -z-10 w-full" src="../assets/img/grid-pattern.png" />
    <h2 class="text-white text-2xl text-center font-extrabold">
      {{ t("workXp.title_first") }}
      <span class="text-primaryPerso"> {{ t("workXp.title_second") }}</span>
    </h2>
    <div class="max-w-[1000px] my-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 rounded-xl">
        <div
          v-for="(item, index) in workXp"
          :key="index"
          class="bg-gradient-to-r inset-shadow-sm duration-200 transition-all from-[#04071D] to-[#0C0E23] p-10 flex gap-4 items-center text-white rounded-lg"
        >
          <img :src="item.icon" :alt="item.alt" class="w-24 h-20" />
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-extrabold">{{ item.title }}</h3>
            <p class="text-sm">{{ item.description }}</p>
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

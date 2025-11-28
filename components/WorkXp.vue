<template>
  <div class="flex relative flex-col mp-home mt-14 z-30">
    <div class="w-full flex flex-col items-center mb-4">
      <h2 class="text-center">
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
          class="bg-gradient-to-r dark:from-[#04071D] dark:to-[#0C0E23] from-gray-50 to-gray-100 duration-200 transition-all p-7 flex flex-col md:flex-row items-start gap-4 md:items-center rounded-lg border border-gray-200 dark:border-white/10"
        >
          <img :src="item.icon" :alt="item.alt" class="w-20 h-auto" />
          <div class="flex flex-col gap-2">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
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

<template>
  <div class="flex flex-col gap-5">
    <div class="flex items-center gap-5">
      <img
        src="/assets/img/Avatar.jpg"
        alt="Photo de profil"
        class="rounded-full w-32 h-32 object-cover"
      />
      <div class="flex flex-col gap-5">
        <div class="flex flex-col">
          <h1 class="text-white text-xl font-bold">Mehdi DIAS GOMES</h1>
          <h2 class="text-mauve text-intro">Développeur full stack</h2>
        </div>
        <div class="flex items-center gap-3">
          <ul class="flex items-center gap-5">
            <li
              v-for="(items, index) in info"
              :key="index"
              class="flex items-center gap-2"
            >
              <component :is="loadIconComponent(items.icon)" class="w-5 h-5" />
              <p class="text-white underline text-sm">{{ items.label }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <p class="text-white text-main">{{ t("about.firstParagraph") }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { info } from "~/constants/about";
const { t } = useI18n();

const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/about/${name}.vue`).catch(() => null)
  );
};
</script>

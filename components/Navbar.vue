<template>
  <div
    class="fixed z-50 top-10 border border-borderPerso rounded-xl left-1/2 transform -translate-x-1/2 bg-backgroundForeground p-4 w-[85%] sm:w-auto sm:px-14"
  >
    <div class="flex items-center justify-center">
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden flex items-center z-50">
        <div class="space-y-2">
          <span
            class="block w-6 h-0.5 bg-white transition"
            :class="{ 'rotate-45 translate-y-2.5': isMenuOpen }"
          ></span>
          <span
            class="block w-6 h-0.5 bg-white transition"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span
            class="block w-6 h-0.5 bg-white transition"
            :class="{ '-rotate-45 -translate-y-2.5': isMenuOpen }"
          ></span>
        </div>
      </button>

      <nav class="hidden md:flex items-center gap-10 whitespace-nowrap justify-center">
        <li class="flex flex-col items-center" v-for="(item, index) in navItems" :key="index">
          <NuxtLink
            :class="[
              removePrefix(route.path) === item.url
                ? 'text-white font-bold'
                : 'text-secondaryPerso',
              item.url === '/about' ? 'hidden sm:block' : '',
            ]"
            :to="item.url"
          >
            {{ item.name }}
          </NuxtLink>
          <div
            v-if="removePrefix(route.path) === item.url"
            class="absolute bottom-0 translate-y-1/2 h-2 w-2 bg-white rounded-full"
          ></div>
        </li>
        <LangChoice class="hidden md:block" />
      </nav>
    </div>

    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 mt-2 bg-backgroundForeground border border-borderPerso rounded-xl p-4 shadow-lg w-full"
    >
      <ul class="space-y-3">
        <li v-for="(item, index) in navItems" :key="index" class="flex flex-col items-center">
          <NuxtLink
            @click="isMenuOpen = false"
            :class="
              removePrefix(route.path) === item.url ? 'text-white font-bold' : 'text-secondaryPerso'
            "
            :to="item.url"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
        <li class="w-full flex justify-center">
          <LangChoice />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();
const isMenuOpen = ref(false);

const removePrefix = (url: string) => {
  return url.replace(/^\/(en|fr)(\/|$)/, "/");
};

const navItems = computed(() => [
  { name: t("navigation.about"), url: "/about" },
  { name: t("navigation.projects"), url: "/" },
  { name: t("navigation.contact"), url: "/contact" },
]);
</script>

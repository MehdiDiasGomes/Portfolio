<template>
  <div
    class="fixed z-20 top-10 border border-borderPerso rounded-xl left-1/2 transform -translate-x-1/2 bg-backgroundForeground p-5 sm:px-14">
    <ul class="flex items-center gap-10 whitespace-nowrap justify-center">
      <li class="flex flex-col
       items-center" v-for="(item, index) in navItems" :key="index">
        <NuxtLink :class="removePrefix(route.path) === item.url ? 'text-white font-bold' : 'text-secondaryPerso'"
          :to="item.url">
          {{ item.name }}
        </NuxtLink>
        <div v-if="removePrefix(route.path) === item.url"
          class="absolute bottom-0 translate-y-1/2 h-2 w-2 bg-white rounded-full">
        </div>
      </li>
      <LangChoice />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();

const removePrefix = (url: string) => {
  return url.replace(/^\/(en|fr)(\/|$)/, '/');
};

const navItems = computed(() => [
  { name: t('navigation.about'), url: '/about' },
  { name: t('navigation.projects'), url: '/' },
  { name: t('navigation.contact'), url: '/contact' },
]);
</script>

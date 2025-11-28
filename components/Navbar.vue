<template>
  <div class="fixed z-50 top-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-auto">
    <div class="dark:bg-black/40 bg-white/80 backdrop-blur-xl rounded-[8px] px-6 py-3 border dark:border-white/10 border-gray-300">
      <div class="flex items-center justify-between md:justify-center gap-6">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden dark:text-white text-gray-900 hover:text-purple-400 transition-colors"
        >
          <div class="w-6 h-6 flex flex-col justify-center gap-1.5">
            <span
              class="block w-full h-0.5 bg-current transition-all duration-300"
              :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span
              class="block w-full h-0.5 bg-current transition-all duration-300"
              :class="isMenuOpen ? 'opacity-0' : ''"
            ></span>
            <span
              class="block w-full h-0.5 bg-current transition-all duration-300"
              :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
            ></span>
          </div>
        </button>

        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.url"
            :class="[
              'px-4 py-2 text-sm transition-all duration-300 relative',
              removePrefix(route.path) === item.url
                ? 'dark:text-white text-gray-900'
                : 'dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900',
              item.url === '/about' ? 'hidden sm:block' : '',
            ]"
          >
            {{ item.name }}
            <span
              v-if="removePrefix(route.path) === item.url"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full"
            ></span>
          </NuxtLink>
        </nav>

        <div class="hidden md:block w-px h-4 dark:bg-white/10 bg-gray-300"></div>
        <SettingsDropdown class="hidden md:block" />
      </div>

      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMenuOpen"
          class="md:hidden absolute top-full left-0 right-0 mt-2 dark:bg-black/95 bg-white/95 backdrop-blur-xl rounded-[8px] border dark:border-white/10 border-gray-300 overflow-hidden"
        >
          <ul ref="mobileMenu" class="py-2">
            <li v-for="(item, index) in navItems" :key="index">
              <NuxtLink
                @click="isMenuOpen = false"
                :to="item.url"
                :class="[
                  'block px-4 py-3 text-sm transition-colors',
                  removePrefix(route.path) === item.url
                    ? 'dark:text-white text-gray-900 bg-purple-600/20'
                    : 'dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 dark:hover:bg-white/5 hover:bg-gray-100'
                ]"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
            <li class="border-none shadow-none dark:border-white/10 border-gray-300 mt-2 pt-2 px-4">
              <SettingsDropdown />
            </li>
          </ul>
        </div>
      </Transition>
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
const [mobileMenu] = useAutoAnimate()

const removePrefix = (url: string) => {
  return url.replace(/^\/(en|fr)(\/|$)/, "/");
};

const navItems = computed(() => [
  { name: t("navigation.about"), url: "/about" },
  { name: t("navigation.home"), url: "/" },
  { name: t("navigation.portfolio"), url: "/portfolio" },
  { name: t("navigation.contact"), url: "/contact" },
]);
</script>

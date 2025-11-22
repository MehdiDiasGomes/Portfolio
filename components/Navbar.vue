<template>
  <div
    class="fixed z-50 top-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-auto fade-in"
  >
    <div
      class="glass-effect rounded-2xl px-6 py-4 shadow-2xl border border-white/10 backdrop-blur-2xl"
    >
      <div class="flex items-center justify-center">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden flex items-center z-50 p-2 smooth-transition"
        >
          <div class="space-y-1.5">
            <span
              class="block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full smooth-transition"
              :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
            ></span>
            <span
              class="block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full smooth-transition"
              :class="{ 'opacity-0': isMenuOpen }"
            ></span>
            <span
              class="block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full smooth-transition"
              :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
            ></span>
          </div>
        </button>

        <nav class="hidden md:flex items-center gap-8 whitespace-nowrap justify-center">
          <li
            class="flex flex-col items-center relative group"
            v-for="(item, index) in navItems"
            :key="index"
          >
            <NuxtLink
              :class="[
                'py-2 px-4 rounded-lg smooth-transition relative overflow-hidden',
                removePrefix(route.path) === item.url
                  ? 'text-white font-semibold'
                  : 'text-gray-400 hover:text-white',
                item.url === '/about' ? 'hidden sm:block' : '',
              ]"
              :to="item.url"
            >
              <span class="relative z-10">{{ item.name }}</span>
              <div
                v-if="removePrefix(route.path) === item.url"
                class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg"
              ></div>
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg opacity-0 group-hover:opacity-100 smooth-transition"
              ></div>
            </NuxtLink>
          </li>
          <div class="w-px h-6 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <LangChoice class="hidden md:block" />
        </nav>
      </div>

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMenuOpen"
          class="md:hidden absolute top-full left-0 right-0 mt-3 bg-[#0a0a0f]/95 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl border border-white/20"
        >
          <ul ref="mobileMenu" class="space-y-2">
            <li v-for="(item, index) in navItems" :key="index" class="flex flex-col items-center">
              <NuxtLink
                @click="isMenuOpen = false"
                :class="[
                  'py-3 px-6 rounded-xl w-full text-center smooth-transition',
                  removePrefix(route.path) === item.url
                    ? 'text-white font-semibold bg-gradient-to-r from-purple-600/30 to-blue-600/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                ]"
                :to="item.url"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
            <li class="w-full flex justify-center pt-2 border-t border-white/10">
              <LangChoice />
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
  { name: t("navigation.projects"), url: "/" },
  { name: t("navigation.contact"), url: "/contact" },
]);
</script>

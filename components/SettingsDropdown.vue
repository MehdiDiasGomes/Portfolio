<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        class="bg-transparent shadow-none border-none dark:hover:bg-hoverForegroundPerso hover:bg-gray-200 hover:text-primaryPerso transition-colors"
        variant="outline"
        size="icon"
      >
        <Settings class="w-5 h-5 dark:text-white text-gray-900" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56 dark:bg-backgroundForeground bg-white border dark:border-borderPerso border-gray-300 dark:text-white text-gray-900">
      <DropdownMenuLabel>{{ t("lang.choose") }}</DropdownMenuLabel>
      <DropdownMenuSeparator class="dark:bg-borderPerso bg-gray-300" />
      <DropdownMenuCheckboxItem
        class="dark:focus:bg-hoverForegroundPerso focus:bg-gray-100 dark:focus:text-white focus:text-gray-900 cursor-default"
        @click="setLanguage('en')"
        :checked="locale === 'en'"
      >
        <NuxtLink class="flex w-full items-center gap-2 cursor-default" :to="switchLocalePath('en')">
          <England class="w-5 h-5" />English
        </NuxtLink>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        class="dark:focus:bg-hoverForegroundPerso focus:bg-gray-100 dark:focus:text-white focus:text-gray-900 cursor-default"
        @click="setLanguage('fr')"
        :checked="locale === 'fr'"
      >
        <NuxtLink class="flex w-full items-center gap-2 cursor-default" :to="switchLocalePath('fr')">
          <France class="w-5 h-5" />Français
        </NuxtLink>
      </DropdownMenuCheckboxItem>

      <DropdownMenuSeparator class="dark:bg-borderPerso bg-gray-300 my-2" />

      <DropdownMenuLabel>{{ t("theme.choose") }}</DropdownMenuLabel>
      <DropdownMenuSeparator class="dark:bg-borderPerso bg-gray-300" />
      <DropdownMenuRadioGroup v-model="currentTheme">
        <DropdownMenuRadioItem
          class="dark:focus:bg-hoverForegroundPerso focus:bg-gray-100 dark:focus:text-white focus:text-gray-900"
          value="light"
          @click="setTheme('light')"
        >
          <Sun class="w-4 h-4 mr-2" />
          {{ t("theme.light") }}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          class="dark:focus:bg-hoverForegroundPerso focus:bg-gray-100 dark:focus:text-white focus:text-gray-900"
          value="dark"
          @click="setTheme('dark')"
        >
          <Moon class="w-4 h-4 mr-2" />
          {{ t("theme.dark") }}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          class="dark:focus:bg-hoverForegroundPerso focus:bg-gray-100 dark:focus:text-white focus:text-gray-900"
          value="system"
          @click="setTheme('system')"
        >
          <Monitor class="w-4 h-4 mr-2" />
          {{ t("theme.system") }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, Sun, Moon, Monitor } from "lucide-vue-next";
import { ref, watch, onMounted } from "vue";
import France from "./icons/France.vue";
import England from "./icons/England.vue";

const { t, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const colorMode = useColorMode();

const currentTheme = ref(colorMode.preference);

const setLanguage = (lang: string) => {
};

const setTheme = (theme: string) => {
  colorMode.preference = theme;
  currentTheme.value = theme;
};

watch(
  () => colorMode.preference,
  (newMode) => {
    currentTheme.value = newMode;
  },
  { immediate: true }
);

onMounted(() => {
  currentTheme.value = colorMode.preference;
});
</script>

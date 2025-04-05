<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        class="bg-backgound_navPerso border-none hover:bg-hoverForegroundPerso"
        variant="outline"
      >
        <template v-if="ShowUnitedKingdom">
          <England />
        </template>
        <template v-else>
          <France />
        </template>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56 bg-backgroundForeground border border-borderPerso text-white">
      <DropdownMenuLabel>{{ t("lang.choose") }}</DropdownMenuLabel>
      <DropdownMenuSeparator class="bg-borderPerso" />
      <DropdownMenuCheckboxItem
        class="focus:bg-hoverForegroundPerso focus:text-white"
        @click="setUnitedKingdom"
        v-model:checked="ShowUnitedKingdom"
      >
        <NuxtLink class="flex w-full items-center gap-2" :to="switchLocalePath('en')">
          <England class="w-7" />English
        </NuxtLink>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        class="focus:bg-hoverForegroundPerso focus:text-white"
        @click="setFrench"
        v-model:checked="showFrench"
      >
        <NuxtLink class="flex w-full items-center gap-2" :to="switchLocalePath('fr')">
          <France />Français
        </NuxtLink>
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import type { DropdownMenuCheckboxItemProps } from "radix-vue";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ref } from "vue";
import France from "./icons/France.vue";
import England from "./icons/England.vue";

const { t, locale } = useI18n();

type Checked = DropdownMenuCheckboxItemProps["checked"];

const showFrench = ref<Checked>(true);
const ShowUnitedKingdom = ref<Checked>(false);

const setUnitedKingdom = () => {
  ShowUnitedKingdom.value = true;
  showFrench.value = false;
};

const setFrench = () => {
  showFrench.value = true;
  ShowUnitedKingdom.value = false;
};

watch(
  () => locale.value,
  (newLocale) => {
    if (newLocale === "fr") {
      setFrench();
    } else if (newLocale === "en") {
      setUnitedKingdom();
    }
  },
  { immediate: true },
);

onMounted(() => {
  if (locale.value === "fr") {
    setFrench();
  } else if (locale.value === "en") {
    setUnitedKingdom();
  }
});
const switchLocalePath = useSwitchLocalePath();
</script>

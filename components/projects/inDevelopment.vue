<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button
        variant="outline"
        class="border bg-[#000319] text-white border-borderPerso hover:bg-primaryPerso rounded-xl transition hover:scale-105"
      >
        {{ t("projects.view") }}
      </Button>
    </SheetTrigger>
    <SheetContent class="bg-[#000319] border-l border-borderPerso">
      <SheetHeader>
        <SheetTitle class="text-white text-2xl font-bold"
          >🚧 {{ t("projects.inDevelopment.title") }} 🚧</SheetTitle
        >
        <SheetDescription class="text-secondary">
          {{ t("projects.inDevelopment.subtitle") }}
        </SheetDescription>
      </SheetHeader>
      <div class="flex flex-col items-center justify-center py-12 gap-6">
        <div class="text-7xl animate-bounce animate-infinite animate-duration-[2000ms]">👨‍💻</div>
        <p class="text-white text-center font-medium max-w-[400px]">
          {{ t("projects.inDevelopment.message") }} ✨
        </p>
        <p class="text-primaryPerso text-center text-lg font-bold mt-4">
          {{ t("projects.inDevelopment.comingSoon") }} 🚀
        </p>
      </div>
      <SheetFooter>
        <SheetClose as-child>
          <Button
            class="border border-borderPerso hover:bg-gray-700 rounded-xl transition hover:scale-105"
          >
            {{ t("common.close") }}
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

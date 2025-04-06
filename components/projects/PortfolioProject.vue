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
    <SheetContent
      class="bg-[#000319] border-l overflow-y-scroll border-borderPerso w-full sm:w-7/12"
    >
      <SheetHeader>
        <SheetTitle class="text-white text-2xl font-bold">
          ✨ {{ t("projects.portfolio.title") }} ✨
        </SheetTitle>
        <SheetDescription class="text-secondary">
          {{ t("projects.portfolio.subtitle") }}
        </SheetDescription>
      </SheetHeader>

      <div class="py-6 space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex flex-col gap-6">
            <div class="overflow-hidden rounded-xl border border-[#1A1D33] shadow-md">
              <img
                :src="data.img"
                :alt="data.alt"
                class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 class="text-primaryPerso text-xl font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🛠️</span> {{ t("projects.portfolio.technologies") }}
              </h3>
              <div class="flex flex-wrap gap-3">
                <div
                  v-for="(tech, index) in data.iconTech"
                  :key="index"
                  class="flex select-none items-center gap-2 bg-[#0A0C20] px-3 py-2 rounded-lg hover:bg-[#12152D] transition-colors border border-[#1A1D33]"
                >
                  <component :is="loadIconComponent(tech.name)" class="w-5 h-5 text-primaryPerso" />
                  <span class="text-white text-sm">{{ tech.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-5">
            <h2 class="text-white text-2xl font-bold flex items-center gap-2">
              <span class="text-2xl">📂</span> {{ t("projects.portfolio.title") }}
            </h2>
            <div class="flex items-center gap-3 flex-wrap">
              <span class="px-3 py-1 text-sm bg-primaryPerso text-[#04071D] font-bold rounded-full">
                {{ t("projects.portfolio.personal") }}
              </span>
              <span class="text-secondaryPerso flex items-center gap-1">
                <span class="text-sm">📅</span> {{ t("projects.portfolio.year") }}
              </span>
            </div>

            <p class="text-secondaryPerso leading-relaxed">
              {{ t("projects.portfolio.description") }}
            </p>

            <div class="space-y-4 mt-2">
              <div class="flex flex-col gap-2">
                <h4 class="text-primaryPerso font-semibold flex items-center gap-2">
                  <span class="text-lg">✅</span> {{ t("projects.portfolio.features") }}
                </h4>
                <ul class="text-secondaryPerso space-y-2">
                  <li class="flex items-start gap-2">
                    <span class="text-primaryPerso">•</span>
                    {{ t("projects.portfolio.feature1") }}
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-primaryPerso">•</span>
                    {{ t("projects.portfolio.feature2") }}
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-primaryPerso">•</span>
                    {{ t("projects.portfolio.feature3") }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-wrap justify-between gap-4 mt-auto pt-4">
              <a
                href="https://github.com/mehdidiasgomes/portfolio"
                target="_blank"
                class="flex items-center gap-2 text-white bg-[#0A0C20] px-4 py-2 rounded-lg hover:bg-[#12152D] transition-colors border border-[#1A1D33]"
              >
                {{ t("projects.portfolio.source") }}
              </a>

              <a
                href="http://mdiasgomes.com"
                class="flex items-center gap-2 px-4 py-2 bg-primaryPerso text-[#04071D] font-bold rounded-lg hover:bg-opacity-80 transition-colors"
              >
                <span class="text-sm">🚀</span>
                {{ t("projects.portfolio.live") }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-[#1A1D33] pt-4 mt-4">
        <SheetFooter>
          <SheetClose as-child>
            <Button
              class="border border-borderPerso hover:bg-gray-700 rounded-xl transition hover:scale-105"
            >
              {{ t("common.close") }}
            </Button>
          </SheetClose>
        </SheetFooter>
      </div>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
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
import type { PortfolioProjectProps } from "~/types/components/projects/props/PortfolioProjectProps";

const { t } = useI18n();
const { data } = defineProps<PortfolioProjectProps>();

const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/projects/${name}.vue`).catch(() => null),
  );
};
</script>

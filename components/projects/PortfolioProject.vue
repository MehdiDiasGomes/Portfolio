<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="ghost" class="w-full h-full p-0 rounded-full hover:bg-transparent">
        <div class="w-6 h-6 text-mauve">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </Button>
    </SheetTrigger>

    <SheetContent
      class="bg-gradient-to-br from-darkblue/95 to-midnightBlue/95 backdrop-blur-xl border-l border-mauve/20 w-full sm:max-w-4xl overflow-y-auto">
      <div class="absolute inset-0 bg-gradient-to-br from-mauve/5 to-foreground/5 pointer-events-none"></div>

      <div class="relative">
        <SheetHeader class="pb-8">
          <div class="flex items-center gap-4 mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-mauve/20 to-foreground/20 rounded-xl flex items-center justify-center border border-mauve/30">
              <svg class="w-6 h-6 text-mauve" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <div>
              <SheetTitle
                class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {{ t("projects.portfolio.title") }}
              </SheetTitle>
              <p class="text-mauve font-medium">{{ t("projects.portfolio.subtitle") }}</p>
            </div>
          </div>

          <div class="flex items-center gap-3 flex-wrap">
            <span
              class="px-3 py-1.5 bg-gradient-to-r from-mauve/20 to-foreground/20 text-mauve font-semibold rounded-full border border-mauve/30 text-sm">
              {{ t("projects.portfolio.personal") }}
            </span>
            <span
              class="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 font-semibold rounded-full border border-green-500/30 text-sm">
              {{ t("projects.portfolio.year") }}
            </span>
          </div>
        </SheetHeader>

        <div class="space-y-8">
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-mauve/20 to-foreground/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300">
            </div>
            <div
              class="relative overflow-hidden rounded-2xl border border-mauve/20 bg-gradient-to-br from-darkblue/40 to-midnightBlue/40 backdrop-blur-sm">
              <img :src="data.img" :alt="data.alt"
                class="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div class="w-2 h-2 bg-mauve rounded-full"></div>
                  À propos du projet
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  {{ t("projects.portfolio.description") }}
                </p>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <div class="w-2 h-2 bg-foreground rounded-full"></div>
                  {{ t("projects.portfolio.features") }}
                </h4>
                <div class="space-y-3">
                  <div
                    class="flex items-start gap-3 p-3 bg-gradient-to-r from-mauve/10 to-transparent rounded-lg border border-mauve/20">
                    <div class="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span class="text-gray-300 text-sm">{{ t("projects.portfolio.feature1") }}</span>
                  </div>
                  <div
                    class="flex items-start gap-3 p-3 bg-gradient-to-r from-foreground/10 to-transparent rounded-lg border border-foreground/20">
                    <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span class="text-gray-300 text-sm">{{ t("projects.portfolio.feature2") }}</span>
                  </div>
                  <div
                    class="flex items-start gap-3 p-3 bg-gradient-to-r from-mauve/10 to-transparent rounded-lg border border-mauve/20">
                    <div class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span class="text-gray-300 text-sm">{{ t("projects.portfolio.feature3") }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                  {{ t("projects.portfolio.technologies") }}
                </h4>
                <div class="grid grid-cols-2 gap-3">
                  <div v-for="(tech, index) in data.iconTech" :key="index" class="group/tech">
                    <div class="flex items-center gap-3 p-3 glass-effect-dark rounded-lg border border-purple-500/20 hover:border-purple-500/40 smooth-transition hover-glow">
                      <div class="w-8 h-8 flex items-center justify-center glass-effect rounded-lg border border-purple-500/30 flex-shrink-0 overflow-hidden">
                        <div class="w-5 h-5">
                          <component :is="loadIconComponent(tech.name)" style="width: 100%; height: 100%;" />
                        </div>
                      </div>
                      <span class="text-white text-sm font-medium">{{ tech.name }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="bg-gradient-to-br from-darkblue/40 to-midnightBlue/40 backdrop-blur-sm rounded-xl p-6 border border-mauve/20">
                <h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  Actions
                </h4>
                <div class="space-y-3">
                  <a href="https://github.com/mehdidiasgomes/portfolio" target="_blank"
                    class="flex items-center justify-center gap-3 w-full p-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg border border-gray-600 hover:border-gray-500 smooth-transition">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clip-rule="evenodd" />
                    </svg>
                    {{ t("projects.portfolio.source") }}
                  </a>

                  <a href="http://mdiasgomes.dev" target="_blank"
                    class="flex items-center justify-center gap-3 w-full p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg border border-purple-500/30 hover:border-purple-500/50 smooth-transition">
                    <Icon name="Code" :stroke-width="2" class="w-5 h-5" />
                    {{ t("projects.portfolio.live") }}
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-mauve/20 pt-6 mt-8">
          <SheetFooter>
            <SheetClose as-child>
              <Button :content="t('common.close')" variant="secondary" />
            </SheetClose>
          </SheetFooter>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import Button from "@/components/common/Button.vue";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { PortfolioProjectProps } from "~/types/components/projects/props/PortfolioProjectProps";
import LinkButtonCta from "../common/LinkButtonCta.vue";

const { t } = useI18n();
const { data } = defineProps<PortfolioProjectProps>();

const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/projects/${name}.vue`).catch(() => null),
  );
};
</script>

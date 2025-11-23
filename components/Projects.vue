<template>
  <div class="relative py-16 mp-home lg:py-24">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative mx-auto max-w-7xl">
      <div class="w-full flex flex-col items-center mb-16 lg:mb-20 scroll-animate">
        <h2 class="text-white text-center">
          {{ t("projects.title") }} <span class="text-primaryPerso">{{ t("projects.title_highlight") }}</span>
        </h2>
        <div class="h-1 w-16 bg-primaryPerso rounded mt-2"></div>
      </div>

      <div ref="projectsGrid" class="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 lg:gap-10">
        <div v-for="(item, index) in projects" :key="index"
          class="group relative h-full flex flex-col scroll-animate scroll-animate-scale">
          <div
            class="relative glass-effect-dark rounded-3xl glass-effect-dark rounded-3xl p-8 lg:p-12 border border-purple-500/20 shadow-2xl max-w-3xl mx-auto border-white/10 shadow-2xl overflow-hidden h-full flex flex-col smooth-transition hover:border-purple-500/30 hover-glow">
            <div class="relative overflow-hidden rounded-t-2xl lg:rounded-t-3xl">
              <img class="w-full h-48 lg:h-56 object-cover smooth-transition group-hover:opacity-90"
                :src="item.img" :alt="`Image du projet ${t(item.titleKey)}`" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div v-if="item.inDevelopment" class="absolute top-4 right-4">
                <div class="glass-effect px-4 py-2 rounded-full border border-orange-500/30 animate-pulse">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span class="text-orange-400 text-xs font-semibold">En développement</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-6 lg:p-8 flex-1 flex flex-col">
              <div class="mb-6 flex-1">
                <h3
                  class="text-white mb-3 group-hover:text-gradient-primary smooth-transition">
                  {{ t(item.titleKey) }}
                </h3>
                <p class="text-gray-300">
                  {{ t(item.descriptionKey) }}
                </p>
              </div>

              <div class="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <div class="flex items-center gap-3">
                  <div class="flex -space-x-3">
                    <div v-for="(icon, iconIndex) in item.iconTech.slice(0, 4)" :key="iconIndex"
                      class="relative group/icon">
                      <div
                        class="w-10 h-10 lg:w-11 lg:h-11 glass-effect rounded-full p-2.5 border border-purple-500/20 hover:border-purple-500/40 smooth-transition">
                        <component :is="loadIconComponent(icon.name)" class="w-full h-full text-white" />
                      </div>

                      <div
                        class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 glass-effect-dark border border-purple-500/20 text-white text-xs rounded-lg opacity-0 group-hover/icon:opacity-100 smooth-transition whitespace-nowrap z-20 shadow-xl">
                        {{ icon.name }}
                      </div>
                    </div>
                  </div>

                  <div v-if="item.iconTech.length > 4" class="relative group/more">
                    <div
                      class="w-10 h-10 lg:w-11 lg:h-11 glass-effect rounded-full flex items-center justify-center text-purple-400 text-xs lg:text-sm font-bold border border-purple-500/30 hover:border-purple-500/50 smooth-transition cursor-pointer">
                      +{{ item.iconTech.length - 4 }}
                    </div>

                    <div
                      class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover/more:opacity-100 smooth-transition z-30">
                      <div class="glass-effect-dark rounded-xl p-4 shadow-2xl border border-purple-500/20">
                        <div class="flex gap-2">
                          <div v-for="(icon, i) in item.iconTech.slice(4)" :key="i"
                            class="w-8 h-8 glass-effect rounded-lg p-1.5 border border-purple-500/20">
                            <component :is="loadIconComponent(icon.name)" class="w-full h-full text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-shrink-0">
                  <template v-if="!item.inDevelopment">
                    <component :data="item" :is="loadSheetComponent(item.sheet)"
                      class="inline-flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-600/30 to-blue-600/30 hover:from-purple-600/40 hover:to-blue-600/40 rounded-full border border-purple-500/30 hover:border-purple-500/50 smooth-transition shadow-lg" />
                  </template>
                  <template v-else>
                    <InDevelopment />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { projects } from "~/constants/projects";
import InDevelopment from "./projects/inDevelopment.vue";

const { t } = useI18n();
const projectsGrid = ref<HTMLElement | null>(null);

// Initialize scroll animations
useScrollAnimationMultiple(projectsGrid, '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale', {
  threshold: 0.15,
  rootMargin: '0px 0px -80px 0px'
});

const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/projects/${name}.vue`).catch(() => null),
  );
};

const loadSheetComponent = (name: string) => {
  return defineAsyncComponent(() => import(`~/components/projects/${name}.vue`).catch(() => null));
};
</script>

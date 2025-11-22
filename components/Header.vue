<template>
  <div class="relative overflow-hidden">
    <Decoration class="opacity-100 absolute inset-0 h-full w-full" />

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="flex min-h-screen items-center justify-center relative z-10 pt-20">
      <div class="max-w-[900px] p-10 md:p-0 flex flex-col items-center justify-center gap-8 mx-auto text-center">
        <div class="fade-in space-y-6">
          <h1 class="text-white font-extrabold leading-tight text-5xl sm:text-6xl lg:text-7xl">
            {{ t("header.title") }}
            <span class="text-gradient-primary block mt-2">
              {{ t("header.span_title") }}
            </span>
          </h1>

          <div class="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>

          <p class="text-gray-300 text-lg sm:text-xl lg:text-2xl mx-auto max-w-[600px] leading-relaxed">
            {{ t("header.description") }}
          </p>

          <div class="flex flex-wrap gap-2 justify-center items-center pt-4">
            <div class="glass-effect px-3 py-2 rounded-lg border border-purple-500/20 smooth-transition hover:border-purple-500/40">
              <span class="text-purple-400 font-semibold text-sm">Vue.js</span>
            </div>
            <div class="glass-effect px-3 py-2 rounded-lg border border-blue-500/20 smooth-transition hover:border-blue-500/40">
              <span class="text-blue-400 font-semibold text-sm">TypeScript</span>
            </div>
            <div class="glass-effect px-3 py-2 rounded-lg border border-pink-500/20 smooth-transition hover:border-pink-500/40">
              <span class="text-pink-400 font-semibold text-sm">Nuxt.js</span>
            </div>
          </div>
        </div>

        <div class="fade-in" style="animation-delay: 0.2s">
          <ButtonScroll side="bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonScroll from '~/components/ButtonScroll.vue';

const { t } = useI18n();
</script>

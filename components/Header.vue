<template>
  <div class="relative overflow-hidden">
    <Decoration class="opacity-100 absolute inset-0 h-full w-full" />

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="flex min-h-screen items-center justify-center relative z-10 pt-20">
      <div class="max-w-[1100px] p-10 md:p-0 flex flex-col items-center justify-center gap-8 mx-auto text-center">
        <div class="fade-in space-y-6">
          <h1 class="leading-tight font-trirong">
            {{ t("header.title") }}
            <span class="text-gradient-primary block mt-2">
              {{ t("header.span_title") }} <em class="italic">{{ t("header.span_title_italic") }}</em>
            </span>
          </h1>

          <div class="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>

          <p class="mx-auto max-w-[600px]">
            {{ t("header.description") }}
          </p>
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

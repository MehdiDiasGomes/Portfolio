<template>
  <div class="relative">
    <Decoration class="opacity-100 absolute inset-0 h-full w-full" />
    <div
      class="flex h-screen items-center animate-fade animate-once animate-duration-1000 animate-ease-in justify-center relative z-10">
      <div class="max-w-[800px] p-10 md:p-0 flex flex-col items-center justify-center gap-10 mx-auto text-center">
        <h2 class="text-white font-extrabold leading-tight text-4xl sm:text-6xl">
          {{ t("header.title") }}
          <span class="text-primaryPerso">
            {{ t("header.span_title") }}
          </span>
        </h2>
        <h2 class="text-secondary sm:text-lg mx-auto max-w-[500px]">
          {{ t("header.description") }}
        </h2>
        <ButtonScroll side="bottom" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonScroll from '~/components/ButtonScroll.vue';

const { t } = useI18n();
</script>

<template>
  <div class="relative">
    <Decoration class="opacity-100 absolute inset-0 h-full w-full" />
    <div class="flex h-screen items-center justify-center relative z-10">
      <div class="max-w-[800px] p-10 md:p-0 flex flex-col items-center gap-7 mx-auto text-center">
        <h1 class="text-white font-extrabold leading-tight text-4xl sm:text-6xl">
          {{ t("header.title") }}
          <span class="text-primaryPerso">
            {{ t("header.span_title") }}
          </span>
        </h1>
        <h2 class="text-secondary sm:text-xl mx-auto max-w-[500px]">
          {{ t("header.description") }}
        </h2>
        <Button
          class="border border-borderPerso bg-primary hover:bg-primaryPerso rounded-xl py-7 px-8 transition duration-300 hover:scale-105"
          @click="scrollToBot"
        >
          {{ t("button.see_work") }}
          <Icon :stroke-width="1.75" name="ArrowUpRight" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const scrollToBot = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
</script>

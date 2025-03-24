<template>
  <div class="relative">
    <Decoration class="opacity-100 absolute inset-0 h-full w-full" />
    <div class="flex h-screen items-center justify-center relative z-10">
      <div class="max-w-[800px] p-10 md:p-0 flex flex-col items-center gap-10 mx-auto text-center">
        <h2 class="text-white font-extrabold leading-tight text-4xl sm:text-6xl">
          {{ t("header.title") }}
          <span class="text-primaryPerso">
            {{ t("header.span_title") }}
          </span>
        </h2>
        <h2 class="text-secondary sm:text-lg mx-auto max-w-[500px]">
          {{ t("header.description") }}
        </h2>
        <Button
          class="border cursor-pointer flex items-center justify-center border-borderPerso hover:bg-gray-700 rounded-xl p-4 transition duration-300 hover:scale-105"
          @click="scrollToBot"
        >
          <Icon h="1.75" name="ArrowBigDownDash" />
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

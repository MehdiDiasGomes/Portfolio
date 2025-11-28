<template>
  <div class="relative overflow-hidden">
    <Decoration class="opacity-100 absolute inset-0 h-full w-full" />

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-600/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl"
      ></div>
    </div>

    <div
      class="flex min-h-screen items-center justify-center relative z-10 pt-20"
    >
      <div
        class="max-w-[1100px] p-10 md:p-0 flex flex-col items-center justify-center gap-12 mx-auto text-center"
      >
        <div class="fade-in space-y-8">
          <div class="space-y-4">
            <h1 class="leading-tight font-trirong">
              {{ $t("landing.brand") }}
            </h1>

            <div
              class="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
            ></div>
          </div>

          <div class="space-y-4">
            <h2 class="text-gradient-primary">
              {{ $t("landing.tagline") }}
            </h2>

            <p class="mx-auto max-w-[700px]">
              {{ $t("landing.description") }}
            </p>
          </div>
        </div>

        <div
          class="fade-in flex mt-8 gap-4 flex-wrap justify-center"
          style="animation-delay: 0.2s"
        >
          <!-- <Button
            variant="primary"
            :content="$t('landing.cta.portfolio')"
            icon="FolderGit2"
            href="/portfolio"
          /> -->
          <Button
            variant="primary"
            :content="$t('landing.cta.contact')"
            icon="Mail"
            href="/contact"
          />
        </div>

        <!-- <div class="fade-in mt-8" style="animation-delay: 0.4s">
          <ButtonScroll side="bottom" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/common/Button.vue";
import ButtonScroll from "~/components/ButtonScroll.vue";

const { t } = useI18n();

definePageMeta({
  layout: "default",
});

useSeoMeta({
  title: () => t("pages.landing.seo.title"),
  description: () => t("pages.landing.seo.description"),
  ogTitle: () => t("pages.landing.seo.title"),
  ogDescription: () => t("pages.landing.seo.description"),
  ogUrl: "https://www.mdiasgomes.dev",
  twitterTitle: () => t("pages.landing.seo.title"),
  twitterDescription: () => t("pages.landing.seo.description"),
});
</script>

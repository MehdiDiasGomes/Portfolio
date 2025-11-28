<template>
  <div class="relative mt-32">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-600/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl"
      ></div>
    </div>

    <div
      class="relative mp-home mt-8 sm:mt-12 lg:mt-20 xl:mt-32 pb-12 lg:pb-20"
    >
      <div class="max-w-7xl mx-auto">
        <div class="space-y-16 lg:space-y-24">
          <section>
            <AboutHeader />
          </section>

          <div class="space-y-16 lg:space-y-24">
            <section class="relative">
              <AboutExperiences />
            </section>

            <div class="space-y-16 lg:space-y-0 lg:grid lg:gap-16 xl:gap-24">
              <section class="relative">
                <AboutSkills />
              </section>

              <section class="relative">
                <AboutEducation />
              </section>
            </div>
          </div>

          <section class="text-center">
            <div class="rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto">
              <div class="mb-6 flex justify-center">
                <div
                  class="glass-effect p-4 rounded-2xl border border-purple-500/30"
                >
                  <Icon
                    name="Handshake"
                    :stroke-width="2"
                    :size="32"
                    class="text-purple-400"
                  />
                </div>
              </div>
              <h3 class="mb-4">
                {{ t("about.readyToCollaborate") }}
              </h3>
              <p class="mb-8 max-w-2xl mx-auto">
                {{ t("about.collaborateDescription") }}
              </p>
              <div
                class="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <NuxtLink
                  to="/contact"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-4 py-2 bg-purple-600 text-white border border-purple-600 hover:bg-transparent hover:text-purple-600 dark:hover:text-white rounded-[8px] transition-all duration-300 ease-in-out hover:scale-[0.98]"
                >
                  {{ t("about.contactMe") }}
                </NuxtLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AboutExperiences from "./AboutExperiences.vue";

const { t } = useI18n();
</script>

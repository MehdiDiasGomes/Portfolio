<template>
  <div class="relative mt-32">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative mp-home mt-8 sm:mt-12 lg:mt-20 xl:mt-32 pb-12 lg:pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="aboutSections" class="space-y-16 lg:space-y-24">
          <section class="fade-in">
            <AboutHeader />
          </section>

          <div class="flex items-center justify-center py-6 lg:py-8">
            <div class="flex items-center gap-3 lg:gap-4">
              <div class="h-px w-12 lg:w-20 bg-gradient-to-r from-transparent via-purple-500 to-purple-500 rounded-full"></div>
              <div class="w-2 h-2 lg:w-3 lg:h-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
              <div class="h-px w-20 lg:w-32 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full"></div>
              <div class="w-2 h-2 lg:w-3 lg:h-3 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full"></div>
              <div class="h-px w-12 lg:w-20 bg-gradient-to-l from-transparent via-pink-500 to-pink-500 rounded-full"></div>
            </div>
          </div>

          <div class="space-y-16 lg:space-y-24">
            <section class="relative fade-in">
              <AboutExperiences />
            </section>

            <div class="space-y-16 lg:space-y-0 lg:grid lg:gap-16 xl:gap-24">
              <section class="relative fade-in">
                <AboutSkills />
              </section>

              <section class="relative fade-in">
                <AboutEducation />
              </section>
            </div>
          </div>

          <section class="text-center fade-in">
            <div class="rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto">
              <div class="mb-6 flex justify-center">
                <div class="glass-effect p-4 rounded-2xl border border-purple-500/30">
                  <Icon name="Handshake" :stroke-width="2" :size="32" class="text-purple-400" />
                </div>
              </div>
              <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">
                {{ t('about.readyToCollaborate') }}
              </h3>
              <p class="text-gray-300 mb-8 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
                {{ t('about.collaborateDescription') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <NuxtLink to="/contact"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-4 py-2 bg-purple-600 text-white border-2 border-purple-600 hover:bg-transparent hover:text-white rounded-[8px] transition-all duration-300 ease-in-out hover:scale-[0.98]">
                  {{ t('about.contactMe') }}
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
import AboutExperiences from './AboutExperiences.vue';

const { t } = useI18n();
const [aboutSections] = useAutoAnimate()
</script>

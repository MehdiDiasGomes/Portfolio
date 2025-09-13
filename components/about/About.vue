<template>
  <div class="relative mt-32">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-32 h-32 lg:w-64 lg:h-64 bg-mauve/10 rounded-full blur-2xl lg:blur-3xl animate-pulse">
      </div>
      <div
        class="absolute bottom-1/4 right-1/4 w-48 h-48 lg:w-96 lg:h-96 bg-foreground/10 rounded-full blur-2xl lg:blur-3xl animate-pulse">
      </div>
    </div>

    <div class="relative mp-home mt-8 sm:mt-12 lg:mt-20 xl:mt-32 pb-12 lg:pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-12 lg:space-y-24">
          <section class="animate-fade animate-once animate-duration-1000 animate-ease-in">
            <AboutHeader />
          </section>

          <div class="flex items-center justify-center py-4 lg:py-0">
            <div class="flex items-center gap-2 lg:gap-4">
              <div class="w-8 lg:w-16 h-0.5 bg-gradient-to-r from-transparent to-mauve"></div>
              <div class="w-2 h-2 lg:w-3 lg:h-3 bg-gradient-to-br from-mauve to-foreground rounded-full"></div>
              <div class="w-16 lg:w-32 h-0.5 bg-gradient-to-r from-mauve via-foreground to-mauve"></div>
              <div class="w-2 h-2 lg:w-3 lg:h-3 bg-gradient-to-br from-foreground to-mauve rounded-full"></div>
              <div class="w-8 lg:w-16 h-0.5 bg-gradient-to-l from-transparent to-foreground"></div>
            </div>
          </div>

          <div class="space-y-12 lg:space-y-24">
            <section class="relative">
              <AboutExperiences />
            </section>

            <div class="space-y-12 lg:space-y-0 lg:grid lg:gap-16 xl:gap-24">
              <section class="relative">
                <AboutSkills />
              </section>

              <section class="relative">
                <AboutEducation />
              </section>
            </div>
          </div>

          <section class="text-center animate-fade-up animate-duration-700 animate-delay-1000">
            <div
              class="bg-gradient-to-br from-darkblue/40 to-midnightBlue/40 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-mauve/20 shadow-xl lg:shadow-2xl">
              <h3 class="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
                {{ t('about.readyToCollaborate') }}
              </h3>
              <p class="text-gray-300 mb-4 lg:mb-6 max-w-2xl mx-auto text-sm lg:text-base">
                {{ t('about.collaborateDescription') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
                <NuxtLink to="/contact"
                  class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-mauve to-foreground text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-mauve/25">
                  {{ t('about.contactMe') }}
                </NuxtLink>
                <NuxtLink to="/projects"
                  class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border-2 border-mauve text-mauve font-semibold rounded-xl hover:bg-mauve/10 transition-colors duration-200">
                  {{ t('about.viewProjects') }}
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
</script>

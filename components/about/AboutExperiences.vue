<template>
  <div>
    <div class="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
      <div class="relative">
        <component class="w-8 h-8 lg:w-12 lg:h-12 text-mauve"
          :is="loadIconComponent('WorkExperience')" />
        <div class="absolute -inset-1 lg:-inset-2 bg-mauve/20 rounded-full blur-lg"></div>
      </div>
      <div class="flex-1">
        <h2 class="tracking-tight">{{ t('about.experience.title') }}</h2>
        <div class="w-16 lg:w-20 h-1 bg-gradient-to-r from-mauve to-foreground rounded-full mt-2"></div>
      </div>
    </div>

    <div class="relative">
      <div
        class="absolute left-3 lg:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mauve via-foreground to-mauve opacity-50">
      </div>

      <div class="space-y-8 lg:space-y-12">
        <div v-for="(experience, index) in aboutExperience" :key="index"
          class="relative">

          <div
            class="absolute left-2 lg:left-4 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-br from-mauve to-foreground rounded-full border-2 lg:border-4 border-background">
            <div
              class="absolute inset-0 bg-gradient-to-br from-mauve to-foreground rounded-full animate-ping opacity-20">
            </div>
          </div>

          <div class="ml-8 lg:ml-16">
            <div
              class="bg-gradient-to-br dark:from-darkblue/40 dark:to-midnightBlue/40 from-white/80 to-gray-50/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300">

              <div class="flex flex-col gap-3 lg:gap-4 mb-4 lg:mb-6">
                <div class="flex items-start gap-3 lg:gap-4">
                  <div class="relative group flex-shrink-0">
                    <div
                      class="absolute -inset-0.5 lg:-inset-1 bg-gradient-to-r from-mauve to-foreground rounded-xl lg:rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity">
                    </div>
                    <div
                      class="relative bg-gradient-to-b dark:from-[#413075] dark:to-[#181818] from-purple-100 to-purple-50 rounded-xl lg:rounded-2xl p-2 lg:p-3 border border-mauve/30">
                      <img class="w-8 h-8 lg:w-12 lg:h-12 object-cover rounded-lg lg:rounded-xl"
                        :src="getCompanyLogo(experience.organization.title)"
                        :alt="`Logo ${t(experience.organization.title)}`">
                    </div>
                  </div>

                  <div class="flex-1 min-w-0">
                    <h3>{{ t(experience.organization.title) }}</h3>
                    <h4
                      class="bg-gradient-to-r from-mauve to-foreground bg-clip-text text-transparent">
                      {{ t(experience.organization.subTitle) }}
                    </h4>
                  </div>
                </div>

                <div class="self-start">
                  <div
                    class="bg-mauve/20 text-mauve px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-sm font-semibold border border-mauve/30">
                    {{ t(experience.organization.time) }}
                  </div>
                </div>
              </div>

              <div class="space-y-4 lg:space-y-6">
                <div v-for="(subExperience, subIdx) in experience.organization.list" :key="subIdx"
                  class="flex gap-3 lg:gap-4 group">

                  <div class="relative flex-shrink-0 mt-1">
                    <div
                      class="w-2 h-2 lg:w-3 lg:h-3 bg-gradient-to-br from-mauve to-foreground rounded-full group-hover:scale-125 transition-transform duration-200">
                    </div>
                    <div
                      class="absolute inset-0 bg-gradient-to-br from-mauve to-foreground rounded-full animate-pulse opacity-20">
                    </div>
                  </div>

                  <div class="flex-1 space-y-2 lg:space-y-3">
                    <p>{{ t(subExperience.parag) }}</p>

                    <div class="space-y-2">
                      <span class="dark:text-gray-400 text-gray-600 text-xs lg:text-sm">{{ t(subExperience.usedTechnos) }}</span>
                      <div class="flex flex-wrap gap-1.5 lg:gap-2">
                        <span v-for="techno in t(subExperience.technos).split(',')" :key="techno.trim()"
                          class="px-2 py-1 text-xs bg-mauve/20 text-mauve rounded-md border border-mauve/30">
                          {{ techno.trim() }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { aboutExperience } from '~/constants/about';

const { t } = useI18n()

const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/about/${name}.vue`).catch(() => null),
  );
};

const getCompanyLogo = (titleKey: string): string => {
  const logoMap: Record<string, string> = {
    'about.experience.maanos.title': '/assets/img/maanos.jpg',
    'about.experience.flippad.title': '/assets/img/jewely.jpg',
  };
  return logoMap[titleKey] || '/assets/img/default.jpg';
};
</script>

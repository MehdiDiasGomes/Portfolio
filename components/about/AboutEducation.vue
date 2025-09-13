<template>
  <div class="animate-fade-up animate-duration-700 animate-delay-700">
    <div class="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
      <div class="relative">
        <component class="w-8 h-8 lg:w-12 lg:h-12 text-mauve drop-shadow-lg" :is="loadIconComponent('Education')" />
        <div class="absolute -inset-1 lg:-inset-2 bg-mauve/20 rounded-full blur-lg"></div>
      </div>
      <div class="flex-1">
        <h2 class="text-white text-xl lg:text-2xl font-bold tracking-tight">{{ t('about.education.title') }}</h2>
        <div class="w-16 lg:w-20 h-1 bg-gradient-to-r from-mauve to-foreground rounded-full mt-2"></div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
      <div v-for="(content, index) in education" :key="index" 
           class="relative group animate-fade-up animate-duration-500"
           :style="{ animationDelay: `${800 + index * 150}ms` }">
        
        <div class="relative bg-gradient-to-br from-darkblue/40 to-midnightBlue/40 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-mauve/20 shadow-lg hover:shadow-mauve/20 transition-all duration-300 hover:scale-[1.01] lg:hover:scale-105 hover:border-mauve/40 h-full">
          
          <div class="absolute -inset-0.5 lg:-inset-1 bg-gradient-to-r from-mauve/0 via-foreground/10 to-mauve/0 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
          
          <div class="relative h-full flex flex-col">
            <div class="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-6">
              <div class="relative flex-shrink-0">
                <div class="absolute -inset-0.5 lg:-inset-1 bg-gradient-to-r from-mauve to-foreground rounded-xl lg:rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <div class="relative bg-gradient-to-b from-[#413075] to-[#181818] rounded-xl lg:rounded-2xl p-2 lg:p-3 border border-mauve/30">
                  <component class="w-8 h-8 lg:w-12 lg:h-12 object-cover rounded-lg lg:rounded-xl" :is="loadIconComponent(content.icon)" />
                </div>
              </div>
              
              <div class="flex-1 min-w-0">
                <h3 class="text-white text-base lg:text-lg font-bold leading-tight mb-1 lg:mb-2">{{ t(content.title) }}</h3>
                <p class="text-mauve font-medium text-sm lg:text-sm mb-2">{{ t(content.subTitle) }}</p>
                
                <div class="inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                  <div class="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></div>
                  {{ t('about.education.graduated') }}
                </div>
              </div>
            </div>
            
            <div class="flex-1 mb-4">
              <p class="text-gray-300 leading-relaxed text-sm lg:text-base">{{ t(content.parag) }}</p>
            </div>
            
            <div class="pt-3 lg:pt-4 border-t border-mauve/20">
              <div class="flex items-center gap-2 mb-2 lg:mb-3">
                <div class="w-1.5 h-1.5 bg-gradient-to-r from-mauve to-foreground rounded-full"></div>
                <span class="text-mauve text-xs lg:text-sm font-medium">{{ t('about.education.keySkills') }}</span>
              </div>
              
              <div class="flex flex-wrap gap-1.5 lg:gap-2">
                <span class="px-2 py-1 bg-mauve/20 text-mauve text-xs rounded-md border border-mauve/30">
                  {{ t('about.education.webDevelopment') }}
                </span>
                <span class="px-2 py-1 text-xs bg-mauve/20 text-mauve rounded-md border border-mauve/30">
                  {{ t('about.education.algorithms') }}
                </span>
                <span class="px-2 py-1 bg-mauve/20 text-mauve text-xs rounded-md border border-mauve/30">
                  {{ t('about.education.databases') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { education } from '~/constants/about';

const { t } = useI18n();
const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/about/${name}.vue`).catch(() => null),
  );
};
</script>

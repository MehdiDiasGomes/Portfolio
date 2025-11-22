<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="ghost" class="w-full h-full p-0 rounded-full hover:bg-transparent">
        <div class="w-6 h-6 text-mauve">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </Button>
    </SheetTrigger>
    
    <SheetContent class="bg-gradient-to-br from-darkblue/95 to-midnightBlue/95 backdrop-blur-xl border-l border-mauve/20 w-full sm:max-w-2xl overflow-y-auto">
      <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 pointer-events-none"></div>
      
      <div class="relative">
        <SheetHeader class="pb-8 text-center">
          <div class="flex justify-center mb-6">
            <div class="relative">
              <div class="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center border border-orange-500/30 animate-pulse">
                <div class="text-4xl">🚧</div>
              </div>
              <div class="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl blur opacity-50"></div>
            </div>
          </div>
          
          <SheetTitle class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
            {{ t("projects.inDevelopment.title") }}
          </SheetTitle>
          <p class="text-orange-400 font-medium">{{ t("projects.inDevelopment.subtitle") }}</p>
        </SheetHeader>

        <div class="space-y-8">
          <div class="text-center py-8">
            <div class="relative inline-block mb-8">
              <div class="text-8xl animate-bounce animate-infinite animate-duration-[3000ms]">👨‍💻</div>
              <div class="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-xl animate-pulse"></div>
            </div>
            
            <div class="space-y-6 max-w-md mx-auto">
              <div class="bg-gradient-to-br from-darkblue/40 to-midnightBlue/40 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20">
                <p class="text-gray-300 leading-relaxed text-center">
                  {{ t("projects.inDevelopment.message") }}
                </p>
              </div>

              <div class="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30">
                <div class="flex items-center justify-center gap-3 mb-4">
                  <div class="w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                  <h3 class="text-white font-semibold">Statut du projet</h3>
                  <div class="w-3 h-3 bg-amber-400 rounded-full animate-ping" style="animation-delay: 0.5s"></div>
                </div>
                <p class="text-orange-300 font-medium text-center">
                  {{ t("projects.inDevelopment.comingSoon") }}
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-darkblue/40 to-midnightBlue/40 backdrop-blur-sm rounded-2xl p-6 border border-mauve/20">
            <h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              En cours de développement
            </h4>
            
            <div class="space-y-4">
              <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-gray-300 text-sm">Conception et planification</span>
                <div class="ml-auto px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">✓</div>
              </div>
              
              <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-lg border border-orange-500/20">
                <div class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span class="text-gray-300 text-sm">Développement en cours</span>
                <div class="ml-auto px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">⏳</div>
              </div>
              
              <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-500/10 to-slate-500/10 rounded-lg border border-gray-500/20">
                <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span class="text-gray-400 text-sm">Tests et optimisation</span>
                <div class="ml-auto px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">📋</div>
              </div>
              
              <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-500/10 to-slate-500/10 rounded-lg border border-gray-500/20">
                <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span class="text-gray-400 text-sm">Mise en production</span>
                <div class="ml-auto px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">🚀</div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-mauve/20 to-foreground/20 rounded-full border border-mauve/30">
              <div class="flex gap-1">
                <div class="w-2 h-2 bg-mauve rounded-full animate-pulse"></div>
                <div class="w-2 h-2 bg-foreground rounded-full animate-pulse" style="animation-delay: 0.3s"></div>
                <div class="w-2 h-2 bg-mauve rounded-full animate-pulse" style="animation-delay: 0.6s"></div>
              </div>
              <span class="text-gray-300 text-sm font-medium">Restez connecté pour les mises à jour</span>
            </div>
          </div>
        </div>

        <div class="border-t border-orange-500/20 pt-6 mt-8">
          <SheetFooter>
            <SheetClose as-child>
              <Button :content="t('common.close')" variant="secondary" class="w-full" />
            </SheetClose>
          </SheetFooter>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import Button from "@/components/common/Button.vue";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

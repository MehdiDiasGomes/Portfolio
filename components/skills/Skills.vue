<template>
  <div>
    <Sheet>
      <SheetTrigger as-child>
        <div class="w-full flex justify-center">
          <div
            class="relative w-[450px] cursor-pointer group h-[250px] bg-gradient-to-br from-[#04071D] to-[#0C0E23] rounded-2xl shadow-lg overflow-hidden group p-6 m-6 md:m-0 flex items-center"
          >
            <div class="text-white w-32 z-10 relative">
              <p class="text-xl font-bold">{{ t("skills.title") }}</p>
            </div>

            <div
              class="absolute opacity-40 group-hover:opacity-100 duration-200 ease-in-out right-0 bottom-0 w-3/5 h-full overflow-hidden"
            >
              <div
                class="grid grid-cols-2 gap-2 absolute transition-transform duration-500 group-hover:-translate-y-32 px-4 -top-5"
              >
                <span
                  v-for="(tech, index) in techStack"
                  :key="index"
                  :class="[
                    'bg-[#10132E] text-white text-xs font-bold rounded-md shadow flex items-center justify-center px-10 py-6',
                    index % 2 === 1 ? 'mt-1' : '',
                  ]"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent
        class="bg-[#000319] border-l overflow-y-scroll border-borderPerso w-full sm:w-7/12"
      >
        <SheetHeader>
          <SheetTitle class="text-white text-2xl font-bold">
            ✨ {{ t("skills.title") }} ✨
          </SheetTitle>
          <SheetDescription class="text-secondary">
            {{ t("skills.subtitle") }}
          </SheetDescription>
        </SheetHeader>

        <div class="py-6 space-y-8">
          <!-- Frontend Skills -->
          <div class="space-y-4">
            <h3 class="text-primaryPerso text-xl font-bold mb-3 flex items-center gap-2">
              <span class="text-xl">🖥️</span> {{ t("skills.frontend.title") }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="(tech, index) in frontendSkills"
                :key="index"
                class="flex select-none items-center gap-2 bg-[#0A0C20] px-3 py-2 rounded-lg hover:bg-[#12152D] transition-colors border border-[#1A1D33]"
              >
                <component :is="loadIconComponent(tech.name)" class="w-5 h-5 text-primaryPerso" />
                <span class="text-white text-sm">{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="space-y-4">
            <h3 class="text-primaryPerso text-xl font-bold mb-3 flex items-center gap-2">
              <span class="text-xl">⚙️</span> {{ t("skills.backend.title") }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="(tech, index) in backendSkills"
                :key="index"
                class="flex select-none items-center gap-2 bg-[#0A0C20] px-3 py-2 rounded-lg hover:bg-[#12152D] transition-colors border border-[#1A1D33]"
              >
                <component :is="loadIconComponent(tech.name)" class="w-5 h-5 text-primaryPerso" />
                <span class="text-white text-sm">{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <!-- Database Skills -->
          <div class="space-y-4">
            <h3 class="text-primaryPerso text-xl font-bold mb-3 flex items-center gap-2">
              <span class="text-xl">🗄️</span> {{ t("skills.database.title") }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="(tech, index) in databaseSkills"
                :key="index"
                class="flex select-none items-center gap-2 bg-[#0A0C20] px-3 py-2 rounded-lg hover:bg-[#12152D] transition-colors border border-[#1A1D33]"
              >
                <component :is="loadIconComponent(tech.name)" class="w-5 h-5 text-primaryPerso" />
                <span class="text-white text-sm">{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <!-- Tools & Others -->
          <div class="space-y-4">
            <h3 class="text-primaryPerso text-xl font-bold mb-3 flex items-center gap-2">
              <span class="text-xl">🛠️</span> {{ t("skills.tools.title") }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="(tech, index) in toolsSkills"
                :key="index"
                class="flex select-none items-center gap-2 bg-[#0A0C20] px-3 py-2 rounded-lg hover:bg-[#12152D] transition-colors border border-[#1A1D33]"
              >
                <component :is="loadIconComponent(tech.name)" class="w-5 h-5 text-primaryPerso" />
                <span class="text-white text-sm">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-[#1A1D33] pt-4 mt-4">
          <SheetFooter>
            <SheetClose as-child>
              <Button
                class="border border-borderPerso hover:bg-gray-700 rounded-xl transition hover:scale-105"
              >
                {{ t("common.close") }}
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Button } from "@/components/ui/button";
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
import {
  backendSkills,
  databaseSkills,
  frontendSkills,
  techStack,
  toolsSkills,
} from "~/constants/skills";

const { t } = useI18n();

const loadIconComponent = (name: string) => {
  return defineAsyncComponent(() =>
    import(`~/components/icons/projects/${name}.vue`).catch(() => null),
  );
};
</script>

<style scoped>
.group:hover .tech-slide {
  transform: translateY(-100px);
}
</style>

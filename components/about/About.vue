<template>
  <div class="relative py-32 md:py-40 min-h-screen flex items-center">
    <Decoration class="opacity-100 absolute inset-0 h-full w-full" />
    <div
      class="container mx-auto px-4 relative z-10 animate-fade-up animate-once animate-duration-1000 animate-ease-in"
    >
      <div class="max-w-3xl mx-auto">
        <!-- Heading -->
        <h2
          class="text-white font-extrabold leading-tight text-3xl md:text-4xl mb-8 text-center animate-fade-right animate-once animate-delay-300"
        >
          {{ t("about.title") }}
          <span class="text-primaryPerso">{{ t("about.span_title") }}</span>
        </h2>

        <div
          class="bg-[#04071D]/50 backdrop-blur-sm rounded-2xl border border-[#1A1D33] p-6 shadow-xl"
        >
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <!-- Photo Section (now smaller and on the left) -->
            <div class="shrink-0">
              <div class="relative group">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-primaryPerso to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"
                ></div>
                <div class="relative">
                  <img
                    class="w-28 h-28 object-cover rounded-full"
                    src="~/assets/img/Avatar.jpg"
                    alt="Photo de profil"
                  />
                </div>
              </div>
            </div>

            <!-- Content Section -->
            <div class="flex-1">
              <div
                class="space-y-4 text-secondary animate-fade-right animate-once animate-delay-500"
              >
                <p class="leading-relaxed">
                  {{ t("about.introduction") }}
                </p>
                <p class="leading-relaxed">
                  {{ t("about.journey") }}
                </p>
              </div>
            </div>
          </div>

          <!-- Additional paragraph -->
          <div class="mt-6 text-secondary animate-fade-right animate-once animate-delay-600">
            <p class="leading-relaxed">
              {{ t("about.passion") }}
            </p>
          </div>

          <!-- Personal Facts Section -->
          <div class="mt-8 animate-fade animate-once animate-delay-700">
            <h3 class="text-white font-bold text-xl mb-4 flex items-center">
              <span class="text-primaryPerso mr-2">✦</span>
              {{ t("about.personal.title") }}
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="(fact, index) in personalFacts"
                :key="index"
                class="flex items-center gap-3 bg-[#0A0C20]/60 rounded-lg p-3 border border-[#1A1D33]/50 hover:border-primaryPerso/30 transition-colors duration-300"
              >
                <div
                  class="w-9 h-9 flex items-center justify-center bg-[#12152D] rounded-full text-primaryPerso"
                >
                  <span>{{ fact.icon }}</span>
                </div>
                <div>
                  <span class="text-white font-medium block">{{ t(fact.label) }}</span>
                  <span class="text-secondary text-sm">{{ t(fact.value) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div
            class="mt-8 pt-4 border-t border-[#1A1D33]/50 animate-fade-up animate-once animate-delay-1000"
          >
            <h3 class="text-white font-bold text-xl mb-4 flex items-center">
              <span class="text-primaryPerso mr-2">✦</span>
              {{ t("about.social.title") }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 bg-[#0A0C20] px-4 py-2.5 rounded-lg hover:bg-[#12152D] transition-all border border-[#1A1D33] text-white hover:scale-105 hover:border-primaryPerso/50"
              >
                <span class="text-primaryPerso">{{ social.icon }}</span>
                {{ social.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const personalFacts = [
  {
    icon: "📍",
    label: "about.personal.location.label",
    value: "about.personal.location.value",
  },
  {
    icon: "🎓",
    label: "about.personal.education.label",
    value: "about.personal.education.value",
  },
  {
    icon: "💼",
    label: "about.personal.experience.label",
    value: "about.personal.experience.value",
  },
  {
    icon: "🌐",
    label: "about.personal.languages.label",
    value: "about.personal.languages.value",
  },
];

const socials = [
  { name: "GitHub", icon: "📁", link: "https://github.com/mehdidiasgomes" },
  { name: "LinkedIn", icon: "💼", link: "https://www.linkedin.com/in/mehdi-dias-gomes-94541a31a/" },
  { name: "Twitter", icon: "🐦", link: "https://x.com/mehdidgdev?s=21&t=82fBKMcEgjNyA5A8oFTGzA" },
  { name: "Email", icon: "📧", link: "mailto:diasgomes.dev@gmail.com" },
];
</script>

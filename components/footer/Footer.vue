<template>
  <footer class="bg-background/5 bottom-0 w-full text-white py-8 mt-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <img class="w-14" src="~/public/defaultIcon.png" alt="" />
        </div>

        <div class="flex space-x-6">
          <a
            href="https://github.com/MehdiDiasGomes"
            target="_blank"
            rel="noopener"
            class="hover:text-primaryPerso transition-colors"
          >
            <Icon name="Github" :size="24" />
          </a>
          <a
            href="https://www.linkedin.com/in/mehdi-dias-gomes-94541a31a/"
            target="_blank"
            rel="noopener"
            class="hover:text-primaryPerso transition-colors"
          >
            <Icon name="Linkedin" :size="24" />
          </a>
          <a
            href="mailto:diasgomes.dev@gmail.com"
            class="hover:text-primaryPerso transition-colors"
          >
            <Icon name="Mail" :size="24" />
          </a>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
        <p>© {{ new Date().getFullYear() }} - Tous droits réservés</p>
        <NuxtLink :to="`/${locale}/privacy`">Politique de confidentialité</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

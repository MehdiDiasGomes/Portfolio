// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  plugins:[
          {src: '~/plugins/vue-recaptcha-v3.ts', mode: 'client' },
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "shadcn-nuxt",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
  ],
  i18n: {
    locales: [
      {
        name: "Français",
        code: "fr",
        language: "fr-FR",
        file: "fr.json",
      },
      {
        name: "English",
        code: "en",
        language: "en-US",
        file: "en.json",
      },
    ],
    lazy: true,
    defaultLocale: "fr",
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.yaml',
      },
      {
        code: 'fr',
        iso: 'fr',
        name: 'French',
        file: 'fr.yaml',
      },
      {
        code: 'ur',
        iso: 'ur',
        name: 'اردو',
        file: 'ur.yaml',
        dir: 'rtl',
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
  },
});

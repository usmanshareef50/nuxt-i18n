// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxt/devtools'  ],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: '🇺🇸 English',
        file: 'en.yaml',
      },
      {
        code: 'fr',
        iso: 'fr',
        name: '🇫🇷 French',
        file: 'fr.yaml',
      },
      {
        code: 'ur',
        iso: 'ur',
        name: '🇵🇰 اردو',
        file: 'ur.yaml',
        dir: 'rtl',
      },
    ],
    lazy: true,
    langDir: 'lang',
    strategy: 'no_prefix', 
    defaultLocale: 'en',
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root',  // recommended
    // }

  
  },
});

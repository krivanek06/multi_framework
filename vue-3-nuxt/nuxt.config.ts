// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/styles.scss'],
  ssr: true,
  components: true,
  devtools: {
    enabled: true
  },
  // typescript: {
  //   strict: true,
  //   typeCheck: true
  // },
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/devtools',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ]
  ]
});

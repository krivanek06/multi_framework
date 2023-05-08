// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/styles.scss'],
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ]
  ]
})

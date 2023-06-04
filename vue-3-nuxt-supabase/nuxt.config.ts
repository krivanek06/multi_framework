// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/styles.scss'],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "@/assets/scss/styles.scss";'
  //       }
  //     }
  //   }
  // },
  // turning SSR on will cause 'storage: persistedState.localStorage' to fail
  ssr: true,
  components: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  imports: {
    dirs: ['stores', 'composable', 'models']
  },
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
    ],
    //  '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/supabase'
  ]
});

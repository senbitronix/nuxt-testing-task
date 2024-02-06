// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  modules: ['@pinia/nuxt'],

  css: ['@/assets/css/global.scss'],
  app: {
    head: {
      title: 'Rick & Morty',
      meta: [{ name: 'description', content: 'cartoon about adventures' }]
    }
  }
})

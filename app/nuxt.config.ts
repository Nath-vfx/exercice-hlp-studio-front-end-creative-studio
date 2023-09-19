// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      apiJwt: process.env.API_JWT,
    }
  },
  css: ['@/assets/scss/main.scss']
})

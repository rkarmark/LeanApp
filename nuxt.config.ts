// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/hanko"],

  hanko: {
    apiURL: process.env.NUXT_PUBLIC_HANKO_API_URL,
    cookieName: 'hanko',
    redirects: {
         login: '/',
         success: '/dashboard',
         home: '/dashboard',
         followRedirect: true
       },
  
  },
})
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  // from line 5 to 10 is the code https://tailwindcss.com/docs/guides/nuxtjs#:~:text=true%20%7D%2C-,postcss%3A%20%7B,%7D%2C,-%7D)
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules:['@pinia/nuxt']
})




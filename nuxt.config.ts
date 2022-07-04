import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  },
  modules: [
    '@nuxt/content',
    '@intlify/nuxt3',
  ],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'ja',
    }
  }
})

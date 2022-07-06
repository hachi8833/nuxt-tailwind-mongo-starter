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
      fallbackLocale: [ 'ja', 'en' ],
    }
  },
  app:{
    head: {
      title: "アットグローバル | 多言語コンサル・プロモーションサポート: カタログ翻訳からハード・ソフトウェアマニュアル翻訳まで様々な分野の技術翻訳に対応します",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  }
})

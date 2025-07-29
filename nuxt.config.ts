// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@vueuse/nuxt'
  ],
  future: {
    compatibilityVersion: 4
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: '%s | Furry Argentina VR',
      title: '-',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        }
      ]
    }
  },
  ui: { colorMode: false },
  fonts:  {
    defaults: {
      weights: [400, 700, 900]
    }
  },
  content: {
    database: {
      type: 'libsql',
      url: process.env.NUXT_REMOTE_DB_ORIGIN,
      authToken: process.env.NUXT_REMOTE_DB_TOKEN
    }
  },
  runtimeConfig: {
    remote: {
      landing: {
        csm: {
          origin: '',
          token: ''
        }
      }
    }
  }
})
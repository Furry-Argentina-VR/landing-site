// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/mdc'
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
  image: {
    domains: ['cdn.furryvr.ar']
  },
  fonts:  {
    defaults: {
      weights: [400, 700, 900]
    }
  },
  runtimeConfig: {
    cms: {
      org: '',
      repo: '',
      token: ''
    }
  },
  vite: {
    optimizeDeps: {
      include: ["debug"],
    },
  }
})
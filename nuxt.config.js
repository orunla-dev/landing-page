export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  loading: '~/components/AppLoading.vue',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Orunla Africa',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Level up your reading skills and unlock rewards as you progress. Read books online and join reading communities',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', name: 'og:title', content: 'Orunla Africa' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Level up your reading skills and unlock rewards as you progress. Read books online and join reading communities',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://res.cloudinary.com/orunla/image/upload/v1679113100/Orunla/fqypmi0ecroup7miero4.jpg',
      },
      { hid: 'og:url', name: 'og:url', content: 'https://orunla.ng' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Orunla Africa' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnet', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400&family=Inter:wght@900&display=swap',
      },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-L240M3DEG4',
        async: true,
      },
      {
        src: 'js/ga.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },
}

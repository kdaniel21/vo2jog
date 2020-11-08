export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'racircuit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    staticUrl: 'http://127.0.0.1:4000',
    baseUrl: 'http://127.0.0.1:4000/api/v1',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.scss', 'vue-select/dist/vue-select.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-sidebar-bootstrap.js',
    '~/plugins/axios.js',
    '~/plugins/vue-select.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/style-resources',
    '@nuxtjs/date-fns',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://127.0.0.1:4000/api/v1',
  },

  // @nuxtjs/auth module configuration
  auth: {
    strategies: {
      'local-organizer': {
        scheme: 'refresh',
        token: {
          property: 'accessToken',
          maxAge: 840, // 14 minutes
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30,
        },
        user: {
          property: 'profile',
        },
        endpoints: {
          login: { url: '/organizers/login', method: 'post' },
          refresh: { url: '/organizers/refresh', method: 'post' },
          user: { url: '/profile', method: 'get' },
          logout: { url: '/organizers/logout', method: 'post' },
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Fontawesome module configuration
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
    },
  },
};

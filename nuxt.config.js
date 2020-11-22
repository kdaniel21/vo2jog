export default {
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

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
    hereApiKey: 'BFTP7HQsgOf6mW8rMA9K8JWY6qf7VJtUxGW1ZxfzbNE',
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
    // '@nuxtjs/proxy',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    withCredentials: false,
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:4000/api/v1/',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
    '/here-api/': {
      target: 'https://geocode.search.hereapi.com/v1/geocode',
      pathRewrite: { '^/here-api/': '' },
      changeOrigin: true,
    },
  },

  // @nuxtjs/auth module configuration
  auth: {
    redirect: {
      login: '/organizers/login',
    },
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
          login: { url: '/api/organizers/login', method: 'post' },
          refresh: { url: '/api/organizers/refresh', method: 'post' },
          user: { url: '/api/profile', method: 'get' },
          logout: { url: '/api/organizers/logout', method: 'post' },
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
      brands: true,
    },
  },
};

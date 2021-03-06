export default {
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  compilerOptions: {
    types: ['@nuxt/types', 'nuxt-i18n'],
  },

  loaders: {
    vue: {
      compilerOptions: {
        preserveWhitespace: false,
      },
    },
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'vo2jog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    staticUrl: 'https://vo2jog.herokuapp.com',
    baseUrl: 'https://vo2jog.herokuapp.com/api/v1',
    hereApiKey: 'BFTP7HQsgOf6mW8rMA9K8JWY6qf7VJtUxGW1ZxfzbNE',
    mapboxAccessToken:
      'pk.eyJ1Ijoia2RhbmllbDIxIiwiYSI6ImNraGN4ODByazAwYzAzMHMwbDBxeWExd3UifQ.dVIo1mUh3QnDc0jz1YFLoA',
    tinyApiKey: '19gmvey4ohplaafobgl7ffi8vywpfjpb1hw8knyv97ow7yhj',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vuelidate/vuelidate.js',
    '~/plugins/mapbox.client.js',
    '~/plugins/observe-visibility',
    '~/plugins/toast',
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
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-i18n',
    'cookie-universal-nuxt',
    // '@nuxtjs/proxy',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    withCredentials: false,
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'http://vo2jog.herokuapp.com/api/v1/',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
    '/here-api/': {
      target: 'https://geocode.search.hereapi.com/v1/geocode',
      pathRewrite: { '^/here-api/': '' },
      changeOrigin: true,
    },
    '/mapbox-api/': {
      target: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
      pathRewrite: { '^/mapbox-api/': '' },
      changeOrigin: true,
    },
  },

  // @nuxtjs/auth module configuration
  auth: {
    redirect: {
      login: '/organizers/login',
      home: '/organizers/dashboard',
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
          login: { url: '/api/auth/login', method: 'post' },
          refresh: { url: '/api/auth/refresh', method: 'post' },
          user: { url: '/api/profile', method: 'get' },
          logout: { url: '/api/auth/logout', method: 'post' },
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    parseQuery: q => require('qs').parse(q),
    stringifyQuery: q => {
      if (!Object.keys(q).length) return '/';

      const queryString = require('qs').stringify(q, {
        skipNulls: true,
        encode: false,
      });
      return `?${queryString}`;
    },
  },

  loading: '~/components/main/TheLoadingIndicator',

  // Fontawesome module configuration
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
    },
  },

  buefy: {
    defaultIconPack: 'fa',
    defaultIconComponent: 'fa',
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', localName: 'English' },
      { code: 'hu', iso: 'hu-HU', file: 'hu.json', localName: 'Magyar' },
    ],
    lazy: true,
    defaultLocale: 'en',
    strategy: 'no_prefix',
    langDir: 'locales/',
    detectBrowserLanguage: { fallbackLocale: 'en' },
  },
};

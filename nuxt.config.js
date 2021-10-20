import colors from 'vuetify/es5/util/colors'
const client = require('./plugins/contentful').default

require("dotenv").config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/vuetify',
    'plugins/contentful',
    'plugins/components'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
  ],

  markdownit: {
    injected: true,
    html: true,
    linkify: true,
    typography: true,
  },

  //動的ルーターのパラメータを設定
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        }),
        client.getEntries({
          content_type: 'category'
        }),
        client.getEntries({
          content_type: 'tag'
        })
      ]).then(([posts, categories, tags]) => {
        return [
          ...posts.items.map((post) => {
            return { route: `posts/${post.fields.slug}`, payload: post }
          }),
          ...categories.items.map((category) => {
            return { route: `categories/${category.fields.slug}`, payload: category }
          }),
          ...tags.items.map((tag) => {
            return { route: `tags/${tag.fields.slug}`, payload: tag }
          })
        ]
      })
    }
  },

  router: {
    middleware: [
      'getContentful'
    ]
  },

  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    // twitter
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',	  // 追記
    SITE_NAME: process.env.SITE_NAME,
    TWITTER_ACCOUNT: process.env.TWITTER_ACCOUNT,
  },

  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          twitter: '#55acee',
          facebook: '#3b5998',
          background: colors.grey.lighten5,
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib'],	// 追記
    extend(config, ctx) {}
  }
}

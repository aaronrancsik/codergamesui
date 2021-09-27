import path from 'path'
import ncp from 'ncp'
import colors from 'vuetify/es5/util/colors'

const addToStatic = (from, to = '.') => {
  const staticPath = path.resolve(path.join(__dirname, 'static'))
  ncp(from, path.join(staticPath, to))
}

const populateStatic = () => {
  addToStatic(path.join(__dirname, 'node_modules/blockly/media'), 'media')
  addToStatic(path.join(__dirname, 'static_cont'))
}

export default {
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ],
  },
  css: [],
  plugins: [
    '~plugins/blockly.js',
    { src: 'node_modules/nuxtjs-phaser', mode: 'client' },
  ],
  components: {
    dirs:[
      './components',
      './components/Games',
      './components/Games/Dash'
    ]
  },

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  modules: [
    [
      'nuxt-i18n',
      {
        lazy: true,
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
          },
          {
            code: 'hu',
            iso: 'hu-HU',
            file: 'hu-HU.js',
          },
        ],
        defaultLocale: 'hu',
        langDir: 'lang/',
      },
    ],
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true,
      },
      dark: true,
      themes: {
        dark: {
          primary: colors.yellow.accent2,
          accent: colors.grey,
          secondary: colors.amber.darken2,
          info: colors.cyan,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: colors.grey.darken3,
          cards: colors.grey.darken4,
        },
        light: {
          // background: '#d0f0c0',
        },
      },
    },
    defaultAssets: {
      family: true,
      icons: 'md',
    },
    icons: {
      iconfont: 'md',
    },
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = 'eval-source-map'
      }
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  },
  env: {
    baseUrl: process.env.BASE_URL,
  },
  hooks: {
    build: {
      before(builder) {
        populateStatic()
      },
    },
    generate: {
      before(generator) {
        populateStatic()
      },
    },
  },
}

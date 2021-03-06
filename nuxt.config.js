const pkg = require("./package")

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === "SZ_PAGES"
    ? {
        router: {
          base: "/adobe/"
        }
      }
    : {}

module.exports = {
  mode: "spa",

  /*
  ** Router base
  */
  ...routerBase,

  /*
  ** Headers of the page
  */
  head: {
    title: "Schrift bewegt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Ein interaktives Erlebnis über Schriftarten und ihre Wirkung."
      },
      {
        property: "og:title",
        content: "Schrift bewegt: Wie uns Typografie emotional beeinflusst."
      },
      {
        property: "og:description",
        content: "Ein interaktives Erlebnis über Schriftarten und ihre Wirkung."
      },
      {
        property: "og:url",
        content: "https://advertorial.sueddeutsche.de/adobe"
      },
      {
        property: "og:image",
        content: "https://snpk-sz-adobe.now.sh/adobe-sz-og.jpg"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.typekit.net/qji8zia.css" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#FFFFFF" },

  /*
  ** Global CSS
  */
  css: ["@/assets/scss/global.scss"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/vue-check-view", ssr: false },
    { src: "~/plugins/vue-affix", ssr: false },
    { src: "~/plugins/vue-social-sharing", ssr: true },
    { src: "~/plugins/vue-scrollto", ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      plugins: {
        "postcss-normalize": {}
      }
    },
    extend(config, ctx) {
      config.module.rules
        .filter(r => r.test.toString().includes("svg"))
        .forEach(r => {
          r.test = /images\/.*\.(png|jpe?g|gif|svg)$/
        })
      config.module.rules.push({
        test: /icons\/.*\.svg$/,
        loader: "vue-svg-loader",
        options: {
          // optional [svgo](https://github.com/svg/svgo) options
          svgo: {
            plugins: [
              { removeDoctype: true },
              { removeComments: true },
              { removeViewBox: false },
              { removeTitle: true }
            ]
          }
        }
      })
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: "pre",
      //     test: /\.(js|vue)$/,
      //     loader: "eslint-loader",
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}

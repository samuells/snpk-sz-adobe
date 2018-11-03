import postcssNormalize from "postcss-normalize"

const pkg = require("./package")

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
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
  plugins: [],

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
    postcss: [postcssNormalize()],
    extend(config, ctx) {
      config.module.rules
        .filter(r => r.test.toString().includes("svg"))
        .forEach(r => {
          r.test = /\.(png|jpe?g|gif)$/
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
      config.module.rules.push({
        test: /images\/.*\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      })
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}

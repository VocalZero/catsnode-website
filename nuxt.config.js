require("dotenv").config()

export default {
  head: {
    title: "catsno.de",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A test environment from us, which you and your friends can also use to keep up to date with what the radio scene has to offer! 📡"
      },
      {
        hid: "robots",
        name: "robots",
        content: "INDEX,FOLLOW"
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#1673E8"
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary"
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: "A test environment from us, which you and your friends can also use to keep up to date with what the radio scene has to offer! 📡"
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: ""
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "CATSNODE"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "CATSNODE"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "A test environment from us, which you and your friends can also use to keep up to date with what the radio scene has to offer! 📡"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss", "@nuxtjs/dotenv"],
  modules: ["@nuxtjs/axios"],
  axios: {},
  build: {
    filenames: {
      img: "images/[name].[ext]",
      font: "fonts/[name].[ext]",
      video: "videos/[name].[ext]"
    }
  }
}

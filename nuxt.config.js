export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        // src: 'https://aframe.io/releases/1.0.4/aframe.min.js'
        src: "https://aframe.io/releases/1.1.0/aframe.min.js"
      },
      {
        src:
          "https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.0/dist/aframe-extras.min.js"
      },
      {
        src:
          "https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js"
      },
      {
        src:
          "https://cdn.rawgit.com/donmccurdy/aframe-physics-system/v4.0.1/dist/aframe-physics-system.min.js"
      }

      // {
      //   scr: 'js/button.js'
      // }, {
      //   scr: 'js/color-change.js'
      // }, {
      //   scr: 'js/event-manager.js'
      // }, {
      //   scr: 'js/menu.js'
      // }, {
      //   scr: 'js/pinchable.js'
      // }, {

      //   scr: 'js/pressable.js'
      // }, {
      //   scr: 'js/size-change.js'
      // }, {
      //   scr: 'js/slider.js'
      // }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  vue: {
    config: {
      productionTip: true,
      devtools: false,
      ignoredElements: [
        "a-scene",
        "a-entity",
        "a-camera",
        "a-sky",
        "a-cylinder",
        "a-box",
        "a-text",
        "a-sound",
        "a-asset-item",
        "a-assets",
        "a-dodecahedron",
        "a-tetrahedron",
        "a-icosahedron",
        "a-octahedron",
        "a-sphere",
        "a-torus",
        "a-cursor"
      ]
    }
  }
  // Force the live preview to work on the local IP of the machine
  // This is not usefor for WebXR projecte because these need to be served of HTTPS
  // server: {
  //   host: '0.0.0.0'
  // }
};

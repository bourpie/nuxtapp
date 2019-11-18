
export default {
  mode: 'universal',
  router: {
    linkExactActiveClass: 'is-active'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
 css: [
 /* 'bootstrap-css-only/css/bootstrap.min.css',
  'mdbvue/lib/css/mdb.min.css'*/
],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/Vuelidate'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */

 
  modules: [

    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/bulma',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
 build: {
  extend(config, ctx) {
    config.module.rules.push({
      enforce : 'pre',
      test    : /\.(js|vue)$/,
      loader  : 'eslint-loader',
      exclude : /(node_modules)/,
      options : {
          fix : true
      }
    });
  },
  transpile: [
    'mdbvue/lib/components'
  ]
}
}

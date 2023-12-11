// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 /*  ssr: false, */
  devtools: { enabled: true },
  app: {
    baseURL: '/daniel/',
    buildAssetsDir: 'assets'
  },
  components: true,

  css:
  ['normalize.css/normalize.css',
    '@/assets/css/tailwind.css',
    '@/assets/scss/global.scss',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules:
    ['@nuxtjs/tailwindcss',
      /* '@nuxtjs/google-fonts',*/
      '@nuxt/image',
      '@nuxt/image-edge', 
      /* '@nuxtseo/module',
      'nuxt-og-image',
      'nuxt-gtag',  */
    ],
  
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    

  /*   image: {
      dir: 'assets/image',
      screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        '2xl': 1536,
      },
       formats: ['webp'],
    }, */
  
})

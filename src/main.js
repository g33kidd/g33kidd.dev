// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Logo from '~/components/Logo.vue'

require('typeface-roboto')
require('typeface-roboto-slab')
require('typeface-rubik')
require('typeface-bangers')

require('~/assets/main.scss')
require('css.gg/icons/all.scss')

require('~/assets/prism.scss')

// import VueTyperPlugin from 'vue-typer';

export default function (Vue, { router, head, isClient }) {
  // if (isClient) {
  //   Vue.use(VueTyperPlugin)
  // }

  Vue.component('Layout', DefaultLayout)
  Vue.component('logo', Logo)

  head.script.push({
    async: true,
    defer: true,
    'data-domain': "g33kidd.dev",
    src: "https://plausible.io/js/plausible.js"
  })
}

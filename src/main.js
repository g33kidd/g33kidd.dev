// Components
import DefaultLayout from '~/layouts/Default.vue'
import Logo from '~/components/Logo.vue'

// Typeface imports
require('typeface-roboto')
require('typeface-roboto-slab')
require('typeface-rubik')
require('typeface-bangers')

require('~/assets/main.scss')

// External Styles
require('css.gg/icons/all.scss')
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

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

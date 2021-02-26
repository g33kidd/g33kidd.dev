// Components
import DefaultLayout from '~/layouts/Default.vue'
import Logo from '~/components/Logo.vue'

// Typeface imports
require('typeface-roboto')
require('typeface-roboto-slab')
require('typeface-rubik')
require('typeface-bangers')

// Local Assets
require('~/assets/main.scss')

// Package Styles
require('css.gg/icons/all.scss')
require("prismjs/plugins/line-numbers/prism-line-numbers.css");
require("prismjs/plugins/command-line/prism-command-line.css");

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('logo', Logo)

  head.script.push({
    async: true,
    defer: true,
    'data-domain': "g33kidd.dev",
    src: "https://plausible.io/js/plausible.js"
  })
}

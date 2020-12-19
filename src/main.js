// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Logo from '~/components/Logo.vue'
import Header from '~/components/Header.vue'
// import VueTyperPlugin from 'vue-typer'

require('typeface-roboto')
require('typeface-roboto-slab')
require('typeface-rubik')
require('typeface-bangers')

require('css.gg/icons/all.scss')

export default function (Vue, { router, head, isClient }) {
  // TODO add this later... why doesn't it work on build..
  // Vue.use(VueTyperPlugin)

  Vue.component('Layout', DefaultLayout)
  Vue.component('logo', Logo)
  Vue.component('Header', Header)
}

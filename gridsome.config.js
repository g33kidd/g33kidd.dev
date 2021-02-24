// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'g33kidd',
  chainWebpack: config => {
    config.resolve.alias.set('@images', '~/assets/images')
  },

  plugins: [
    { use: "gridsome-plugin-tailwindcss" },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: 'journal/**/*.md',
        route: "/blog/:slug",
        typeName: "JournalEntry",
        remark: {
          plugins: [
            '@gridsome/remark-prismjs',
            '@gridsome/vue-remark'
          ]
        }
      }
    },
    {
      use: 'gridsome-plugin-svg',
      options: {
        // default options below
        goesBothWays: false,
        svgo: [
          {
            removeTitle: false
          },
          {
            prefixIds: {
              prefix: (_, { path }) => basename(path, '.svg'),
              delim: '-',
            },
          },
          {
            removeDesc: false
          },
          {
            removeViewBox: false,
          },
          {
            sortAttrs: true,
          }
        ],
      }
    }
  ]
}

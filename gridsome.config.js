// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'g33kidd',
  chainWebpack: config => {
    config.resolve.alias.set('@images', '~/assets/images')
  },

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        ['gridsome-plugin-remark-prismjs-all', {
          highlightClassName: "gridsome-highlight",
          codeTitleClassName: "gridsome-code-title",
          classPrefix: 'language-',
          aliases: {},
          noInlineHighlight: false,
          showLineNumbers: true,     //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
          languageExtensions: [],
          prompt: {                   //  `require("prismjs/plugins/command-line/prism-command-line.css");`
            user: `root`,
            host: `localhost`,
            global: false,
          }
        }]
      ]
    }
  },

  plugins: [
    // { use: "gridsome-plugin-tailwindcss" },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: 'journal/**/*.md',
        route: "/blog/:slug",
        typeName: "JournalEntry",
        remark: {
          plugins: [
            // '@gridsome/remark-prismjs',
          ]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: 'notes/**/*.md',
        route: "/notes/:slug",
        typeName: "Note",
        remark: {
          plugins: [
            // '@gridsome/remark-prismjs',
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

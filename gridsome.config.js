// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '只是玩玩 | JUST FUN',
  siteUrl: 'https://rebron1900.github.io',
  siteDescription: '/gridsome-blog',

  templates: {
    GhostPost: '/:slug',
    GhostTag: '/tag/:slug'
  },

  plugins: [
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'content/**/*.md',
    //     typeName: 'Post',
    //     route: '/:path',
    //     remark: {
    //       plugins: [
    //         ['@gridsome/remark-prismjs', {transformInlineCode: true}],
    //         'remark-wiki-link'
    //       ]
    //     }
    //   }
    // },
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: 'https://1900.live',
        contentKey: '3422d43273057f26cf49d5e0c5',
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    // {
    //   use: 'gridsome-plugin-feed',
    //   options: {
    //     contentTypes: ['Post'],
    //     feedOptions: {
    //       title: 'A Gridsome Minimal Blog',
    //       description: 'Best blog feed evah.'
    //     },
    //     rss: {
    //       enabled: true,
    //       output: '/feed.xml'
    //     },
    //     atom: {
    //       enabled: false,
    //       output: '/feed.atom'
    //     },
    //     json: {
    //       enabled: false,
    //       output: '/feed.json'
    //     },
    //     maxItems: 25,
    //     htmlFields: ['description', 'content'],
    //     enforceTrailingSlashes: false,
    //     filterNodes: (node) => true,
    //     nodeToFeedItem: (node) => ({
    //       title: node.title,
    //       date: node.date || node.fields.date,
    //       content: node.content
    //     })
    //   }
    // }
  ],

}

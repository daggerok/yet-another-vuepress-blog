const base = process.env.BASE_HREF || '/';
const title = require('../package.json').description;
const hostname = base === '/' ? 'http://127.0.0.1:8080/' : 'https://daggerok.github.com/yet-another-vuepress-blog/';

module.exports = {
  base,
  title,
  theme: '@vuepress/theme-blog',
  themeConfig: {
    sitemap: {
      hostname,
    },
    // comments
    comment: {
      service: 'disqus',
      shortname: 'daggerok-github-io-yet-another-vuepress-blog',
    },
    // posts pagination
    globalPagination: {
      prevText:'prev', // Text for previous links.
      nextText:'next', // Text for next links.
      lengthPerPage:'2', // Maximum number of posts per page.
      layout:'Pagination', // Layout for pagination page
    },
    // directories: [], // override defaults here as in blog plugin....
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/daggerok',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/daggerok',
        },
        {
          type: 'facebook',
          link: 'https://facebook.com/daggerok',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '...',
        },
      ],
    },
  },
  // plugins: [
  //   ['@vuepress/plugin-blog',
  //     {
  //       directories: [
  //         {
  //           id: 'post',
  //           dirname: '_posts',
  //           path: '/',
  //           pagination: {
  //             lengthPerPage: 2,
  //           },
  //         },
  //       ],
  //       frontmatters: [
  //         {
  //           id: 'tags',
  //           keys: ['tag', 'tags'],
  //           path: '/tag/',
  //           frontmatter: { title: 'Tag' },
  //         },
  //         {
  //           id: 'author',
  //           keys: ['author'],
  //           path: '/author/',
  //           frontmatter: { title: 'Author' },
  //         }
  //       ],
  //       sitemap: {
  //         hostname: 'https://daggerok.github.io/yet-another-vuepress-blog/',
  //       },
  //       globalPagination: {
  //         lengthPerPage: 5
  //       },
  //       comment: {
  //         service: 'disqus',
  //         shortname: 'daggerok-github-io-yet-another-vuepress-blog',
  //       },
  //     },
  //   ],
  //   // // 2
  //   // ['@vuepress/plugin-blog',
  //   //   {
  //   //     directories: [
  //   //       {
  //   //         // Unique ID of current classification
  //   //         id: 'post',
  //   //         // Target directory
  //   //         dirname: '_posts',
  //   //         // Path of the `entry page` (or `list page`)
  //   //         path: '/posts/',
  //   //         itemPermalink: '/posts/:year/:month/:day/:slug',
  //   //         // layouts
  //   //         layout: 'MyBlogIndexPostLayout',
  //   //         itemLayout: 'MyBlogPostLayout',
  //   //       },
  //   //     ],
  //   //     frontmatters: [
  //   //       {
  //   //         // Unique ID of current classification
  //   //         id: 'tags',
  //   //         // Decide that the frontmatter keys will be grouped under this classification
  //   //         keys: ['tag', 'tags'],
  //   //         // Path of the `entry page` (or `list page`)
  //   //         path: '/tag/',
  //   //         // Layout of the `entry page`
  //   //         layout: 'Tags',
  //   //         // Layout of the `scope page`
  //   //         scopeLayout: 'Tag'
  //   //       },
  //   //     ],
  //   //   },
  //   // ],
  //   // // 1
  //   // ['@vuepress/plugin-blog',
  //   //   {
  //   //     directories: [
  //   //       {
  //   //         id: 'post',
  //   //         dirname: '_posts',
  //   //         path: '/',
  //   //         layout: 'MyBlogIndexPostLayout',
  //   //         itemLayout: 'MyBlogPostLayout',
  //   //       },
  //   //     ],
  //   //   },
  //   // ],
  // ],
};

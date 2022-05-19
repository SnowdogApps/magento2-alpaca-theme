module.exports = {
  lang: 'en-US',
  title: 'Alpaca',
  description: 'Theme for Magento 2',
  head: [['link', { rel: 'icon', href: `/snowdog.png` }]],
  themeConfig: {
    repo: 'SnowdogApps/magento2-alpaca-theme',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Guide', link: '/guide', activeMatch: '^/$|^/guide/' },
      { text: "Contact", link: "https://snow.dog/contact" },
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          children: [
            {
              text: 'Overview',
              link: '/guide/'
            },
            {
              text: 'Alpaca Packages',
              link: '/guide/introduction/alpaca-packages'
            },
            {
              text: 'Third-Party Module Compatibility',
              link: '/guide/introduction/third-party-module-compatibility'
            },
            {
              text: 'Browser support',
              link: '/guide/introduction/browser-support'
            }
          ]
        },
        {
          text: 'Getting Started',
          children: [
            {
              text: 'Alpaca Setup Guide',
              link: '/guide/getting-started/alpaca-setup-guide'
            },
            {
              text: 'Magento Setup Guide',
              link: '/guide/getting-started/magento-setup-guide'
            },
            {
              text: 'Which version should I use?',
              link: '/guide/getting-started/which-version-should-i-use'
            }
          ]
        },
        {
          text: 'Working with Alpaca',
          children: [
            {
              text: 'Frontools',
              link: '/guide/working-with-alpaca/frontools'
            },
            {
              text: 'Components',
              link: '/guide/working-with-alpaca/components'
            },
            {
              text: 'Styles',
              link: '/guide/working-with-alpaca/styles'
            },
            {
              text: 'Fonts',
              link: '/guide/working-with-alpaca/fonts'
            },
            {
              text: 'JavaScript',
              link: '/guide/working-with-alpaca/javascript'
            },
            {
              text: 'Main Content Elements',
              link: '/guide/working-with-alpaca/main-content-elements'
            },
            {
              text: 'Images',
              link: '/guide/working-with-alpaca/images'
            },
            {
              text: 'SVG Icons',
              link: '/guide/working-with-alpaca/svg-icons'
            },
            {
              text: 'Sliders',
              link: '/guide/working-with-alpaca/sliders'
            },
            {
              text: 'Blog',
              link: '/guide/working-with-alpaca/blog'
            },
            {
              text: 'Magepack',
              link: '/guide/working-with-alpaca/magepack'
            }
          ]
        },
        {
          text: 'Migration Guide',
          link: '/guide/migration-guide'
        }
      ]
    }
  }
}

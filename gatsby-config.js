const path = require('path')

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false,
          },
        },
      },
    },
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `callout`,
        path: `${__dirname}/static/callout`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `profile`,
        path: `${__dirname}/static/profile`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bg`,
        path: `${__dirname}/static/bg`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zoltan Papp`,
        short_name: `ZoltanPappPortfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#302E63`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`,
      },
    },
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@common': path.resolve(__dirname, 'src/components/common'),
          '@sections': path.resolve(__dirname, 'src/components/sections'),
          '@styles': path.resolve(__dirname, 'src/styles/'),
          '@static': path.resolve(__dirname, 'static/'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-0JG152FKVB',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        defer: true,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: false, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeDefaultDirectives: false,
        directives: {
          'connect-src': "'self' www.google-analytics.com 'unsafe-inline'",
          'script-src': "'self' 'unsafe-inline' www.google-analytics.com 'unsafe-inline'",
          'style-src': "'self' 'unsafe-inline'",
          'img-src': "'self' 'unsafe-inline' data: www.google-analytics.com 'unsafe-inline'",
        },
      },
    },
  ],
}

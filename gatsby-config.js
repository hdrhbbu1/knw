require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'KNW Photography',
    description: 'KNW Photography helps clients capture special moments in lifestyle and wedding photography in the San Francisco Bay Area.',
    url: 'http://www.knw.netlify.com'
  },
  plugins: [
    `gatsby-plugin-react-next`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`,
    {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      template: '<div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
      showSpinner: true,
      },
    },
    {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN,
      },
    },
    'gatsby-plugin-netlify'
  ],
}

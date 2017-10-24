require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'KNW Photography',
    description: 'KNW Photography helps clients capture special moments in lifestyle and wedding photography in the San Francisco Bay Area.',
    url: 'http://www.knw.netlify.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
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

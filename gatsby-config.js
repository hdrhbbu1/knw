require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `KNW Photography`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    'gatsby-transformer-remark',
    {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN,
      },
    },
    `gatsby-plugin-netlify` // Should be the last item in the array
  ],
}

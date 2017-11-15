const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {

  // Redirects
  const { createRedirect } = boundActionCreators

  let redirectBatch1 = [
    { f: `/category/lifestyle`, t: `/lifestyle` },
    { f: `/category/wedding`, t: '/wedding' },
    { f: `/pricing`, t: '/investment' },
    { f: `/pricing/lifestyle`, t: `/investment` },
    { f: `/pricing/wedding`, t: `/investment` },
  ]

  for (var { f: f, t: t } of redirectBatch1) {
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
    })
  }

  // Create Post Pages based on post.js template
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulGallery {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulGallery.edges.map(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug
          }
        })
      })

      resolve()
    })
  })
}

import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

const Wedding = ({data}) => {

const posts = data.allContentfulGallery.edges;

  return(
    <div>

      <Helmet>
        <title>Wedding Galleries - KNW Photography</title>
        <meta name="description" content="View wedding galleries by KNW Photography" />
        <meta property="og:title" content="Wedding Galleries - KNW Photography"/>
        <meta property="og:image" content={posts[0].node.cover.sizes.src} />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:url" content="https://www.knw.io/wedding" />
      </Helmet>

      <div className="category-navigation">
        <h2>Galleries</h2>
        <ul className="category-navigation__links">
          <li><Link to="/galleries">All</Link></li>
          <li><Link to="/lifestyle">Lifestyle</Link></li>
          <li><Link to="/wedding" className="active">Wedding</Link></li>
        </ul>
      </div>

      <ul className="galleries-list">
        {posts.map(({ node: post, index }) => (
          <li key={post.id}>
            <Link to={post.slug}>
              <Img sizes={post.cover.sizes} alt={post.cover.title} title={post.cover.title} backgroundColor={"#f1f1f1"} />
              <h3>view gallery</h3>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )

}

export const query = graphql`
query WeddingQuery {
  allContentfulGallery(limit: 1000, filter:{category:{eq:"wedding"}}, sort: { fields: [date], order: DESC }) {
    edges {
      node {
        title
        id
        slug
        date
        category
        cover {
          title
          sizes(maxWidth: 1800) {
            ...GatsbyContentfulSizes_noBase64
          }
        }
      }
    }
  }
}
`

export default Wedding

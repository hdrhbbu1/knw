import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Categories from '../components/categories'

const Lifestyle = ({data}) => {
const posts = data.allContentfulGallery.edges;

  return(
    <div>

      <Helmet>
        <title>Lifestyle Galleries</title>
        <meta name="description" content="" />
      </Helmet>

      <Categories title="Lifestyle"/>

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
query LifestyleQuery {
  allContentfulGallery(limit: 1000, filter:{category:{eq:"lifestyle"}}, sort: { fields: [date], order: DESC }) {
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

export default Lifestyle

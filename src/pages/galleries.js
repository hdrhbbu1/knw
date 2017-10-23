import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Galleries = ({data}) => {

const posts = data.allContentfulGallery.edges;

  return(
    <div>
      <h2 className="page__title">Galleries</h2>
      <ul className="galleries__list">
        {posts.map(({ node: post, index }) => (
          <li key={post.id}>
            <Link to={post.slug}>
              <Img sizes={post.cover.sizes} alt={post.cover.title} title={post.cover.title} backgroundColor={"#f1f1f1"} />
              <h3>{post.date}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

}

export const query = graphql`
  query GalleryQuery {
    allContentfulGallery(limit: 1000, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          date(formatString: "M.DD.YYYY")
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

export default Galleries

import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Galleries = ({data}) => {
  console.log(data)
  const posts = data.allContentfulGallery.edges;
  return(
    <div>
      <h2 className="page__title">Galleries</h2>
      <ul className="galleries__list">
        {posts.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.slug}>
              <Img sizes={node.cover.sizes} alt={node.cover.title} title={node.cover.title} backgroundColor={true} />
              <h3>{node.date}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

//Query to get Contentful data
export const query = graphql`
  query GalleryQuery {
    allContentfulGallery(limit: 1000, sort: { fields: [date], order: DESC }) {
      totalCount
      edges {
        node {
          title
          id
          slug
          date
          cover {
            title
            sizes(maxWidth: 600) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`

export default Galleries

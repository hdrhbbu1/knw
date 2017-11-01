import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Categories from '../components/categories'

const Lifestyle = ({data}) => {
const posts = data.contentfulCategory.gallery;

  return(
    <div>

      <Helmet>
        <title>Lifestyle Galleries</title>
        <meta name="description" content="" />
      </Helmet>

      <Categories title="Lifestyle"/>

      <ul className="galleries-list">
        {posts.map((post: gallery, index) => (
            <li key={index}>
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
    contentfulCategory(title: {eq: "Lifestyle"}) {
    title
    gallery {
      title
      slug
      date
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
    }
  }
}
`

export default Lifestyle

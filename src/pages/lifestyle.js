import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Categories from '../components/categories'

const Lifestyle = ({data}) => {

const galleries = data.contentfulCategory.gallery;
console.log(galleries);

  return(
    <div>

      <Helmet>
        <title>Lifestyle Galleries</title>
        <meta name="description" content="" />
      </Helmet>

      <Categories title="Lifestyle"/>

      <ul className="galleries-list">
        {galleries.map(({ gallery, index }) => (
          <li key={index}>
            <h3>{title}</h3>
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

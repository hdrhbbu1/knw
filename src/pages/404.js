import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

const NotFoundPage = ({data}) => {

  const page = data.contentfulPage;

  return(
    <div>

      <Helmet>
        <title>404</title>
        <meta name="description" content="Page not found" />
      </Helmet>

      <div className="intro--404">
        <div className="intro--404__box">
          <h2>Sorry, that page can't be found.<span/> <span/> <span/></h2>
          <p>Please return <Link to="/">home</Link> or use the menu to navigate to a different page.</p>
        </div>
      </div>

    </div>
  )
}

export const query = graphql`
  query ErrorQuery {
    contentfulPage(slug: {eq: "contact"}) {
      title
      slug
      id
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
    }
  }
`

export default NotFoundPage

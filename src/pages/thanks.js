import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

const Thanks = ({data}) => {

  const page = data.contentfulPage;

  return (
    <div>

      <Helmet>
        <title>Message Received!</title>
        <meta name="description" content="" />
      </Helmet>

      <div className="intro--thanks">
        <div className="intro--thanks__image">
          <Img sizes={page.cover.sizes} backgroundColor={"#e4e4e4"}/>
        </div>
        <div className="intro--thanks__box">
          <h2>Message Received!</h2>
          <p>I will be in touch soon. In the meantime feel free to explore more <Link to="/galleries">galleries</Link> or use the menu to navigate to a different page.</p>
        </div>
      </div>

    </div>
  )
}

export const query = graphql`
  query ThanksQuery {
    contentfulPage(slug: {eq: "thanks"}) {
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

export default Thanks

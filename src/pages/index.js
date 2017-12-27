import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import BgImg from '../components/background'
import logo from '../images/logo.svg'
import Helmet from 'react-helmet'

const IndexPage = ({data}) => {

const posts = data.allContentfulGallery.edges;
const page = data.contentfulHome;

  return (
    <div>

      <Helmet>
        <title>KNW Photography - SF Bay Area Wedding Photographer</title>
        <meta name="description" content="KNW Photography helps clients capture special moments in lifestyle and wedding photography in the San Francisco Bay Area" />
        <meta property="og:title" content="KNW Photography - SF Bay Area Wedding Photographer"/>
        <meta property="og:image" content={page.cover.sizes.src} />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1200" />
      </Helmet>

      <div className="intro intro--home sticky">
        <h1><img className="logo" src={logo} /></h1>
        <BgImg height={'75vh'} sizes={page.cover.sizes} alt={page.cover.title} title={page.cover.title} />
      </div>

    <div className="page">

      <div className="quote" dangerouslySetInnerHTML={{ __html: page.quote.childMarkdownRemark.html }} />

      <div className="featured">

        <div className="featured__newest sticky">
          <h2>Recent Work</h2>
          <Link to={posts[0].node.slug}>
            <Img sizes={posts[0].node.cover.sizes} alt={posts[0].node.cover.title} title={posts[0].node.cover.title} backgroundColor={"#f1f1f1"} />
            <h3>View Gallery</h3>
          </Link>
        </div>

        <ul className="featured__list">
          {posts.slice(1).map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.slug}>
                <Img sizes={post.cover.sizes} alt={post.cover.title} title={post.cover.title} backgroundColor={"#f1f1f1"} />
                <h3>View Gallery</h3>
              </Link>
            </li>
          ))}
        </ul>

      </div>

    </div>
  </div>
  )
}

export const query = graphql`
  query HomeQuery {
    allContentfulGallery(limit: 8, sort: { fields: [date], order: DESC }) {
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
    contentfulHome {
      title
      slug
      id
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      quote {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default IndexPage

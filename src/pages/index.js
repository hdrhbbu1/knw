import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import logo from '../images/logo.svg'
import Helmet from 'react-helmet'

const IndexPage = ({data}) => {

const posts = data.allContentfulGallery.edges;
const page = data.contentfulPage;

  return (
    <div>
      <div className="intro">
        <h1>
          <img className="logo" src={logo} />
        </h1>
        <div className="intro__image">
          <Img sizes={page.cover.sizes} />
        </div>
      </div>

    <div className="page">
      <div className="quote">
        <blockquote>
          Some sort of inspiring snippet of text should go here.
        </blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae ipsum et purus rhoncus commodo non in diam. Nullam ullamcorper purus augue, tincidunt rhoncus velit imperdiet et. Cras imperdiet imperdiet ex, eget maximus nibh tincidunt id. Proin a dictum nisi, et venenatis est. Ut finibus turpis at arcu gravida, nec pulvinar tortor pretium.</p>
      </div>

      <div className="featured">

        <div className="featured__newest">
          <h2>Recent Work</h2>
          <Link to={posts[0].node.slug}>
            <Img sizes={posts[0].node.cover.sizes} alt={posts[0].node.cover.title} title={posts[0].node.cover.title} backgroundColor={"#f1f1f1"} />
          </Link>
        </div>

        <ul className="featured__list">
          {posts.slice(1).map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.slug}>
                <Img sizes={post.cover.sizes} alt={post.cover.title} title={post.cover.title} backgroundColor={"#f1f1f1"} />
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
    allContentfulGallery(limit: 6, sort: { fields: [date], order: DESC }) {
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
    contentfulPage(slug: {eq: "home"}) {
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

export default IndexPage

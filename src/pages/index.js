import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({data}) => {

  const posts = data.allContentfulGallery.edges;

  return (
    <div>
      <div className="intro">
        <h1>
          <img className="logo" src="images/knw.svg" />
        </h1>
        <img src="http://knw.io/wp-content/uploads/2016/05/lime-ridge-concord-spring-family-lifestyle-session-36.jpg" />
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
          {posts.slice(1).map(({ node }) => (
            <li key={node.id}>
              <Link to={node.slug}>
                <Img sizes={node.cover.sizes} alt={node.cover.title} title={node.cover.title} backgroundColor={"#f1f1f1"} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bio">
        <div className="bio__inner">
          <h2>Meet the photographer</h2>
          <img className="bio__image" src="images/bio.jpg" />
          <Link to="/about">Learn More About Kirsten &rarr;</Link>
        </div>
      </div>
    </div>

  </div>
  )
}

//Query to get Contentful data
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
  }
`

export default IndexPage

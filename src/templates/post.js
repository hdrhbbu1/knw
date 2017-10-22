import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const PostTemplate = ({data}) => {
  const post = data.contentfulGallery
  return(
    <div className="post">

      <div className="post-cover">
        <Img sizes={post.cover.sizes} alt={post.cover.title} title={post.cover.title} backgroundColor={"#f1f1f1"} />
      </div>

      <div className="post-info">
        <div className="post-info__left">
          <h2 className="post-info-title">Details</h2>
          <Link to="/galleries"><h3 className="post-category">Wedding</h3></Link>
          <h3 className="post-title">{post.title}</h3>
          <h3 className="post-date">{post.date}</h3>
        </div>
        <div className="post-info__right">
          <div className="post-description" dangerouslySetInnerHTML={{ __html: post.description.childMarkdownRemark.html }} />
        </div>
      </div>

      <ul className="post-images">
        {post.images.map((images, index) => (
          <li key={index}>
            <Img sizes={images.sizes} alt={images.title} title={images.title} backgroundColor={"#f1f1f1"} />
          </li>
        ))}
      </ul>

    </div>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulGallery(slug: {eq: $slug}) {
      title
      id
      date(formatString: "M.DD.YYYY")
      description {
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        sizes(maxWidth: 2000) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      images {
        sizes(maxWidth: 2000) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
    }
  }
`

export default PostTemplate


/*

{post.map(({ images }) => (

))}

*/

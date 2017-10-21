import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const PostTemplate = ({data}) => {
  const post = data.contentfulGallery
  return(
    <div>
      <h2 className="page__title">{post.title}</h2>
      <h3 className="page__title">{post.date}</h3>
      <Img sizes={post.cover.sizes} alt={post.cover.title} title={post.cover.title} backgroundColor={"#f1f1f1"} />
      <div className="post__content" dangerouslySetInnerHTML={{ __html: post.description.childMarkdownRemark.html }} />
      <ul className="images">
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

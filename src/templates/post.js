import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import _ from "lodash"

const PostTemplate = ({data}) => {

  const {
    title,
    id,
    date,
    slug,
    description,
    cover,
    images
  } = data.contentfulGallery;

  const postIndex = _.find(
    data.allContentfulGallery.edges,
    ({ node: post }) => post.id === id
  );

  return(
    <div className="post">

      <div className="post-cover">
        <Img sizes={cover.sizes} alt={cover.title} title={cover.title} backgroundColor={"#f1f1f1"} />
      </div>

      <div className="post-info">
        <div className="post-info__left">
          <h2 className="post-info-title">Details</h2>
          <Link to="/galleries"><h3 className="post-category">Wedding</h3></Link>
          <h3 className="post-title">{title}</h3>
          <h3 className="post-date">{date}</h3>
        </div>
        <div className="post-info__right">
          <div className="post-description" dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
        </div>
      </div>

      <ul className="post-images">
        {images.map((images, index) => (
          <li key={index}>
            <Img sizes={images.sizes} alt={images.title} title={images.title} backgroundColor={"#f1f1f1"} />
          </li>
        ))}
      </ul>

      {postIndex.previous && (<Link to={postIndex.previous.slug}>Nex Post</Link>)}
      {postIndex.next && (<Link to={postIndex.next.slug}>Previous Post</Link>)}

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
    allContentfulGallery {
        edges {
          node {
            id
          }
          previous {
            slug
            title
          }
          next {
            slug
            title
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

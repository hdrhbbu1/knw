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
          <h3 className="post-category"><Link to="/galleries">Wedding</Link></h3>
          <h3 className="post-title">{title}</h3>
          <h3 className="post-date">{date}</h3>
          {postIndex.previous && (<Link className="post-previous"to={postIndex.previous.slug}>Previous</Link>)}
          {postIndex.next && (<Link className="post-next"to={postIndex.next.slug}>Next</Link>)}
        </div>
        <div className="post-info__right">
          <div className="post-description" dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
        </div>
      </div>

      <ul className="post-images">
        {images && (
          images.map((images, index) => (
            <li key={index}>
              <Img sizes={images.sizes} alt={images.title} title={images.title} backgroundColor={"#f1f1f1"} />
            </li>
          ))
        )}
      </ul>

      {postIndex.next && (
      <Link className="post-preview" to={postIndex.next.slug}>
        <h4 className="post-preview__title">Next</h4>
          <Img sizes={postIndex.next.cover.sizes} alt={postIndex.next.cover.title} title={postIndex.next.cover.title} backgroundColor={"#f1f1f1"} />
      </Link>)}

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
    allContentfulGallery(limit: 1000, sort: { fields: [date], order: DESC })  {
        edges {
          node {
            id
          }
          previous {
            slug
            title
            cover {
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_noBase64
              }
            }
          }
          next {
            slug
            title
            cover {
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_noBase64
              }
            }
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

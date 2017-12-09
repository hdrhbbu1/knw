import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import find from "lodash.find"
import Helmet from 'react-helmet'
import Up from '../components/up'
import Progress from '../components/progress'

const PostTemplate = ({data}) => {

  const {
    title,
    id,
    date,
    category,
    location,
    slug,
    description,
    cover,
    images
  } = data.contentfulGallery;

  const postIndex = find(
    data.allContentfulGallery.edges,
    ({ node: post }) => post.id === id
  );

  return(
    <div>

    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title}/>
      <meta property="og:image" content={cover.sizes.src} />
      <meta property="og:image:width" content="1800" />
      <meta property="og:image:height" content="1200" />
    </Helmet>

    <Progress/>

    <div className="post">
      <div className="post-cover">
        <Img sizes={cover.sizes} alt={cover.title} title={cover.title} backgroundColor={"#f1f1f1"} />
      </div>
      <div className="post-info">
        <div className="post-info__left">
          <h2 className="post-info-title">Details</h2>
          <h3 className="post-category"><Link to={category}>{category}</Link></h3>
          <h3 className="post-location">{location}</h3>
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
              <Img sizes={images.sizes} alt={images.title} title={images.title} className={images.description} backgroundColor={"#f1f1f1"} />
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
    <Up />
  </div>

  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulGallery(slug: {eq: $slug}) {
      title
      id
      category
      location
      date(formatString: "M.DD.YYYY")
      description {
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      images {
        title
        description
        sizes(maxWidth: 1800) {
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

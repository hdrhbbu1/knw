import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

const Investment = ({data}) => {

const tabs = data.allContentfulInvestment.edges;

  return(
    <div className="investment">

      <Helmet>
        <title>Investment</title>
        <meta name="description" content="" />
      </Helmet>

      <div className="intro--investment">
        <h2>Investment</h2>
        <Img sizes={tabs[1].node.cover.sizes} alt={tabs[1].node.cover.title} title={tabs[1].node.cover.title} backgroundColor={"#f1f1f1"} />
      </div>

      <div className="tab">
        {tabs.map(({ node: tab, index }) => (
          <div key={tab.id}>
            <h3>{tab.title}</h3>
            <blockquote dangerouslySetInnerHTML={{ __html: tab.quote.childMarkdownRemark.html }} />
          </div>
          ))}
      </div>


      </div>
  )
}


export const query = graphql`
  query InvestmentQuery {
    allContentfulInvestment {
      edges {
        node {
          title
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
          photoGrid {
            sizes {
              src
            }
          }
        }
      }
    }
  }
`

export default Investment

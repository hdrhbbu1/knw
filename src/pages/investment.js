import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Investment = ({data}) => {

const tabs = data.allContentfulInvestment.edges;
console.log(tabs)

  return(
    <div>

      <Helmet>
        <title>Investment</title>
        <meta name="description" content="" />
      </Helmet>

      <div className="intro--investment">
        <div className="intro--investment__image">
          <Img sizes={tabs[1].node.cover.sizes} backgroundColor={"#f1f1f1"} />
        </div>
        <h2>Investment</h2>
      </div>

      <Tabs className="tabs" selectedTabClassName="tab--selected" selectedTabPanelClassName="tab-panel--selected">
        <TabList className="tab-list">

          <Tab className="tab">General Info</Tab>
          {tabs.map(({ node: tab, index }) => (
            <Tab key={tab.id} className="tab">{tab.title}</Tab>
          ))}

        </TabList>


        <TabPanel className="tab-panel">
          <blockquote><p>General Info goes here</p></blockquote>
        </TabPanel>

        {tabs.map(({ node: tab, index }) => (
          <TabPanel key={tab.id} className="tab-panel">
            <blockquote dangerouslySetInnerHTML={{ __html: tab.quote.childMarkdownRemark.html }} />
            <ul>
              <li><Img sizes={tab.cover.sizes}/></li>
            </ul>
          </TabPanel>

        ))}
      </Tabs>

      </div>
  )
}


export const query = graphql`
  query InvestmentQuery {
    allContentfulInvestment (sort: { fields: [title], order: ASC}) {
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

import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Investment = ({data}) => {

const tabs = data.allContentfulInvestment.edges;

  return(
    <div>

      <Helmet>
        <title>Investment</title>
        <meta name="description" content="" />
      </Helmet>

      <div className="intro--investment">
        <div className="intro--investment__image">
          <Img sizes={tabs[0].node.cover.sizes} alt={tabs[0].node.cover.title} title={tabs[0].node.cover.title} backgroundColor={"#f1f1f1"} />
        </div>
        <div className="intro--investment__description">
          <h2>Investment</h2>
          <p> Morbi hendrerit vulputate justo, eget blandit libero congue accumsan. Aliquam ac libero gravida, vestibulum diam vitae, pretium felis. Sed scelerisque quam a nunc feugiat tristique. Curabitur vel mi suscipit, sollicitudin lectus quis, molestie purus. Quisque imperdiet lorem est, vel posuere ex tempus vel. Sed eu magna non ex dictum tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <p>ullam at sapien in metus sagittis pellentesque. Etiam et tellus consequat, ultrices turpis eu, mattis orci. Aliquam elementum bibendum urna id cursus. Nunc sodales semper augue, vitae mattis elit. Donec suscipit fermentum tristique. Mauris a interdum eros.</p>
        </div>
      </div>

      <Tabs className="tabs" selectedTabClassName="tab--selected" selectedTabPanelClassName="tab-panel--selected">
        <TabList className="tab-list">
          {tabs.map(({ node: tab, index }) => (
            <Tab key={tab.id} className="tab">{tab.title}</Tab>
          ))}
        </TabList>

        {tabs.map(({ node: tab, index }) => (
          <TabPanel key={tab.id} className="tab-panel">
            <blockquote dangerouslySetInnerHTML={{ __html: tab.quote.childMarkdownRemark.html }} />
          </TabPanel>
        ))}
      </Tabs>

      </div>
  )
}


export const query = graphql`
  query InvestmentQuery {
    allContentfulInvestment (sort: { fields: [title], order: DESC}) {
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

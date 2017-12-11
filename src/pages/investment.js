import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from 'react-slick'

const Investment = ({data}) => {

  const tabs = data.allContentfulInvestment.edges;
  const page = data.contentfulPage;

  const sliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    swipeToSlide: true,
    draggable: false,
    centerMode: true,
    arrows: true,
    touchMove: true,
    responsive: [{ breakpoint: 640, settings: { slidesToShow: 1, draggable: true, arrows: false} }]
  }

  return(
    <div>

      <Helmet>
        <title>Investment</title>
        <meta name="description" content="View pricing and information for lifestyle and wedding photography packages" />
        <meta property="og:title" content={page.title}/>
        <meta property="og:image" content={page.cover.sizes.src} />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:url" content="https://www.knw.io/investment" />
      </Helmet>

      <div className="intro--investment">
        <div className="intro--investment__image">
          <Img sizes={page.cover.sizes} backgroundColor={"#e4e4e4"} />
        </div>
      </div>

      <Tabs className="tabs" selectedTabClassName="tab--selected" selectedTabPanelClassName="tab-panel--selected">
        <h2>Investment</h2>
        <div className="tabs-header">
          <TabList className="tab-list">
            {tabs.map(({ node: tab, index }) => (
              <Tab key={tab.id} className="tab">{tab.title}</Tab>
            ))}
          </TabList>
        </div>

        {tabs.map(({ node: tab, index }) => (
          <TabPanel key={tab.id} className="tab-panel">

            <div className="tab-panel__content">
              <div className="tab-panel__container">
                <div className="sidebar">
                  {tab.cover && (<div className="cover"><Img sizes={tab.cover.sizes} backgroundColor={"#e4e4e4"}/></div>)}
                  {tab.pricing && (<blockquote dangerouslySetInnerHTML={{ __html: tab.pricing.childMarkdownRemark.html }} />)}
                </div>
                {tab.description && (<div className="main" dangerouslySetInnerHTML={{ __html: tab.description.childMarkdownRemark.html }} />)}
              </div>
            </div>

            {tab.slider && (
              <div className="slider--investment">
                <h3>Selected {tab.title} Photos</h3>
                <Slider {...sliderSettings}>
                  {tab.slider.map((slider, index) => (
                    <div key={index}><Img sizes={slider.sizes} backgroundColor={"#e4e4e4"}/></div>
                  ))}
                </Slider>
              </div>
            )}

          </TabPanel>
        ))}

      </Tabs>

      </div>
  )
}

export const query = graphql`
  query InvestmentQuery {
    allContentfulInvestment(sort: {fields: [title], order: ASC}) {
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
          pricing {
            childMarkdownRemark {
              html
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          slider {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
    contentfulPage(slug: {eq: "investment"}) {
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

export default Investment

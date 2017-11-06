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

          <Tab className="tab">General</Tab>
          <Tab className="tab">Lifestyle</Tab>
          <Tab className="tab">Wedding</Tab>

        </TabList>


        <TabPanel className="tab-panel">
          <div className="tab-panel__sidebar">
            <img src="http://via.placeholder.com/200x200"/>
          </div>
          <div className="tab-panel__main">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet aliquam pretium. Cras porta, nisl quis pharetra iaculis, magna orci laoreet lorem, sed ullamcorper diam erat et purus. Maecenas dapibus pharetra mi, in dapibus metus luctus sed. Nullam aliquam rhoncus posuere. Sed placerat risus sit amet pharetra consectetur.</p>
            <p>Maecenas eget mauris at massa porta dapibus vitae aliquet velit. Suspendisse eros quam, dapibus quis rutrum ut, varius non mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nunc sit amet maximus sapien, eget aliquet risus.</p>
          </div>
        </TabPanel>

        <TabPanel className="tab-panel">
          <div className="tab-panel__sidebar">
            <img src="http://via.placeholder.com/200x200"/>
            <blockquote>
              <p>Lifestyle sessions start at $600</p>
              <ul>
                <li>High resolution images delivered on USB</li>
                <li>Printing rights included</li>
              </ul>
            </blockquote>
          </div>
          <div className="tab-panel__main">
            <p>My lifestyle sessions might not be for everyone, and that’s okay. They will be fun, I can guarantee that, but my style of photography focuses more on seeing your family as you really are. I want to help you remember your family at that particular moment in time. That means capturing those moments beautifully, no matter how ordinary or simple. Real smiles and hugs are common in my galleries. Overly staged or posed “Christmas card” shots are not.</p>
            <p>My sessions can take place practically anywhere. Whether it be in your lovely home, your favorite beach where you spend your weekend afternoons, that corner ice cream shop that you go to every summer, or the ferry ride that you take everyday to get to school, I’m there. But hopefully it’ll be a spot that you love and frequent. I want your photos to mean something to you personally and help those memories last forever.</p>
            <p>I love working with families and it is always interesting to see how each one is unique. I have worked with families both big and small and I always strive to make your session as stress free as possible, so you can rest easy knowing I’m here to help. Don’t worry about those perfect outfits, I’d rather see you in your favorite outfit. Just relax, be yourself and have fun! That’s all you have to do.</p>
          </div>
        </TabPanel>

        <TabPanel className="tab-panel">
          <div className="tab-panel__sidebar">
            <img src="http://via.placeholder.com/200x200"/>
            <blockquote>
              <p>Weddings and elopements start at $2,500</p>
              <ul>
                <li>High resolution images delivered on USB</li>
                <li>Printing rights included</li>
              </ul>
            </blockquote>
          </div>
          <div className="tab-panel__main">
            <p>With each new wedding that I shoot I often say to myself that this one is my new favorite. I’m very lucky to photograph such a special day for people. In my mind the perfect wedding day is one where the couple is just so happy to be getting married that rain or shine it doesn’t matter because they are forever going to be with their better half! I want to be there for your wedding day from the moment you start getting ready until you dance the night away. I work my best with couples that want true moments captured rather than those perfect shots for your grandma. I adore weddings and I love “love”. I want you to end up with the story of your wedding day being truly captured.</p>
            <p>I enjoy weddings of all sizes, from elopements to the 300+ person wedding that lasts for multiple days. As long as you trust me to capture the beauty of your day than I’m happy to do my best, roll with the punches and keep the day going no matter what. My goal is not only to capture key moments, but to have you end up with beautiful images of these moments and details. Don’t mind me if I tear up for a moment or two behind the lens, because it happens at most weddings.</p>
          </div>
        </TabPanel>


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



/*


{tabs.map(({ node: tab, index }) => (
  <Tab key={tab.id} className="tab">{tab.title}</Tab>
))}


{tabs.map(({ node: tab, index }) => (
  <TabPanel key={tab.id} className="tab-panel">
    <blockquote dangerouslySetInnerHTML={{ __html: tab.quote.childMarkdownRemark.html }} />
    <ul>
      <li><Img sizes={tab.cover.sizes}/></li>
    </ul>
  </TabPanel>

))}



*/

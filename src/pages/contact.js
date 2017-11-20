import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Contact extends React.Component {

    constructor (props) {
      super(props)
      this.state = {
        name: '',
        email: '',
        reason: '',
        source: '',
        eventDate: null,
        location: '',
        guests: '0',
        budget: '0',
        message:'',
        optionalQuestions: false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleResasonChange = this.handleResasonChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }

    handleDateChange(date) {
      this.setState({
        eventDate: date
      });
    }

    handleResasonChange(event) {
      const target = event.target;
      const value = target.value;
      if (value === "Book A Wedding Package") {
        this.setState({
          reason: value,
          optionalQuestions: true
        });
      }
      else {
        this.setState({
          reason: value,
          eventDate: null,
          location: '',
          guests: '0',
          budget: '0',
          optionalQuestions: false
        });
      }
    }

  render() {

    const page = this.props.data.contentfulPage;

    return (
      <div>

        <Helmet>
          <title>Contact</title>
          <meta name="description" content="" />
        </Helmet>

        <section className="contact-background">
          <div className="contact-background__image">
            <Img sizes={page.cover.sizes} backgroundColor={"#f1f1f1"}/>
          </div>
          <form className="form" method="post" name="contact" action="/thanks" data-netlify="true"  data-netlify-honeypot="bot">
            <div className="form__container">
              <h2>Contact</h2>
              <input type="hidden" name="form-name" value="contact" />
              <input className="form__name" name="name" type="text" placeholder="Full Name" value={this.state.name} onChange={this.handleInputChange} required/>
              <input className="form__email" name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} required/>
              <select className="form__reason" name="reason" value={this.state.reason} onChange={this.handleResasonChange} required>
                <option value="">Reason For Contacting</option>
                <option value="Book A Lifestyle Package">Book A Lifestyle Package</option>
                <option value="Book A Wedding Package">Book A Wedding Package</option>
                <option value="General Inquiry / Question">General Inquiry / Question</option>
              </select>
              <select className="form__source" name="source" required>
                <option value="">How Did You Hear About Me?</option>
                <option value="Referral">Referral</option>
                <option value="Social Media">Social Media</option>
                <option value="Google Search">Google Search</option>
                <option value="Other">Other</option>
              </select>
              <div className="form__optional" className={(this.state.optionalQuestions ? "form__optional--visible" : "form__optional")}>
                <div className="form__date"><DatePicker name="date" selected={this.state.eventDate} onChange={this.handleDateChange} minDate={moment()} placeholderText="Event Date"/></div>
                <input className="form__location" name="location" type="text" value={this.state.location} onChange={this.handleInputChange} placeholder="Location / Venue"/>
                <div className="form__guests">
                  <label htmlFor="guests">Number Of Guests?</label> <span>{this.state.guests} Guests</span>
                  <input name="guests" type="range" value={this.state.guests} onChange={this.handleInputChange}  min="0" max="400" step="5" />
                </div>
                <div className="form__budget">
                  <label htmlFor="budget">Photography Budget?</label> <span>${this.state.budget}</span>
                  <input name="budget" type="range" value={this.state.budget} onChange={this.handleInputChange}  min="1000" max="10000" step="250" />
                </div>
              </div>
              <textarea className="form__message" name="message" type="text" placeholder="Message" value={this.state.message} onChange={this.handleInputChange} required></textarea>
              <input className="form__submit" name="submit" type="submit" value="Send" />
              <input type="hidden" name="bot"/>
            </div>
          </form>
        </section>

      </div>
    )
  }
}

Contact.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query ContactQuery {
    contentfulPage(slug: {eq: "contact"}) {
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

export default Contact

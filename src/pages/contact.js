import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const encode = (data) => {
   return Object.keys(data)
       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
       .join("&");
 }

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

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };


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
      <div className="contact">

        <Helmet>
          <title>Contact</title>
          <meta name="description" content="" />
        </Helmet>

        <div className="intro--contact">
          <h2>Contact</h2>
          <div className="intro--contact__image">
            <Img sizes={page.cover.sizes} backgroundColor={"#f1f1f1"}/>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-info__left">
            <form className="form" name="contact" onSubmit={this.handleSubmit} data-netlify="true"  data-netlify-honeypot="bot">
              <div className="form__container">
                <input type="hidden" name="form-name" value="contact" />
                <input className="form__name" name="name" type="text" placeholder="Full Name" value={this.state.name} onChange={this.handleInputChange} required/>
                <input className="form__email" name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} required/>
                <select className="form__reason" name="reason" value={this.state.reason} onChange={this.handleResasonChange} required>
                  <option value="">Reason For Contacting</option>
                  <option value="Book A Wedding Package">Book A Wedding Package</option>
                  <option value="Book A Lifestyle Package">Book A Lifestyle Package</option>
                  <option value="General Inquiry / Question">General Inquiry / Question</option>
                </select>
                <select className="form__source" name="source" value={this.state.source} onChange={this.handleInputChange} required>
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
                    <input name="budget" type="range" value={this.state.budget} onChange={this.handleInputChange}  min="0" max="10000" step="250" />
                  </div>
                </div>
                <textarea className="form__message" name="message" type="text" placeholder="Message" value={this.state.message} onChange={this.handleInputChange} required></textarea>
                <input className="form__submit" name="submit" type="submit" value="Send" />
                <input type="hidden" name="bot"/>
              </div>
            </form>
          </div>

          <div className="contact-info__right">
            <div className="social">
              <h3 className="social__title">Follow Along</h3>
              <ul className="social__links">
                <li><a href="https://www.facebook.com/knwphoto/" target="_blank"><svg className="icon icon--facebook" viewBox="0 0 512 512"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg>Facebook</a></li>
                <li><a href="https://www.instagram.com/kirstennoellew/" target="_blank"><svg className="icon icon--instagram" viewBox="0 0 512 512"><g><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></g></svg>Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

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

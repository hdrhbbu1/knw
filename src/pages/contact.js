import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Contact extends React.Component {

    constructor (props) {
      super(props)
      this.state = {
        guests: '0',
        budget: '0',
        reason: '',
        optionalQuestions: false
      };
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleGuestsChange = this.handleGuestsChange.bind(this);
      this.handleBudgetChange = this.handleBudgetChange.bind(this);
      this.handleResasonChange = this.handleResasonChange.bind(this);
    }

    handleDateChange(date) {
      this.setState({
        eventDate: date
      });
    }

    handleGuestsChange(e) {
      this.setState({
        guests: e.target.value
      });
    }

    handleBudgetChange(e) {
      this.setState({
        budget: e.target.value
      });
    }

    handleResasonChange(e) {
      if (e.target.value === "Book A Wedding Package") {
        this.setState({
          reason: e.target.value,
          optionalQuestions: true
        });
      }
      else {
        this.setState({
          reason: e.target.value,
          optionalQuestions: false
        });
      }
    }

  render() {
    return (
      <div>

        <Helmet>
          <title>Contact</title>
          <meta name="description" content="" />
        </Helmet>

        <section className="contact-cover">
          <img src="http://knw.io/wp-content/uploads/2017/09/fort-funston-foggy-fun-beach-water-engagement-session-55.jpg"/>
          <h2>Contact</h2>
          <form className="form" method="post" name="contact" action="/thanks" data-netlify="true"  data-netlify-honeypot="bot">
            <div className="form__container">
              <input type="hidden" name="form-name" value="contact" />
              <input className="form__name" name="name" type="text" placeholder="Full Name" required/>
              <input className="form__email" name="email" type="email" placeholder="Email" required/>
              <select className="form__source" name="source" required>
                <option value="">How Did You Hear About Me?</option>
                <option value="Referral">Referral</option>
                <option value="Social Media">Social Media</option>
                <option value="Google Search">Google Search</option>
                <option value="Other">Other</option>
              </select>
              <select className="form__reason" name="reason" value={this.state.reason} onChange={this.handleResasonChange} required>
                <option value="">Reason For Contacting</option>
                <option value="Book A Lifestyle Package">Book A Lifestyle Package</option>
                <option value="Book A Wedding Package">Book A Wedding Package</option>
                <option value="General Inquiry / Question">General Inquiry / Question</option>
              </select>
              <div className="form__optional" className={(this.state.optionalQuestions ? "form__optional--visible" : "form__optional")}>
                <div className="form__date"><DatePicker name="date" selected={this.state.eventDate} onChange={this.handleDateChange} minDate={moment()} placeholderText="Event Date (Optional)"/></div>
                <input className="form__location" name="location" type="text" placeholder="Location / Venue"/>
                <div className="form__guests">
                  <label htmlFor="guests">Number Of Guests?</label> <span>{this.state.guests} Guests</span>
                  <input name="guests" type="range" value={this.state.guests} onChange={this.handleGuestsChange}  min="0" max="400" step="5" />
                </div>
                <div className="form__budget">
                  <label htmlFor="budget">Photography Budget?</label> <span>${this.state.budget}</span>
                  <input name="budget" type="range" value={this.state.budget} onChange={this.handleBudgetChange}  min="1000" max="10000" step="250" />
                </div>
              </div>
              <textarea className="form__message" name="message" type="text" placeholder="Message" required></textarea>
              <input className="form__submit" name="submit" type="submit" value="Send" />
              <input type="hidden" name="bot"/>
            </div>
          </form>
        </section>

      </div>
    )
  }
}

export default Contact

import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Contact = () => (
  <div>

    <Helmet>
      <title>Contact</title>
      <meta name="description" content="" />
    </Helmet>

    <h2>Contact Page</h2>
  <form className="form" method="post" name="contact" action="/thanks" data-netlify="true"  data-netlify-honeypot="bot">
    <fieldset>
      <div className="form__name">
        <label className="form__name__label" htmlFor="name">Name</label>
        <input className="form__name__input" name="name" type="text"/>
      </div>

      <div className="form__email">
        <label className="form__email__label" htmlFor="email">Email</label>
        <input className="form__email__input" name="email" type="email"/>
      </div>

      <div className="form__reason">
        <label className="form__reason__label" htmlFor="reason">Reason For Contacting</label>
        <select className="form__reason__select" name="reason">
          <option value=""> </option>
          <option value="Book A Family / Lifestyle Package">Book A Family / Lifestlye Package</option>
          <option value="Book A Wedding Package">Book A Wedding Package</option>
          <option value="General Inquiry / Question">General Inquiry / Question</option>
        </select>
      </div>

      <div className="form__date">
        <label className="form__date__label" htmlFor="date">Event Date <span>(Optional)</span></label>
        <input className="form__date__datepicker" name="date" type="date"/>
      </div>

      <div className="form__message">
        <label className="form__message__label" htmlFor="message">Message</label>
        <textarea className="form__message__textarea" name="message" type="text"></textarea>
      </div>

      <div className="form__bot">
        <label className="form__bot__label" htmlFor="message">Don't fill this out:</label>
        <input className="form__bot__input" name="bot" type="text"/>
      </div>

      <input className="form__submit btn" name="submit" type="submit" value="Send" />
    </fieldset>
  </form>

  </div>
)

export default Contact

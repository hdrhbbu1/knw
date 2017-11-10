import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Contact = () => (
  <div>

    <Helmet>
      <title>Contact</title>
      <meta name="description" content="" />
    </Helmet>

    <section className="contact-cover">
      <img src="http://knw.io/wp-content/uploads/2017/09/fort-funston-foggy-fun-beach-water-engagement-session-55.jpg"/>
      <h2>Contact</h2>
      <form className="form" method="post" name="contact" action="/thanks" data-netlify="true"  data-netlify-honeypot="bot">
        <div>
          <input type="hidden" name="form-name" value="contact" />
          <input className="form__name" name="name" type="text" placeholder="Full Name" required/>
          <input className="form__email" name="email" type="email" placeholder="Email" required/>
          <select className="form__reason" name="reason" required>
            <option value="">Select</option>
            <option value="Book A Family / Lifestyle Package">Book A Family / Lifestlye Package</option>
            <option value="Book A Wedding Package">Book A Wedding Package</option>
            <option value="General Inquiry / Question">General Inquiry / Question</option>
          </select>
          <input className="form__date" name="date" type="text" placeholder="Date"/>
          <textarea className="form__message" name="message" type="text" placeholder="Message" required></textarea>
          <input className="form__bot" name="bot" type="text" hidden/>
          <input className="form__submit" name="submit" type="submit" value="Send" />
        </div>
      </form>
    </section>
  </div>
)

export default Contact

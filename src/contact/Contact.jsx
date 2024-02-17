import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact'>
      <h5 className='tag--default'>Contact</h5>
      <h1 className='title--deafult'>Get in touch today for <span>expert assistance.</span></h1>

      <form action="">
        <label htmlFor="FullName:">Full Name:</label>
        <input type="text" placeholder='Chukwudera Austin Okafor' required />

        <label htmlFor="Email Address:">Email Address</label>
        <input type="email" placeholder='chukwuderaaustinokafor@gmail.com' required />

        <label htmlFor="Enquiry">Enquiry</label>
        <textarea name="message" id="message" placeholder='How to I get started with my project, I am looking for a development team' cols="30" rows="4"></textarea>

        <input className="bnt-default-blue" type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact

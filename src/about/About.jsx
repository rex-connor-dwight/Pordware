import React from 'react'
import "./About.css"
import AboutCard from "../assets/aboutImage.png"

function About() {
  return (
    <div className='About'>
      <img src={AboutCard} alt="" />
      <div className="About--Con">
      <h5 className='tag--default'>About</h5>
      <h1 className='title--deafult'>The Story <br /> <span>Behind Pordware</span></h1>
      <p className='paragraph--default'>
      Pordware's story is a tale of passion, innovation, and dedication. It started with a vision 
      to revolutionize productivity tools, empowering teams globally. With deep expertise and 
      relentless ambition, Pordware became a beacon of efficiency and collaboration. Join us on 
      this journey to redefine the future of work, one solution at a time.
      </p>

      <button className="bnt-default-blue">Join Us</button>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className='hero'>
      <h1 className='title--deafult'>Building Tomorrow’s Technology <span>Solution</span> Today </h1>
      <p className='paragraph--default'>Pioneering the future with cutting-edge technology solutions. 
        We're architects of innovation, dedicated to building tomorrow's 
        digital landscape. With a relentless pursuit of excellence, we're 
        shaping the world today for a smarter, more connected tomorrow.</p>

        <div className="hero--CTA">
        <button className="bnt-default-blue">About Us</button>
        <button className="features">Features</button>
        </div>
    </div>
  )
}

export default Hero

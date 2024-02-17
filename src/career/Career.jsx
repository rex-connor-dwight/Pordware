import React from 'react'
import "./Career.css"
import CareerImg from "../assets/careerImage.png"

function Career() {
  return (
    <div className='Career'>
      <div className="Career--Con">
        <h5 className='tag--default'>Career</h5>
        <h1 className='title--deafult'>We make it easy for teams to <span>build great software</span></h1>
        <p className='paragraph--default'>
        At Pordware, we simplify the software development process for teams. Our intuitive 
        tools and streamlined workflows empower collaboration, enabling teams to focus on 
        innovation and build exceptional software solutions efficiently and effectively.
        </p>
        <button className="features">Join Us!</button>
      </div>

      <img src={CareerImg} alt="" />
    </div>
  )
}

export default Career

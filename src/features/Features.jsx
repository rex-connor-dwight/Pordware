import React from 'react'
import "./Features.css"

function Features(props) {
  return (
    <div>

      <div className="features--card">
        <h1>{props.title}</h1>
        <p>{props.para}</p>
      </div>
    </div>
  )
}

export default Features

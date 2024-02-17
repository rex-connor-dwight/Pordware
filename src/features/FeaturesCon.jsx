import React from 'react'
import Features from './Features'
import featuresDB from '../../featuresDB'

function FeaturesCon(props) {

const featuresCard = featuresDB.map(items =>{
    return (
        <Features
            key = {items.id}
            title = {items.title}
            para = {items.paragrapgh}
        />
    )
})

  return (
    <div className='Features'>
      <h5 className='tag--default'>Features</h5>
      <h1 className='title--deafult'>Our <span>Features</span> <br /> Suite</h1>    

      {featuresCard}
    </div>
  )
}

export default FeaturesCon

import React from 'react'
import "./Community.css"

function Community() {
  return (
    <div className='Community'>
      <h5 className='tag--default'>Community</h5>
      <h1 className='title--deafult'> <span>Shaping</span> tomorrow's web with:</h1>

      <div className="communityCard--One">
        <div className="cc--Top">
              <div className="cc--Top--Left">
                  <h1>Community</h1>
                  <h2>Abuja.<span>js</span></h2>
              </div>
    
              <button className="cc--BTN">Coming Soon</button>
        </div>

        <p>
        Join Abuja.js, where JavaScript developers unite! Dive into lively discussions, 
        share insights, and collaborate on cutting-edge projects. Elevate your skills, 
        connect with peers, and be part of the vibrant tech community shaping tomorrow's web.
        </p>
      </div>


      <div className="communityCard--Two">
        <div className="cc--TopTwo">
              <div className="cc--Top--LeftTwo">
                  <h1>Community</h1>
                  <h2>Code a Change</h2>
              </div>
    
              <button className="cc--BTNTwo">Coming Soon</button>
        </div>

        <p>
        Be come a part of a system where developers merge technology with humanitarian act. 
        Join us code and purpose while making a real-world impact. Together, let's use code 
        as a catalyst for positive change and make a meaningful impact on society.
        </p>
      </div>


      <div className="communityCard--One">
        <div className="cc--Top">
              <div className="cc--Top--Left">
                  <h1>Community</h1>
                  <h2>TACT</h2>
              </div>
    
              <button className="cc--BTN">Coming Soon</button>
        </div>

        <p>
        In the spirit of collaboration, Pordware and CADSI has teamed up to implement an 
        Initiative called Tech A Child Today (TACT) Initiative, aimed at empowering the
         younger generation with tech skills that will set them up for greater societal impact.
        </p>
      </div>
    </div>
  )
}

export default Community

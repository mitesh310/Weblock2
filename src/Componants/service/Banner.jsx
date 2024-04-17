import React from 'react'
import './banner.css'

export default function Banner(props) {

  const { heading, title, desc, desc2, button, scrollToGetin } = props;

  
  return (
    <>

    <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-text">
                  <h1>{heading}</h1>
                  <p><span>{title}</span></p>
                  <h6>{desc} <br /> {desc2}
                  </h6>
                  <button onClick={scrollToGetin}>
                    <h5>{button}</h5>
                  </button>
                  <div className='mt-5'>
                  <div></div>
                  <i class="fa-solid fa-briefcase m-3 icon"></i>5+ Years of Experience
                  <i class="fa-solid fa-headset m-3 icon"></i>148+ Clients
                  <i class="fa-solid fa-rocket m-3 icon"></i>98% Success rate
                  </div>
              </div>
            </div>
          </div>
            
        </div>
    </div>

    <div className='portfolio-section'>
      <div className="images">
        <div className="image-slide">
          <img src="./image/webdevlopment/Untitled-12.jpg" alt="" />
          <img src="./image/webdevlopment/Untitled-13.jpg" alt="" />
          <img src="./image/webdevlopment/Untitled-14.jpg" alt="" />
          <img src="./image/webdevlopment/Untitled-15.jpg" alt="" />
          <img src="./image/webdevlopment/Untitled-16.jpg" alt="" />
          <img src="./image/webdevlopment/Untitled-17.jpg" alt="" />
        </div>
        <div className="image-slide">
        <img src="./image/webdevlopment/Untitled-12.jpg" alt="" />
          <img src="./image/webdevlopment/Untitled-13.jpg" alt="" />
          <img src="./image/webdevlopment/Untitled-14.jpg" alt="" />
          <img src="./image/webdevlopment/Untitled-15.jpg" alt="" />
          <img src="./image/webdevlopment/Untitled-16.jpg" alt="" />
          <img src="./image/webdevlopment/Untitled-17.jpg" alt="" />
        </div>
        
      </div>
    </div>

    </>
  )
}

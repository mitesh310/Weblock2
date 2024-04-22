import React, { useEffect } from 'react'
import './banner.css'
import ScrollReveal from 'scrollreveal';

export default function Banner(props) {



  useEffect(() => {
    const sr = ScrollReveal({
      duration: 1000,
      distance: '30px',
      delay: 300,
      opacity: 0,
      easing: 'ease-in-out',
      cleanup: true
    });

  
    sr.reveal('.banner-text h1',{
      origin: 'bottom',
      distance: '30px'
    });
    sr.reveal('.banner-text h6',{
      origin: 'bottom',
      distance: '30px'
    });
    sr.reveal('.banner-text p',{
      origin: 'bottom',
      distance: '30px'
    });


    return () => {
      sr.destroy(); 
    };
  }, []); 
  
  
  


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
                  {/* <div></div> */}
                  <i class="fa-solid fa-briefcase me-3 icon"></i>5+ Years of Experience
                  <i class="fa-solid fa-headset mx-3 icon"></i>148+ Clients
                  <i class="fa-solid fa-rocket mx-3 icon"></i>98% Success rate
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

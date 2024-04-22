import React, { useRef,useEffect } from 'react';
import Banner from '../../service/Banner'
import './ios.css'
import Getin from '../../service/Getin';
import ScrollReveal from 'scrollreveal';


export default function Ios() {

    
  useEffect(() => {
        
    ScrollReveal().reveal('.seaction h2', {
      duration: 1000,
      distance: '30px',
      delay: 300,
      opacity: 0,
      easing: 'ease-in-out',
      origin: 'bottom',
      cleanup: true 
    });
  }, []);
  

  const getinRef = useRef(null);

  const scrollToGetin = () => {
    if (getinRef.current) {
      getinRef.current.scrollIntoView({ behavior: 'smooth' });

    }
  };


  return (
    <>
      <Banner 
      heading="IOS Development Services" 
      desc="Welcome to our iOS development services page, where we bring your app ideas to life on the iOS platform. Our team of expert developers is here to guide you through every step of the iOS app development process, ensuring that your vision is transformed into a successful and feature-rich application."
      button="Get Started"
      scrollToGetin={scrollToGetin} 
      />


      <div className="ios">
        <div className="container">
          <h2>Our IOS Development Process</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Discovery Phase</h5>
                <p>We start by understanding your app idea, target audience, and business goals. Our team conducts thorough market research and competitor analysis to identify opportunities and challenges.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Design Phase</h5>
                <p>Our talented designers create stunning UI/UX designs that align with your brand identity and enhance user engagement. We prioritize usability and functionality to deliver an intuitive and visually appealing app interface.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Development Phase</h5>
                <p>Our experienced developers utilize the latest technologies and best practices to build robust and scalable iOS applications. We follow agile development methodologies to ensure flexibility, transparency, and timely delivery.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Testing Phase</h5>
                <p>We perform rigorous testing across various devices and iOS versions to identify and fix any bugs or performance issues. Our QA team conducts thorough testing to ensure that your app meets the highest quality standards and delivers a seamless user experience.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Deployment Phase</h5>
                <p>We assist you in submitting your app to the Apple App Store, ensuring compliance with Apple's guidelines and requirements. Our team provides ongoing support and maintenance to keep your app up-to-date and optimized for performance.</p>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

      <div ref={getinRef}>
        <Getin
        title1="Optimize Your Business with Leading "
        title2="IOS Development Firm "
        />
      </div>

      <div className="i-why">
      <div className="container">
        <h2>Why Choose IOS Development?</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-8 mt-5">
            <div className="chek mt-3">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <p>IOS, the operating system powering Apple's iPhone, iPad, and iPod Touch, offers unparalleled performance, security, and user experience.</p>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <p>Developing an iOS app allows you to reach a lucrative market of millions of iPhone and iPad users worldwide.</p>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <p>With our iOS development services, you can tap into this vast audience and elevate your brand to new heights.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <img className='ios-img' src="./image/ios/image 117.png" alt="" />
          </div>
        </div>
        
        

      </div>
    </div>

    {/* this seaction css anglur.css */}
    <div className="point">
      <div className="container">
        <h2>Key Features of Our IOS Development Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Custom IOS App Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Cross-platform Compatibility</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Analytics Integration</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> User Acceptance Testing (UAT)</h6>
            </div>            
          </div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Integration of Cutting-edge Technologies</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Continuous Support and Maintenance</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Social Media Integration</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Localization Support</h6>
            </div>      
            
          </div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Swift ProgrammingSwift Programming</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Push Notifications</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Location Services</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Performance Optimization</h6>
            </div>           
            
          </div>

        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>


    </>
  )
}

import React, { useRef } from 'react';
import './new.css'
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';

export default function New() {

    const customHr = <hr className="custom-hr" />;

    const getinRef = useRef(null);

    const scrollToGetin = () => {
      if (getinRef.current) {
        getinRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };


  return (
    <>
    <Banner 
    heading="ReactJS Development Company" 
    desc="At Weblock infosoft, we're passionate about leveraging the power of React.js to build exceptional web experiences. As a leading React.js development company, we specialize in creating dynamic, interactive, and scalable web applications that propel businesses forward. "
    button="Get started"
    />

<Solution
    heading="React JS Development Solutions"
    customHr={customHr}

    title1="Custom ReactJS Development"
    desc1="Our team of skilled developers harnesses the full potential of React.js to create tailor-made solutions that meet your specific requirements. From user-friendly interfaces to complex single-page applications, we deliver results that exceed expectations."
    img1="./image/react/image 104.png"

    title2="React Native App Development"
    desc2="Unlock cross-platform compatibility with our native app development expertise. Our team crafts dynamic, multi-dimensional mobile applications tailored to your needs, ensuring seamless performance across various platforms."
    img2="./image/react/image 105.png"
    />

    <Solution
    title1="React JS Plugin Development"
    desc1="ReactJS India specializes in developing customized plugins while meeting your enterprise-level requirements. Make the most out of your investment by creating scalable plugins."
    img1="./image/react/image 106.png"

    title2="React Mobile Web App Development"
    desc2="Unlock the potential of your business with our ReactJS-powered mobile apps, meticulously crafted by our experts using React Native and Redux. Elevate user experience across various devices with feature-rich functionalities. From coding to design and project management, we've got you covered every step of the way, ensuring high-quality results for your business ventures."
    img2="./image/react/image 107.png"
    />
        
    <Solution
    title1="Reactjs Game Development"
    desc1="Elevate your gaming experience with our cutting-edge ReactJS game development services. Our team of experts specializes in crafting immersive and engaging games using the power of ReactJS. From captivating visuals to seamless gameplay mechanics, we deliver top-notch gaming solutions tailored to your needs. Dive into the world of limitless possibilities and let us bring your game ideas to life with ReactJS."
    img1="./image/react/image 108.png"

    title2="React JS Migration Service "
    desc2="Upgrade to ReactJS seamlessly with our expert team's real-time guidance. We ensure a smooth migration process, preserving your application's current functionality while unlocking the benefits of ReactJS's feature-rich and scalable architecture."
    img2="./image/react/image 111.png"
    />
        
    <Solution
    title1="React JS Support and Maintenance"
    desc1="Ensuring the smooth operation of your React.js applications is essential for your business continuity. Our maintenance and support services cover everything from troubleshooting to performance optimization, allowing you to focus on your core objectives."
    img1="./image/react/image 110.png"


    />

    <div ref={getinRef}>
        <Getin 
                title1="Optimize Your Business with Leading "
                title2="React Js Development Firm"
        />
      </div>


    <div className="point">
      <div className="container">
        <h2>Result-Driven React JS Development Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> React JS API Integration</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> React Application Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> ReactJS Upgradation</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> React JS Interactive UI Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> React JS Enterprise App Development</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Redux Web Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> React Mobile App Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Reactjs Development Environment</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> ReactJS Customization Services</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> ReactJS Portal Development</h6>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>
    </>
  )
}

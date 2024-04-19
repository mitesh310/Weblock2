import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Getin from '../../service/Getin';

import './native.css'

export default function Native() {




  const getinRef = useRef(null);

  const scrollToGetin = () => {
    if (getinRef.current) {
      getinRef.current.scrollIntoView({ behavior: 'smooth' });

    }
  };


  return (
    <>
       <Banner 
        heading="React Native App Development Company" 
        desc="Weblock Infosoft is a premier React Native app development company, specializing in delivering top-notch React Native development services. With a focus on transparency, flexibility, and agility, we ensure that your React Native app achieves success and stands out on both the Android Play Store and iOS App Store charts. Trust us to bring your app idea to life and propel it to the forefront of the mobile market. "
        button="Get started"
        scrollToGetin={scrollToGetin} 
      />
      <div className="seaction">
        <div className="container">
          <h2>Introduction to React Native</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row mt-5">
            <div className="col-lg-5">
              <img className='se-img' src="./image/native/image 104.png" alt="" />
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5 my-5">
              <p>React Native is an open-source framework developed by Facebook for building native mobile applications using JavaScript and React. It allows developers to write code once and deploy it across multiple platforms, significantly reducing development time and cost. React Native combines the performance and user experience of native mobile apps with the flexibility and productivity of web development, making it an ideal choice for building cross-platform mobile applications.</p>
            </div>
          </div>
        </div>  
      </div>  
 


      <div className="native">
        <div className="container">
          <h2>Key Features of React Native</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Cross-Platform Compatibility</h5>
                <p>React Native enables developers to build mobile apps that work seamlessly on both iOS and Android platforms, utilizing a single codebase. This reduces the need for platform-specific development and allows for faster development cycles and easier maintenance.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Native Performance</h5>
                <p>React Native bridges the gap between native and web development by rendering components using native APIs. This ensures that React Native apps deliver native performance and user experience, with smooth animations, fast load times, and responsive UIs.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Reusable Components</h5>
                <p>React Native promotes a component-based architecture, allowing developers to create reusable UI components that can be shared across different parts of the application or even between different projects.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Hot Reloading</h5>
                <p>React Native supports hot reloading, allowing developers to see the changes they make to the code reflected instantly on the device or emulator without recompiling the entire application. This enables faster iteration and real-time debugging, enhancing developer productivity.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Third-Party Plugins and Libraries</h5>
                <p>React Native ecosystem offers a wide range of third-party plugins and libraries, providing access to native device features and functionalities, such as camera, geolocation, push notifications, and more. These plugins streamline development and extend the capabilities of React Native apps.</p>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <center><button onClick={scrollToGetin}>More Discuss With Us</button></center>
        </div>
      </div>  

      <div ref={getinRef}>
        <Getin 
          title1="Interested in Starting React Native  "
          title2="With Us?"
        />
      </div>

      <div className="get-native">
        <div className="container">
          <h2>Get Started with React Native Today</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <p>Ready to leverage the power of React Native for your mobile app development projects? Contact us to learn more about our React Native development services and how we can help you build high-quality, cross-platform mobile applications that engage users and drive business growth.</p>
        </div>
      </div>


      <div className="benifits-native">
      <div className="container">
        <h2>Benefits of React Native Development</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Cost Efficiency: <span>React Native allows for code reuse across platforms, reducing development time and cost compared to building separate native apps for iOS and Android.  </span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'>Faster Time-to-Market: <span>  With its cross-platform compatibility and hot reloading feature, React Native enables rapid development and iteration, allowing businesses to bring their mobile apps to market faster.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'>  Native Performance: <span>  React Native apps deliver native performance and user experience, ensuring smooth animations, fast load times, and responsive UIs, which are crucial for user satisfaction and retention.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Scalability: <span> React Native's component-based architecture and modular approach make it easy to scale and maintain mobile apps as they grow in complexity and user base.</span></h5>
        </div>
        

      </div>
    </div>





    </>
  )
}

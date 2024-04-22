import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Getin from '../../service/Getin';
import './django.css'
import MovingComponent from 'react-moving-text'
// import Solution from '../Solution';

export default function Spring() {


  // const customHr = <hr className="custom-hr" />;

  const getinRef = useRef(null);

  const scrollToGetin = () => {
    if (getinRef.current) {
      getinRef.current.scrollIntoView({ behavior: 'smooth' });

    }
  };


  return (
    <>
      <Banner 
        heading="Spring Boot:
        Simplifying Web Development" 
        desc="Welcome to our website development services! As part of our comprehensive offerings, we specialize in Spring Boot development, offering a streamlined approach to building robust and scalable web applications. In this section, we provide an overview of Spring Boot, its features, and how it can accelerate your web development projects."
        button="Get Started"
        scrollToGetin={scrollToGetin} 
      /> 


{/* this seaction css native .css */}
      <div className="seaction-native">
        <div className="container">
          <MovingComponent
                    type="fadeInFromBottom"
                    duration="1000ms"
                    delay="1s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
          <h2>What are GCP Web Services?</h2>
          </MovingComponent>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row mt-5">
            <div className="col-lg-5">
              <img className='se-img' src="./image/spring/image 104.png" alt="" />
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <p>Spring Boot is an open-source Java framework designed to simplify the development of Java-based web applications. Built on top of the popular Spring framework, Spring Boot provides a convention-over-configuration approach, reducing the complexity of application setup and configuration. It aims to enable developers to create production-ready applications with minimal effort and boilerplate code.</p>
            </div>
          </div>
        </div>  
      </div> 


    {/* this seaction css django.css */}
      <div className="jango">
        <div className="container">
          <h2>Key Features of Spring Boot</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Auto-Configuration</h5>
                <p>Spring Boot features intelligent auto-configuration, which automatically configures your application based on dependencies and the environment. This eliminates the need for manual configuration and reduces the amount of boilerplate code required, allowing developers to focus on business logic.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Standalone</h5>
                <p>Spring Boot applications are standalone, meaning they do not require an external application server to run. Spring Boot embeds an embedded servlet container, such as Tomcat, Jetty, or Undertow, allowing applications to be deployed and run as executable JAR files.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Spring Boot Starter</h5>
                <p>Spring Boot provides a collection of starter dependencies, which are pre-configured sets of dependencies for common use cases, such as web applications, data access, security, and more. These starters simplify dependency management and make it easy to get started with Spring Boot projects.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Actuator</h5>
                <p>Spring Boot Actuator provides built-in endpoints for monitoring and managing your application at runtime. Actuator endpoints expose metrics, health checks, configuration information, and more, allowing you to monitor and troubleshoot your application effectively.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Spring Boot DevTools</h5>
                <p>Spring Boot DevTools provides additional development-time features, such as automatic application restarts, live reloads, and remote debugging. These tools improve developer productivity and streamline the development process.</p>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <center><button onClick={scrollToGetin}>More Discuss With Us</button></center>
        </div>
      </div>


      <div ref={getinRef}>
        <Getin 
        title1="Interested in Starting Spring  "
        title2="Boot With Us? "
        />
      </div>

    <div className="d-why benifits-spring">
      <div className="container">
        <h2>Benefits of Spring Boot</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Rapid Development: <span>Spring Boot's convention-over-configuration approach and starter dependencies enable rapid development of web applications, reducing time-to-market and development effort.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'>Simplified Configuration: <span>  Spring Boot's auto-configuration feature simplifies application setup and configuration, reducing the need for manual configuration and boilerplate code.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Innovation: <span>Spring Boot promotes best practices for building production-ready applications, including security, logging, monitoring, and more, out-of-the-box.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Ecosystem : <span>Spring Boot benefits from a rich ecosystem of libraries, tools, and community support, providing resources, documentation, and third-party integrations to support development efforts.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Scalability:  <span> Spring Boot applications are scalable and suitable for a wide range of use cases, from small-scale projects to large enterprise applications, thanks to its modular architecture and flexible design.</span></h5>
        </div>

      </div>
    </div>

    </>
  )
}

import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';


export default function Node() {

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
        heading="Node.js Development Company" 
        desc="Discover a trusted Node.js development company specializing in scalable, feature-rich web and mobile app solutions. Our adept team merges deep expertise with AI tools to craft enterprise solutions leveraging asynchronous, event-driven JavaScript runtime. Partner with us to harness Node.js application development expertise for building cutting-edge enterprise solutions that seamlessly integrate human skills with AI brilliance."
        button="Get Started"
        scrollToGetin={scrollToGetin} 
    />
    <Solution 
        heading="Result-oriented Node js Development Services"
        customHr={customHr}

        title1="Node.js web Development"
        desc1="Utilize our Node.js web application development services to create unique and innovative web applications. Our Node.js consultants will propel your business forward, giving you a competitive edge in the market."
        img1="./image/node/image 104.png"
    
        title2="Node.js Product Development "
        desc2="Supercharge your business with lightweight, scalable, and feature-rich web applications. Harness our result-oriented Node.js development services to captivate end-users, optimizing usability and driving engagement to new heights. "
        img2="./image/node/image 105.png"
    />

    <Solution
        title1="Back-end Dashboards Development"
        desc1="Being the leading Node js web development company, clients around the world rely upon Node js development services to build dashboard solutions tailored to their unique business requirements."
        img1="./image/node/image 106.png"

        title2="Node js Blockchain Application"
        desc2="Beyond Node.js software development, our experts excel in crafting Blockchain-based BaaS solutions that power efficient Cryptocurrency trading."
        img2="./image/node/image 107.png"
    />

    <Solution
        title1="Google V8 Engine Integration"
        desc1=" Explore our advanced Node.js web development services for cleaner, more readable JavaScript code. Our team not only specializes in Node.js web application development but also integrates the powerful Google V8 engine seamlessly into your solutions."
        img1="./image/node/image 108.png"

        title2="Real-Time Web Socket Programming"
        desc2="Swift responsiveness is crucial for app success. Utilizing Node.js, we employ real-time web socket programming, ensuring low-latency benefits in web application development."
        img2="./image/node/image 109.png"
    />

    <Solution
        title1="Flexible Module Modification"
        desc1="Being an advanced Node js development agency, we are well-versed in developing tailored solutions and module modifications so upcoming Node.js mobile app release changes can be conveniently integrated."
        img1="./image/node/image 110.png"

        title2="NPM Development"
        desc2="Seeking help with creating and publishing your private NPM package? As a leading Node software development company, we ensure the security and reliability of your Node packages throughout the process."
        img2="./image/node/image 111.png"
    />

    <Solution
        title1="Nodejs Hosting Services"
        desc1="Beyond full-stack web development with Node.js, we offer expertise in hosting solutions on top platforms including AWS, Heroku, NodeChef, Microsoft Azure, Digital Ocean, GCP, Glitch, and more."
        img1="./image/node/image 112.png"

        title2="Node.js Consulting Services"
        desc2="Our Node.js consulting services offer bespoke solutions tailored to your project's needs. Leveraging the latest trends and best practices, our experienced professionals deliver optimal solutions aligned with your development requirements. "
        img2="./image/node/image 113.png"
    />

    <div ref={getinRef}>
        <Getin 
        title1="Optimize Your Business with "
        title2="Leading node Js Development Firm"
        />
    </div>

    <div className="point">
      <div className="container">
        <h2>Other Significant Node js web Development services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Custom NodeJS Programming</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Node.js Chatbot development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> CMS & Backend Solutions</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Social networking apps</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> ECommerce Web Development</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Real-time chat application development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Image processing apps</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Node.js Team Augmentation</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> API integration</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Node js Integration with SAP</h6>
            </div>
            
          </div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> System Monitoring Dashboards</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Migration and Upgradation</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Backend Dashboards Development</h6>
            </div>            
          </div>
          
        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>

    </>
  )
}

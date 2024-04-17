import React, { useRef } from 'react';
import './angular.css'
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';



export default function Angular() {

    const customHr = <hr className="custom-hr" />;

    const getinRef = useRef(null);

    const scrollToGetin = () => {
      if (getinRef.current) {
        getinRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    

  return (
    <>
    <div className="angular-bg">
        <Banner 
        heading="AngularJS Development Company" 
        desc="Experience dynamic success with our leading AngularJS development services. Our expert team excels in crafting scalable web solutions, leveraging AI tools to streamline development processes and enhance performance. Embrace the future of AngularJS development with us today! "
        button="Get started"
        scrollToGetin={scrollToGetin} 
        />
    </div>

    <Solution
    heading="AngularJS Development Solutions"
    customHr={customHr}

    title1="AngularJS Web App Development"
    desc1="Elevate your online presence with our bespoke AngularJS web app development solutions. Our expert developers harness the power of AngularJS to create dynamic and interactive applications tailored to your needs. From seamless user experiences to unparalleled performance and scalability, we ensure your business remains at the forefront of the digital realm."
    img1="./image/angular/image 104.png"

    title2="AngularJS Mobile App Development"
    desc2="Empower your mobile presence with our dedicated AngularJS development team. We specialize in crafting feature-rich and intuitive mobile applications, seamlessly running on both iOS and Android platforms. Engage your audience with responsive interfaces, ensuring a smooth and captivating user experience."
    img2="./image/angular/image 105.png"
    />

    <Solution
    title1="AngularJS Web App Development"
    desc1="Unlock new possibilities for your AngularJS projects with our custom plugins. Enhance capabilities, streamline development, and achieve your goals with our professional expertise in AngularJS plugin development."
    img1="./image/angular/image 106.png"

    title2="Angular Migration Services"
    desc2="Simplify your AngularJS to Angular migration process with our specialized services. We handle migration maintenance, analyze code compatibility, and seamlessly transition your applications for modernization without disruption."
    img2="./image/angular/image 107.png"
    />
        
    <Solution
    title1="Angular Single Page App Development"
    desc1="Elevate user experiences with high-performing SPAs crafted by our skilled Angular development team. Utilize AngularJS's power for seamless navigation, fast loading times, and exceptional user engagement. Contact the leading Angular JS development company today."
    img1="./image/angular/image 108.png"

    title2="AngularJS Widget Development"
    desc2="Elevate user engagement with our AngularJS widget development services. Our expert team crafts visually appealing and interactive widgets that seamlessly integrate into your applications, enhancing user experience and delivering dynamic content."
    img2="./image/angular/image 109.png"
    />
        
    <Solution
    title1="AngularJS Consultation"
    desc1="Access strategic guidance and tailored solutions with our AngularJS consultation services. Our expert consultants offer in-depth analysis and best practices to help you harness the full potential of Angular for your projects."
    img1="./image/angular/image 110.png"

    title2="Maintenance & Support"
    desc2="Keep your Angular applications running smoothly with our comprehensive maintenance and support services. Our expert team offers timely bug fixes, performance enhancements, and troubleshooting to ensure your systems remain secure, optimized, and up-to-date."
    img2="./image/angular/image 111.png"
    />

    <div ref={getinRef}>
        <Getin 
                title1="Optimize Your Business with Leading "
                title2="Angular.js Development Firm"
        />
      </div>


    <div className="point">
      <div className="container">
        <h2>Defining Success With Our Goal-oriented AngularJS Development Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Angular REST API Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> ECommerce App Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> AngularJS App Migration</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Angular UI/UX Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Angular Code Migration</h6>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Angular Upgrade Services</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Enterprise App Interface and Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Angular Progressive Web App Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Angular Cross-Platform App Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Angular Real-time App Development</h6>
            </div>
          </div>

        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>
   
    </>
  )
}

import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';

export default function Flutter() {
    
    
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
        heading="Flutter App Development Company " 
        desc="With a leading Flutter app development company, create robust, natively compiled cross-platform apps. Our dedicated team, equipped with AI tools, streamlines business processes and crafts feature-rich applications for web, mobile, and desktop. Harness our advanced Flutter app development services for unparalleled efficiency and innovation."
        button="Get Started"
        scrollToGetin={scrollToGetin} 
    />
    <Solution 
        heading="Flutter App Services"
        customHr={customHr}

        title1="FlutterCraft Solutions"
        desc1="FlutterCraft Solutions, where innovation meets excellence in app development. Our team specializes in crafting seamless, high-performance mobile applications using Flutter technology. From concept to launch, we blend creativity with cutting-edge solutions to bring your vision to life. Experience the power of FlutterCraft Solutions and elevate your digital presence today."
        img1="./image/flutter/image 104.png"
    
        title2="SwiftFlutter Services "
        desc2="SwiftFlutter Services: Your gateway to seamless cross-platform development. Harnessing the power of Swift and Flutter, we craft stunning, high-performance apps that captivate users across iOS and Android. From concept to launch, trust us to deliver innovative solutions tailored to your unique needs, ensuring your digital presence stands out in today's competitive landscape."
        img2="./image/flutter/image 105.png"
    />

    <Solution
        title1="FlutterForge Development "
        desc1="FlutterForge Development: Crafting your digital vision with precision and innovation. Specializing in Flutter app development, we forge seamless and stunning cross-platform experiences. From concept to deployment, our team delivers tailored solutions that elevate your brand and engage your audience. Let's build your next breakthrough together. "
        img1="./image/flutter/image 106.png"

        title2="RapidFlutter Solutions "
        desc2="RapidFlutter Solutions: Accelerating your digital journey with agile expertise. We specialize in crafting dynamic Flutter applications that redefine user experiences. From concept to launch, our team delivers swift, scalable solutions tailored to your unique needs. Embrace innovation and speed with RapidFlutter Solutions as your trusted development partner."
        img2="./image/flutter/image 107.png"
    />
     <Solution
        title1="FlutterPulse Development "
        desc1="FlutterPulse Development: Igniting innovation with Flutter technology. We specialize in crafting dynamic mobile applications that pulse with creativity and efficiency. Our team harnesses the power of Flutter to deliver seamless user experiences across platforms. Let us bring your ideas to life and propel your business into the future with our cutting-edge development solutions. "
        img1="./image/flutter/image 108.png"

        title2="AgileFlutter Services "
        desc2="AgileFlutter Services: Your partner in agile software development excellence. With a focus on flexibility and efficiency, we empower businesses to adapt and thrive in today's dynamic market. From streamlined project management to rapid prototyping, trust us to deliver innovative solutions that meet your evolving needs. Let's embark on a journey of continuous improvement and success together."
        img2="./image/flutter/image 109.png"
    />
     <Solution
        title1="FlutterSwift Solutions "
        desc1="FlutterSwift Solutions: Your path to seamless cross-platform development. Harnessing the power of Flutter and Swift, we deliver dynamic mobile solutions that redefine user experiences. From elegant UI designs to robust functionality, trust us to bring your app ideas to life with speed and precision. Let's build your next big thing together  "
        img1="./image/flutter/image 110.png"

        title2="DevFlutter Partners "
        desc2="DevFlutter Partners: Your trusted ally in digital transformation. Specializing in Flutter app development, we bring your ideas to life with sleek, cross-platform solutions. With a focus on innovation and efficiency, we empower businesses to thrive in today's dynamic market. Partner with us to unlock the full potential of your digital strategy and stay ahead of the curve."
        img2="./image/flutter/image 111.png"
    />
    <Solution
        title1="FlutterBurst Development  "
        desc1="FlutterBurst Development: Igniting innovation with cross-platform excellence. We specialize in crafting dynamic and feature-rich applications using Flutter, delivering seamless user experiences across all devices. Harness the power of our expertise to accelerate your app development journey and stand out in today's competitive market. Let FlutterBurst be your partner in transforming your ideas into reality."
        img1="./image/flutter/image 112.png"
    />

    <div ref={getinRef}>
        <Getin 
        title1="Optimize Your Business with Leading"
        title2=" Flutter Development Firm"
        />
    </div>

    <div className="point">
      <div className="container">
        <h2>Flutter APP Development Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Flutterify Tech</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> RapidFlutter Labs</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> FlutterLeap Solutions</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> AgileFlutter Forge</h6>
            </div>
            
          </div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> SwiftFlutter Innovations</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> FlutterVerse Services</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> ProFlutter Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> FlutterRise Solutions</h6>
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

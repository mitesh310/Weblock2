import React, { useRef } from 'react';
import Banner from '../Banner'
import './mobile.css'
import Getin from '../Getin'
import Price from '../Price'

export default function Mobile() {

  const getinRef = useRef(null);

  const scrollToGetin = () => {
    if (getinRef.current) {
      getinRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>

        <Banner
          heading="Mobile App Development Services"
          title="Coding dreams into reality, one app at a time."
          desc="As a top Mobile App Development Company, we specialize in transforming mobile app ideas into digital masterpieces tailored for businesses of all sizes. Our Mobile App Development Services cater to iOS, Android, and modern mobile platforms, helping businesses create cutting-edge apps to engage users effectively."
          button="Free Consultation Request"
          scrollToGetin={scrollToGetin} 
        />

        <div className="mobile">
          <div className="container">
              <h2>Explore Our Mobile App Development Services</h2>
              <div className="custom-hr">
                <hr />
              </div>
              
              <div className="row">
                <div className="col-lg-6 my-3">
                  <div className="box">
                    <h4>Android App Development</h4>
                    <p>Our Mobile App Development Service ensures reliable and feature-rich experiences, leveraging the latest Android trends for seamless performance on all devices. Discover innovation and intelligence in crafting personalized Android apps that add significant value to your brand and business. Partner with us to unlock the full potential of Android app development for your digital success.</p>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> Android Wear App Development</h6>
                    </div>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> Android Mobile App Development</h6>
                    </div>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> Android Tablet App Development</h6>
                    </div>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> Android TV App Development</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-3">
                  <div className="box">
                    <h4>IOS App Development</h4>
                    <p>Developing top-notch iOS mobile apps for the complete iOS ecosystem is our forte. Our Mobile App Development agency excels in crafting feature-rich, interactive, and cutting-edge iOS apps for all iOS devices such as iPhones, MacMini, tablets, and smartwatches, elevating your brand's market presence significantly.</p>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> IPhone App Development</h6>
                    </div>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> App Clips Development</h6>
                    </div>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> IPad App Development</h6>
                    </div>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> Apple Watch App Development</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 my-3">
                  <div className="box">
                    <h4>Mobile App Development Consulting</h4>
                    <p>Benefit from our comprehensive consulting support for mobile apps, covering market positioning, architecture, and development processes from inception to completion. Utilize Mobile App Development Consulting best practices to captivate users, drive attention, and achieve growth seamlessly from concept to launch.</p>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> Hybrid Mobile App Development</h6>
                    </div>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> Hybrid Tablet App Development</h6>
                    </div>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> Hybrid TV App Development</h6>
                    </div>
                    
                  </div>
                </div>
                <div className="col-lg-6 my-3">
                  <div className="box">
                    <h4>Cross-Platform App Development</h4>
                    <p>Get versatile cross-platform mobile apps using a single codebase for iOS, Android, and beyond. Our custom cross-platform applications prioritize enhanced UX across multiple platforms, ensuring wider reach and seamless adaptation to diverse operating systems, all within your budgetary constraints.</p>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> Mobile App Modernization</h6>
                    </div>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> Mobile App Launch</h6>
                    </div>
                    <div className="chek">
                      <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                      <h6 className='mb-4'> Mobile App Audit</h6>
                    </div>
                  </div>
                </div>
              </div>
              <center><button onClick={scrollToGetin} className='mt-5'><h5>Share Your Project with Us for Discussion</h5></button></center>
          </div>
        </div>
        


        <Price 
        heading="Recruit Mobile App Development Team As per Your Requirement"
        
        title1= "Premium"
        price1= "15"
        desc1= "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        title2= "Premium"
        price2= "15"
        desc2= "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        title3= "Premium"
        price3= "15"
        desc3= "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="other">
          <div className="container">
            <h2 className='mt-5'>Other Mobile Application Development Services</h2>
            <div className="row mt-5">
              <div className="col-lg-3"></div>
              <div className="col-lg-3">
                <div className="chek">
                  <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                  <h6 className='mb-4'> Mobile App Design</h6>
                </div>
                <div className="chek">
                  <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                  <h6 className='mb-4'> Product design</h6>
                </div>
                <div className="chek">
                  <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                  <h6 className='mb-4'> UI/UX Design</h6>
                </div>
                <div className="chek">
                  <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                  <h6 className='mb-4'> Cloud App Development</h6>
                </div>
                <div className="chek">
                  <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                  <h6 className='mb-4'> Mobile App Integration</h6>
                </div>
                <div className="chek">
                  <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                  <h6 className='mb-4'> Legacy App Development</h6>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="chek">
                  <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                  <h6 className='mb-4'> Mobile App Modernization</h6>
                </div>
                <div className="chek">
                  <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                  <h6 className='mb-4'> Wearables App Development</h6>
                </div>
                <div className="chek">
                  <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                  <h6 className='mb-4'> Mobile App Testing and QA</h6>
                </div>
                <div className="chek">
                  <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                  <h6 className='mb-4'> Ongoing Maintenance and support</h6>
                </div>
                <div className="chek">
                  <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                  <h6 className='mb-4'> Enterprise Mobile App Development</h6>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        <div ref={getinRef}>
        <Getin 
        title1="Get In Touch With Best Software "
        title2="Consulting Company"
        />
      </div>
        <div className="inno">
          <div className="container">
            <h2>Innovative Technologies to Enhance Your Mobile App's Future Potential</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <div className="row">
              <div className="col-lg-6 my-3">
                <div className="box">
                  <center center><img src="./image/app/AI.png" alt="" /></center>
                  <h5 className='m-3'>Artificial Intelligence</h5>
                  <p>With our AI expertise, we elevate your mobile app development experience by automating workflows and implementing cognitive problem-solving capabilities. Our solutions include chatbots, conversational UI, personalized alerts, real-time market trend analysis, healthcare diagnostics, and more, enhancing user experiences and driving innovation.</p>
                </div>
              </div>
              <div className="col-lg-6 my-3">
                <div className="box">
                  <center center><img src="./image/app/chatbot.png" alt="" /></center>
                  <h5 className='m-3'>Chatbots</h5>
                  <p>Transform your sales funnel with our chatbot development expertise, scaling sales and service experiences seamlessly. Leverage AI-driven decision-making for real-time support, empowering your mobile app to manage queries, surveys, product recommendations, and more through advanced chatbot functionalities.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 my-3">
                <div className="box">
                  <center center><img src="./image/app/VR.png" alt="" /></center>
                  <h5 className='m-3'>Virtual Reality (VR)</h5>
                  <p>Elevate customer experiences with our VR expertise in mobile apps, seamlessly blending virtual and real worlds. Our developers specialize in creating immersive videos, 3D apps, and AR/VR applications to engage users effectively.</p>
                </div>
              </div>
              <div className="col-lg-6 my-3">
                <div className="box">
                  <center center><img src="./image/app/internet.png" alt="" /></center>
                  <h5 className='m-3'>Internet of Things (IoT)</h5>
                  <p>Connect your mobile app with end-users through our IoT development expertise, fostering deep engagement. Our IoT solutions enable seamless connections across homes, buildings/cities, assets, health monitoring, and more, enhancing user experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


    </>
  )
}

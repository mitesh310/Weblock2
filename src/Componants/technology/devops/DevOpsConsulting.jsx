import React, { useRef,useEffect } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';
import ScrollReveal from 'scrollreveal';


export default function DevOpsConsulting() {
      
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


    // const customHr = <hr className="custom-hr" />;

    const getinRef = useRef(null);

    const scrollToGetin = () => {
      if (getinRef.current) {
        getinRef.current.scrollIntoView({ behavior: 'smooth' });

      }
    };


  const bannerImage = './image/service/banner.png';



  return (
    <>
    <Banner 
        heading="DevOps Consulting Services " 
        desc="Discover the transformative impact of our DevOps Consulting services, harnessing the latest in next-gen technologies. Seamlessly merge development and operations to drive innovation, leveraging automation for agile software delivery."
        button="Get Started"
        scrollToGetin={scrollToGetin} 
        backgroundImage={bannerImage}
    />

      <div className="seaction">
        <div className="container">
          <h2>DevOps Consulting Services</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <Solution 
              title1="DevOps Accelerate"
              desc1="Propel your projects to success with our cutting-edge solutions. Harness the power of seamless integration between development and operations, driving efficiency and innovation. From automation to continuous delivery, we tailor strategies to accelerate your journey. Experience rapid growth and operational excellence with our expert guidance."
              img1="./image/dconsulting/image 104.png"
          
              title2="DevOps Nexus "
              desc2="Your central hub for streamlined software delivery. We bridge the gap between development and operations, fostering collaboration and efficiency. With automated pipelines and continuous integration, we empower your team to deliver quality software at scale. Experience enhanced agility and accelerated time-to-market with DevOps Nexus leading the way."
              img2="./image/dconsulting/image 105.png"
          />

          <Solution
              title1="DevOps Fusion"
              desc1="Uniting development and operations for unparalleled success. Our integrated approach merges cutting-edge technology with streamlined processes, driving efficiency and innovation. With automation and continuous delivery, we propel your projects to new heights."
              img1="./image/dconsulting/image 106.png"

              title2="DevOps Evolution Partners"
              desc2="DevOps Evolution Partners: Pioneering the evolution of software delivery. Our comprehensive approach seamlessly integrates development and operations, fostering collaboration and innovation. From automation to continuous deployment, we drive efficiency and agility at every stage. Join us on the journey to accelerated growth and operational excellence."
              img2="./image/dconsulting/image 107.png"
          />
          <Solution
              title1="DevOps Forge"
              desc1="Crafting success through seamless integration of development and operations. Our innovative solutions empower teams to build, test, and deploy software with unparalleled efficiency. From automation to continuous delivery, we forge a path to accelerated development cycles and enhanced productivity. Experience the power of DevOps Forge in driving your projects to new heights."
              img1="./image/dconsulting/image 108.png"

              title2="AgileStack Solutions"
              desc2="Empowering your journey towards agile excellence. Our comprehensive suite of services spans Agile coaching, Scrum training, and tailored software solutions. With a focus on collaboration and adaptability, we help teams navigate the complexities of modern software development. Experience streamlined workflows and accelerated innovation with AgileStack Solutions as your trusted partner.  "
              img2="./image/dconsulting/image 109.png"
          />
        </div>  
      </div>  
 
    <div ref={getinRef}>
        <Getin 
                title1="Optimize Your Business with Leading "
                title2="DevOps Consulting Development Firm"
        />
    </div>

    <div className="point">
      <div className="container">
        <h2>DevOps Consulting Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> DevOps Dynamo</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> OptimizeOps Solutions</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> DevOps Velocity</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> NexusOps Solutions</h6>
            </div>
            
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> DevOps Harmony</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> DevOps Momentum</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> AgileShift Consulting</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> StreamlineForge Consulting</h6>
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

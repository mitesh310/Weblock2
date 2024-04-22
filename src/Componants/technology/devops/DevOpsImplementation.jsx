import React, { useRef,useEffect } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';
import ScrollReveal from 'scrollreveal';

export default function DevOpsImplementation() {
      
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


  return (
    <>
    <Banner 
        heading="DevOps Implementation Services " 
        desc="Transform your business landscape with our tailored DevOps Implementation Services, designed to tackle everyday challenges head-on. From enhancing time-to-market and software quality to boosting efficiency and productivity, we've got you covered. Harness the power of improved team collaboration and streamlined automation to meet evolving customer demands and market dynamics swiftly."
        button="Get Started"
        scrollToGetin={scrollToGetin} 
    />

      <div className="seaction">
        <div className="container">
          <h2>DevOps Implementation Services</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <Solution 
            title1="DevOps Catalyst"
            desc1="Igniting innovation through seamless integration. Our expert team specializes in next-gen DevOps solutions, leveraging cutting-edge technologies to streamline development and operations. With a focus on automation and agility, we empower your organization to drive efficiency and accelerate software delivery. Experience the catalyst for transformation with DevOps Catalyste"
            img1="./image/dimplementation/image 104.png"
        
            title2="AgileOps Innovate "
            desc2="Pioneering the future of operational excellence. Our cutting-edge solutions seamlessly merge agility and operations, driving innovation at every turn. Experience accelerated growth and efficiency as we revolutionize your business processes. Trust us to propel your organization forward with tailored strategies and next-gen technologies."
            img2="./image/dimplementation/image 105.png"
        />

        <Solution
            title1="OptimizeOps Implementation"
            desc1="OptimizeOps Implementation: Your pathway to streamlined operations and enhanced efficiency. We specialize in deploying tailored solutions that optimize your business processes, leveraging cutting-edge technology and strategic insights. Experience seamless integration, accelerated workflows, and cost savings with our expert implementation services. Let us unlock the full potential of your operations and propel your business towards success."
            img1="./image/dimplementation/image 106.png"

            title2="DevOps Evolution Services "
            desc2="Embark on a journey of digital transformation with DevOps Evolution Services. We specialize in guiding organizations through the evolution of their development and operations processes, seamlessly integrating cutting-edge technologies and methodologies. From continuous integration and delivery to automated infrastructure provisioning, we empower businesses to achieve greater agility, efficiency, and innovation. Let us drive your DevOps evolution and propel your business into the future"
            img2="./image/dimplementation/image 107.png"
        />
        </div>  
      </div>  

    <div ref={getinRef}>
        <Getin 
        title1="Optimize Your Business with Leading "
        title2="DevOps Implementation Development Firm"
        />
    </div>

    <div className="point">
      <div className="container">
        <h2>DevOps Implementation Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> QuickDeploy Partners</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> SwiftMarket Services</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> AgileLaunch Consulting</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> RapidRollout Services</h6>
            </div>
            
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> AgileLaunch Consulting</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> TimeToMarket Express</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> LightningLaunch Partners</h6>
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

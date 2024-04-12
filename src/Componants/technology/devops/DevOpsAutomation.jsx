import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';


export default function DevOpsAutomation() {

    
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
        heading="DevOps Automation Services " 
        desc="Empower your organization with our DevOps Automation Services, revolutionizing your deployment and release capabilities. Through our expert DevOps Automation Consulting Services, we streamline processes, minimize manual tasks, and elevate software quality."
        button="Get Started"
    />
    <Solution 
        heading="DevOps Automation Services"
        customHr={customHr}

        title1="AutomateOps Solutions"
        desc1="AutomateOps Solutions empowers businesses to streamline operations and maximize efficiency through automation. Our cutting-edge technology and tailored strategies automate workflows, optimize processes, and drive productivity. Experience seamless integration and accelerated growth with our innovative solutions. Let us transform your operations and elevate your business to new heights."
        img1="./image/dautomation/image 104.png"
    
        title2="DevOps Automate Hub "
        desc2="DevOps Automate Hub, your central hub for streamlining software delivery pipelines. With cutting-edge automation tools and expert guidance, we empower businesses to accelerate their DevOps processes. From continuous integration to automated testing and deployment, we optimize workflows for efficiency and reliability. Join us at DevOps Automate Hub and revolutionize your software development journey."
        img2="./image/dautomation/image 105.png"
    />

    <Solution
        title1="AutoOps Accelerate"
        desc1="AutoOps Accelerate: Revolutionizing automotive efficiency with cutting-edge automation solutions. Our platform seamlessly integrates advanced technologies to streamline operations and enhance productivity. From supply chain optimization to intelligent manufacturing, we empower automotive businesses to thrive in a rapidly evolving industry. Experience accelerated growth and operational excellence with AutoOps Accelerate"
        img1="./image/dautomation/image 106.png"

        title2="DevOps Automate Nexus"
        desc2="DevOps Automate Nexus streamlines your development process with advanced automation solutions. Our platform seamlessly integrates with Nexus repositories, empowering your team to efficiently manage dependencies and artifacts. Experience accelerated software delivery and enhanced reliability as you automate key aspects of your DevOps pipeline. Unlock the full potential of Nexus with our tailored automation services."
        img2="./image/dautomation/image 107.png"
    />
    <Solution
        title1="AgileOps Automation Services"
        desc1="AgileOps Automation Services revolutionize your operations with cutting-edge automation solutions. Our tailored approach seamlessly integrates Agile methodologies, streamlining processes and enhancing efficiency. Experience accelerated project delivery and improved collaboration across your organization. Let us empower your business with agile automation, driving innovation and operational excellence."
        img1="./image/dautomation/image 108.png"

        title2="AutomateCraft Consulting "
        desc2="At AutomateCraft Consulting, we specialize in revolutionizing businesses through automation. Our expert team crafts bespoke solutions that streamline processes, boost efficiency, and drive innovation. Harnessing cutting-edge technologies, we empower your organization to thrive in the digital age. Experience the power of automation with our tailored consulting services, and unleash your business's full potential."
        img2="./image/dautomation/image 109.png"
    />
    <div ref={getinRef}>
        <Getin 
                title1="Optimize Your Business with Leading "
                title2="DevOps Automation Development Firm"
        />
    </div>

    <div className="point">
      <div className="container">
        <h2>DevOps Automation Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> DevOps AutomateX</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> SwiftOps Automation</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> DevOps Automation Forge</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> VelocityOps Automation</h6>
            </div>
            
          </div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> StreamlineOps Automation</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Automation Accelerator</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> AgileOps Automate</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> AutomateHub Solutions</h6>
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

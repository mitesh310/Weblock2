import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';
import MovingComponent from 'react-moving-text'


export default function Html() {

    
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
        heading="HTML And CSS Development Company" 
        desc="our tailored HTML And CSS development services are designed to meet your brand-specific requirements. From custom website design to responsive layout implementation, our comprehensive range of services addresses any project-related challenges you may encounter. "
        button="Get Started"
        scrollToGetin={scrollToGetin} 
    />
      <div className="seaction">
        <div className="container">
          <MovingComponent
                    type="fadeInFromBottom"
                    duration="1000ms"
                    delay="1s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
          <h2>HTML and CSS Development Solutions</h2>
          </MovingComponent>
          <div className="custom-hr">
            <hr />
          </div>
          <Solution 
              title1="Web design"
              desc1="Design agencies and freelance professionals provide comprehensive web design services tailored to your unique needs. From conceptualization to implementation, we craft custom HTML and CSS templates or themes that reflect your brand identity and resonate with your target audience. Our focus is on delivering visually appealing and user-friendly websites that drive engagement and conversion. Partner with us to elevate your online presence and stand out in the digital landscape."
              img1="./image/html/image 104.png"
          
              title2="Responsive Design"
              desc2="Our responsive HTML and CSS website services ensure seamless adaptation to diverse screen sizes and devices, guaranteeing an optimal user experience across desktops, tablets, and smartphones. With a keen focus on responsive design principles, we craft websites that maintain functionality and aesthetics regardless of the device, enhancing engagement and accessibility for all users. "
              img2="./image/html/image 105.png"
          />

          <Solution
              title1="HTML Email Templates"
              desc1="Email templates services offer professionally designed and responsive HTML email templates tailored for various purposes, including marketing campaigns, newsletters, and transactional emails. These templates are crafted by design agencies or specialized email marketing platforms to ensure compatibility across email clients and devices. "
              img1="./image/html/image 106.png"

              title2="CSS Frameworks and Libraries"
              desc2="CSS frameworks and libraries such as Bootstrap, Foundation, and Tailwind CSS streamline web development by providing pre-designed components and styles. Developed and maintained by companies, these tools offer a wealth of resources to expedite the creation of modern, responsive websites. Whether you're a beginner or an experienced developer, leveraging these frameworks can significantly accelerate your workflow while ensuring consistency and adherence to best practices."
              img2="./image/html/image 107.png"
          />

          <Solution
              title1="CSS Animation and Effects"
              desc1="Design agencies and developers specialize in creating custom CSS animations, transitions, and effects to elevate user interaction and enhance visual appeal on websites. With meticulous attention to detail, these services aim to captivate visitors and provide an immersive browsing experience. "
              img1="./image/html/image 108.png"

              title2="HTML/CSS Consulting"
              desc2="Consulting services from HTML and CSS experts offer invaluable guidance to businesses seeking to optimize their codebases. With a focus on best practices, troubleshooting, and optimization, these consultants provide tailored recommendations to improve website performance and user experience.
              Collaborate with these professionals to unlock the full potential of your web presence and stay ahead of the competition."
              img2="./image/html/image 109.png"
          />

          <Solution
              title1="Training and Workshops"
              desc1=" Companies or individuals offer training sessions and workshops on HTML and CSS fundamentals, advanced techniques, and best practices for developers and designers. "
              img1="./image/html/image 110.png"
          />
        </div>  
      </div>  


    <div ref={getinRef}>
        <Getin 
        title1="Optimize Your Business with Leading "
        title2="HTML AND CSS Development Firm"
        />
    </div>

    <div className="point">
      <div className="container">
        <h2>Our HTML and CSS Developer Expertise</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Web application</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Responsive Designs</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Browser Developer Tools</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> JQuery Experties</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Css properties</h6>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Manual Written Code</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Version Control</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Browser Compatibility Testing</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Text Editors/IDEs</h6>
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

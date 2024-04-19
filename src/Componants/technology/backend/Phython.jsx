import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';

export default function Phython() {


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
        heading="Python Development Company " 
        desc="As a highly reputable Python development company, we specialize in delivering top-notch custom web applications, desktop apps, and dynamic websites. With expertise in advanced frameworks like Flask, Web2py, and Django, we offer a result-oriented approach backed by years of experience, making us the preferred partner for businesses seeking premier Python development services."
        button="Get Started"
        scrollToGetin={scrollToGetin} 
    />



      <div className="seaction">
        <div className="container">
          <h2>Result-Oriented Python Development Services</h2>
          <div className="custom-hr">
            <hr />
          </div>

          <Solution 
              title1="Prototype Development"
              desc1="Beginning with meticulous prototype design, our expertise and fluency in Python ensure a seamless development journey. The end result? A fast, secure, and seamlessly integrated product, leveraging frameworks like Pyramid, Flask, Django, and Falcon."
              img1="./image/paython/image 104.png"
          
              title2="Application Development "
              desc2="Empower Your Business Success with Tailored Python ApplicationsOur dedicated Python developers are committed to realizing your vision, crafting top-notch applications. Elevate your business to new heights while delivering unparalleled online user experiences to your customers."
              img2="./image/paython/image 105.png"
          />

          <Solution
              title1="Data Migration"
              desc1="Portability is essential for staying up-to-date with the latest technology without constant expenses. Utilize our Python migration service to effortlessly upgrade or migrate from older versions to the latest ones across various platforms. Stay ahead of the curve without breaking the bank."
              img1="./image/paython/image 106.png"

              title2="Machine learning"
              desc2="Leave the dystopian fantasies behind and embrace the practicality of enhancing your machines' intelligence with Python. Our ingenious Python code streamlines tasks, reducing your workload effortlessly. With a syntax resembling standard English, Python simplifies coding, making it easy to remember and adapt to your needs."
              img2="./image/paython/image 107.png"
          />
          <Solution
              title1="Internet of Things"
              desc1="Harness the power of Python for your Internet of Things (IoT) endeavors. Our professional services offer tailored solutions leveraging Python's versatility and efficiency. From sensor data processing to device management, we empower your IoT initiatives with robust functionality, scalability, and reliability. Partner with us to unlock the full potential of Python in the IoT landscape."
              img1="./image/paython/image 108.png"

              title2="Backend System"
              desc2="Elevate your online presence with our professional Python backend solutions. We specialize in crafting scalable, efficient backend systems that drive seamless performance and support your website's success. From data management to user authentication, our Python expertise ensures reliability and flexibility for your online platform."
              img2="./image/paython/image 109.png"
          />
          <Solution
              title1="Testing & QA Services"
              desc1="Partner with us for Python development services to create unique web solutions with robust functionality, comprehensive testing, automated processes, load testing, and efficient dependency management."
              img1="./image/paython/image 110.png"

              title2="Support & Maintenance Services"
              desc2="Beyond implementation, count on us for ongoing support and troubleshooting. Whether day or night, we're here to address any challenges, big or small, ensuring your continued success."
              img2="./image/paython/image 111.png"
          />

        </div>  
      </div>  



<div ref={getinRef}>
        <Getin 
        title1=" Interested in Starting Python Project "
        title2=" With Us?"
        />
    </div>

    <div className="point">
      <div className="container">
        <h2>Some Key Features of a Python Development Service</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          
          <div className="col-lg-3"></div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Scalability</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> High Performance</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Versatility</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Security</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Integration</h6>
            </div>
            
            
          </div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Responsive Design</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> User Authentication and Authorization</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> SEO-Friendly</h6>
            </div> 
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Content Management</h6>
            </div> 
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Rich Ecosystem</h6>
            </div>   
                     
          </div>
          
        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>


    </>
  )
}

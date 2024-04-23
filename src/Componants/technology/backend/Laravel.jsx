import React, { useRef,useEffect } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';
import ScrollReveal from 'scrollreveal';


export default function Laravel() {
  
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
        heading="Laravel Development Company " 
        desc="As your trusted Laravel development company, we propel your success by harnessing the full potential of the Laravel framework alongside cutting-edge AI tools. Connect with our team of highly-experienced, top-rated Laravel engineers to collaborate on web and app development services, shaping a better future together."
        button="Get Started"
        scrollToGetin={scrollToGetin} 
        backgroundImage={bannerImage}
    />


      <div className="seaction">
        <div className="container">
          <h2>Streamlining Success: The Laravel Development Process laravel</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <Solution 
              title1="Laravel Team Augmentation"
              desc1="Elevate your project's success by seamlessly augmenting your team with the precise number of dedicated Laravel developers you need. Our   team augmentation solution empowers you to fill skill gaps and drive your business forward with the expertise required for success."
              img1="./image/laravel/image 104.png"
          
              title2="Custom Web Application Development "
              desc2="Our Laravel custom web application development service delivers tailored solutions, meticulously crafted to align with your business needs. With expertise in Laravel's robust framework, we ensure scalability, security, and optimal performance for your bespoke web application, driving your business forward with precision and agility."
              img2="./image/laravel/image 105.png"
          />

          <Solution
              title1="Enterprise Application Development"
              desc1="Our Laravel enterprise application development service harnesses the power of Laravel's robust framework to build scalable, secure, and feature-rich solutions tailored to your business needs. From comprehensive requirements analysis to seamless integration and ongoing support, we deliver enterprise-grade applications that drive efficiency and innovation for your organization."
              img1="./image/laravel/image 106.png"

              title2="API Development and Integration"
              desc2="Our Laravel API development and integration service ensures seamless connectivity and functionality across your ecosystem. Leveraging Laravel's powerful features, we craft efficient APIs that integrate smoothly with third-party services, empowering your applications with enhanced capabilities and interoperability."
              img2="./image/laravel/image 107.png"
          />
          <Solution 
              title1="Migration and Upgradation Services"
              desc1="Experience seamless migration from legacy systems to Laravel or upgrading existing Laravel applications with our expert services. We provide comprehensive assessment, planning, and execution to ensure a smooth transition, preserving data integrity and minimizing downtime. Trust us to modernize your applications, unlocking the full potential of Laravel's advanced features for enhanced performance and scalability."
              img1="./image/laravel/image 108.png"
          />
        </div>  
      </div>  



    <div ref={getinRef}>
        <Getin 
        title1="Optimize Your Business with Leading "
        title2="Laravel Development Firm"
        />
    </div>

    <div className="point">
      <div className="container">
        <h2>Result-Oriented Laravel Development Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel Enterprise Solutions</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel eCommerce App Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel Microservices</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Package Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Integration & Customization</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> CMS Development</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Plugin Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel Cloud Integration</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel Upgradation</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel Restful App Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel CRM Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> AI-based Laravel Web App</h6>
            </div>
            
          </div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel 3rd Party API Integrations</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel Development Solution for Startups</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel Cloud Development</h6>
            </div>   
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel Extension Development</h6>
            </div> 
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Laravel Social Networking Solution</h6>
            </div> 
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Lumen Development</h6>
            </div>          
          </div>
          
        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>


    </>
  )
}

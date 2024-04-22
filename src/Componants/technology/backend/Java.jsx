import React, { useRef,useEffect } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';
import ScrollReveal from 'scrollreveal';


export default function Java() {
  

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
        heading="Java Development Company " 
        desc="Weblock Infosoft leads the industry as a premier Java development company, boasting skilled developers who provide comprehensive Java development services. Our expertise spans custom web, mobile, and desktop software solutions, utilizing cutting-edge Java technologies to deliver high-performance, scalable applications tailored to your business needs."
        button="Get Started"
        scrollToGetin={scrollToGetin} 
    />



      <div className="seaction">
        <div className="container">
          <h2>Our Java Development Services</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <Solution 
              title1="Enterprise Application Development"
              desc1="Empower your business with our Java software development services, driving transformation and unlocking new opportunities. Our expert Java team harnesses modern technologies such as BRM, BPM, and distributed processing to deliver tailored solutions, giving you a competitive edge in the market. "
              img1="./image/java/image 104.png"
          
              title2="E-commerce Development "
              desc2="Optimize your eCommerce revenue with our Java development services, featuring captivating web design and targeted customer strategies for elevated conversion rates fueled by business intelligence."
              img2="./image/java/image 105.png"
          />

          <Solution
              title1="REST API Development"
              desc1="Transform your web and mobile applications with our dedicated Java developers, crafting highly scalable and secure REST APIs. Leveraging modern frameworks and tools, we seamlessly integrate your systems while ensuring security and maintainability. Count on our experienced API specialists to deliver top-notch development and integration services using Java, Angular, and other popular technologies."
              img1="./image/java/image 106.png"

              title2="Big Data Analytics "
              desc2="Handle, store, and analyze large-scale data seamlessly. Our expert Java developers utilize Big Data tools such as Hadoop, Spark, and Kafka to extract valuable insights, empowering businesses to make informed decisions based on comprehensive data analysis."
              img2="./image/java/image 107.png"
          />
          <Solution
              title1="Web Application Development "
              desc1="As a leading Java web development company, we excel in crafting performance-driven, secure, and scalable Java web applications that enhance business value. With our Java Web Development Services, our team specializes in cutting-edge front-end, back-end, and hybrid frameworks, delivering N-tier enterprise-level web applications tailored to your needs."
              img1="./image/java/image 108.png"

              title2="Mobile Application Development"
              desc2="Unlock your business potential with our premier Java application development company. Our seasoned developers craft feature-rich, cross-platform apps leveraging Java ME. We prioritize UI elegance, lightweight design, and seamless integration with REST, SOAP, and XML-RPC services to ensure optimal performance and user satisfaction."
              img2="./image/java/image 109.png"
          />
          <Solution
              title1="Java Migration Services"
              desc1="As a premier Java app development company, we offer comprehensive support for businesses navigating downsizing or seeking enhanced in-house Java expertise. Our full-service Java development team specializes in migrating and integrating legacy systems, managing migration projects, and providing advisory support and staff augmentation for full turnkey delivery. Rest assured, we prioritize data quality throughout import, export, and migration to Java, ensuring seamless transitions and optimized operations."
              img1="./image/java/image 110.png"

              title2="Java Integration Services"
              desc2="Utilize Weblock Infosoft's Java Integration services to seamlessly integrate and streamline disparate systems, applications, and services for optimized performance, increased agility, and reduced complexity. We offer comprehensive solutions including API development, data synchronization, messaging, and ETL services, ensuring smooth operations and enhanced efficiency across your ecosystem."
              img2="./image/java/image 111.png"
          />
        </div>  
      </div>  

    <div ref={getinRef}>
        <Getin 
        title1=" Interested in Starting Java Project "
        title2=" With Us?"
        />
    </div>

       {/* this seaction css anglur.css */}
       <div className="asp">
        <div className="container">
            <h2>What is Kotlin?</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <p>Utilize Weblock Infosoft's Java Integration services to seamlessly integrate and streamline disparate systems, applications, and services for optimized performance, increased agility, and reduced complexity. We offer comprehensive solutions including API development, data synchronization, messaging, and ETL services, ensuring smooth operations and enhanced efficiency across your ecosystem.</p>

        </div>
    </div>

    <div className="point">
      <div className="container">
        <h2>Key Features of Kotlin</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Conciseness</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Null Safety</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Interoperability with Java</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Coroutines</h6>
            </div>
            
            
            
          </div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Data Classes</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Smart Casts and Type Inference</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Extension Functions</h6>
            </div> 
              
                     
          </div>
          
        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>
    </>
  )
}

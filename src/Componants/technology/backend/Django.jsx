import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Getin from '../../service/Getin';
import './django.css'

export default function Django() {


  const getinRef = useRef(null);

  const scrollToGetin = () => {
    if (getinRef.current) {
      getinRef.current.scrollIntoView({ behavior: 'smooth' });

    }
  };


  return (
    <>
      <Banner 
        heading="Django Development Services" 
        desc="Welcome to our Django Development Services page! At [Your Company Name], we specialize in crafting robust web applications using Django, a high-level Python web framework. With Django, we can bring your web project to life efficiently, ensuring scalability, security, and performance."
        button="Get Started"
      /> 

      <div className="jango">
        <div className="container">
          <h2>Our Django Development Services</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Custom Web Application Development</h5>
                <p>We specialize in developing custom web applications tailored to your specific business requirements using Django.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Django CMS Development</h5>
                <p>Leverage the power of Django to build flexible and scalable content management systems (CMS) that empower you to manage your website's content with ease.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>E-commerce Solutions</h5>
                <p>We create secure and feature-rich e-commerce platforms using Django, enabling you to sell products and services online effectively.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Custom Web Application Development</h5>
                <p>We specialize in developing custom web applications tailored to your specific business requirements using Django.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Django CMS Development</h5>
                <p>Leverage the power of Django to build flexible and scalable content management systems (CMS) that empower you to manage your website's content with ease.</p>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <center><button onClick={scrollToGetin}>More Discuss With Us</button></center>
        </div>
      </div>


      <div ref={getinRef}>
        <Getin 
        title1="Optimize Your Business with Leading "
        title2="Django Development Firm "
        />
      </div>


    {/* this seaction css anglur.css */}
    <div className="point">
      <div className="container">
        <h2>Diving Deep: Unveiling the Key Features of Django</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> High-level Web Framework</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Admin Interface</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> URL Routing and View Handling</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Scalability and Performance</h6>
            </div>            
          </div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Model-View-Template (MVT) Architecture</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Batteries</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Template Engine</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Customizable Admin Interface</h6>
            </div>      
            
          </div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> ORM (Object-Relational Mapping)</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Security Features</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Automatic Admin Interface</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Built-in Testing Framework</h6>
            </div>           
            
          </div>

        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>


    <div className="d-why">
      <div className="container">
        <h2>Why Choose Weblock Infosoft forDjango Development ?</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Expertise: <span>Our team comprises experienced Django developers who are passionate about delivering high-quality web solutions that exceed client expectations.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'>Customized Solutions: <span>  We understand that every business is unique, and we tailor our Django development services to meet your specific requirements, ensuring a solution that fits your needs perfectly.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Quality Assurance:  <span>We adhere to industry best practices and conduct thorough testing to ensure that your Django application is bug-free, secure, and performs optimally.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Customer Satisfaction:  <span>We believe in transparent communication and keep you informed at every stage of the development process, ensuring that your project is delivered on time and within budget.</span></h5>
        </div>

      </div>
    </div>


    </>
  )
}

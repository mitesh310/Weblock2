import React, { useRef,useEffect } from 'react';
import Banner from '../../service/Banner'
// import Solution from '../Solution'
import Getin from '../../service/Getin';
import './rdev.css';
import ScrollReveal from 'scrollreveal';



export default function Rdev() {
  
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
        heading="R Development Services " 
        desc="Welcome to our R Development Services page! At Weblock Infosoft, we specialize in providing comprehensive R development solutions tailored to meet your specific business needs. Whether you're looking to harness the power of data analytics, build predictive models, or create interactive visualizations, our team of experienced R developers is here to help you every step of the way."
        button="Get Started"
        scrollToGetin={scrollToGetin} 
        backgroundImage={bannerImage}
    />


{/* this seaction css natove.css */}
      <div className="seaction-native">
        <div className="container">
          <h2>What is R Development?</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row mt-5">
            <div className="col-lg-5">
              <p>R is a powerful programming language and software environment for statistical computing and graphics. It provides a wide variety of statistical and graphical techniques, making it an indispensable tool for data scientists, statisticians, and researchers across various industries.</p>
            </div>
            
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <img className='se-img' src="./image/r/image 105.png" alt="" />
            </div>
          </div>
        </div>  
      </div> 

    <div className="our">
      <div className="container">
        <h2>Our R Development Expertise</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Data Analysis and Visualization</h5>
              <p>Leverage the capabilities of R to analyze complex datasets and generate insightful visualizations that drive data-driven decision-making.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Statistical Modeling</h5>
              <p>From simple linear regression to advanced machine learning algorithms, our R developers are proficient in building robust statistical models to uncover patterns and trends in your data.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Custom R Package Development</h5>
              <p>We have expertise in developing custom R packages tailored to your unique requirements, ensuring efficient and scalable solutions for your business.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Shiny App Development</h5>
              <p>Transform your data into interactive web applications with R Shiny, allowing users to explore and interact with data in real-time.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>

    <div ref={getinRef}>
      <Getin 
        title1="Optimize Your Business with Leading "
        title2=" R Development Firm"
      />
    </div>



    <div className="r-why">
      <div className="container">
        <h2>Why Choose Weblock Infosoft for R Development?</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-8 mt-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h5 className='mb-3'> Expertise: <span>Our team consists of skilled R developers with years of experience in developing data-driven solutions for clients across diverse industries.</span></h5>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h5 className='mb-3'>Customized Solutions: <span> We understand that every business has unique needs. That's why we work closely with our clients to deliver tailored R development solutions that address their specific challenges and goals.</span></h5>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h5 className='mb-3'> Quality Assurance:  <span>We follow best practices in R development and adhere to rigorous quality assurance processes to ensure the reliability, scalability, and performance of our solutions.</span></h5>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h5 className='mb-3'> Customer Satisfaction:  <span> Our commitment to customer satisfaction drives everything we do. We prioritize clear communication, timely delivery, and responsive support to ensure a seamless experience for our clients.</span></h5>
            </div>
          </div>
          <div className="col-lg-4">
            <img className='r-img' src="./image/r/image 124.png" alt="" />
          </div>
        </div>
        

      </div>
    </div>


    </>
  )
}

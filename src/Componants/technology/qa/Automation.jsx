import React, { useRef } from 'react';
import './manual.css'
import Banner from '../../service/Banner'
import Getin from '../../service/Getin'

export default function Automation() {

  const getinRef = useRef(null);

  const scrollToGetin = () => {
    if (getinRef.current) {
      getinRef.current.scrollIntoView({ behavior: 'smooth' });

    }
  };


  return (
    <>
      <Banner 
      heading="Automation Testing Technology" 
      desc="Welcome to our website development services! As part of our comprehensive offerings, we specialize in automation testing development to ensure the efficiency, scalability, and reliability of your software products. In this section, we provide an overview of automation testing development, its advantages, and how it can benefit your projects."
      button="Get Started"
      scrollToGetin={scrollToGetin} 
      />
      <div className="manual">
        <div className="container">
          <h2>What is Automation Testing Development?</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row qa-text">
            <div className="col-lg-8">
            <p>Automation testing development is a software testing approach where test cases are executed automatically using specialized tools and scripts, rather than manually by human testers. Automation testing involves the creation of scripts or test scenarios that simulate user interactions with the software application and verify its behavior, functionality, and performance.</p>
            </div>
            <div className="col-lg-4">
              <img className='qa-img' src="./image/qa/image 122.png" alt="" />
            </div>
          </div>
          
          <h2>Benefits of Automation Testing Development</h2>
          <div className="custom-hr">
              <hr />
          </div>
          <div className="row">
            <div className="col-lg-2 my-3"></div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Efficiency</h5>
                <p> Automation testing development improves testing efficiency by automating repetitive and time-consuming test activities, allowing testers to focus on more complex and critical aspects of testing.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Consistency</h5>
                <p>Automation testing development ensures consistent and repeatable test execution, reducing the risk of human error and providing reliable test results.
                </p>
              </div>
            </div>
            <div className="col-lg-2 my-3"></div>
          </div>
          <div className="row">
            <div className="col-lg-2 my-3"></div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Scalability</h5>
                <p> Automation testing development scales easily to handle large test suites, multiple environments, and frequent releases, making it suitable for agile and DevOps environments.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Regression Testing</h5>
                <p>Automation testing development enables frequent and comprehensive regression testing, ensuring that new changes or updates do not introduce regressions or break existing functionalities.
                </p>
              </div>
            </div>
            <div className="col-lg-2 my-3"></div>
          </div>
        </div>
        
      </div>
      <div ref={getinRef}>
      <Getin 
        title1="Optimize Your Business with Leading  "
        title2=" Automation Testing Development Firm"
      />
      </div>

 {/* this seaction css anglur.css */}
    <div className="point">
      <div className="container">
        <h2>Key Components of Automation Testing Development</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          
          <div className="col-lg-3"></div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Test Planning and Strategy</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Script Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Continuous Integration (CI) and Continuous Testing</h6>
            </div>
            
            
            
          </div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Reporting and Analysis</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Test Execution</h6>
            </div>
               
                     
          </div>
          
        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>
    </>
  )
}

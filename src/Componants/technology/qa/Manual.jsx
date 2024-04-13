import React, { useRef } from 'react';
import './manual.css'
import Banner from '../../service/Banner'
import Getin from '../../service/Getin'

export default function Manual() {


  const getinRef = useRef(null);

  const scrollToGetin = () => {
    if (getinRef.current) {
      getinRef.current.scrollIntoView({ behavior: 'smooth' });

    }
  };


  return (
    <>
      <Banner 
      heading="Manual Testing Technology " 
      desc="Welcome to our website development services! As part of our comprehensive offerings, we provide expertise in manual testing development to ensure the quality and reliability of your software products. In this section, we offer an overview of manual testing development, its importance, and how it can benefit your projects."
      button="Get Started"
      />
      <div className="manual">
        <div className="container">
          <h2>What is Manual Testing Development?</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <p>Manual testing development is a critical component of the software testing process where human testers execute test cases manually to identify defects and ensure the functionality, usability, and performance of software applications. Unlike automated testing, manual testing relies on human judgment and observation to assess the software's behavior, features, and compliance with requirements.</p>
          <h2>Key Components of Manual Testing Development</h2>
          <div className="custom-hr">
              <hr />
          </div>
          <div className="row">
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Test Planning</h5>
                <p> Manual testing development begins with test planning, where testers define test objectives, scope, and strategies based on project requirements and specifications. Test planning involves identifying test scenarios, creating test cases, and allocating resources for testing activities.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Test Case Design</h5>
                <p>Test case design involves creating detailed test cases that outline the steps to be executed, expected results, and test data required for each test scenario. Test cases are designed to cover different functionalities, use cases, and scenarios to ensure comprehensive test coverage.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Test Execution</h5>
                <p>Test execution is the process of executing test cases according to the test plan and documenting the results. Testers interact with the software application manually, following the steps outlined in the test cases, and record any deviations, defects, or issues encountered during testing.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Defect Reporting</h5>
                <p>During test execution, testers identify defects, inconsistencies, or deviations from expected behavior and report them using a defect tracking system. Defect reporting includes documenting the steps to reproduce the issue, severity level, and other relevant details to facilitate resolution and tracking.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Regression Testing</h5>
                <p>Manual testing development also involves regression testing, where previously executed test cases are retested to ensure that recent changes or fixes have not introduced new defects or impacted existing functionalities. Regression testing helps maintain the stability and integrity of the software over time.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>User Acceptance Testing</h5>
                <p>User acceptance testing is a phase of manual testing development where end users or stakeholders validate the software against their requirements, expectations, and business needs. UAT ensures that the software meets user expectations and is ready for deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div ref={getinRef}>
      <Getin 
        title1="Optimize Your Business with Leading  "
        title2=" Manual Testing Development Firm"
      />
      </div>

<div className="point">
      <div className="container">
        <h2>Result-Oriented Laravel Development Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Black-Box Testing</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> White-Box Testing</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Unit Testing</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Integration Testing</h6>
            </div>
            
            
          </div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> System Testing</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Usability Testing</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> User Acceptance Testing</h6>
            </div>   
                     
          </div>
          
        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>

    </>
  )
}

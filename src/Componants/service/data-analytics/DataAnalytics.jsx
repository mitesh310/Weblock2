import React, { useRef } from 'react';
import './data-analytics.css'
import Banner from '../Banner'
import Getin from '../Getin'
import Process from '../Process'

export default function DataAnalytics() {
  const getinRef = useRef(null);

  const scrollToGetin = () => {
    if (getinRef.current) {
      getinRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <Banner
    heading="Data Analytics Services"
    desc="Unlock business potential with our reliable software consulting services, tailored to future trends. Transform your digital journey with expert tech solutions and flawless execution for optimal growth."
    button="Free Consultation Request"
    scrollToGetin={scrollToGetin} 
    />
    <div className="analytics">
      <div className="container">
        <h2>Data Analytics Services and Solutions</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Big Data Analytics</h5>
              <p> With cross-channel integration and the use of advanced tools and technologies, gain precise insights into customer behavior and operational processes. Mitigate fraud and manage risks effectively to achieve your business objectives.
              </p>
            </div>
          </div><div className="col-lg-4 my-3">
            <div className="box">
              <h5>Predictive Analytics</h5>
              <p>Utilizing your historical data, our team of predictive analysis experts will forecast future scenarios for your business. This enables you to proactively address expected risks, prevent fraudulent transactions, identify opportunities, and make informed decisions to enhance the future value of your business.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Data Migration and Integration</h5>
              <p>We specialize in upgrading legacy data storage systems and seamless migration to modern, automated digital transformation platforms. Our expert data migration team ensures uninterrupted data transfer and smooth execution of business processes, prioritizing performance and security.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Data Management</h5>
              <p>The solution to managing the uncontrollable expansion of data lies in effective data management! Rest assured, our team of data analytics experts can assist you in taking charge of data governance, quality management, data migration, and the seamless integration of filtered data tailored to your needs.
              </p>
            </div>
          </div><div className="col-lg-4 my-3">
            <div className="box">
              <h5>Data Visualization and Reporting</h5>
              <p>Organized and structured data can be harnessed effectively when represented smartly and creatively. Hire our data analysts to transform your raw data into visually engaging charts, infographics, and heat maps. Unlock valuable insights and predictions for upcoming business processes.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Architecture Assessment and Advisory</h5>
              <p>Our experts are prepared to assist you comprehensively, from analyzing your current business system and identifying its shortcomings, to designing cloud-based infrastructure, overseeing implementation, and providing ongoing maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div ref={getinRef}>
    <Getin 
      title1="Have a project in mind or Any  "
      title2="Questions? We are here to help!"
    />
    </div>

    <div className="proc">
      <div className="container">
      <h2>Our Detailed Data Analytics Process</h2>
      <div className="custom-hr">
          <hr />
      </div>
      <Process 
      number1="01"
      title1="Definition of Data Requirements"
      img1="./image/dataanlytics/define.png"
      desc1="Due to the unpredictable nature of data volume, our proficient team of business analysts adeptly defines the necessary data based on its unique characteristics and specific requirements. "

      number2="02"
      title2="Data Collection"
      img2="./image/dataanlytics/collection.png"
      desc2="After successfully completing the initial step, our team of data analytics experts begins gathering relevant data from databases, data warehouses, datasets, and other sources. This data is systematically stored, reducing the time required for storage. "
      />
      <Process 
      number1="03"
      title1="Data Cleaning"
      img1="./image/dataanlytics/cleaning.png"
      desc1="Our team ensures data accuracy by meticulously cleaning redundant and unorganized data, eliminating misleading information, and preventing unreliable data representation. "

      number2="04"
      title2="Data Analysis"
      img2="./image/dataanlytics/Analysis.png"
      desc2="The data is explored through inspection, plotting into charts, auditing, comparisons, etc. and reports for the same are generated. "
      />
      <Process 
      number1="05"
      title1="Data Optimization"
      img1="./image/dataanlytics/optimization.png"
      desc1="After generating the analysis reports, predictive techniques are applied to anticipate future outcomes for the company. "

      number2="06"
      title2="Deployment and Monitoring"
      img2="./image/dataanlytics/Group 39561.png"
      desc2="The implementation of the predictive results is integrated into business processes, which are subsequently monitored for necessary adjustments and corrections as needed. "
      />
      </div>
    </div>
    
    </>
  )
}

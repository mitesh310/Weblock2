import React, { useRef,useEffect } from 'react';
import Banner from '../../service/Banner'
// import Solution from '../Solution'
import Getin from '../../service/Getin';
import './aws.css';
import ScrollReveal from 'scrollreveal';



export default function Aws() {
  
  useEffect(() => {
        
    ScrollReveal().reveal('.seaction-native h2', {
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
        heading="AWS Development Services " 
        desc="Welcome to our website development services! As part of our comprehensive offerings, we specialize in AWS development services to empower your business with scalable, secure, and reliable cloud solutions. In this section, we provide an overview of AWS development services, its benefits, and how it can transform your business operations."
        button="Get Started"
        scrollToGetin={scrollToGetin}
      />


{/* this seaction css native.css */}
      <div className="seaction-native">
        <div className="container">
          <h2>What is AWS Development?</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row mt-5">
            <div className="col-lg-5">
              <img className='se-img' src="./image/aws/image 104.png" alt="" />
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <p>AWS development refers to the process of leveraging Amazon Web Services (AWS) cloud platform to build, deploy, and manage applications and infrastructure. AWS offers a wide range of cloud services, including computing power, storage, databases, machine learning, and more, enabling businesses to innovate and scale rapidly without the burden of managing physical hardware.</p>
            </div>
          </div>
        </div>  
      </div>  
 

    <div className="our-aws">
      <div className="container">
        <h2>Key Components of AWS Development</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Compute Services</h5>
              <p>AWS provides a variety of compute services, such as Amazon EC2 (Elastic Compute Cloud) for scalable virtual servers, AWS Lambda for serverless computing, and Amazon ECS (Elastic Container Service) for containerized applications.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Storage Services</h5>
              <p>AWS offers flexible and scalable storage solutions, including Amazon S3 (Simple Storage Service) for object storage, Amazon EBS (Elastic Block Store) for block storage, and Amazon Glacier for long-term archival storage.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Database Services</h5>
              <p>AWS provides managed database services, such as Amazon RDS (Relational Database Service) for relational databases, Amazon DynamoDB for NoSQL databases, and Amazon Redshift for data warehousing.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Networking Services</h5>
              <p>AWS offers networking services to connect and secure your cloud infrastructure, including Amazon VPC (Virtual Private Cloud) for isolated network environments, AWS Direct Connect for dedicated network connections, and Amazon Route 53 for DNS management.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Machine Learning and AI Services</h5>
              <p>AWS provides a suite of machine learning and artificial intelligence services, such as Amazon SageMaker for building, training, and deploying ML models, Amazon Rekognition for image and video analysis, and Amazon Comprehend for natural language processing.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Security and Identity Services</h5>
              <p>AWS offers robust security and identity services to protect your data and applications, including AWS IAM (Identity and Access Management) for user and resource access control, AWS KMS for protecting web applications against common security threats.
              </p>
            </div>
          </div>
        </div>
        <center><button onClick={scrollToGetin}>More Discuss With Us</button></center>
      </div>
    </div>


    <div ref={getinRef}>
    <Getin 
      title1="Optimize Your Business with Leading "
      title2=" AWS Development Firm"
    />
    </div>


    <div className="aws-benefits">
      <div className="container">
        <h2>Benefits of AWS Development</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Scalability: <span>AWS enables businesses to scale their infrastructure and applications dynamically to handle fluctuations in demand, ensuring optimal performance and cost efficiency.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'>Reliability: <span> AWS provides high availability and reliability through its global network of data centers and redundant infrastructure, minimizing downtime and ensuring business continuity.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Flexibility: <span> AWS offers a wide range of services and deployment options, allowing businesses to choose the right tools and architectures for their specific needs and workloads.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Cost-effectiveness: <span>AWS offers pay-as-you-go pricing models and flexible billing options, enabling businesses to optimize costs and only pay for the resources they use.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Innovation: <span>AWS continuously innovates and releases new services and features, empowering businesses to stay ahead of the competition and drive innovation in their industries.</span></h5>
        </div>

      </div>
    </div>


    
    </>
  )
}

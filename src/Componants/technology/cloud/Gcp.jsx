import React, { useRef,useEffect } from 'react';
import Banner from '../../service/Banner'
// import Solution from '../Solution'
import Getin from '../../service/Getin';
import './aws.css'
import ScrollReveal from 'scrollreveal';


export default function Gcp() {
    
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

  const bannerImage = './image/service/banner.png';


  return (
    <>
      <Banner 
        heading="Google Cloud Platform Web Services " 
        desc="Welcome to our website development services! As part of our comprehensive offerings, we specialize in Google Cloud Platform (GCP) web services, providing scalable, reliable, and innovative solutions to enhance your online presence. In this section, we offer an overview of GCP web services, its features, and how it can elevate your digital initiatives."
        button="Get Started"
        scrollToGetin={scrollToGetin}
        backgroundImage={bannerImage}
      />


{/* this seaction css native.css */}
      <div className="seaction-native">
        <div className="container">
          <h2>What are GCP Web Services?</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row mt-5">
            <div className="col-lg-5">
              <img className='se-img' src="./image/aws/image 106.png" alt="" />
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <p>Google Cloud Platform (GCP) is a suite of cloud computing services offered by Google, designed to help businesses build, deploy, and scale applications and websites. GCP offers a wide range of services, including computing, storage, databases, machine learning, and more, all hosted on Google's highly reliable and secure infrastructure.</p>
            </div>
          </div>
        </div>  
      </div>  

    <div className="our-aws">
      <div className="container">
        <h2>Key Components of GCP Web Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Compute Services</h5>
              <p> GCP offers a variety of compute services, such as Google Compute Engine for virtual machines, Google Kubernetes Engine for containerized applications, and Google App Engine for serverless computing.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Storage and Databases</h5>
              <p>GCP provides scalable and reliable storage solutions, including Google Cloud Storage for object storage, Google Cloud SQL for managed relational databases, Google Cloud Firestore for NoSQL databases, and Google Cloud Bigtable for real-time analytics.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Networking Services</h5>
              <p>GCP offers networking services to connect and secure your web applications, including Google Virtual Private Cloud (VPC) for isolated network environments, Google Cloud Load Balancing for distributing traffic across multiple instances, and Google Cloud CDN for accelerating content delivery to users worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Machine Learning and AI Services</h5>
              <p>GCP provides a suite of machine learning and artificial intelligence services, including Google Cloud AI Platform for building, training, and deploying machine learning models,image analysis, Google Cloud Natural Language API for text analysis, and Google Cloud Translation API for language translation. 
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Security and Compliance</h5>
              <p>GCP offers robust security features and compliance certifications, including encryption, identity and access management, security scanning, and compliance with industry standards such as ISO, SOC, HIPAA, and GDPR.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>DevOps Integration</h5>
              <p>GCP integrates with DevOps tools and services, such as Google Cloud Build for continuous integration and continuous delivery (CI/CD), Google Cloud Monitoring for monitoring and alerting, and Google Cloud Logging for logging and troubleshooting.
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
      title2=" Azure Web Services Firm"
    />
    </div>


    <div className="aws-benefits">
      <div className="container">
        <h2>Benefits of GCP Web Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Scalability: <span>GCP offers elastic scalability, allowing your web applications to handle varying levels of traffic and workload with ease. </span></h5>
        
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'>Reliability: <span> GCP's global infrastructure ensures high availability and reliability for your web applications, with built-in redundancy and failover mechanisms.</span></h5>
          
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Innovation: <span>GCP provides cutting-edge machine learning and AI services, enabling you to incorporate advanced capabilities into your web applications and differentiate yourself in the market.</span></h5>
          
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Cost-effectiveness: <span>GCP's pay-as-you-go pricing model and flexible billing options enable you to optimize costs and only pay for the resources you use, reducing operational expenses and total cost of ownership (TCO).</span></h5>
          
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Security: <span> GCP offers robust security features and compliance certifications, ensuring the protection of your web applications and data against cyber threats and regulatory requirements</span></h5>
        </div>

      </div>
    </div>




    </>
  )
}

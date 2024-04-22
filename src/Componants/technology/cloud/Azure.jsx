import React, { useRef,useEffect } from 'react';
import Banner from '../../service/Banner'
// import Solution from '../Solution'
import Getin from '../../service/Getin';
import ScrollReveal from 'scrollreveal';
import './aws.css';


export default function Azure() {
    
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
        heading="Azure Web Services: Empowering Your Online Presence " 
        desc="Welcome to our website development services! As part of our comprehensive offerings, we specialize in Azure web services, providing scalable, reliable, and secure solutions to elevate your online presence. In this section, we offer an overview of Azure web services, its features, and how it can transform your digital initiatives."
        button="Get Started"
        scrollToGetin={scrollToGetin}
      />




{/* this seaction css native.css */}
      <div className="seaction-native">
        <div className="container">
          <h2>What are Azure Web Services?</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row mt-5">
            <div className="col-lg-5">
              <p>Azure web services refer to a suite of cloud computing services offered by Microsoft Azure, a leading cloud platform. These services provide a range of functionalities, including website hosting, application development, data storage, analytics, and more, enabling businesses to build, deploy, and manage web applications and services efficiently.</p>
            </div>
            
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <img className='se-img' src="./image/aws/image 105.png" alt="" />
            </div>
          </div>
        </div>  
      </div>  
 

    <div className="our-aws">
      <div className="container">
        <h2>Key Components of Azure Web Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Web Hosting</h5>
              <p>Azure offers web hosting services, such as Azure App Service, allowing you to deploy and scale web applications effortlessly. App Service supports various programming languages, frameworks, and platforms, including .NET, Java, Node.js, PHP, Python, and Ruby, providing flexibility and choice for developers.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Scalability and Elasticity</h5>
              <p>Azure's cloud infrastructure enables auto-scaling and elasticity, allowing your web applications to handle fluctuations in traffic and workload seamlessly. With features like Azure Autoscale, you can automatically adjust resources based on demand, ensuring optimal performance and cost efficiency.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Data Storage and Databases</h5>
              <p>Azure provides a range of data storage options, including Azure Blob Storage for object storage, Azure SQL Database for relational databases, Azure Cosmos DB for NoSQL databases, and Azure Table Storage for semi-structured data.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Content Delivery</h5>
              <p>Azure CDN (Content Delivery Network) accelerates content delivery by caching content at edge locations worldwide, reducing latency and improving user experience for your web applications.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>Security and Compliance</h5>
              <p>Azure offers robust security features, including network security groups, encryption, identity and access management, threat detection, and compliance certifications (such as ISO, SOC, HIPAA, and GDPR), ensuring the confidentiality, integrity, and availability of your web applications and data.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="box">
              <h5>DevOps Integration</h5>
              <p>Azure DevOps provides integrated tools and services for continuous integration (CI) and continuous delivery (CD), enabling seamless deployment, monitoring, and management of web applications.
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
        <h2>Benefits of  Azure Web Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Scalability: <span>Azure web services offer elastic scalability, allowing your web applications to handle sudden spikes in traffic and workload without compromising performance. </span></h5>
        
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'>Reliability: <span>Azure's global infrastructure ensures high availability and reliability for your web applications, with built-in redundancy and failover capabilities.</span></h5>
          
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Flexibility: <span>Azure offers a wide range of services and deployment options, allowing you to choose the right tools and architectures for your specific requirements and workloads.</span></h5>
          
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Cost-effectiveness: <span>Azure's pay-as-you-go pricing model and flexible billing options enable you to optimize costs and only pay for the resources you use, reducing operational expenses and total cost of ownership (TCO).</span></h5>
          
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Security: <span>Azure provides robust security features and compliance certifications, ensuring the protection of your data and applications against cyber threats and regulatory requirements.</span></h5>
        </div>

      </div>
    </div>



    </>
  )
}

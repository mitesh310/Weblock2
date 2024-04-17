import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';

export default function Vuejs() {

    const customHr = <hr className="custom-hr" />;

    const getinRef = useRef(null);

    const scrollToGetin = () => {
      if (getinRef.current) {
        getinRef.current.scrollIntoView({ behavior: 'smooth' });

      }
    };

  return (
    <>
    <Banner 
    
    heading="Vue js Development Company" 
    desc="Collaborate with a premier Vue.js development company like ours to elevate your online presence. At Weblock Infosoft, we specialize in building sleek, cost-effective Vue.js applications that deliver exceptional performance. Whether it's designing intuitive user interfaces or integrating cutting-edge algorithms, our expert team, aided by AI, ensures that your web projects stand out from the crowd. "
    button="Get Started"
    scrollToGetin={scrollToGetin} 
    />


    <Solution 
        heading="Vue.js Development Services"
        customHr={customHr}

        title1="Vue.Js Consultation"
        desc1="Rely on our Vue.js consulting specialists to address critical business challenges and provide tailored front-end solutions aligned with your objectives. Let us simplify your pain points and optimize your Vue.js development journey for success."
        img1="./image/vue/image 104.png"
    
        title2="Vue.Js Storefront Development"
        desc2="Transform your eCommerce vision into reality with our Vue development services. Our expert Vue.js programmers specialize in crafting custom storefronts and PWAs, empowering you to enhance your online presence and achieve business goals efficiently. Partner with us to stay ahead of the competition and elevate your eCommerce experience to new heights."
        img2="./image/vue/image 105.png"
    />
     <Solution
        title1="Vue.js Component Development"
        desc1="Elevate your web applications with our Vue.js Component Development services. Our expertise lies in crafting versatile and efficient UI components tailored to diverse business needs. With our support, businesses managing multiple web applications can swiftly deploy feature-rich solutions, maximizing productivity and user satisfaction. Let us empower your development journey with Vue.js excellence."
        img1="./image/vue/image 106.png"

        title2="Vue.js Migration"
        desc2="Transform your Vue.js application with our premier migration services, designed to infuse it with the latest features and functionalities. We specialize in seamlessly migrating your existing application to Vue.js, ensuring a perfect working modern application that delights end-users.Let's collaborate to elevate your application and provide users with an unparalleled digital experience."
        img2="./image/vue/image 107.png"
    />
     <Solution
        title1="Data-analysis Tools"
        desc1="Empower your enterprise with robust data analysis tools tailored to manage large volumes, velocities, and varieties of data. Our Vue.js development services specialize in crafting comprehensive analytical dashboards that streamline data management processes. Partner with us to harness the power of Vue.js and unlock actionable insights from your data, driving informed decision-making and business growth."
        img1="./image/vue/image 108.png"

        title2="Interactive Dashboards"
        desc2="Our team of full-stack Vue.js architects specializes in crafting tailored solutions to meet your business needs, leveraging the Vue.js framework. Trust us to deliver user-oriented applications that drive engagement and success."
        img2="./image/vue/image 109.png"
    />
     <Solution
        title1="eShops and Marketplaces"
        desc1="Vue.js mobile app development services and Vue.js web app development services are trusted by clients worldwide for creating meticulously crafted dynamic eCommerce solutions and marketplaces. With our expertise, we ensure seamless integration, lightning-fast performance, and exceptional user experiences, empowering businesses to thrive in the digital realm. Partner with us to transform your eCommerce vision into reality and stay ahead of the competition."
        img1="./image/vue/image 110.png"

        title2="Social and Interactive Apps"
        desc2="In today's digital age, social media applications are essential for maintaining connections with your audience. If you're searching for the premier Vue.js development company in India to create unique applications, our team of Vue.js programmers is here to help. With our expertise, we'll design and develop high-performing, feature-rich social media applications tailored to your needs. Let's collaborate to bring your vision to life and enhance your online presence."
        img2="./image/vue/image 111.png"
    />

    <div ref={getinRef}>
        <Getin 
              title1="We ensure you are connected with the ideal talent based on your specific requirements.  "
              
        />
    </div>

    <div className="point">
      <div className="container">
        <h2>Other Significant VueJS Development Services</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Custom App Development with Vue.js</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Search Engines and Custom Widgets</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Vue.js Support and Maintenance</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Vue.js web application development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Vue.js mobile application development</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Third-Party Integration with Vue.js</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Vue.js real-time application</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Single Page App (SPA) Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Interactive UI Development with Vue.js</h6>
            </div>
            
          </div>
          <div className="col-lg-3"></div>
        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>

    </>
  )
}

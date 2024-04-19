import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';


export default function Net() {

     
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
        heading=".NET Development Services " 
        desc="AI-infused .NET Development Company, Elevate your projects! Renowned for crafting scalable, cost-effective enterprise solutions, we excel in modern ASP .NET development services. Building world-class desktop, web, and mobile apps is our forte."
        button="Get Started"
        scrollToGetin={scrollToGetin} 
    />


      <div className="seaction">
        <div className="container">
          <h2>.NET Development Services</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <Solution 
              title1="Custom .NET Development"
              desc1="AI-infused .NET Development Company, Elevate your projects! Renowned for crafting scalable, cost-effective enterprise solutions, we excel in modern ASP .NET development services. Building world-class desktop, web, and mobile apps is our forte."
              img1="./image/net/image 104.png"
          
              title2=".NET Consulting "
              desc2="Pioneer in ASP .NET application development services, become the domain leader! Our developers deliver secure, scalable, and flexible solutions, customizing your business journey catalyst."
              img2="./image/net/image 105.png"
          />

          <Solution
              title1=".NET Integration "
              desc1="Reform your existing business processes, ace your product with our .NET application development services! Integrate modern and advanced functionality into your scope, whether you operate in eCommerce, healthcare, or education. "
              img1="./image/net/image 106.png"

              title2="Porting and Migration to .NET Framework "
              desc2="Move to the classic and proven framework with our experienced .Net developers! Masters in migrating your existing legacy platform to .NET, we have 12+ years of expertise"
              img2="./image/net/image 107.png"
          />    
          
          <Solution
              title1="Third-Party .NET Customization "
              desc1="Expand your business into bigger possibilities with Bacancy. We help you adapt and incorporate third-party solutions through our scalable, flexible, and smooth .NET customizations."
              img1="./image/net/image 108.png"

              title2="Dedicated .NET Development Team "
              desc2="Outsource your .NET development to Bacancy, a reliable, convenient, and trustworthy partner. We offer a dedicated team of .NET developers who work solely for you, on your project, as per your time and requirements."
              img2="./image/net/image 109.png"
          /> 
          
          <Solution
              title1="Post Launch Support for .Net Projects "
              desc1="We stand with you end-to-end throughout your .NET software development, and even after its completion. Just high-five us, sit back, and see your project flourish."
              img1="./image/net/image 110.png"
          /> 
        </div>  
      </div>  



    
    <div ref={getinRef}>
        <Getin 
        title1="Build Scalable High-end Software Solutions With "
        title2="Top .Net Software Development Company"
        />
    </div>

    {/* this seaction css anglur.css */}
    <div className="asp">
        <div className="container">
            <h2>Why Asp.Net Web API?</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <p>Embracing the ever-evolving landscape of technology, ASP.NET WEB API emerges as a powerful framework for crafting versatile HTTP services. From browsers to mobile devices and beyond, WEB API supports a myriad of client-side servers. While integrated into the core ASP.NET platform, it seamlessly incorporates MVC features such as routing, controllers, and dependency injection, ensuring robust and flexible development.</p>
            <p>In the era of web and mobile applications, rapid and seamless data access is paramount. To meet this need for quick and straightforward server responses, you require an API that is both compatible and adaptable, ensuring swift performance across platforms.</p>

        </div>
    </div>



{/* this seaction css anglur.css */}
    <div className="point">
      <div className="container">
        <h2>Benefits Of Asp.Net Web API</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Application Loading Time</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Collects only Required Head</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Easy Automated Testing</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> IoT apps</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Net MVC Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Embedded systems</h6>
            </div>
            
          </div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> REST-ful Way</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> WCF Attributes</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> CMS development and more</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Net eCommerce Development</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Cloud applications</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Cross-platform apps on Xamarin</h6>
            </div>
            
            
          </div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Light Weight Architecture</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Image Loading Time</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> OWIN and NancyFx Development Experience</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Migration to the Cloud</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> APIs</h6>
            </div>
            
            
          </div>

        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
      </div>
    </div>





    </>
  )
}

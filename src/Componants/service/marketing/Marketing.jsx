import React, { useRef } from 'react';
import './marketing.css'
import Banner from '../Banner'
import Getin from '../Getin'
import Process from '../Process'
import MovingComponent from 'react-moving-text'



export default function Marketing() {
    const getinRef = useRef(null);

    const scrollToGetin = () => {
      if (getinRef.current) {
        getinRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <>
    <Banner 
    
    heading="Social media Marketing"
    title="Connect genuinely, spend wisely, and use community support to make your brand grow effectively."
    desc="Social media marketing is a digital strategy used to connect with audiences, build brand awareness, and drive engagement. It involves content creation, user interaction, and performance metrics analysis. Success relies on creativity, authenticity, and strategic planning."
    button="Contact with our experts"
    scrollToGetin={scrollToGetin} 

    />
    

    <div className="social">
        <div className="container">
            <MovingComponent
                    type="fadeInFromBottom"
                    duration="1000ms"
                    delay="1s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">

                <h2>Social Media Marketing service</h2>
            </MovingComponent>
            <div className="custom-hr">
                <hr />
            </div>
            <div className="row">
                <div className="col-lg-4 my-3">
                    <div className="box">
                        <h5>Facebook</h5>
                        <p>Facebook provides social media marketing services like ad targeting, audience insights, page management, and analytics to help businesses connect with customers, drive sales, and analyze performance through their platform.</p>
                    </div>
                </div>
                <div className="col-lg-4 my-3">
                    <div className="box">
                        <h5>Instagram</h5>
                        <p>Maximize your brand's potential on Instagram with our comprehensive suite of services. From creating eye-catching ads and promoting posts to analyzing performance insights and connecting with potential customers through shopping and messaging features, we're here to help you build engagement and drive sales on this global social platform.</p>
                    </div>
                </div>
                <div className="col-lg-4 my-3">
                    <div className="box">
                        <h5>Linkedin</h5>
                        <p>Empower your business with our LinkedIn services, enabling you to build a strong brand presence through captivating company pages, engaging content, and targeted ads. Gain valuable insights with advanced analytics, streamline lead management with CRM integration, and expand your network by joining industry groups.</p>
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


    <div className="s-process">
        <div className="container">
            <h2>Social media Marketing Process We Follow</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <p className='spr-p'>Our social media marketing process involves <br /> audience analysis, content creation, strategic campaigns, and iterative optimization <br />
                for maximum impact and growth.</p>
            <Process 
                number1="01"
                title1="Set goals"
                img1="./image/marketing/Mask group.png"
                desc1="Define measurable objectives aligned with social causes or brand objectives to drive meaningful impact. "
                
                number2="02"
                title2="Choose platforms"
                img2="./image/marketing/Mask group (1).png"
                desc2="Select social media channels based on target audience demographics and behavior for effective outreach. "
                />
                <Process 
                number1="03"
                title1="Choose audience"
                img1="./image/marketing/Mask group (2).png"
                desc1="Identify and understand the target audience's interests, preferences, and demographics to tailor messaging. "
                
                number2="04"
                title2="Create content"
                img2="./image/marketing/Mask group (3).png"
                desc2="Develop compelling and relevant content that resonates with the audience, utilizing multimedia formats for engagement."
                />
                <Process 
                number1="05"
                title1="Support and encase"
                img1="./image/marketing/Mask group (4).png"
                desc1="Foster community engagement through active interaction, support, and encouragement to build rapport and trust."
                
                number2="06"
                title2="Measure results"
                img2="./image/marketing/Mask group (5).png"
                desc2="Utilize analytics tools to track and analyze campaign performance, adjusting strategies based on data insights for continuous improvement. "
                />
            </div>
    </div>
    </>
  )
}

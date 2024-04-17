import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';


export default function Socialmedia() {

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
        heading="Social Media Marketing " 
        desc="Elevate your online presence with our expert social media marketing services. From strategic content creation to targeted audience engagement, we help your brand stand out in the digital sphere. Trust us to drive results and maximize your impact across all social platforms."
        button="Get Started"
        scrollToGetin={scrollToGetin} 
    />
    <Solution 
        heading="Social media marketing Solutions"
        customHr={customHr}

        title1="EngageHub Media"
        desc1="EngageHub Media specializes in turning ideas into engaging digital experiences. Our team combines creativity with data-driven strategies to help brands connect with their audience authentically. From content creation to social media management, we offer tailored solutions to elevate your brand presence."
        img1="./image/social/image 104.png"
    
        title2="TrendWave Media "
        desc2="TrendWave Media: Riding the crest of innovation in the digital sphere. We specialize in surfacing trends and crafting captivating content that resonates with your audience. Let us navigate the currents of digital media to amplify your brand's voice and make a splash in the industry."
        img2="./image/social/image 105.png"
    />

    <Solution
        title1="SocialVista Agency"
        desc1="SocialVista Agency: Where social meets success. We specialize in crafting dynamic social media strategies that drive engagement, growth, and results for your brand. Let us elevate your online presence and navigate the ever-evolving landscape of social media with expertise and creativity"
        img1="./image/social/image 106.png"

        title2="SocialTrend Solutions"
        desc2="ISocialTrend Solutions: Your compass in the digital landscape. We navigate social trends and craft tailored strategies to elevate your brand's online presence. Let us guide you to success with innovative solutions and trendsetting tactics."
        img2="./image/social/image 107.png"
    />
    <Solution
        title1="ImpactSphere Marketing"
        desc1="ImpactSphere Marketing: Making waves with purpose-driven strategies. We specialize in crafting impactful campaigns that resonate with audiences and drive meaningful change. Let us amplify your brand's message and create a lasting impact in the world of marketing."
        img1="./image/social/image 108.png"
    />

    <div ref={getinRef}>
        <Getin 
         title1="Optimize Your Business with Leading Social "
         title2="Media Marketing Development Firm"
        />
    </div>

    <div className="point">
      <div className="container">
        <h2>Social Media Marketing Technologies</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Instagram</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Augmented Reality</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Radio Frequency Identification Tags</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Artificial Intelligence</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> IoT</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Facebook</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Twitter</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Whatsapp</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Linkdin</h6>
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

import React, { useRef,useEffect } from 'react';
import './graphic.css';
import Banner from '../Banner';
import Getin from '../Getin';
import Process from '../Process'
import Price from '../Price';
import ScrollReveal from 'scrollreveal';


export default function Graphic() {



  useEffect(() => {
        
    ScrollReveal().reveal('.graphic h2', {
      duration: 1000,
      distance: '30px',
      delay: 300,
      opacity: 0,
      easing: 'ease-in-out',
      origin: 'bottom',
      cleanup: true 
    });
  }, []);


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
        heading="Graphic design"
        title="Transforming ideas into visual stories."
        desc="Graphic design is the art of visual communication, combining creativity and technology to convey messages effectively. Our expert graphic designers specialize in creating captivating visuals that resonate with your audience and elevate your brand identity"
        button="Contact with our experts"
        scrollToGetin={scrollToGetin}
        backgroundImage={bannerImage} 

      />
      <div className="graphic">
        <div className="container">
            <h2>See what we can do for you</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-6 my-3">
              <div className="box">
                <h5>Product Design</h5>
                <p>Elevate your online presence with our exceptional product design services, crafting innovative and user-friendly experiences that captivate your audience and drive conversions.</p>
              </div>
            </div>
            <div className="col-lg-6 my-3">
              <div className="box">
                <h5>Logo Design</h5>
                <p>Unlock your brand's potential with our professional logo design services. Elevate your website's appeal and establish a memorable brand identity with a custom-designed logo tailored to your vision and audience.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 my-3">
              <div className="box">
                <h5>Portfolio Design</h5>
                <p>Weblock infosoft offers portfolio design services for artists, creative agencies, and corporate brands, specializing in creating captivating portfolios that showcase work and elevate brand image, using digital and printed materials.</p>
              </div>
            </div>
            <div className="col-lg-6 my-3">
              <div className="box">
                <h5>Packaging Design</h5>
                <p>Weblock infosoft provides innovative packaging design services, collaborating with experienced designers to create visually stunning and functional solutions, aiming to exceed expectations, drive brand recognition, and foster loyalty.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Price 
      heading="Recruit Mobile App Development Team As per Your Requirement"
        
      title1= "Premium"
      price1= "15"
      desc1= "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

      title2= "Premium"
      price2= "15"
      desc2= "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

      title3= "Premium"
      price3= "15"
      desc3= "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="visualize">
        <div className="container">
          <h2>Visualize Your Success with Our <br /> Graphic Design Software Expertise</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="ready">
            <div className="row">
              <div className="col-lg-6 my-3">
                <h3>Get a complete brand package ready to go</h3>
                <p>Creating a complete brand package involves distilling your brand's essence into a cohesive and comprehensive kit, including a memorable logo that aligns with your brand's values and aesthetic, a color palette and typography that reflect your brand's personality, a set of brand guidelines to ensure consistency across all mediums, and compelling marketing materials such as business cards, email templates, and social media graphics.</p>
                <button onClick={scrollToGetin}>Contact with our designers</button>
              </div>
              <div className="col-lg-6 my-3">
                <img className='g-img' src="./image/graphic/logoset 1.png" alt="" />
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
      <div className="g-process">
        <div className="container">
            <h2>Graphic Design Process We Follow</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <p className='gra-p'>Our design process follows a proven approach. <br /> We begin with a deep understanding of your needs and create a planning template.</p>
            <Process 
            number1="01"
            title1="Requirement Gathering"
            img1="./image/graphic/Mask group.png"
            desc1="Due to the unpredictable nature of data volume, our proficient team of business analysts adeptly defines the necessary data based on its unique characteristics and specific requirements. "
      
            number2="02"
            title2="Creating inspiration"
            img2="./image/graphic/Mask group (1).png"
            desc2="Exploring design trends, gathering visual references, and brainstorming ideas to fuel creativity and develop a unique design concept. "
            />
            <Process 
            number1="03"
            title1="Creating structural diagram"
            img1="./image/graphic/Mask group (2).png"
            desc1="Drafting a detailed outline or wireframe of the design layout, mapping out key elements and their relationships to ensure a cohesive and effective design structure. "
      
            number2="04"
            title2="designing creation"
            img2="./image/graphic/Mask group (3).png"
            desc2="Utilizing design software and tools to bring concepts to life, focusing on visual aesthetics, typography, color schemes, and imagery that align with the project goals. "
            />
            <Process 
            number1="05"
            title1="Prototyping"
            img1="./image/graphic/Mask group (4).png"
            desc1="Developing initial design drafts or mockups for client feedback and iteration, refining and improving the design based on feedback and testing."
      
            number2="06"
            title2="Ready to print"
            img2="./image/graphic/Mask group (5).png"
            desc2="Finalizing the design for production, ensuring file formats, resolutions, and color profiles are optimized for printing or digital use, maintaining design integrity across different mediums. "
            />
            <Process 
            number1="07"
            title1="Support and dilevery"
            img1="./image/graphic/Mask group (6).png"
            desc1="Providing ongoing support, revisions, and delivering the finalized design files to the client, ensuring satisfaction and a seamless handover process."
      
            
            />
        </div>
      </div>
    </>
  );
}

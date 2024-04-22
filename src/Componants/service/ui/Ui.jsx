import React, { useRef,useEffect } from 'react';
import './ui.css'
import Banner from '../Banner'
import Getin from '../Getin'
import Price from '../Price'
import ScrollReveal from 'scrollreveal';


export default function Ui() {



    useEffect(() => {
        
        ScrollReveal().reveal('.ui h2', {
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
  


  return (
    <>
    <Banner 
    heading="UI/UX Design"
    title="Design is not just what it looks like and feels like. Design is how it works."
    desc="Graphic design is a crucial aspect of visual communication, encompassing the use of typography, imagery, and layout to convey messages effectively. It combines creativity and technology to create visually appealing and impactful designs that resonate with the target audience. Graphic designers play a vital role in enhancing brand identity, marketing materials, and overall visual communication strategies. Their expertise lies in crafting designs that capture attention, communicate ideas clearly, and leave a lasting impression on the viewer."
    button="Contact with our experts"
    scrollToGetin={scrollToGetin} 

    />

    <div className="ui">
        <div className="container">
            <h2>UI/UX Design and Development Company</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <p>In today's competitive market, a well-designed user interface and an enjoyable user experience are crucial for driving user interaction and boosting sales. User Experience (UX) and User Interface (UI) play integral roles in the development of web applications, mobile apps, and software products, leaving a lasting impression on users. From conceptualization to UX design, and from graphics to branding, a meticulously planned and executed UI serves as a bridge between stakeholder goals and user expectations. In a nutshell, a rich look and great feel are essential components for success in today's digital landscape.</p>
            <div className="row my-5">
                <div className="col-lg-6">
                    <img className='u-img' src="./image/UI/weba.png" alt="" />
                </div>
                <div className="col-lg-6">
                    <h3>Web Applications</h3>
                    <p className='my-5'>Our team of best-in-class UI/UX designers is dedicated to crafting dynamic  and adaptable web design solutions that cater to the unique requirements of your platform. By leveraging state-of-the-art design principles and technology, we ensure that your UI/UX not only attracts more customers but also retains them effectively. Through intuitive navigation, visually engaging interfaces, and seamless user experiences, we aim to lower bounce rates and enhance your brand presence in the digital realm.</p>
                    <button onClick={scrollToGetin} >Free Quote Request</button>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-lg-6">
                    <h3>Mobile Applications</h3>
                    <p className='my-5'>Today's mobile app landscape is crowded.  Even the most brilliant vision can struggle to stand out. Weblockinfosoft  bridges this gap with their expert UI/UX design team. They transform your app idea into a captivating reality, fostering user engagement with intuitive and visually stunning interfaces. Their versatility  caters to any development approach, be it native, cross-platform, or hybrid. Their designers are fluent in the latest design trends and industry standards, ensuring your app not only delights users but also functions flawlessly across platforms. </p>
                    <button onClick={scrollToGetin} >Free Quote Request</button>
                </div>
                <div className="col-lg-6">
                    <img className='u-img' src="./image/UI/mobile.png" alt="" />
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
    <div className="ux1">
        <div className="container">
            <h2>UI/UX Process</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <div className="row my-5">
                <div className="col-lg-3">
                    <p>1. Sketching and Wireframes</p>
                    <p>2. Information Architecture</p>
                    <p>3. Market Research and Analysis</p>
                    <p>4. Design References</p>
                    <p>5. Graphic Interface</p>
                </div>
                <div className="col-lg-6">
                    <center><img className='u-img' src="./image/UI/process.png" alt="" /></center>
                </div>
                <div className="col-lg-3">
                    <p>6. Animation Prototype</p>
                    <p>7. UI guidelines and kit</p>
                    <p>8. Design Review</p>
                    <p>9. User Interface Microinteractions</p>
                    <p>10. Dynamic Prototype</p>
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

    <div className='ux'>
        <div className="container">
            <h2>UI/UX Web Applications</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <p>Indeed, UX and UI are pivotal for enriching user experience and boosting your brand's value. With the surge in global internet usage, the web is key to any marketing strategy. The focus on search engine optimization, online marketing, eCommerce, and social media all highlight the need for a satisfying web experience. Thus, developing a potent web application informed by analytical data and our expert skills is essential.</p>
            <div className="row my-5">
                <div className="col-lg-3">
                    <p>Customer research</p>
                    <p>User Experience mapping</p>
                    <p>UX Experience with a UX audit</p>
                    <p>Information architecture</p>
                </div>
                <div className="col-lg-6">
                    <center><img className='u-img' src="./image/UI/web.png" alt="" /></center>
                </div>
                <div className="col-lg-3">
                    <p>Wireframing, Prototypes, Mockups</p>
                    <p>Brand Style Guide</p>
                    <p>Usability Testing For Web Application</p>
                </div>
            </div>
            <h2>UI/UX mobile Applications</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <div className="row my-5">
                <div className="col-lg-3">
                    <p>User research</p>
                    <p>Wireframing </p>
                    <p>Visual design </p>
                </div>
                <div className="col-lg-6">
                    <center><img className='u-img' src="./image/UI/app.png" alt="" /></center>
                </div>
                <div className="col-lg-3">
                    <p>Prototyping </p>
                    <p>Testing and iteration </p>
                    <p>Development handoff</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

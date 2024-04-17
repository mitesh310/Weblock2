import React, { useRef } from 'react';
import Banner from '../Banner'
import './webdevlopment.css'
import Getin from '../Getin'
import Process from '../Process'
import Price from '../Price'



export default function WebDevelopment() {


  const getinRef = useRef(null);

  const scrollToGetin = () => {
    if (getinRef.current) {
      getinRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>

      <Banner
      heading="Web Development Services" 
      title="Transforming your vision into reality, one promise at a time"
      desc="We excel in developing strategic roadmaps for global businesses, translating their groundbreaking concepts into web solutions. Our web development services are outcome-driven, serving enterprises, mid-sized companies, and startups by aligning with their distinct visions to deliver impactful website solutions."
      button="Free Consultation Request"
      scrollToGetin={scrollToGetin} 
      
      />
       
      <div className="container">
        <div className="web">
          <h2>Comprehensive Web Design and Development Services</h2>
          <div className="row ">
            <div className="col-lg-4 my-5">
              <div className="box">
                <h5>UI/UX Design Services</h5>
                <p>We're a top web development company providing result-oriented UI/UX design services globally. Our experts follow industry best practices to deliver creative, innovative, and market-proven solutions tailored to your business needs. Our product development engagement plans are clear and transparent.</p>
              </div>
            </div>
            <div className="col-lg-4 my-5">
              <div className="box">
                <h5>Full-stack Web Design and Development</h5>
                <p>We're a top web development firm, boasting a team of skilled engineers for full-cycle product development. Our expertise spans front-end and back-end technologies, including popular stacks like MERN, MEAN, Django, Ruby on Rails, and LAMP.</p>
              </div>
            </div>
            <div className="col-lg-4 my-5">
              <div className="box">
                <h5>UI/UX Design Services</h5>
                <p>Our full-suite web development services encompass everything required to establish a strong online presence. From captivating front-end designs to seamless back-end development, our expert team delivers tailored solutions that align with your specific needs.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 my-5">
              <div className="box">
                <h5>Integration Services</h5>
                <p>Unlock connected digital experiences with our enterprise integration services. Let us handle database or CRM integration for your projects. Benefit from robust and practical solutions for streamlined business processes.</p>
              </div>
            </div>
            <div className="col-lg-4 my-5">
              <div className="box">
                <h5>QA & Testing Services </h5>
                <p>Experience top-notch QA testing tailored to your business goals. We offer QA and Software Testing for web and mobile, automation, manual, API, security, and performance testing. Benefit from QA consulting and analysis services.</p>
              </div>
            </div>
            <div className="col-lg-4 my-5">
              <div className="box">
                <h5>After Delivery Support</h5>
                <p>Our 24/7 managed IT services align with your project needs for consistent and real-time support, optimizing your business processes. Bacancy's IT Support and Maintenance services aim to enhance customer satisfaction, accelerate backlog implementation, and lower operational costs.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="eng">
          <h2 className='pt-5'>Engage with Premier Web Development Experts for Your Project</h2>
          <center><hr /></center>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 .col-md-6">
                <div className="box my-5">
                  <center><img src="./image/webdevlopment/web-portal.png" alt="" /></center>
                  <h5>Web Portals</h5>
                  <p>Efficiently manage a wide range of functionalities and interactive features with our intuitive interface design. Our web portal services include web and mobile development, integration, UI/UX design, testing, security, embedded analytics, and ongoing maintenance support.</p>
                </div>
              </div>
              <div className="col-lg-3 .col-md-6">
                <div className="box my-5">
                  <center><img src="./image/webdevlopment/coding.png" alt="" /></center>
                  <h5>Custom Website Development</h5>
                  <p>Elevate your business operations with our customer-centric custom web development solutions, designed to enhance ROI. Our comprehensive range of custom web development services ensures seamless cross-platform functionality for businesses of all sizes and complexities.</p>
                </div>
              </div>
              <div className="col-lg-3 .col-md-6">
                <div className="box my-5">
                  <center><img src="./image/webdevlopment/ecommerce.png" alt="" /></center>
                  <h5>E-commerce Development Services</h5>
                  <p>Build and nurture your online store with an interactive user experience, picking the right extensions and reliable integration with your existing workflows. We are a one-size fit solution for enterprises, SMBs, and startups to augment full-scale eCommerce web platforms.</p>
                </div>
              </div>
              <div className="col-lg-3 .col-md-6">
                <div className="box my-5">
                  <center><img src="./image/webdevlopment/programming.png" alt="" /></center>
                  <h5>Web Apps and Mobile Apps</h5>
                  <p>We offer end-to-end web application development and mobile app services, encompassing design, integration, and maintenance. Our solutions focus on developing fast-loading, scalable, and secure apps compatible with all devices and platforms.</p>
                </div>
              </div>
            </div>
            <center><button onClick={scrollToGetin}  className='mb-3'>Share Your Project Idea with Us for Discussion</button></center>
          </div>
      </div>


      <div className="benifits-web">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Experience: <span> With years of experience in the industry, we have the expertise to tackle projects of any size and complexity.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Custom Solutions: <span>  We believe in delivering custom solutions that are tailored to your unique business needs, ensuring that your website stands out from the competition.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Communication: <span> We value clear and transparent communication throughout the development process, keeping you informed every step of the way.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Quality Assurance:  <span>Our rigorous quality assurance process ensures that your website is thoroughly tested for functionality, performance, and compatibility before launch.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'>  Support and Maintenance:  <span> We provide ongoing support and maintenance services to keep your website running smoothly and up-to-date with the latest technologies and security patches.</span></h5>
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
      <div className="container">
        <div className="boost my-5">
          <h3>Boost Your Business Processes with Our Web Application Development Team</h3>
          <p>With over 5 years of experience, we are a leading web development company in the USA, capable of augmenting full-size and mid-size teams for your custom web development projects. We provide access to the top 1% IT talents with core competencies in custom web app development.</p>

          <div className="row">
            <div className="col-lg-6">
              <img  className='w-img' src="./image/webdevlopment/image 93.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h5 className='mt-5'>Our web architects and developers excel in the following <br /> services:</h5>
              <div className="chek">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <p className='mb-4'> front-end developers utilize popular JavaScript frameworks including React, Meteor, Vue, Next, Angular, and Ember.</p>
              </div>
              <div className="chek">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <p className='mb-4'> backend developers are proficient in programming languages such as Python, Java, .NET, Node.js, Go, and PHP.</p>
              </div>
              <div className="chek">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <p className='mb-4'> QA engineers and software testers proficient in testing various types of web applications.</p>
              </div>
              <div className="chek">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <p className='mb-4'> Competent UI Designers craft a stellar interface that is engaging and performance-driven for the users</p>
              </div>
              <div className="chek">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <p className='mb-4'> Our UX designers employ best-in-class research techniques tailored for target audiences, ensuring a stellar user experience.</p>
              </div>
              <div className="chek">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <p className='mb-4'> Experienced web architects with over 5+ years of deep-domain expertise.</p>
              </div>
              <button onClick={scrollToGetin}>Free Quote Request</button>

              
            </div>
          </div>
        </div>
      </div> 

      <div ref={getinRef}>
        <Getin
        title1="Get In Touch With Best Software "
        title2="Consulting Company"
        />
      </div>
      
      <div className="data">
        <div className="container">
          <h2 className='mt-5'>Our Detailed Data Analytics Process</h2>
          <Process 
            number1="01"
            title1="Planning and Discovery"
            img1="./image/webdevlopment/Mask group (4).png"
            desc1="Define Goals: Understand the purpose of the website or web application, target audience, and desired outcomes.Research: Conduct market research, competitor analysis, and gather requirements from stakeholders. "

            number2="02"
            title2="Design Phase"
            img2="./image/webdevlopment/Mask.png"
            desc2="Wireframing: Create wireframes or low-fidelity prototypes to outline the structure and layout of key pages and features.
            UI/UX Design: Develop high-fidelity designs focusing on user interface (UI) design elements such as colors, typography, icons, and user experience (UX) considerations like navigation, interactions, and usability. "
          />
          <Process 
            number1="03"
            title1="Development"
            img1="./image/webdevlopment/Mask group (3).png"
            desc1="Front-end Development brings UI/UX designs to life using HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js. Back-end Development manages server-side logic, databases, and functionality with languages like Python, PHP, Ruby, Java, or Node.js, utilizing frameworks such as Django, Laravel, Ruby on Rails, Spring Boot, or Express.js based on project requirements. "

            number2="04"
            title2="Testing"
            img2="./image/webdevlopment/image 90 (1).png"
            desc2="Functional Testing verifies features work as intended, Compatibility Testing ensures performance across devices, Usability Testing gathers feedback for user experience improvements, and Security Testing safeguards data and authentication. "
          />
          <Process 
            number1="05"
            title1="Deployment"
            img1="./image/webdevlopment/image 90.png"
            desc1="Server Setup involves choosing a hosting environment (shared, VPS, cloud), configuring servers, databases, domains, and SSL certificates. Deploy Code includes uploading web application files, configuring settings, and ensuring functionality in the production environment. Monitor Performance using tools to track performance metrics, uptime, response times, and server resources for optimization. "

            number2="06"
            title2="Maintenance and Updates"
            img2="./image/webdevlopment/Mask group (2).png"
            desc2="Regular updates are crucial for website security and performance, ensuring software and plugins are up-to-date to prevent vulnerabilities. Continuous content updates maintain user engagement and relevance, meeting evolving business needs. Consistent technical support and bug fixes ensure smooth functionality, enhancing user satisfaction and operational efficiency. "
          />
          <Process 
            number1="07"
            title1="Optimization and SEO"
            img1="./image/webdevlopment/Mask group (1).png"
            desc1="To enhance website performance, focus on improving speed through code optimization, image compression, and caching techniques. Additionally, implement SEO strategies such as optimizing meta tags, headings, content, and site structure, along with creating sitemaps, robots.txt files, and schema markup, to boost indexing and ranking on search engines. "

            number2="08"
            title2="Feedback and Iteration"
            img2="./image/webdevlopment/Mask group.png"
            desc2="Gathering feedback from users, stakeholders, and analytics data allows for informed decision-making in implementing iterative improvements, introducing new features, and making enhancements based on feedback and performance metrics, ensuring continuous iteration and improvement of the website/application to align with evolving business goals and user needs. "
          />
          {/* <div className="row mt-5">
            <div className="col-lg-4">
              <div className="chek mt-5">
                <span className='one'>01</span>
                <h1 className='mb-4'> Planning and Discovery</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <center><img src="./image/webdevlopment/Mask group (4).png" alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <p>Define Goals: Understand the purpose of the website or web application, target audience, and desired outcomes.Research: Conduct market research, competitor analysis, and gather requirements from stakeholders.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4  mt-5">
              <p>Wireframing: Create wireframes or low-fidelity prototypes to outline the structure and layout of key pages and features.
                UI/UX Design: Develop high-fidelity designs focusing on user interface (UI) design elements such as colors, typography, icons, and user experience (UX) considerations like navigation, interactions, and usability.</p>
            </div>
            <div className="col-lg-4">
              <center><img src="./image/webdevlopment/Mask.png" alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="chek mt-5">
                  <h1> Design Phase</h1>
                  <span className='two'>02</span>
                </div>
              </div>
          </div> */}
          {/* <div className="row mt-5">
            <div className="col-lg-4">
              <div className="chek mt-5">
                <span className='three'>03</span>
                <h1> Development</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <center><img src="./image/webdevlopment/Mask group (3).png" alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <p>Front-end Development brings UI/UX designs to life using HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js. Back-end Development manages server-side logic, databases, and functionality with languages like Python, PHP, Ruby, Java, or Node.js, utilizing frameworks such as Django, Laravel, Ruby on Rails, Spring Boot, or Express.js based on project requirements.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mt-5">
              <p>Functional Testing verifies features work as intended, Compatibility Testing ensures performance across devices, Usability Testing gathers feedback for user experience improvements, and Security Testing safeguards data and authentication.</p>
            </div>
            <div className="col-lg-4">
              <center><img src="./image/webdevlopment/image 90 (1).png" alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="chek mt-5">
                  <h1> Testing</h1>
                  <span className='four'>04</span>
                </div>
              </div>
          </div> */}
          {/* <div className="row mt-5">
            <div className="col-lg-4">
              <div className="chek mt-5">
                <span className='five'>05</span>
                <h1> Deployment</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <center><img src="./image/webdevlopment/image 90.png" alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <p>Server Setup involves choosing a hosting environment (shared, VPS, cloud), configuring servers, databases, domains, and SSL certificates. Deploy Code includes uploading web application files, configuring settings, and ensuring functionality in the production environment. Monitor Performance using tools to track performance metrics, uptime, response times, and server resources for optimization.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mt-5">
              <p>Regular updates are crucial for website security and performance, ensuring software and plugins are up-to-date to prevent vulnerabilities. Continuous content updates maintain user engagement and relevance, meeting evolving business needs. Consistent technical support and bug fixes ensure smooth functionality, enhancing user satisfaction and operational efficiency.</p>
            </div>
            <div className="col-lg-4">
              <center><img src="./image/webdevlopment/Mask group (2).png" alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="chek mt-5">
                  <h1> Maintenance and Updates</h1>
                  <span className='six'>06</span>
                </div>
              </div>
          </div> */}
          {/* <div className="row mt-5">
            <div className="col-lg-4">
              <div className="chek mt-5">
                <span className='seven'>07</span>
                <h1 className='mb-4'> Optimization and SEO</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <center><img src="./image/webdevlopment/Mask group (1).png" alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <p>To enhance website performance, focus on improving speed through code optimization, image compression, and caching techniques. Additionally, implement SEO strategies such as optimizing meta tags, headings, content, and site structure, along with creating sitemaps, robots.txt files, and schema markup, to boost indexing and ranking on search engines.</p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-4 mt-5">
              <p>Gathering feedback from users, stakeholders, and analytics data allows for informed decision-making in implementing iterative improvements, introducing new features, and making enhancements based on feedback and performance metrics, ensuring continuous iteration and improvement of the website/application to align with evolving business goals and user needs.</p>
            </div>
            <div className="col-lg-4">
              <center><img src="./image/webdevlopment/Mask group.png" alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="chek mt-5">
                  <h1> Feedback and Iteration</h1>
                  <span className='eight'>08</span>
                </div>
              </div>
          </div> */}
        </div>
      </div>


    </>
  )
}

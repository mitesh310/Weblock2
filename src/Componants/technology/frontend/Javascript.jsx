import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Getin from '../../service/Getin';
import Solution from '../Solution';
import './javascript.css'

export default function Javascript() {
  

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
        heading="Javascrpit Development" 
        desc="Welcome to our website development services! As part of our comprehensive offerings, we specialize in JavaScript development, harnessing the power of this versatile programming language to create dynamic and interactive web experiences. In this section, we provide an overview of JavaScript, its features, and how it can elevate your web development projects. "
        button="Get started"
        scrollToGetin={scrollToGetin} 
      />

      <Solution
        heading="Introduction to JavaScript"
        customHr={customHr}

        desc2="JavaScript is a high-level, interpreted programming language primarily used for creating dynamic and interactive web content. It is one of the core technologies of the World Wide Web, alongside HTML and CSS, and is supported by all modern web browsers. JavaScript enables developers to add interactivity, manipulate DOM elements, handle events, and communicate with servers, making it essential for building modern web applications."
        img2="./image/javascript/image 104.png"
      />

      <div className="javascript">
        <div className="container">
          <h2>Key Features of JavaScript</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Client-Side Scripting</h5>
                <p>JavaScript is primarily used for client-side scripting, allowing developers to write code that runs directly in the web browser. This enables dynamic content generation, user interface enhancements, form validation, and enhancing the user experience of web applications.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>DOM Manipulation</h5>
                <p>JavaScript enables developers to manipulate the Document Object Model (DOM), which represents the structure and content of HTML documents. With JavaScript, developers can dynamically create, modify, and delete DOM elements, and enabling rich and interactive web experiences.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Event Handling</h5>
                <p>JavaScript empowers developers to respond to user actions like clicks, keypresses, and mouse movements by attaching event listeners to DOM elements. This enables seamless execution of code in response to user interactions, enhancing interactivity and responsiveness in web applications.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Asynchronous Programming</h5>
                <p>JavaScript supports asynchronous programming patterns, such as callbacks, promises, and async/await, enabling non-blocking and concurrent execution of code. Asynchronous programming is essential for handling tasks such as fetching data from servers, and improving performance and responsiveness.</p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Cross-Platform Compatibility</h5>
                <p>JavaScript is universally supported by modern web browsers like Chrome, Firefox, Safari, and Edge, as well as mobile browsers on iOS and Android. Its cross-platform compatibility ensures broad accessibility for JavaScript-based web applications, eliminating the need for platform-specific code or plugins. </p>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <center><button onClick={scrollToGetin}>More Discuss With Us</button></center>
        </div>
      </div>  

      <div ref={getinRef}>
        <Getin 
          title1="Interested in Starting JavaScript  "
          title2="With Us?"
        />
      </div>


    {/* this seaction css anglur.css */}
    <div className="point">
      <div className="container">
        <h2>Key Components of JavaScript libraries</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="row">
          
          <div className="col-lg-3"></div>
          <div className="col-lg-4">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> React.Js</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Vue.Js</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> AngularJS</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Bootstrap</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> D3.Js</h6>
            </div>
            
            
            
          </div>
          <div className="col-lg-3">
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> JQuery</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Express.Js</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Three.Js</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Moment.Js</h6>
            </div>
            <div className="chek">
              <img src="./image/webdevlopment/check-mark 1.png" alt="" />
              <h6 className='mb-4'> Socket.Io</h6>
            </div>
            
               
                     
          </div>
          
        </div>
        <center><button onClick={scrollToGetin}>More Discuss With Us</button></center>
      </div>
    </div>

    <div className="benifits-javascript">
      <div className="container">
        <h2>Benefits of Javascript</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Enhanced User Experience: <span>JavaScript enables developers to create dynamic, interactive, and responsive web applications that engage users and enhance their browsing experience.  </span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'>Rich Web Applications: <span> JavaScript powers modern web applications with features such as form validation, real-time updates, interactive maps, drag-and-drop functionality, and more, providing a rich and immersive user experience.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Extensibility and Modularity: <span> JavaScript ecosystem offers a vast array of libraries, frameworks, and plugins, such as React, Angular, Vue.js, and jQuery, which provide reusable components, utilities, and tools for building complex web applications efficiently.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Server-Side Development : <span>With the advent of server-side JavaScript frameworks such as Node.js, JavaScript can also be used for server-side development, enabling full-stack JavaScript development and sharing code between the client and server.</span></h5>
        </div>
        

      </div>
    </div>



    </>
  )
}

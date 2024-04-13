import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Solution from '../Solution'
import Getin from '../../service/Getin';
import './android.css'

export default function Android() {

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
        heading="Android app Development " 
        desc="We cannot deny the fact that Android is the world’s most popular mobile application platform, and having a presence on this platform in the form of an application makes great business sense. At Bacancy, we can help you build highly innovative and scalable Android applications with dynamic interfaces."
        button="Get Started"
      />  
      <Solution 
        heading="We are your Preferred Android App Development Partner"
        customHr={customHr}

        desc1="Our dedicated team prioritizes meeting your unique requirements by offering a comprehensive suite of features and services aimed at boosting your business revenue through a mobile-responsive platform. With skilled developers adept in cutting-edge methodologies, innovative ideas, and tailored solutions, we're committed to transforming your app concept into a successful reality. "
        img1="./image/android/image 104.png"
    
        title2="We Are A Team Comprised Of Industry Experts And Veterans "
        desc2="With a deep understanding of programming intricacies, unwavering dedication to quality, and a focus on enhancing ROI, our developers excel at crafting top-notch applications. Tap into our comprehensive Android app development services, providing a holistic solution for your web and mobile app requirements."
        img2="./image/android/image 105.png"
    />
    <div ref={getinRef}>
        <Getin 
        title1=" Optimize Your Business with Leading "
        title2=" Android Development Firm"
        />
    </div>

 {/* this seaction css anglur.css */}
    <div className="asp">
        <div className="container">
            <h2>Why Choose Android Development?</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <p>Android development boasts the largest market share globally, ensuring a vast user base and potential audience for your app. Moreover, as an open-source platform, Android offers unparalleled flexibility and customization options for developers, fostering innovation and creativity. By leveraging the Google Play Store, one of the largest app distribution platforms, Android apps can reach millions of users worldwide, maximizing their visibility and impact. Additionally, the thriving community of developers provides invaluable resources, tutorials, and support, making Android development an accessible and rewarding journey.</p>

        </div>
    </div>


    <div className="key">
      <div className="container">
        <h2>Key Components of Android Development</h2>
        <div className="row">
            
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Java/Kotlin Programming </h5>
                <p>Facebook provides social media marketing services like ad targeting, audience insights, page management, and analytics to help businesses connect with customers, drive sales, and analyze performance through their platform.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Android SDK</h5>
                <p>The Android SDK provides developers with a set of tools, libraries, and APIs necessary for building, testing, and debugging Android applications.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>User Interface (UI) Design</h5>
                <p>Android development includes designing the user interface (UI) of the app, including layout design, navigation, and interaction elements, to create an intuitive and visually appealing user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Activity Lifecycle Management</h5>
                <p>Activities are a fundamental component of Android applications. Understanding and managing the lifecycle of activities is crucial for ensuring proper behavior and performance of the app.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Data Storage</h5>
                <p>Android apps often need to store and retrieve data locally or remotely. Android provides various options for data storage, including SharedPreferences, SQLite databases, and network APIs for accessing remote data.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Integration with Device Features</h5>
                <p>Android apps can leverage the device's hardware and software features, such as camera, GPS, sensors, and permissions system, to provide enhanced functionalities and user experiences.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

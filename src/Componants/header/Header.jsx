import React, { useState, useEffect } from "react";
import './header.css'; 
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight * 0.5;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="cont">
        <input type="checkbox" name="check" id="check" checked={isMenuOpen} onChange={toggleMenu} />
        <div className="logo-container">
          <Link to="/">
            <img src={scrolled ? "./image/home/logo-2.png" : "./image/home/image 48.png"} alt="Company Logo" width="100" />
          </Link>

        </div>

        <div className={`nav-btn ${isMenuOpen ? 'show' : ''}`}>
          <div className="nav-links">
            <ul>
              
            {/* <Link className="nav-link" to="/about">Company</Link> */}

              <Link className="nav-link" style={{ '--i': '.6s' }} to="/about">
                <a href="/about">Company</a>
              </Link>
              <Link className="nav-link" style={{ '--i': '.85s' }}>
                <a href="#">Services<i className="fas fa-caret-down"></i></a>
                <div className="dropdown">
                  <ul>
                    <Link className="dropdown-link" to="/web-development">
                      <a href="#">Webdevlopment</a>
                    </Link>
                    
                    <Link className="dropdown-link" to="/mobile">
                      <a href="#">Mobile Development</a>
                    </Link>
                    <Link className="dropdown-link" to="/dataanalytics">
                      <a href="#">Data Analytics</a>
                    </Link>
                    <Link className="dropdown-link" to="/marketing">
                      <a href="#">Marketing </a>
                    </Link>
                    <Link className="dropdown-link" to="/Graphics ">
                      <a href="#">Graphics  </a>
                    </Link>
                    <Link className="dropdown-link" to="/software">
                      <a href="#">Software Development </a>
                    </Link>
                    <Link className="dropdown-link" to="/ui">
                      <a href="#">UI/UX Development </a>
                    </Link>
                   
                    
                    <div className="arrow"></div>
                  </ul>
                </div>
              </Link>
              <Link className="nav-link" style={{ '--i': '1.1s' }}>
                <a href="#">Technology<i className="fas fa-caret-down"></i></a>
                <div className="dropdown">
                  <ul>
                    {/*   mobile */}
                    <li className="dropdown-link">
                      <a className="sub-menu">Mobile App<i className="fas fa-caret-down"></i></a>
                      <div className="dropdown second">
                        <ul>
                        <Link className="dropdown-link" to="/ios">
                          <a href="#">IOS</a>
                        </Link>
                        <Link className="dropdown-link" to="/android">
                          <a href="#">Android</a>
                        </Link>
                        <Link className="dropdown-link" to="/flutter">
                          <a href="#">Flutter</a>
                        </Link>
                        {/* <Link className="dropdown-link" to="/">
                          <a href="#">Kotlin</a>
                        </Link> */}
                        <Link className="dropdown-link" to="/native">
                          <a href="#">React Netive</a>
                        </Link>
                        
                          
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    {/*   frontend */}
                    <li className="dropdown-link">
                      <a className="sub-menu">Frontend <i className="fas fa-caret-down"></i></a>
                      <div className="dropdown second">
                        <ul>
                        <Link className="dropdown-link" to="/html">
                          <a href="#">HTML/CSS</a>
                        </Link>
                        <Link className="dropdown-link" to="/javascript">
                          <a href="#">Javascript</a>
                        </Link>
                        <Link className="dropdown-link" to="/angularjs">
                          <a href="#">Angular Js</a>
                        </Link>
                        <Link className="dropdown-link" to="/vue">
                          <a href="#">Vue Js</a>
                        </Link>
                        <Link className="dropdown-link" to="/react">
                          <a href="#">React Js</a>
                        </Link>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    {/*   backend */}
                    <li className="dropdown-link">
                      <a className="sub-menu">Backend <i className="fas fa-caret-down"></i></a>
                      <div className="dropdown second">
                        <ul>
                        <Link className="dropdown-link" to="/node">
                          <a href="#">Node Js</a>
                        </Link>
                        <Link className="dropdown-link" to="/laravel">
                          <a href="#">Laravel</a>
                        </Link>
                        <Link className="dropdown-link" to="/python">
                          <a href="#">Python</a>
                        </Link>
                        <Link className="dropdown-link" to="/java">
                          <a href="#">Java</a>
                        </Link>
                        <Link className="dropdown-link" to="/net">
                          <a href="#">.Net</a>
                        </Link>
                        {/* <Link className="dropdown-link" to="/">
                          <a href="#">.Net Core</a>
                        </Link> */}
                        <Link className="dropdown-link" to="/spring">
                          <a href="#">Spring Boot</a>
                        </Link>
                        <Link className="dropdown-link" to="/rdev">
                          <a href="#">R Dev</a>
                        </Link>
                        <Link className="dropdown-link" to="/django">
                          <a href="#">Django</a>
                        </Link>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    {/*   database */}
                    <li className="dropdown-link">
                      <a className="sub-menu">Database<i className="fas fa-caret-down"></i></a>
                      <div className="dropdown second">
                        <ul>
                        <Link className="dropdown-link" to="/database">
                          <a href="#">Database</a>
                        </Link>                    
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    {/*   cloud */}
                    <li className="dropdown-link">
                      <a className="sub-menu">Cloud Services<i className="fas fa-caret-down"></i></a>
                      <div className="dropdown second">
                        <ul>
                        <Link className="dropdown-link" to="/aws">
                          <a href="#">AWS</a>
                        </Link>
                        <Link className="dropdown-link" to="/azure">
                          <a href="#">Azure</a>
                        </Link>  
                        <Link className="dropdown-link" to="/gcp">
                          <a href="#">GCP</a>
                        </Link>                      
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    {/*   QA */}
                    <li className="dropdown-link">
                      <a className="sub-menu">QA Testing<i className="fas fa-caret-down"></i></a>
                      <div className="dropdown second">
                        <ul>
                        <Link className="dropdown-link" to="/manual">
                          <a href="#">Menual Testing</a>
                        </Link>
                        <Link className="dropdown-link" to="/automation">
                          <a href="#">Automation Testing</a>
                        </Link>                        
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    {/*   Devops */}
                    <li className="dropdown-link">
                      <a className="sub-menu">DevOps<i className="fas fa-caret-down"></i></a>
                      <div className="dropdown second">
                        <ul>
                        <Link className="dropdown-link" to="/devopsconsulting">
                          <a href="#">DevOps Consulting Services</a>
                        </Link>
                        <Link className="dropdown-link" to="/devopsimplementation">
                          <a href="#">DevOps Implementation Services</a>
                        </Link>
                        <Link className="dropdown-link" to="/devopsautomation">
                          <a href="#">DevOps Automation Services</a>
                        </Link>
                          
                          {/* <li className="dropdown-link">
                            <a href="#">More<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Link 1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 2</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 3</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li> */}
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    {/*   social */}
                    <li className="dropdown-link">
                      <a className="sub-menu">Digital Marketing<i className="fas fa-caret-down"></i></a>
                      <div className="dropdown second">
                        <ul>
                        <Link className="dropdown-link" to="/socialmedia">
                          <a href="#">Social Media Marketing</a>
                        </Link>                        
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    
                    
                    <div className="arrow"></div>
                  </ul>
                </div>
              </Link>
              <Link className="nav-link" style={{ '--i': '1.35s' }} to="/staff-augmentation">
                <a href="#">Staff-Augmentation</a>
              </Link>
              <Link className="nav-link" style={{ '--i': '1.35s' }} to="/contact">
                <a href="#">Contact Us</a>
              </Link>
            </ul>
          </div>
        </div>

        <div className="hamburger-menu-container">
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

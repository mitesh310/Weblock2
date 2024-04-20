import React, { useState, useEffect } from "react";
import './header.css'; 
// import { Link } from "react-router-dom";

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
      <div className="container">
        <div className="cont">
          <input type="checkbox" name="check" id="check" checked={isMenuOpen} onChange={toggleMenu} />
          <div className="logo-container">
            <a href="/">
              <img src={scrolled ? "./image/home/logo-2.png" : "./image/home/logo-1.png"} alt="Company Logo" width="100" />
            </a>
            
            

          </div>

          <div className={`nav-btn ${isMenuOpen ? 'show' : ''}`}>
            <div className="nav-links">
              <ul>
                
              {/* <Link className="nav-link" to="/about">Company</Link> */}

                <li className="nav-link" style={{ '--i': '.6s' }} to="/about">
                  <a href="/about">Company</a>
                </li>
                <li className="nav-link" style={{ '--i': '.85s' }} to={'/service'}>
                  <a href="#">Services<i className="fas fa-caret-down"></i></a>
                  <div className="dropdown">
                    <ul>
                    <li className="dropdown-link" to="/service">
                        <a href="/service">All Services</a>
                      </li>
                      <li className="dropdown-link" to="/web-development">
                        <a href="/web-development">Web Devlopment</a>
                      </li>
                      
                      <li className="dropdown-link" to="/mobile">
                        <a href="/mobile">Mobile Development</a>
                      </li>
                      <li className="dropdown-link" to="/dataanalytics">
                        <a href="/dataanalytics">Data Analytics</a>
                      </li>
                      <li className="dropdown-link" to="/marketing">
                        <a href="/marketing">Marketing </a>
                      </li>
                      <li className="dropdown-link" to="/Graphics ">
                        <a href="/Graphics">Graphics  </a>
                      </li>
                      <li className="dropdown-link" to="/software">
                        <a href="/software">Software Development </a>
                      </li>
                      <li className="dropdown-link" to="/ui">
                        <a href="/ui">UI/UX Development </a>
                      </li>
                    
                      
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li className="nav-link" style={{ '--i': '1.1s' }}>
                  <a href="#">Technology<i className="fas fa-caret-down"></i></a>
                  <div className="dropdown">
                    <ul>
                      {/*   mobile */}
                      <li className="dropdown-link">
                        <a className="sub-menu">Mobile App<i className="fas fa-caret-down"></i></a>
                        <div className="dropdown second">
                          <ul>
                          <li className="dropdown-link" to="/ios">
                            <a href="/ios">IOS</a>
                          </li>
                          <li className="dropdown-link" to="/android">
                            <a href="/android">Android</a>
                          </li>
                          <li className="dropdown-link" to="/flutter">
                            <a href="/flutter">Flutter</a>
                          </li>
                          {/* <Link className="dropdown-link" to="/">
                            <a href="#">Kotlin</a>
                          </Link> */}
                          <li className="dropdown-link" to="/native">
                            <a href="/native">React Netive</a>
                          </li>
                          
                            
                            <div className="arrow"></div>
                          </ul>
                        </div>
                      </li>
                      {/*   frontend */}
                      <li className="dropdown-link">
                        <a className="sub-menu">Frontend <i className="fas fa-caret-down"></i></a>
                        <div className="dropdown second">
                          <ul>
                          <li className="dropdown-link" to="/html">
                            <a href="/html">HTML/CSS</a>
                          </li>
                          <li className="dropdown-link" to="/javascript">
                            <a href="/javascript">Javascript</a>
                          </li>
                          <li className="dropdown-link" to="/angularjs">
                            <a href="/angularjs">Angular Js</a>
                          </li>
                          <li className="dropdown-link" to="/vue">
                            <a href="/vue">Vue Js</a>
                          </li>
                          <li className="dropdown-link" to="/react">
                            <a href="/react">React Js</a>
                          </li>
                            <div className="arrow"></div>
                          </ul>
                        </div>
                      </li>
                      {/*   backend */}
                      <li className="dropdown-link">
                        <a className="sub-menu">Backend <i className="fas fa-caret-down"></i></a>
                        <div className="dropdown second">
                          <ul>
                          <li className="dropdown-link" to="/node">
                            <a href="/node">Node Js</a>
                          </li>
                          <li className="dropdown-link" to="/laravel">
                            <a href="/laravel">Laravel</a>
                          </li>
                          <li className="dropdown-link" to="/python">
                            <a href="/python">Python</a>
                          </li>
                          <li className="dropdown-link" to="/java">
                            <a href="/java">Java</a>
                          </li>
                          <li className="dropdown-link" to="/net">
                            <a href="/net">.Net</a>
                          </li>
                          <li className="dropdown-link" to="/spring">
                            <a href="/spring">Spring Boot</a>
                          </li>
                          <li className="dropdown-link" to="/rdev">
                            <a href="/rdev">R Dev</a>
                          </li>
                          <li className="dropdown-link" to="/django">
                            <a href="/django">Django</a>
                          </li>
                            <div className="arrow"></div>
                          </ul>
                        </div>
                      </li>
                      {/*   database */}
                      <li className="dropdown-link">
                        <a className="sub-menu">Database<i className="fas fa-caret-down"></i></a>
                        <div className="dropdown second">
                          <ul>
                          <li className="dropdown-link" to="/database">
                            <a href="/database">Database</a>
                          </li>                    
                            <div className="arrow"></div>
                          </ul>
                        </div>
                      </li>
                      {/*   cloud */}
                      <li className="dropdown-link">
                        <a className="sub-menu">Cloud Services<i className="fas fa-caret-down"></i></a>
                        <div className="dropdown second">
                          <ul>
                          <li className="dropdown-link" to="/aws">
                            <a href="/aws">AWS</a>
                          </li>
                          <li className="dropdown-link" to="/azure">
                            <a href="/azure">Azure</a>
                          </li>  
                          <li className="dropdown-link" to="/gcp">
                            <a href="/gcp">GCP</a>
                          </li>                      
                            <div className="arrow"></div>
                          </ul>
                        </div>
                      </li>
                      {/*   QA */}
                      <li className="dropdown-link">
                        <a className="sub-menu">QA Testing<i className="fas fa-caret-down"></i></a>
                        <div className="dropdown second">
                          <ul>
                          <li className="dropdown-link" to="/manual">
                            <a href="/manual">Manual Testing</a>
                          </li>
                          <li className="dropdown-link" to="/automation">
                            <a href="/automation">Automation Testing</a>
                          </li>                        
                            <div className="arrow"></div>
                          </ul>
                        </div>
                      </li>
                      {/*   Devops */}
                      <li className="dropdown-link">
                        <a className="sub-menu">DevOps<i className="fas fa-caret-down"></i></a>
                        <div className="dropdown second">
                          <ul>
                          <li className="dropdown-link" to="/devopsconsulting">
                            <a href="/devopsconsulting">DevOps Consulting Services</a>
                          </li>
                          <li className="dropdown-link" to="/devopsimplementation">
                            <a href="/devopsimplementation">DevOps Implementation Services</a>
                          </li>
                          <li className="dropdown-link" to="/devopsautomation">
                            <a href="/devopsautomation">DevOps Automation Services</a>
                          </li>
                            
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
                          <li className="dropdown-link" to="/socialmedia">
                            <a href="/socialmedia">Social Media Marketing</a>
                          </li>                        
                            <div className="arrow"></div>
                          </ul>
                        </div>
                      </li>
                      
                      
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li className="nav-link" style={{ '--i': '1.35s' }} to="/staff-augmentation">
                  <a href="/staff-augmentation">Staff-Augmentation</a>
                </li>
                <li className="nav-link" style={{ '--i': '1.35s' }} to="/contact">
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hamburger-menu-container">
            <div className="hamburger-menu" onClick={toggleMenu}>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

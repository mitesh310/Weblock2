import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
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

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div>
          <Link to="/">
            <img src={scrolled ? "./image/home/logo-2.png" : "./image/home/image 48.png"} alt="Company Logo" width="100" />
          </Link>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/about">Company</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/service">Technology</Link>
          </li> */}
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Technology
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/angularjs">Angular Js</Link></li>
              <li><Link className="dropdown-item" to="/react">React Js</Link></li>

            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/web-development">Web Developer</Link></li>
              <li><Link className="dropdown-item" to="/mobile">Mobile Development</Link></li>
              <li><Link className="dropdown-item" to="/dataanalytics">Data Analytics</Link></li>
              {/* <li><Link className="dropdown-item" to="/datascinece">Data Scinece </Link></li> */}
              <li><Link className="dropdown-item" to="/marketing">Marketing </Link></li>
              <li><Link className="dropdown-item" to="/graphics">Graphics </Link></li>
              <li><Link className="dropdown-item" to="/software">Software Development</Link></li>
              <li><Link className="dropdown-item" to="/ui">UI/UX Development</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Staff-Augmentation</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

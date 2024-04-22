import React from 'react'
import "./footer.css"

export default function Footer () {
  return (
    <>
    <div className="footer py-5">
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-4">
                    <img src="./image/home/image 48.png" alt="" />
                    <p className='mt-3'>Expressing gratitude for exploring our digital realm; your valued presence significantly fuels Weblock Infosoft's continual innovation and growth in the dynamic tech landscape.</p>
                </div>
                <div className="col-lg-2 mt-4">
                    <h5>Hiring</h5>
                    <a href="/web-development">
                        <li className='mt-4'>Web Development</li>
                    </a>
                    <a href="/mobile">
                        <li>App Development</li>
                    </a>
                    <li>Machine Learning</li>
                    <li>Data Science</li>
                    <li>Artificial Intelligence </li>
                </div>
                <div className="col-lg-2 mt-4">
                    <h5>Company</h5>
                    {/* <li className='mt-4'>Career</li> */}
                    <a href="/service">
                        <li className='mt-4' >Services</li>
                    </a>
                    <li>Technology</li>
                    <a href="/staff-augmentation">
                        <li>Staff Augmentation</li>
                    </a>
                    <a href="/contact">
                        <li>Contact Us</li>
                    </a>
                    
                </div>
                <div className="col-lg-4 mt-4">
                    <h5>Contact Information</h5>
                    <li className='mt-4'><i class="fa-solid fa-phone"></i> <a href="tel:8141865664">8141865664</a></li>
                    <li><i class="fa-solid fa-envelope"></i> <a href="mailto:info@weblockinfosoft.com">info@weblockinfosoft.com</a></li>
                    <li> 
                        <div className="chek-f">
                            <img className='fa-solid' src="./image/home/location.png" alt="" /> 
                            <h6> Headquater- </h6> 
                            <p>3 King William St, Adelaide SA 5000, Australia.</p>
                        </div>
                    </li>
                    <li> 
                        <div className="chek-f">
                            <img className='fa-solid' src="./image/home/location.png" alt="" /> 
                            {/* <i class="fa-solid fa-location-dot"></i>  */}
                            <h6> Branch- </h6> 
                            <p>303-304 Golden Square, near D-Mart, Mota Varachha, Surat.</p>
                        </div>
                    </li>
                    
                </div>
            </div>
            <div class="end-line mt-5">
                <div class="footer-text">
                    <h6>@2024 Weblock infosoft. All Rights Reserved</h6>
                </div>
                <div class="footer-icons">
                    <a href="https://www.facebook.com/people/Weblock-Infosoft/61555415910934/" target="_blank">
                        <i class="f-icon fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/weblock_infosoft/"  target="_blank">
                        <i class="f-icon fab fa-instagram"></i>
                    </a>
                    <a href="https://github.com/weblock-infosoft" target="_blank">
                        <i class="f-icon fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/weblock-infosoft/" target="_blank">
                        <i class="f-icon fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

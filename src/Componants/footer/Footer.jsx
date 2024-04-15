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
                    <li className='mt-4'>Web Development</li>
                    <li>App Development</li>
                    <li>Machine Learning</li>
                    <li>Data Science</li>
                    <li>Artificial Intelligence </li>
                </div>
                <div className="col-lg-2 mt-4">
                    <h5>Company</h5>
                    <li className='mt-4'>Career</li>
                    <li>Services</li>
                    <li>Technology</li>
                    <li>Staff Augmentation</li>
                    <li>Contact Us</li>
                </div>
                <div className="col-lg-4 mt-4">
                    <h5>Contact Information</h5>
                    <li className='mt-4'><i class="fa-solid fa-phone"></i> 081281 65664</li>
                    <li><i class="fa-solid fa-envelope"></i> info@weblockinfosoft.com</li>
                    <li> 
                        <div className="chek">
                            <i class="fa-solid fa-location-dot"></i> 
                            <h5> Headquater- </h5> 
                            <p>3 King William St, Adelaide SA 5000, Australia.</p>
                        </div>
                    </li>
                    <li> 
                        <div className="chek">
                            <i class="fa-solid fa-location-dot"></i> 
                            <h5> Branch- </h5> 
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
                    <i class="f-icon fab fa-facebook-f"></i>
                    <i class="f-icon fab fa-instagram"></i>
                    <i class="f-icon fab fa-github"></i>
                    <i class="f-icon fab fa-linkedin"></i>
                </div>
            </div>
            

            
        </div>
        
    </div>
    </>
  )
}

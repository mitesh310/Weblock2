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
                    <li><i class="fa-solid fa-location-dot"></i> Headquater - 3 King William St, Adelaide SA 5000, Australia.</li>
                    <li><i class="fa-solid fa-location-dot"></i> Branch - 303-304 Golden Square, near D-Mart, Mota Varachha, Surat.</li>
                </div>
            </div>
            <div className="footer-end d-flex justify-content-between align-items-center mt-5">
            <h6 class='mt-5'>@2024 Weblock infosoft . All Rights Reserved</h6>
            <div class="f-icon mt-5">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
            

            
        </div>
        
    </div>
    </>
  )
}

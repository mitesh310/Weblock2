import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="bg">
          <h2>Contact US</h2>
          <p>get in touch and let us know we can help</p>
        </div>
        <div className="container">
          <div className="box my-5">
            <h2>Send us a message</h2>
            <p>
              please familiarize yourself with our services and let us help you
              get started.
            </p>
            <form action="">
              <div className="row">
                <div class="mb-3 col-6">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name <span>*</span>
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your name"
                    required
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="exampleFormControlInput1" class="form-label">
                    Subject <span>*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Subject"
                    required
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  E-Mail <span>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Enter Your Message <span>*</span>
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Enter Your Message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button className="col-12">
                <img src="./image/contact/Vector.png" alt="" /> Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="map">
        <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3718.802573906289!2d72.871405!3d21.239676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb016975ecf%3A0x94cbc69558af4834!2sWeblock%20Infosoft!5e0!3m2!1sen!2sin!4v1712047705634!5m2!1sen!2sin"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
        <div className="container">
          <div className="help">
            <h2 className="mt-3">More Help & Support</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 my-3">
                <div className="free">
                  <center>
                    <img src="./image/contact/consultation.png" alt="" />
                  </center>
                  <h5>Free Consultations</h5>
                  <p>
                    Consultants offer advice and expertise to client
                    organisations to help them improve their business
                    performance
                  </p>
                  <center>
                    <button>Explore More</button>
                  </center>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 my-3">
                <div className="free">
                  <center>
                    <img src="./image/contact/book.png" alt="" />
                  </center>
                  <h5>Knowledge Base</h5>
                  <p>
                    Creating a knowledge base for providing information involves
                    compiling and organizing valuable resources and content to
                    educate users or customers.
                  </p>
                  <center>
                    <button>Explore More</button>
                  </center>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 my-3">
                <div className="free">
                  <center>
                    <img src="./image/contact/customer.png" alt="" />
                  </center>
                  <h5>Contact Support</h5>
                  <p>
                    Assistance with any questions or issues you may encounter.
                    Our team is here to help and ready to provide solutionse
                  </p>
                  <center>
                    <button>Explore More</button>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

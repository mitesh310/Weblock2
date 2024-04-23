import React, { useEffect } from 'react';
import "./home.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovingComponent from 'react-moving-text';
import ScrollReveal from 'scrollreveal';



export default function Home() {


    
  useEffect(() => {
    const sr = ScrollReveal({
      duration: 1000,
      distance: '30px',
      delay: 300,
      opacity: 0,
      easing: 'ease-in-out',
      cleanup: true
    });

  
    sr.reveal('.home h1',{
      origin: 'bottom',
      distance: '30px'
    });
    sr.reveal('.client h3',{
      origin: 'bottom',
      distance: '30px'
    });
    sr.reveal('.box h3',{
      origin: 'bottom',
      distance: '30px'
    });
    sr.reveal('.service h3',{
        origin: 'bottom',
        distance: '30px'
    });
    sr.reveal('.process h3',{
        origin: 'bottom',
        distance: '30px'
    });
    sr.reveal('.indu h3',{
        origin: 'bottom',
        distance: '30px'
    });
    sr.reveal('.meet h3',{
        origin: 'bottom',
        distance: '30px'
    });
    sr.reveal('.test h3',{
        origin: 'bottom',
        distance: '30px'
    });


    return () => {
      sr.destroy(); 
    };
  }, []); 
  


//   this seaction is test slider
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust this value according to your needs
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Adjust this value according to your needs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <div className="company">
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        
                            <h1>Boost your Business <br />By leveraging <span>AI & ML</span> </h1>
                            <p>The development of full artificial intelligence cloud <br /> spell the end of the human race.</p>
                            <a href="/contact"><button className='mt-3'>Get In Touch</button></a>
                        
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img className='h-img' src="./image/home/bg.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="client">
            <div className="container">
                <div className="half-logo d-flex justify-content-center align-items-center">
                    <img className='logo' src="./image/home/logo.png" alt="" />
                    <h3>Trusted By Over 148+ Clients Around The World</h3>
                </div>
                
            </div>
            <div className="trust">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-16.jpg" alt="" /></div>
                        </div>
                        <div className="col-lg-2">
                            <div class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-12.jpg"  alt=""/></div>
                        </div>
                        <div className="col-lg-2">
                            <div class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-15.jpg"  alt=""/></div>
                        </div>
                        <div className="col-lg-2">
                            <div class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-13.jpg"  alt=""/></div>
                        </div>
                        
                        <div className="col-lg-2">
                            <div class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-20.jpg"  alt=""/></div>
                        </div>
                        <div className="col-lg-2">
                            <div class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-14.jpg"  alt=""/></div>
                        </div>                
                    </div>
                </div>
            </div>
        </div>
        <div class="all">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h1><span>The Numbers</span><br /> say it all</h1>
                </div>
                <div class="col-lg-3">
                    <div className="finish">
                    <h3>256+ <br />
                        <span>Finished <br />Projects</span>
                    </h3>
                    <hr className='hr' /> 
                    <h3>18+ <br />
                        <span>Created  <br />Jobs</span>
                    </h3>
                    </div>
                    
                </div>
                <div class="col-lg-3">
                    <h3>148+ <br />
                        <span>Happy <br />Customers</span>
                    </h3>
                    <hr className='hr' /> 
                    <h3>5+ <br />
                        <span>Years Of <br />Experience</span>
                    </h3>
                    
                </div>
                
            </div>
        </div>
        </div>
        <div class="box">
            <div class="container-fluid">
                <div className="half-logo d-flex justify-content-center align-items-center">
                    <img className='logo' src="./image/home/logo.png" alt="" />
                    <h3>Technologies We Work With</h3>
                </div>
                <div className="i-sli">
                    <div className="image-sli">
                        <img src="./image/home/html-5.png" alt="" />
                        <img src="./image/home/css-3.png" alt="" />
                        <img src="./image/home/javascript.png" alt="" />
                        <img src="./image/home/bootstrap.png" alt="" />
                        <img src="./image/home/react.png" alt="" />
                        <img src="./image/home/Frame.png" alt="" />
                        <img src="./image/home/Flutter 1.png" alt="" />
                    </div>
                    <div className="image-sli">
                        <img src="./image/home/html-5.png" alt="" />
                        <img src="./image/home/css-3.png" alt="" />
                        <img src="./image/home/javascript.png" alt="" />
                        <img src="./image/home/bootstrap.png" alt="" />
                        <img src="./image/home/react.png" alt="" />
                        <img src="./image/home/Frame.png" alt="" />
                        <img src="./image/home/Flutter 1.png" alt="" />
                    </div>
                </div>
                <div className="i-sli">
                    <div className="image-left">
                        <img src="./image/home/PHP-logo 1.png" alt="" />
                        <img src="./image/home/mysql-official 1.png" alt="" />
                        <img src="./image/home/nodejs-ar21 1.png" alt="" />
                        <img src="./image/home/java.png" alt="" />
                        <img src="./image/home/csharp.png" alt="" />
                        <img src="./image/home/python.png" alt="" />
                        <img src="./image/home/apple.png" alt="" />
                    </div>
                    <div className="image-left">
                        <img src="./image/home/PHP-logo 1.png" alt="" />
                        <img src="./image/home/mysql-official 1.png" alt="" />
                        <img src="./image/home/nodejs-ar21 1.png" alt="" />
                        <img src="./image/home/java.png" alt="" />
                        <img src="./image/home/csharp.png" alt="" />
                        <img src="./image/home/python.png" alt="" />
                        <img src="./image/home/apple.png" alt="" />
                    </div>
                </div>
                <div className="i-sli">
                    <div className="image-sli">
                        <img src="./image/home/aws.png" alt="" />
                        <img src="./image/home/Vector.png" alt="" />
                        <img src="./image/home/clould.png" alt="" />
                        <img src="./image/home/Go-Daddy.png" alt="" />
                        <img src="./image/home/ibm.png" alt="" />
                        <img src="./image/home/image 57.png" alt="" />
                        <img src="./image/home/hostinger.png" alt="" />
                    </div>
                    <div className="image-sli">
                        <img src="./image/home/aws.png" alt="" />
                        <img src="./image/home/Vector.png" alt="" />
                        <img src="./image/home/clould.png" alt="" />
                        <img src="./image/home/Go-Daddy.png" alt="" />
                        <img src="./image/home/ibm.png" alt="" />
                        <img src="./image/home/image 57.png" alt="" />
                        <img src="./image/home/hostinger.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
        <div className="service">
            <div className="container">
                <div className="container">
                    <div className="half-logo d-flex justify-content-center align-items-center">
                        <img className='logo' src="./image/home/logo.png" alt="" />
                        <h3>Our Services</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-5">
                            <div className="box">
                            <center><img src="./image/home/Frame (1).png" alt="" /></center>
                                <h5>Web Devlopment</h5>
                                <p>After designing, you will get your prototype, which will be sent ahead for the development process for the it.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5">
                            <div className="box">
                                <center><img className='vector' src="./image/home/Vector (1).png" alt="" /></center>
                                <h5 className='mt-4'>Mobile Application</h5>
                                <p>Development of mobile application/web/blockchain started using latest tools and technologies with transparency.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5">
                            <div className="box">
                                <center><img src="./image/home/brainstorming (1).png" alt="" /></center>
                                <h5>AI / ML</h5>
                                <p>Our company offers you all support and the team is always ready to answer every query after deployment.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5">
                            <div className="box">
                                <center><img className='vector' src="./image/home/stock-mobile 1.png" alt="" /></center>
                                <h5>Data Analytics</h5>
                                <p>Data analytics is the process of examining large sets of data to uncover hidden patterns, correlations, trends, and insights that can be used to make informed decisions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="process">
            <div className="container">
                <div className="half-logo d-flex justify-content-center align-items-center">
                    <img className='logo' src="./image/home/logo.png" alt="" />
                    <h3>Our Development Process</h3>
                </div>
                {/* <video
                    className='gif'
                    autoPlay
                >
                    <source src="./image/home/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <img className='gif' src="./image/home/Render2.gif" alt="" />
            </div>
        </div>
        <div className="indu">
            <div className="container">
                <div className="half-logo d-flex justify-content-center align-items-center">
                    <img className='logo' src="./image/home/logo.png" alt="" />
                    <h3>We Serve Industries</h3>
                </div>
                {/* <button className='btn'>View More</button> */}
                <div class="box-img mt-5">
                    <div class="box-1">
                        <center><img src="./image/home/4.png" alt="" /></center>
                        <h6>Retail, Ecommerce</h6>
                    </div>
                    <div class="box-1">
                        <center><img src="./image/home/SvgjsSvg1498.png" alt="" /></center>
                        <h6>Education & e-learning</h6>
                    </div>
                    <div class="box-1">
                        <center><img src="./image/home/SvgjsSvg1551.png" alt="" /></center>
                        <h6>Healthcare & Fitness</h6>
                    </div>
                    <div class="box-1">
                        <center><img src="./image/home/3.png" alt="" /></center>
                        <h6>Logistics & Distribution</h6>
                    </div>
                    <div class="box-1">
                        <center><img src="./image/home/SvgjsSvg1563.png" alt="" /></center>
                        <h6>Social Networking</h6>
                    </div>
                </div>
                <div class="box-img mt-5">
                    <div class="box-1">
                        <center><img src="./image/home/SvgjsSvg1591.png" alt="" /></center>
                        <h6>Retail, Ecommerce</h6>
                    </div>
                    <div class="box-1">
                        <center><img src="./image/home/Group.png" alt="" /></center>
                        <h6>Education & e-learning</h6>
                    </div>
                    <div class="box-1">
                        <center><img src="./image/home/2.png" alt="" /></center>
                        <h6>Healthcare & Fitness</h6>
                    </div>
                    <div class="box-1">
                        <center><img src="./image/home/1.png" alt="" /></center>
                        <h6>Logistics & Distribution</h6>
                    </div>
                    <div class="box-1">
                        <center><img src="./image/home/Frame.svg" alt="" /></center>
                        <h6>Social Networking</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="meet">
            <div className="container">
                <div className="half-logo d-flex justify-content-center align-items-center">
                    <img className='logo' src="./image/home/logo.png" alt="" />
                    <h3>Meet Our Team</h3>
                </div>
                <div className="row mt-5">
                <div className="col-lg-4 mt-2">
                    <div class="content">
                        <div class="content-overlay"></div>
                        <img class="content-image" src="./image/home/image 44 2.png" alt=""/>
                        <div class="content-details fadeIn-bottom">
                            <h4 class="content-title">Nitesh Vasani</h4>
                            <p class="content-text">Founder & CEO</p>
                            <div className='icon'>
                                <a href="https://www.facebook.com/profile.php?id=100005288536552" target="_blank">
                                    <i class="m-icon fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/mr._.bholu_/"  target="_blank">
                                    <i class="m-icon fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/nitesh-vasani-33890b23b/?originalSubdomain=in" target="_blank">
                                    <i class="m-icon fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
        
                    </div>
                </div>
                <div className="col-lg-4 mt-2">
                    <div class="content">
                        <div class="content-overlay"></div>
                        <img class="content-image" src="./image/home/team-2.jpg" alt=""/>
                        <div class="content-details fadeIn-bottom">
                            <h4 class="content-title">Avani Vaghani</h4>
                            <p class="content-text">HR</p>
                            <div className='icon'>
                                <a href="https://www.facebook.com/people/Avi-Vaghani/pfbid02bNp8rCw7YJYnhSTGHSfvLqyoaqJHuj2ZripcSGBqy5UUUH7hJQBzRWM76pUucFb1l/" target="_blank">
                                    <i class="m-icon fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/avi_vaghani/"  target="_blank">
                                    <i class="m-icon fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/avani-vaghani/" target="_blank">
                                    <i class="m-icon fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
        
                    </div>
                </div>
                <div className="col-lg-4 mt-2">
                    <div class="content">
                        <div class="content-overlay"></div>
                        <img class="content-image" src="./image/home/image 44.png" alt=""/>
                        <div class="content-details fadeIn-bottom">
                            <h4 class="content-title">Dhruvil Savaliya</h4>
                            <p class="content-text">Social Marketing Head</p>
                            <div className='icon'>
                                <a href="https://m.facebook.com/profile.php/?id=100007057936590&name=xhp_nt_" target="_blank">
                                    <i class="m-icon fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/awesome.surat/?igsh=YXpoYXpqNjNodWVp"  target="_blank">
                                    <i class="m-icon fab fa-instagram"></i>
                                </a>
                                <a href="https://in.linkedin.com/in/dhruvil-royal-5a8727207" target="_blank">
                                    <i class="m-icon fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
        
                    </div>
                </div>
                </div>
                
                
            </div>
        </div>
        <div className="test">
            <div className="container">
                <div className="half-logo d-flex justify-content-center align-items-center">
                    <img className='logo' src="./image/home/logo.png" alt="" />
                    <h3>Testimonial</h3>
                </div>
                <Slider {...settings}>
                    <div className='mt-5'>
                        <div className="card m-3">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                <img className='rounded-circle' src="./image/home/image 47.png" alt="" />
                                </div>
                                <div className="col-9 mt-3">
                                    <h5>John Carter</h5>
                                    <h6>CEO & Co-Founder</h6>
                                </div>
                            </div>
                            <p className='mt-3'>
                                Sagittis egestas suscipit pharetra nostra pulvinar curabitur rhoncus aliquet. Aliquam eros pharetra, nam dictumst eu facilisis maecenas ut.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className="card m-3">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                <img className='rounded-circle' src="./image/home/image 47.png" alt="" />
                                </div>
                                <div className="col-9 mt-3">
                                    <h5>John Carter</h5>
                                    <h6>CEO & Co-Founder</h6>
                                </div>
                            </div>
                            <p className='mt-3'>
                                Sagittis egestas suscipit pharetra nostra pulvinar curabitur rhoncus aliquet. Aliquam eros pharetra, nam dictumst eu facilisis maecenas ut.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className="card m-3">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                <img className='rounded-circle' src="./image/home/image 47.png" alt="" />
                                </div>
                                <div className="col-9 mt-3">
                                    <h5>John Carter</h5>
                                    <h6>CEO & Co-Founder</h6>
                                </div>
                            </div>
                            <p className='mt-3'>
                                Sagittis egestas suscipit pharetra nostra pulvinar curabitur rhoncus aliquet. Aliquam eros pharetra, nam dictumst eu facilisis maecenas ut.
                            </p>
                            </div>
                        </div>
                    </div>
                </Slider>
                
            </div>
        </div>
        <div className="talk">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <MovingComponent
                        type="unfold"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="infinite"
                        fillMode="none">
                        <h1>Let's talk!</h1>
                    </MovingComponent>
                        
                    </div>
                    <div className="col-lg-6">
                        <center><img className='h-img' src="./image/home/contact-us-animate.svg" alt="" /></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
    
  )
}

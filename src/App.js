import React from "react";
import CountUp from "react-countup";

function App() {

  return (
    <div>
    <header id="header" class="header fixed-top" style={{background:"#EEEEEE"}}>
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/fmitlogo.png"  alt="k"/>
        <span>FMIT</span>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li class="dropdown"><a href="/"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/">Drop Down 1</a></li>
              <li class="dropdown"><a href="/"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/">Deep Drop Down 1</a></li>
                  <li><a href="/">Deep Drop Down 2</a></li>
                  <li><a href="/">Deep Drop Down 3</a></li>
                  <li><a href="/">Deep Drop Down 4</a></li>
                  <li><a href="/">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="/">Drop Down 2</a></li>
              <li><a href="/">Drop Down 3</a></li>
              <li><a href="/">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="/contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
    
  </header>
  {/* end section */}
  <section id="hero" class="hero d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
          <h2 data-aos="fade-up" data-aos-delay="600">We are team of talented developers making Software using latest technology</h2>
          <div data-aos="fade-up" data-aos-delay="800">
            <div class="text-center text-lg-start">
              <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                <span>Get Started</span>
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="900">
          <img src="assets/img/hero-img.png" class="img-fluid" alt="abc"/>
        </div>
      </div>
    </div>

  </section>
  {/* main */}
  <main id="main">
    {/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about">

      <div class="container" data-aos="fade-up">
        <div class="row gx-0">

          <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div class="content">
              <h3>Who We Are</h3>
              <h2>Let's create something amazing together!</h2>
              <p>
              Since 2014, FMIT has been creating innovative software solutions to help businesses outperform their competitors while boosting productivity and profitability. We have been providing top-class product engineering services and custom application development services to startups and Fortune 100 companies in different industries to tackle various business challenges, elevate operations, and enable growth.
              </p>
              <div class="text-center text-lg-start">
                <a href="/html" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Read More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 d-flex align-items-center"  data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/about.jpg" class="img-fluid" alt="abc"/>
          </div>

        </div>
      </div>

    </section>
    {/* <!-- End About Section --> */}
    {/* <!--  Section Count --> */}
    <section id="counts" class="counts">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
              <i class="bi bi-emoji-smile"></i>
              <div>
               <span><CountUp
                    start={0}
                    end={232}
                    duration={1}
                /></span>
                   
                <p>Happy Clients</p>
               
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
              <i class="bi bi-journal-richtext" style={{color: "#ee6c20"}}></i>
              <div>
              <span><CountUp
                    start={0}
                    end={521}
                    duration={10}
                /></span>
                <p>Projects</p>
                
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
              <i class="bi bi-headset" style={{color: "#15be56"}}></i>
              <div>
              <span><CountUp
                    start={0}
                    end={1463}
                    duration={10}
                /></span>
                <p>Hours Of Support</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
              <i class="bi bi-people" style={{color: "#bb0852"}}></i>
              <div>
              <span><CountUp
                    start={0}
                    end={50}
                    duration={5}
                /></span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  </main>
      {/* <!-- End Count Section --> */}
      {/* Feature */}
      <section id="features" class="features">

      <div class="container aos-init aos-animate" data-aos="fade-up">

        <header class="section-header">
          {/* <h2></h2> */}
          <p>WHAT WE OFFER</p>
        </header>
      
        <div class="row feature-icons aos-init aos-animate" data-aos="fade-up">
          

          <div class="row">

            <div class="col-xl-4 text-center aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
              <img src="assets/img/features-3.png" class="img-fluid p-4" alt=""/>
            </div>

            <div class="col-xl-8 d-flex content">
              <div class="row align-self-center gy-4">

                <div class="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up">
                  <i class="ri-line-chart-line"></i>
                  <div>
                    <h4>Fintech</h4>
                    <p>Transform & achieve Financial Inclusion 2.0 by adopting our open source platform. A new era is upon us.</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                  <i class="ri-pulse-fill"></i>
                  <div>
                    <h4>Healthcare</h4>
                    <p> Enabling technologies to improve clinical and economic outcomes. Explore Services.</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <i class="ri-shopping-cart-2-line"></i>
                  <div>
                    <h4>E-com</h4>
                    <p>Our team build conversion focused Ecommerce medium and large businesses looking to scale</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                  <i class="ri-pencil-line"></i>
                  <div>
                    <h4>Education</h4>
                    <p>Choose the right Education Software using real-time, up-to-date product reviews from neumerious verified user reviews</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                  <i class="ri-store-line"></i>
                  <div>
                    <h4>Retail</h4>
                    <p>Retail Software Development. Intelvision helps retailers provide customer-centric shopping experiences with innovative, secure, and compliant solutions.</p>
                  </div>
                </div>

                <div class="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                  <i class="ri-service-fill"></i>
                  <div>
                    <h4>Non-Profit</h4>
                    <p>FMIT comprehensive donor management, fundraising, marketing, and advocacy software solutions designed for nonprofits</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
      {/* end feature */}
{/* service section */}
{/* <section id="services" class="services">

      <div class="container aos-init aos-animate" data-aos="fade-up">

        <header class="section-header">
          <h2>Services</h2>
          <p>Algoscale is a leading custom application development company in USA. Our experts collaborate with high-end technologies and architectures to provide unique solutions to our clients. Some of the technologies we work with</p>
        </header>

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="service-box blue">
              <i class="ri-discuss-line icon"></i>
              <h3>Nesciunt Mete</h3>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              
            </div>
          </div>

          <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div class="service-box orange">
              <i class="ri-discuss-line icon"></i>
              <h3>Eosle Commodi</h3>
              <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
              
            </div>
          </div>

          <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="service-box green">
              <i class="ri-discuss-line icon"></i>
              <h3>Ledo Markt</h3>
              <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              
            </div>
          </div>

          <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
            <div class="service-box red">
              <i class="ri-discuss-line icon"></i>
              <h3>Asperiores Commodi</h3>
              <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
              
            </div>
          </div>

          <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
            <div class="service-box purple">
              <i class="ri-discuss-line icon"></i>
              <h3>Velit Doloremque.</h3>
              <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
              
            </div>
          </div>

          <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="700">
            <div class="service-box pink">
              <i class="ri-discuss-line icon"></i>
              <h3>Dolori Architecto</h3>
              <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
              
            </div>
          </div>

        </div>

      </div>

    </section> */}
{/* end service section */}
{/* our client */}
<section id="clients" class="clients">

      <div class="container aos-init aos-animate" data-aos="fade-up">

        <header class="section-header">
          <h2>Our Clients</h2>
          <p>Technology Partners</p>
        </header>

        <div class="clients-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events">
          <div class="swiper-wrapper align-items-center" id="swiper-wrapper-621f1881ad81ca44" aria-live="off" style={{transform: "translate3d(-1854px, 0px, 0px)", transitionDuration: "0ms"}}><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-3.png" class="img-fluid" alt="abc"/></div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="3" role="group" aria-label="4 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-4.png" class="img-fluid" alt="abc"/></div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="4" role="group" aria-label="5 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-5.png" class="img-fluid" alt="abc"/></div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" role="group" aria-label="6 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-6.png" class="img-fluid" alt="abc"/></div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="6" role="group" aria-label="7 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-7.png" class="img-fluid" alt="abc"/></div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="7" role="group" aria-label="8 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-8.png" class="img-fluid" alt="abc"/></div>
            <div class="swiper-slide" data-swiper-slide-index="0" role="group" aria-label="1 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-1.png" class="img-fluid" alt="abc"/></div>
            <div class="swiper-slide" data-swiper-slide-index="1" role="group" aria-label="2 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-2.png" class="img-fluid" alt="abc"/></div>
            <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-3.png" class="img-fluid" alt="abc"/></div>
            <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="3" role="group" aria-label="4 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-4.png" class="img-fluid" alt="abc"/></div>
            <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="4" role="group" aria-label="5 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-5.png" class="img-fluid" alt="abc"/></div>
            <div class="swiper-slide" data-swiper-slide-index="5" role="group" aria-label="6 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-6.png" class="img-fluid" alt="abc"/></div>
            <div class="swiper-slide" data-swiper-slide-index="6" role="group" aria-label="7 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-7.png" class="img-fluid" alt="abc"/></div>
            <div class="swiper-slide" data-swiper-slide-index="7" role="group" aria-label="8 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-8.png" class="img-fluid" alt="abc"/></div>
          <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="1 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-1.png" class="img-fluid" alt="abc"/></div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" role="group" aria-label="2 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-2.png" class="img-fluid" alt="abc"/></div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-3.png" class="img-fluid" alt="abc"/></div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="3" role="group" aria-label="4 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-4.png" class="img-fluid" alt="abc"/></div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="4" role="group" aria-label="5 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-5.png" class="img-fluid" alt="abc"/></div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" role="group" aria-label="6 / 8" style={{width:"86px", marginRight: "120px"}}><img src="assets/img/clients/client-6.png" class="img-fluid" alt="abc"/></div></div>
          <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 4" aria-current="true"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 6"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 7"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 8"></span></div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
      </div>

    </section>
{/* end our client */}

{/* contact us */}
<section id="contact" class="contact">

      <div class="container aos-init aos-animate" data-aos="fade-up">

        <header class="section-header">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>

        <div class="row gy-4">

          <div class="col-lg-6">

            <div class="row gy-4">
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>FLAT 3A, House 121/1,<br/>Road 14, Khulna</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+88 01913 467572 <br/></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>offofficial.fmit.bd@gmail.com<br/></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Sunday - Tuesday<br/>9:00AM - 05:00PM</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">
            <form action="forms/contact.php" method="post" class="php-email-form">
              <div class="row gy-4">

                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Your Name" required=""/>
                </div>

                <div class="col-md-6 ">
                  <input type="email" class="form-control" name="email" placeholder="Your Email" required=""/>
                </div>

                <div class="col-md-12">
                  <input type="text" class="form-control" name="subject" placeholder="Subject" required=""/>
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>

          </div>

        </div>

      </div>

    </section>
{/* end contact us */}
  {/* end main */}

  {/* footer */}
  <footer id="footer" class="footer">

    <div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </div>
          <div class="col-lg-6">
            <form action="aefasd" method="post">
             
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-top">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <a href="index.html" class="logo d-flex align-items-center">
              <img src="assets/img/fmitlogo.png" alt="abc"/>
              <span>FMIT</span>
            </a>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div class="social-links mt-3">
              <a href="/" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="/" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="/" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="/" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <a href="/">Home</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/">About us</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/">Services</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/">Terms of service</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <a href="/">Web Design</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/">Web Development</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/">Product Management</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/">Marketing</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/">Graphic Dedsign</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            {/* <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/><br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p> */}
            
            <p>
            FLAT 3A, House 121/1,  <br/>
            Road 14, Khulna<br/>
             Bangladesh <br/><br/>
              <strong>Phone:</strong> +88 01913 467572<br/>
              <strong>Email:</strong> official.fmit.bd@gmail.com<br/>
            </p>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>FMIT</span></strong>. All Rights Reserved 2023
      </div>
      <div class="credits">
        

      </div>
    </div>
  </footer>
  </div>

  
  

 

  );
}

export default App;

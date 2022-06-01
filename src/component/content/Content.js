import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Worksamples from './Worksamples';

const Content = () => {
    

  return (
    <div>
        

  <main id="main">

    {/* <!-- ======= About Section ======= --> */}
    <div id="about" className="paddsection">
      <div className="container">
        <div className="row justify-content-between">

          <div className="col-lg-4 ">
            <div className="div-img-bg">
              <div className="about-img">
                <img src="assets/img/me.jpg" className="img-responsive" alt="mobinahoseinpur"/>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-descr">

              <p className="p-heading"> Hello, my name is mobina hoseinpur ,im front developer,I am a ui / ux designer and I love minimalist designs, simple & unique design. i also enjoy crafting brand identities,work. </p>
              <p className="separator">In the field of front end I work with the framework React js and JavaScript, Bootstrap and finally with html and css</p>

            </div>

          </div>
        </div>
      </div>
    </div>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    {/* <div id="services">
      <div className="container">

        <div className="services-slider swiper" data-aos="fade-up" data-aos-delay="100">
          {/* <div className="swiper-wrapper"> 

            <div className="swiper-slide">
              <div className="services-block">
                <i className="bi bi-briefcase"></i>
                <span>UI/UX DESIGN</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> *

            <div className="swiper-slide">
              <div className="services-block">
                <i className="bi bi-bar-chart"></i>
                <span>WEB DESIGN</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> *

            <div className="swiper-slide">
              <div className="services-block">
                <i className="bi bi-binoculars"></i>
                <span>MOBILE APPS</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

          {/* </div> 
          <div className="swiper-pagination"></div>
        </div>

      </div>

    </div> */}
    {/* <!-- End Services Section --> */}

    <Worksamples/>
    {/* port */}

    {/* <!-- ======= Contact Section ======= --> */}
    <div id="contact" className="paddsection">
      <div className="container">
        <div className="contact-block1">
          <div className="row">

            <div className="col-lg-6">
              <div className="contact-contact">

                <h2 className="mb-30">GET IN TOUCH</h2>

                <ul className="contact-details">
                  <li><span>10 orkide, TehranStreet</span></li>
                  <li><span>Ghaemshahr, Mazandaran</span></li>
                  <li><span>+98 9304033425</span></li>
                  <li><span>mobina.hoseinpur1377@gmail.com</span></li>
                </ul>

              </div>
            </div>

            <div className="col-lg-6">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row gy-3">

                  <div className="col-lg-6">
                    <div className="form-group contact-block1">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea className="form-control" name="message" placeholder="Message" required></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>

                  <div className="mt-0">
                    <input type="submit" className="btn btn-defeault btn-send" value="Send message"/>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Contact Section --> */}

  </main>
  {/* <!-- End #main --> */}
  <Footer/>

    </div>
  )
}

export default Content
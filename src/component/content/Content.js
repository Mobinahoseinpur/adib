import React from 'react'
// import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'


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
              <p className="separator">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.English person.</p>

            </div>

          </div>
        </div>
      </div>
    </div>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <div id="services">
      <div className="container">

        <div className="services-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="services-block">
                <i className="bi bi-briefcase"></i>
                <span>UI/UX DESIGN</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="services-block">
                <i className="bi bi-bar-chart"></i>
                <span>WEB DESIGN</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="services-block">
                <i className="bi bi-binoculars"></i>
                <span>MOBILE APPS</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>

    </div>
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Portfolio Section ======= --> */}
    <div id="portfolio" className="paddsection">

      <div className="container">
        <div className="section-title text-center">
          <h2>My Portfolio</h2>
        </div>
      </div>

      <div className="container">

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=" ">design</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              {/* <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a> */}
              {/* <Link to="/Details" className="details-link" title="More Details"><i className="bx bx-link"></i></Link> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>

    </div>
    {/* <!-- End Portfolio Section --> */}



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
import React from 'react'
import Footer from '../Footer'
import Data from "./Data"
import { Link, useParams } from "react-router-dom";

const Details = () => {
    
    const { id }= useParams()
    // const data = Data.cardData.findIndex(id)
    let data = Data.cardData[id];
     const datam = Object(data)
    console.log(datam)
  return (
    <div>

  <main id="main">

{/* <!-- ======= Breadcrumbs Section ======= --> */}
<section class="breadcrumbs">
  <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h2>Portfolio Details</h2>
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><a href="#">Portfolio</a></li>
        <li>Portfolio Details</li>
      </ol>
    </div>

  </div>
</section>
{/* <!-- Breadcrumbs Section --> */}

{/* <!-- ======= Portfolio Details Section ======= --> */}
<section id="portfolio-details" class="portfolio-details">
  <div class="container">

    <div class="row gy-4">

      <div class="col-lg-8">
        <div class="portfolio-details-slider swiper">
          <div class="swiper-wrapper align-items-center">

            <div class="swiper-slide">
              <img src={datam.imgdetails} alt=""/>
            </div>

            {/* <div class="swiper-slide">
              <img src={datam.image} alt=""/>
            </div>

            <div class="swiper-slide">
              <img src={datam.image} alt=""/>
            </div> */}

          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong>:{datam.category}</li>
            <li><strong>Name</strong>: {datam.name}</li>
            <li><strong>Project URL</strong>: <a className='sizesetting' href={datam.url} target='_blank'>{datam.url}</a></li>
          </ul>
        </div>
        <div class="portfolio-description">
          <h2>This is an example of portfolio detail</h2>
          <p>
            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
{/* <!-- End Portfolio Details Section --> */}

</main>
{/* <!-- End #main --> */}
<Footer/>
    </div>
  )
}

export default Details
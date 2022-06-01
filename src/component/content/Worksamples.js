import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data from "./Data"
const Worksamples = () => {
    // console.log(Data)
    let dataPro = Data.cardData
    const [filter, setFilter] = useState();
    
  return (
    <div>
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
        <li data-filter=".filter-card">design</li>
        <li data-filter=".filter-web">Web</li>
      </ul>
    </div>
  </div>

  <div className="row portfolio-container">
    {dataPro.map((portf)=>(
        
    <div className={`col-lg-4 col-md-6 portfolio-item ${portf.type}`} key={portf.id}>
      <img src={portf.image} className="img-fluid" alt=""/>
      <div className="portfolio-info">
        <h4>{portf.name}</h4>
        <p>{portf.category}</p>
        <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
        <Link to={`/Details/${portf.id}`} className="details-link" title="More Details" ><i className="bx bx-link"></i></Link>
      </div>
    </div>
    ))}


  </div>

</div>

</div>
{/* <!-- End Portfolio Section --> */}


    </div>
  )
}

export default Worksamples
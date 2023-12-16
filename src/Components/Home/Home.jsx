import React from 'react'
import './Home.css'

import Popular from '../Popular/Popular';
import Destinations from '../Destinations/Destinations';
import About from '../About/About';
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import AddReview from '../AddReview/AddReview';
import maldives from '../../images/new/maldives3.jpg'
import thailand from '../../images/new/thailand2.jpg'
import malaysia from '../../images/new/malaysia2.jpg'
import bali from '../../images/new/bali.jpg'
import munnar from '../../images/new/munnar3.jpg'
import AddHappyClients from '../AdminArea/AddHappyClients';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Navbar2 from './Navbar2/Navbar2';

const Home = () => {
  return (
    <>
      {/* <section className='home'>
        <div className='container'>
          <div className='homeText'>
            <h1 className='title'>
              Plan Your Trip With Travel Cloud
            </h1>

            <p className='subTitle'>Travel to Your Favourite City with respectful of the environment</p>

            <button className='btn'>
              <Link to="">Explore Now</Link>
            </button>
          </div>
        </div>

      </section> */}
      {/* <Header /> */}
        {/* <Navbar/> */}
        <Navbar2/>


<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={munnar} className="d-block w-100 carousel-destination-image" alt="..."/>
      <div className="carousel-caption  d-md-block">
        <h5 className="animated bounceInDown animation-delay:1s" >Munnar</h5>
        <button className='btn explore-btn animated fadeInUp animation-delay:1s'>
              <Link to="">Explore Now</Link>
            </button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={malaysia} className="d-block w-100 carousel-destination-image" alt="..."/>
      <div className="carousel-caption  d-md-block">
        <h5 className='animated zoomIn animation-delay:2s'>Malaysia</h5>
        <button className='btn explore-btn animated fadeInLeft animation-delay:2s'>
              <Link to="">Explore Now</Link>
            </button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={maldives} className="d-block w-100 carousel-destination-image" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h5 className='animated bounceInRight animation-delay:2s'>Maldives</h5>
        <button className='btn explore-btn animated bounceInLeft animation-delay:2s'>
              <Link to="">Explore Now</Link>
            </button>
        {/* <p className='animated bounceInLeft animation-delay:2s'>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={thailand} className="d-block w-100 carousel-destination-image" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h5 className='animated zoomIn animation-delay:2s'>Thailand</h5>
        <button className='btn explore-btn animated fadeInLeft animation-delay:2s'>
              <Link to="">Explore Now</Link>
            </button>
        {/* <p className='animated fadeInLeft animation-delay:2s'>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={bali} className="d-block w-100 carousel-destination-image" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h5 className="animated bounceInDown animation-delay:2s">Bali</h5>
        <button className='btn explore-btn animated fadeInUp animation-delay:2s'>
              <Link to="">Explore Now</Link>
            </button>
        {/* <p className='animated fadeInUp animation-delay:2s'>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <Popular />
      <Destinations />
      <Review />
      <AddReview />
      <About />
      <Footer />

    </>
  )
}

export default Home
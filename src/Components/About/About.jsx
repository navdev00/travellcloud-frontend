import React from 'react'
import './About.css'

import img from '../../../src/images/scenery2.jpg'
import { Link } from 'react-router-dom'
const About = () => {
  return (

    <section className="about-us" >
      <div className="about-image">

        <img src={img} alt="" />
      </div>
      <div className="about-content" id="about">
        <h2>About Us</h2>
        <span>

        </span>
        <p>The Travell Cloud is an international Travel Management Organization based in Moonnumuri,Chalakkudy, Thrissur. Being an expert in designing and executing holiday plans, we aspire to provide the best holiday experience for vacationers. Our major focus is to provide tailor-made tour packages for solo and group travelers. As an experienced team with in-depth knowledge and expertise in the field of travel and tourism, We are known for providing an engaging travel experience.

          Our esteemed customers were always pleased with us for providing a hassle-free travel experience. We are equipped with the most advanced travel facilities and tourism professionals in the field. 

           </p>
           {/* Also, our travel experts customize tour packages to suit the diverse interests of travelers. We encourage you to book online, however you can visit our offices for offline services as well.We are also providing different booking facilities like Hotels, Bus, Flights and also helping with Visa processing as well. */}
        {/* <ul className="about-links">
          <li><Link to="#">work</Link></li>

          <div className="vertical-line"></div>

          <li><Link to="#">service</Link></li>

          <div className="vertical-line"></div>

          <li><Link to="#">contact</Link></li>


        </ul>

        <ul className="about-social-icon">
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
          <li>
            <i className="fab fa-whatsapp"></i>
          </li>
          <li>
            <i className="fab fa-instagram"></i>
          </li>
          <li>
            <i className="fab fa-twitter"></i>
          </li>

        </ul> */}
      </div>
    </section>

  )
}

export default About
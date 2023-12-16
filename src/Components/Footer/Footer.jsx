import React from 'react'
import { SiYourtraveldottv } from 'react-icons/si'
import { ImFacebook } from 'react-icons/im'
import './Footer.css'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logoImg from '../../images/newbanner.jpg'
const Footer = () => {
  return (

    <section class="w3l-footer-29-main">
      <div class="footer-29 py-5 ">
        <div class="container">
          <div class="grid-col-4 footer-top-29">
            {/* <div class="footer-list-29 footer-1"> */}
            {/* <img src={logoImg} alt="" className='footer-logo-img' /> */}
            {/* <h2 class="footer-title-29">Contact Us</h2> */}
            {/* <ul>
                <li><p><span class="fa fa-map-marker"></span>California, #32841 block,
                  #221DRS 75 West Rock,
                  Maple Building, UK.</p></li>
                <li><a href="tel:+7-800-999-800"><span class="fa fa-phone"></span> +(21)-255-999-8888</a></li>
                <li><a href="mailto:estate-mail@support.com" class="mail"><span class="fa fa-envelope-open-o"></span> Exterior-mail@support.com</a></li>
              </ul> */}
            {/* <div class="main-social-footer-29">
					<a href="#facebook" class="facebook"><span class="fa fa-facebook"></span></a>
					<a href="#twitter" class="twitter"><span class="fa fa-twitter"></span></a>
					<a href="#instagram" class="instagram"><span class="fa fa-instagram"></span></a>
					<a href="#google-plus" class="google-plus"><span class="fa fa-google-plus"></span></a>
					<a href="#linkedin" class="linkedin"><span class="fa fa-linkedin"></span></a>
				</div> */}
            {/* </div> */}
            <div class="footer-list-29 footer-2">
              <ul>
                <h6 class="footer-title-29">Useful Links</h6>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#Destinations">Destinations</a></li>
                <li><a href="#packages">Packages</a></li>
              </ul>
            </div>
            {/* <div class="footer-list-29 footer-3">
              <div class="properties">
                <h6 class="footer-title-29">Latest Gallery</h6>
                <div class="images-col">
                  <a href="blog-single.html"></a>
                  <a href="blog-single.html"></a>
                  <a href="blog-single.html"></a>
                  <a href="blog-single.html"></a>
                  <a href="blog-single.html"></a>
                  <a href="blog-single.html"></a>
                </div>
              </div>
            </div> */}
            <div class="footer-list-29 footer-4">
              <ul>
                <h6 class="footer-title-29">Travel & Trip</h6>
                <li><a href="">Munnar</a></li>
                <li><a href="">Alleppey</a></li>
                <li><a href="">	Kulu Manali</a></li>

                <li><a href="">	Maldives</a></li>
                <li><a href="">	Singapore</a></li>
                <li><a href="">Dubai</a></li>
                {/*             
                <li><a href="">Bali</a></li>
                <li><a href="">Malaysia</a></li>
                <li><a href="">Thailand</a></li> */}

              </ul>
            </div>
            <div class="footer-list-29 footer-1">
              <h2 class="footer-title-29">Contact Us</h2>
              <ul>
                <li><p><span class="fa fa-map-marker"></span>Moonnumuri, Thrissur,
                  Kerala, India.</p></li>
                <li><a href="tel:+919656458629"><span class="fa fa-phone"></span> +919656458629</a></li>
                <li><a href="tel:+919072308629"><span class="fa fa-phone"></span> +919072308629</a></li>

                <li><a href="mailto:sales.thetravellcloud@gmail.com" class="mail"><span class="fa fa-envelope-open-o"></span>sales.thetravellcloud@gmail.com</a></li>
              </ul>

            </div>
          </div>
          <div class=" bottom-copies text-center">
            <img src={logoImg} alt="" className='footer-logo-img' />

            <p class="copy-footer-29">© 2024 The Travell Cloud. All rights reserved | Designed by <a href="">Ns</a></p>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Footer
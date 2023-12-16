import React from 'react'
import { BsInstagram, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import "../Header/Header.css"

const Header = () => {
    return (
        <div className='Hheader'>
            <div className=''>
                <div className="d-flex">
                    <div className="social-links">
                        <ul className='d-flex'>
                            <li><a href='https://www.instagram.com/the_travell_cloud'><BsInstagram  className='social-type' /></a></li>
                            <li><a href='https://wa.me/+919072308629'><BsWhatsapp  className='social-type'/></a></li>
                            <li><a href='mailto:sales.thetravellcloud@gmail.com'><MdAlternateEmail  className='social-type'/></a></li>
                        </ul>
                    </div>

                    <div className="logo-container">
                        {/* <Link className='logos'>The Travel <span>Cloud</span></Link> */}
                    </div>
                    <div className="info">
                        <ul className='d-flex'>
                        <li><Link><BsTelephone className='social-type-call' /></Link>+919072308629</li>

                            <li><Link to=''><BsTelephone  className='social-type-call'/></Link>+919656458629</li>

                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Header
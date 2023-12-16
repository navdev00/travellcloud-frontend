import React from 'react'
import logo from '../../../images/newbanner.jpg'
import "../Navbar2/Navbar2.css"
import MobileMenu from './MobileMenu/MobileMenu'
import { NavLink, Link } from 'react-router-dom'

const Navbar2 = () => {
    return (
        <>
            <div className="navbar">
                <div className='mobile-menu'>
                    <MobileMenu className='icon' />
                </div>
                <div className="nav-lists">


                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>

                    <div className='nav-items'>

                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><a href="#Destinations">Destination</a>
                            </li>
                            <li><a href="#packages">Packages</a>
                            </li>
                            <li><Link to="/gallery">Happy Clients</Link></li>
                        </ul>
                    </div>

                    <div className='auth'>
                        <button>
                            <Link to="/login" style={{ color: "white" }}>Login</Link>
                        </button>
                        <button>
                            <Link to="/register" style={{ color: "white" }}>Sign Up</Link>

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar2
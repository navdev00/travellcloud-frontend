import React, { useState } from 'react'
import './Navbar.css'

import { SiYourtraveldottv } from 'react-icons/si';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../Actions/User';
import Header from '../Header/Header';

const Navbar = () => {

  // toggle navbar
  const [active, setActive] = useState('navbar')
  const showNavbar = () => {
    setActive('navbar activeNavbar')
  }

  const closeNavbar = () => {
    setActive('navbar')
  }



  // vackgorund color to header
  // const [transparent, setTransparent] = useState('header')
  // const addBg = () => {
  //   if (window.scrollY > 10) {
  //     setTransparent('header activeHeader')
  //   }
  //   else {
  //     setTransparent('header')
  //   }
  // }
  // window.addEventListener('scroll', addBg)

  const { user } = useSelector((state) => state.user);


  const dispatch = useDispatch();


  return (
    <>
    <Header />

     <section className='navbarSection'>
      
      <div className="header">
        
          <div className='logo'>

            <h1 className='flex'>
              The  Travell <span style={{ color: 'orange' }}>Cloud</span></h1>


          </div>

        <div className={active}>
          <ul className='navlists flex'>
           <li className='navItem'>
              <Link to="/" className='navlink'>Home</Link>

            </li> 
            <li className='navItem'>
              <a href="#Destinations" className='navlink'>Destinations</a>

            </li>
            <li className='navItem'>
              <a href="#packages" className='navlink'>Packages</a>

            </li>
            <li className='navItem'>
              <a href="#about" className='navlink'>About Us</a>

            </li>
         
            <li className='navItem'>
              <Link to="/gallery" className='navlink'>Happy Clients</Link>

            </li>
            
           

            { user && user.isAdmin  ? 
              <li className='navItem'>
              <Link to="/tour/admin/all/package" className='navlink'>Admin Area</Link>

            </li> : ''}
          


            {user ? (

              <div className='headerbtn flex'>
                <button className='btn loginBtn'>
                  <Link to="#">{user.fullname}</Link>
                </button>

                <button className='btn loginBtn' onClick={() => {dispatch(logoutUser())}}> <Link>LogOut</Link>
                </button>
             
              </div>

            ) : (

              <div className='headerbtn flex'>
                <button className='btn loginBtn'>
                  <Link to="/login">Login</Link>
                </button>
                <button className='btn signupbtn'>
                  <Link to="/register">Sign Up</Link>
                </button>
              </div>

            )



            }
          </ul>

          <div onClick={closeNavbar} className='navbarClose'>
            <AiOutlineCloseCircle className='icon' />
          </div>

        </div>

        <div onClick={showNavbar} className="navbarToggle">
          <BsGrid3X3Gap className='icon' />
        </div>
      </div>

    </section>
    </>
   
  )
}

export default Navbar
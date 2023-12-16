import React, { useState } from 'react'
import './AdminArea.css'

import { SiYourtraveldottv } from 'react-icons/si';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../Actions/User';
import AddPackageModal from './AddPackageModal';

const AdminNavbar = () => {

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
  //   if (window.scrollY >= 0) {
  //     setTransparent('header activeHeader')
  //   }
  //   else {
  //     setTransparent('header')
  //   }
  // }
  // window.addEventListener('scroll', addBg)

  const { user } = useSelector((state) => state.user);
  const [modalOpened, setModalOpened] = useState(false)


  const dispatch = useDispatch();


  return (
    <section className='admin-navbarSection '>
      <div className='admin-header activeHeader '>
       

        <div className={active}>
          <ul className='navlists flex'>
            <li className='navItem' onClick={() => setModalOpened(true)}>
              <Link to='' className='navlink'>Add Packages</Link>

            </li>
            <AddPackageModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

            <li className='navItem'>
              <Link to='/tour/admin/add/clients' className='navlink'>Add Happy Clients</Link>

            </li>



            <li className='navItem'>
              <Link to="/" className='navlink'>Back to Home</Link>

            </li>



            {user.isAdmin ? (

              <div className='headerbtn flex'>
                <button className='btn loginBtn'>
                  <Link to="#">{user.fullname}</Link>
                </button>

                <button className='btn loginBtn' onClick={() => { dispatch(logoutUser()) }}> <Link>LogOut</Link>
                </button>

              </div>

            ) : (

              <div className='headerbtn flex'>
                <button className='btn loginBtn'>
                  <Link to="/login">Login</Link>
                </button>
                <button className='btn'>
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
  )
}

export default AdminNavbar
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import { SwipeableDrawer } from '@mui/material'
import { IconButton } from '@mui/material'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

const MobileMenu = () => {
    const [open, SetOpen] = useState(false)

    return (
        <>
            <IconButton onClick={() => SetOpen(true)} >
                <FormatAlignCenterIcon style={{ color: "black" }} />

            </IconButton>
            <SwipeableDrawer anchor='left'
                open={open}
                onClose={() => SetOpen(false)}
                onOpen={() => { }} >

                <nav className="mobileNav" style={{}}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ""}>
                        Home
                    </NavLink>
                    <NavLink to='#Destinations' className={({ isActive }) => isActive ? 'active' : ""}>
                        Destination
                    </NavLink>
                    <NavLink to='/packages' className={({ isActive }) => isActive ? 'active' : ""}>
                        Packages
                    </NavLink>
                    <NavLink to='/gallery' className={({ isActive }) => isActive ? 'active' : ""}>
                        Happy Clients
                    </NavLink>


                    {/* <NavLink to="/login" className='auth-btn' >Login</NavLink> */}

                    <NavLink to="/register" className='auth-btn'>Sign Up</NavLink>



                </nav>

            </SwipeableDrawer>
        </>
    )
}

export default MobileMenu
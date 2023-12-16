import React, { useState } from 'react'
import './Destinations.css'




import { useDispatch, useSelector } from 'react-redux'
import { getPackages } from '../../Actions/User'
import { useEffect } from 'react'

import Dest from './Dest'


// import { CircularProgress } from '@mui/material';




const Destinations = () => {

  


  const dispatch = useDispatch();

  const { packages } = useSelector(state => state.packages)




  useEffect(() => {
    
    dispatch(getPackages());
  
  }, [])
  
  return (
    <section className='offer container section' id='packages' >
      <div className='secIntro'>
        <h2 className='secTitle'>
          Special Offers
        </h2>
        <p>
          From historical cities to natural specteculars, come see the best of the world!
        </p>

      </div>

      <div className="mainContent grid">
     

        {packages && packages.map((pack) => {

          return (
            <Dest 
            id={pack._id}
            price ={pack.Price}
            likes= {pack.likes}
            name={pack.PackageName}
            location={pack.location}
            night={pack.night}
            packageImage={pack.packageImage.url}
           

            />
          )
        })}

      </div>

    </section>
  )
}

export default Destinations
import React from 'react'
import './Popular.css'

import { BsDot } from 'react-icons/bs'

// import image
import maldives from '../../images/maldives.jfif'
import thailand from '../../images/thailand.jpg'
import kulumanali from '../../images/kulumanali.jpg'
import malaysia from '../../images/malaysia-1.jpg'
import munnar from '../../images/munnar2.jpg'
import singapore from '../../images/singappoor2.jpg'
import alleppey from '../../images/alleppey.jpg'
import dubai from '../../images/dubai.jpg'





const Data = [
  {
    id:1,
    imgSrc:munnar,
    destTitle:'Munnar',
    location:'',
    grade:'Cultural Relax'
  },
  {
    id:2,
    imgSrc:malaysia,
    destTitle:'Malaysia',
    location:'',
    grade:'Cultural Relax'
  },
  {
    id:3,
    imgSrc:thailand,
    destTitle:'Thailand',
    location:'',
    grade:'Cultural Relax'
  },
  {
    id:4,
    imgSrc:singapore,
    destTitle:'Singapore',
    location:'',
    grade:'Cultural Relax'
  },
  {
    id:5,
    imgSrc:alleppey,
    destTitle:'Alleppey',
    location:'',
    grade:'Cultural Relax'
  },
  {
    id:6,
    imgSrc:maldives,
    destTitle:'Maldives',
    location:'',
    grade:'Cultural Relax'
  },
  {
    id:7,
    imgSrc:dubai,
    destTitle:'Dubai',
    location:'',
    grade:'Cultural Relax'
  },
  {
    id:8,
    imgSrc:kulumanali,
    destTitle:'Kulu Manali',
    location:'',
    grade:'Cultural Relax'
  },

]

export const Popular = () => {
  return (
    <section id='Destinations' className='popular section container'>
      <div className='secContainer'>
        <div className='secHeader flex'>
          <div className='textDiv'>
            <h2 className='secTitle'>
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars, come see the best of the world!
            </p>

          </div>
        </div>

        <div className="mainContent grid">

       {Data.map((d)=>{
        return(
          <div className="singlDestinations">
          <div className="destImage">
            <img src={d.imgSrc} alt="" />
            {/* <div className="overLayInfo">
              <h3>Some Text</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div> */}
          </div>

          <div className="destFooter">
            <div className="number">
             0{d.id}
            </div>

            <div className="destText flex" >
              <h6>
              {d.destTitle}
              </h6>
              <span className="flex">
                <span className="cloud">
                  <BsDot className="icon" />
                </span>
                {d.location}
              </span>
            </div>



          </div>

        </div>

        )
       })}

        </div>
      </div>

    </section>
  )
}


export default Popular
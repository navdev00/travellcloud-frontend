import React, { useState } from 'react'
import './Destinations.css'

import { MdKingBed, MdLocationOn } from 'react-icons/md'
import { MdBathtub } from 'react-icons/md'
import { FaHeart, FaHotel, FaWifi } from 'react-icons/fa'
import { MdAirportShuttle } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { FiHeart } from 'react-icons/fi'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { toast } from 'react-toastify'
// import {likePackage} from '../../Actions/Package'


const Dest = ({ id, price, likes, name, location, night,packageImage }) => {



  const { user } = useSelector(state => state.user)

  const dispatch = useDispatch();

  // const [liked, setLiked] = useState(likes.includes(user._id))
  // const [like, setLike] = useState(likes.length)

  // const handleLike = () => {

  //   try {

  //     axios.post("/tour/like/" + id + "/package", { userId: user._id })
  //   } catch (error) {

  //   }

  //   if(user){
  //     setLike(liked ? like - 1 : like + 1)
  //     setLiked(!liked)

    

  //   }else{
  //     toast.error("Please Login")
  //   }

  // }





  return (
    <>
      <div className="singleOffer" key={id}>
        <div className="destImage">
          <img src={packageImage}  alt="" />

          <span className='discount'>
            The Travel Cloud
          </span>
        </div>

        <div className="offerBody">
          <div className="price flex">
            <h4> {name}</h4>
            <span className="status">
              
            </span>
          </div>

          <div className="amenities flex">
            {/* <div className="singleAmenity flex">
              

              {user && liked ? <FaHeart className='liked' onClick={handleLike} /> : <FiHeart className='icon' onClick={handleLike} />
              
              }



              <small>{like} Likes</small>
            </div> */}
            <div className="singleAmenity flex">
              <MdKingBed className='icon' />
              <small>{night}</small>
            </div>

            <div className="singleAmenity flex">
              <FaHotel className='icon' />
              <small>Hotel</small>
            </div>
            <div className="singleAmenity flex">
              <MdAirportShuttle className='icon' />
              {/* <small>Shuttle</small> */}
            </div>
          </div>


          <div className='location flex'>
            <MdLocationOn className='icon' />
            <small>{name}, {location}</small>

          </div>
          <button className='viewbtn flex'>
            <Link to={`/tour/${id}/package`}>
            View Details
          
            </Link>
            <BsArrowRightShort className='icon ' />
           
          </button>


        </div>


      </div>
    </>
  )
}

export default Dest
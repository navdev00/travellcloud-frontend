import React, { useState } from 'react'
import '../../Destinations/Destinations.css'

import { MdDeleteOutline, MdKingBed, MdLocationOn } from 'react-icons/md'
import { MdBathtub } from 'react-icons/md'
import { FaHeart, FaWifi } from 'react-icons/fa'
import { MdAirportShuttle } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai'
import EditPackage from '../EditPackage'
import axios from 'axios'
import { toast } from 'react-toastify'
// import { FiHeart } from 'react-icons/fi'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { toast } from 'react-toastify'
// import {likePackage} from '../../Actions/Package'

const AdminDestination = ({ id, price, name, location, night, packageImage }) => {



  const dispatch = useDispatch();


  const handleDelete = async () => {
    try {
      await axios.delete("https://travellcloudbackend.onrender.com/tour/admin/delete/package/" + id)
      // window.location.href = ("/tour/admin/all/package")
      // window.location.replace("/tour/admin/all/package")
      toast.success("Package Deleted Successfully");


    } catch (error) {

    }
  }


  return (
    <>

      <div className="singleOffer" key={id}>
        <div className="destImage">
          <img src={packageImage} alt="" />


        </div>

        <div className="offerBody">
          <div className="price flex">
            <h4>{name}</h4>

          </div>

          <div className="amenities flex">


            <div className="singleAmenity flex">
              <Link to={`/tour/admin/package/${id}`}>

                <AiFillEdit className='icon' />

                <small >Edit</small>
              </Link>

            </div>



            <div className="singleAmenity flex" onClick={handleDelete}>
              <MdDeleteOutline className='icon' />
              <small>Delete</small>
            </div>

          </div>


          <div className='location flex'>
            <MdLocationOn className='icon' />
            <small>{name}, {location}</small>

          </div>
          <button className='btn flex'>
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

export default AdminDestination

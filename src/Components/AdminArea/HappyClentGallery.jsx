import React, { useEffect, useState } from 'react'

import { MdDeleteOutline, MdKingBed, MdLocationOn } from 'react-icons/md'

import { BsArrowRightShort } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai'
import axios from 'axios'
import { toast } from 'react-toastify';
import AdminNavbar from './AdminNavbar'
import ClientGallery from './ClientGallery'




const HappyClentGallery = () => {

    const [happyclients, setHappyclients] = useState([]);


    
 

    useEffect(() => {
        const fetchHappyclients = async () => {
            const res = await axios.get("https://travellcloudbackend.onrender.com/tour/admin/all/happyclients")
            setHappyclients(res.data.happyclients)

        }
        fetchHappyclients()
    }, [])


    return (
        
        <>
        
            {happyclients.map((h) => (


             <ClientGallery 
             id={h._id}
             name={h.name}
             image={h.image.url} />

            ))}


        </>
    )
}

export default HappyClentGallery

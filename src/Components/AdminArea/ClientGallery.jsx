import axios from 'axios'
import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { toast } from 'react-toastify'

const ClientGallery = ({image,id,name}) => {




    const handleDelete = async () => {
        try {
          await axios.delete("https://travellcloudbackend.onrender.com/tour/admin/delete/happyclient/" + id)
          // window.location.href = ("/tour/admin/all/package")
          // window.location.replace("/tour/admin/all/package")
        toast.success("Happy Client Deleted Successfully");

    
        } catch (error) {
    
        }
      }

  return (
    <>
       <div className="singleOffer">
                    <div className="destImage">
                        <img src={image} alt="" />


                    </div>

                    <div className="offerBody">
                        <div className="price flex">
                            <h4>{name}</h4>

                        </div>

                        <div className="amenities flex">





                            <div className="singleAmenity flex"  onClick={handleDelete} >
                                <MdDeleteOutline className='icon' />
                                <small>Delete</small>
                            </div>

                        </div>




                    </div>


                </div>
    </>
  )
}

export default ClientGallery

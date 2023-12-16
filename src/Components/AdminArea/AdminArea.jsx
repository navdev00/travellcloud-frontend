import React from 'react'

import '../Destinations/Destinations.css'



import { useDispatch, useSelector } from 'react-redux'
import { getAdminPackages } from '../../Actions/User'
import { useEffect } from 'react'

import AdminDestination from '../AdminArea/AdminDestination/AdminDestination'
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import { useState } from 'react'
import AddPackageModal from './AddPackageModal'
import AdminNavbar from './AdminNavbar'
import HappyClentGallery from './HappyClentGallery'


const AdminArea = () => {

  const [modalOpened, setModalOpened] = useState(false)


  const dispatch = useDispatch();

  const { adminpackages } = useSelector(state => state.adminpackages)




  useEffect(() => {

    dispatch(getAdminPackages());

  }, [])


  return (
    <>
      <AdminNavbar />
      <section className='offer container section'>
        <div className='secIntro'>
          <h2 className='secTitle'>
          </h2>
          <p>
          </p>

        </div>

        {/* <button className='btn flex' onClick={() => setModalOpened(true)}>

          Add Package


          <BsArrowRightShort className='icon ' />

        </button>
        <AddPackageModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
 */}







        <div className="mainContent grid">



          {adminpackages && adminpackages.map((pack) => {

            return (
              <AdminDestination
                id={pack._id}
                price={pack.Price}
                name={pack.PackageName}
                location={pack.location}
                night={pack.night}
                packageImage={pack.packageImage.url}


              />
            )
          })}

        </div>

        <section className='offer container section'>
          <div className='secIntro'>
            <h2 className='secTitle'>
              Happy Clients
            </h2>
       

          </div>
        </section>

        <div className="mainContent grid">

          <HappyClentGallery />

        </div>

      </section>
    </>
  )
}

export default AdminArea
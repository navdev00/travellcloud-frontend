import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Gallery = () => {

    const [happyclients, setHappyclients] = useState([]);


    useEffect(() => {
        const fetchHappyclientsUserSide = async () => {
            const res = await axios.get("https://travellcloudbackend.onrender.com/tour/user/all/happyclients")
            setHappyclients(res.data.happyclients)

        }
        fetchHappyclientsUserSide()
    }, [])

    return (
        <>

            <section className='offer container section'>
                <div className='secIntro'>
                    <h2 className='secTitle'>
                        OUR HAPPY CLIENTS
                    </h2>
                    {/* <p>
          From historical cities to natural specteculars, come see the best of the world!
        </p> */}

                </div>





                <div className="mainContent grid">

                    {happyclients.map((h) => (

                        <div className="singleOffer" >
                            <div className="destImage">
                                <img src={h.image.url} alt="" />


                            </div>

                            <div className="offerBody">
                                <div className="price flex">
                                    <h4>{h.name}</h4>



                                </div>



                            </div>


                        </div>


                    ))}



                </div>

            </section>

        </>
    )
}

export default Gallery

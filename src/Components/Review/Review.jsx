import React from 'react'
import "../Review/Review.css"
import avatar from "../../images/user.png"
import avatar2 from "../../images/user.png"

import avatar3 from "../../images/user.png"
import avatar4 from "../../images/user.png"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Review = () => {

  const { user } = useSelector((state)=> state.user);


    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        const fetchReviews = async () => {
            const res = await axios.get("https://travellcloudbackend.onrender.com/review/all")
            setReviews(res.data.reviews)

        }
        fetchReviews()
    }, [])
    return (
        <section id='testimonials'>
            <h4>Reviews from Clients</h4>
            {/* <h2>Testimonials</h2> */}

            <Swiper className='container testimonials__container'
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                isACtive={true}>

                {reviews.map((r) => (


                    <SwiperSlide className='testimonial' key={r.id}>
                        <div className='client__avatar'>
                            <img src={avatar} alt="" />

                        </div>

                        <h5 className='client__name'>{r.user ? r.user.fullname : ""}</h5>
                        <small className='client__review'>
                            {r.comment}
                        </small>
                       

                    </SwiperSlide>


                ))}




            </Swiper>

        </section>)
}

export default Review

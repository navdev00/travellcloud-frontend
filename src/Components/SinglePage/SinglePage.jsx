import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../SinglePage/SinglePage.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BsCheck2Circle } from 'react-icons/bs'


const SinglePage = () => {



    const [packageDetail, setPackageDetail] = useState({});


    const { id } = useParams()

    useEffect(() => {

        const fetchData = async () => {
            const res = await axios.get(`https://travellcloudbackend.onrender.com/tour/${id}/package`)
            setPackageDetail(res.data)
        }


        fetchData();

    }, [id])


    return (
        <>


            <section class="section product-detail">
                <div class="container">

                    <div class="details ">
                        <div class="left">
                            <div class="main">
                                <img src={packageDetail.packageImage && packageDetail.packageImage.url} alt="" id="main-img" />
                            </div>

                            {/* <div class="thumbnails">
                                <div class="thumbnail">
                                </div>
                                <div class="thumbnail">
                                </div>
                                <div class="thumbnail">
                                    <img src="images/sony 2.jpeg" alt="" class="thumbnail-img" />
                                </div>
                                <div class="thumbnail">
                                    <img src="images/sony 3.jpeg" alt="" class="thumbnail-img" />
                                </div>
                                <div class="thumbnail">
                                    <img src="images/sony 4.jpeg" alt="" class="thumbnail-img" />
                                    <img src="images/sony 5.jpeg" alt="" class="thumbnail-img" />
                                </div>
                                <img src="images/sony 5.jpeg" alt="" class="thumbnail-img" />
                            </div> */}
                        </div>

                        <div class="right">
                            <h2>{packageDetail.PackageName}</h2>
                            <div class="price">Rs {packageDetail.Price}</div>
                            {packageDetail.days ? <div class="price"> {packageDetail.days} days </div> : ''}
                            {packageDetail.night ? <div class="price"> {packageDetail.night} night </div> : ''}
                            {packageDetail.discount ? <div class="price"> {packageDetail.discount} discount </div> : ''}




                        </div>

                    </div>



                    <div class="container-fluid pro-details">


                        <h3>Inclusion <i class="fal fa-chevron-circle-right"></i></h3>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas nesciunt qui, rerum
                            eligendi quia cumque temporibus enim. Quibusdam velit hic enim magni, eos ducimus!
                            ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas nesciunt qui, rerum eligendi
                            quia cumque temporibus enim. Quibusdam velit hic enim magni
                        </p> */}

                        <ul>
                            {packageDetail.inclusion1 ? <li className='inclusion'><BsCheck2Circle className="icon" />    {packageDetail.inclusion1} </li> : ''}
                            {packageDetail.inclusion2 ? <li className='inclusion'><BsCheck2Circle className="icon" /> {packageDetail.inclusion2} </li> : ''}
                            {packageDetail.inclusion3 ? <li className='inclusion'><BsCheck2Circle className="icon" /> {packageDetail.inclusion3} </li> : ''}

                            {packageDetail.inclusion4 ? <li className='inclusion'><BsCheck2Circle className="icon" /> {packageDetail.inclusion4} </li> : ''}
                            {packageDetail.inclusion5 ? <li className='inclusion'><BsCheck2Circle className="icon" /> {packageDetail.inclusion5} </li> : ''}
                            {packageDetail.inclusion6 ? <li className='inclusion'><BsCheck2Circle className="icon" /> {packageDetail.inclusion6} </li> : ''}
                            {packageDetail.inclusion7 ? <li className='inclusion'><BsCheck2Circle className="icon" /> {packageDetail.inclusion7} </li> : ''}
                            {packageDetail.inclusion8 ? <li className='inclusion'><BsCheck2Circle className="icon" /> {packageDetail.inclusion8} </li> : ''}
                            {packageDetail.inclusion9 ? <li className='inclusion'><BsCheck2Circle className="icon" /> {packageDetail.inclusion9} </li> : ''}


                        </ul>
                    </div>



                    <div class="container-fluid pro-details">


                        {packageDetail.note ? <h3>Note <i class="fal fa-chevron-circle-right"></i></h3> : ''}


                        {packageDetail.note ?


                            <p>
                                {packageDetail.note}

                            </p>
                            : ''
                        }

                    </div>





                </div>
            </section>














        </>
    )
}

export default SinglePage

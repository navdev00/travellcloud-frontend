import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import '../AddReview/AddReview.css'

const AddReview = () => {
  const { user } = useSelector((state)=> state.user);

  const [comment, setComment] = useState("");

  const handleReview = async (e) => {

    e.preventDefault();

    const newReview = {
        user : user._id,
        comment
    }

    try {
        await axios.post("https://travellcloudbackend.onrender.com/review/package", newReview);
        toast.success("Review Added Successfully");
   
                // window.location.href = ("/")
                // window.location.replace = ("/")

       } catch (error) {
   
       }


  }


    return (
        <section className="appContainer">
            <div className='boxContainer'>
                <div className="topContainer">
                    <div className="backDrop">


                    </div>
                    <div className="headerContainer">
                        <h2 className="headerText"> Add Review </h2>
                        <h5 className="smallText"> About Travel Cloud</h5>
                    </div>
                </div>

                <div className="innerContainer">

                    <form action="" className='formContainer' onSubmit={handleReview}>
                    
                        {/* <input className='input'
                            type="text"
                            placeholder='Add Review'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        /> */}

                        <textarea name="" id=""  placeholder='Add Review' className='input textarea_input'  value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required></textarea>

                        <div className="alink">

                        </div>
                        
                        {user ? <button className='submitButton' >Add Review </button> :
                        <button className='submitButton' ><Link to={"/login"} className='reviewLink'>Please Log In</Link></button>  }
                    </form>
                </div>



            </div>

        </section>
    )
}

export default AddReview

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../Actions/User';
import './Register.css'

const Resgister = () => {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registerUser(fullname,email,password));
    }
    const {loading,error} =useSelector((state)=> state.user);

    return (
        <section className="appContainer">
            <div className='boxContainer'>
                <div className="topContainer">
                    <div className="backDrop">

                    </div>
                    <div className="headerContainer">
                        <h2 className="headerText"> Welcome To Travell Cloud</h2>
                        <h5 className="smallText">Please Sign Up to Continue</h5>
                    </div>
                </div>

                <div className="innerContainer">
                    <form action="" className='formContainer' onSubmit={submitHandler}>
                        <input className='input' type="text" placeholder='Fullname' value={fullname}
                            onChange={(e) => setFullname(e.target.value)} required />
                        <input className='input' type="email" placeholder='Email' value={email}
                            onChange={(e) => setEmail(e.target.value)} required />

                        <input className='input' type="password" placeholder='Password' value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                        <div className="alink">
                            {/* <a href="" className='boldLink'> Sign In</a> */}
                            <Link to="/login" className='mutedLink'> Already Have an account</Link>

                        </div>
                        <button disabled={loading} className='submitButton'>Sign Up</button>
                    </form>
                </div>



            </div>

        </section>

    )
}

export default Resgister
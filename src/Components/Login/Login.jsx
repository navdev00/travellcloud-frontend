import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../../Actions/User'
import { CircularProgress } from '@mui/material';



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();


    const loginHandler = (e) => {

        e.preventDefault();

        dispatch(loginUser(email,password))
        
    }



    const {loading } = useSelector((state) => state.user);

   

    return (
        <section className="appContainer">
            <div className='boxContainer'>
                <div className="topContainer">
                    <div className="backDrop">
                        

                    </div>
                    <div className="headerContainer">
                        <h2 className="headerText"> Welcome Back To Travell Cloud</h2>
                        <h5 className="smallText">Please Sign In to Continue</h5>
                    </div>
                </div>

                <div className="innerContainer">

                    <form action="" className='formContainer' onSubmit={loginHandler}>
                        <input className='input' type="email" placeholder='Email' required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input className='input'
                            type="password"
                            placeholder='Password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <div className="alink">
                            <Link to="/register" className='mutedLink'>New User ? Sign Up</Link>
                            {/* <Link to="" className='mutedLink'> Forget Your Password</Link> */}

                        </div>
                        <button className='submitButton' disabled={loading}> { loading ? <CircularProgress/> : "Sign In" }</button>
                    </form>
                </div>



            </div>

        </section>

    )
}

export default Login
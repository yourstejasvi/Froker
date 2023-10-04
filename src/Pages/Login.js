import React from 'react';
import {Link,Route,Routes} from "react-router-dom";
import Navbar from '../components/Navbar';
import Banner1 from "../Assets/home-banner-background.png";
import Image from "../Assets/Background_image.png";
import "../Css/Login.css";


import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";



const Login = () => {
  return (
   
    <div>
        <>
        <Navbar/>
        </>

        <div className="background-container">

            <div className="food-image-container">
                <img src={Image} alt=""/>
            </div>

            <div className="banner1-container">
            <img src={Banner1} alt=""/>
            </div>

            <div className='login-container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type='email' placeholder="Email" />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input type='password' placeholder="Password" />
                </div>
            </div>
            <div className="forgot-password">Forgot your Password? <Link to='/reset_pw'>Reset password</Link></div>
            <div className="submit-container">
                <div className='submit'><Link to="/register">Register</Link></div>
                <div className='submit'>Login</div>
            </div>

        </div>

        </div>
    
        
        
       
    </div>
    
    
  )
}

export default Login;
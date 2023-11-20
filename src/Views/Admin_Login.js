import React from 'react';
import {Link,Route,Routes} from "react-router-dom";
import Navbar from '../components/Navbar';
import Banner1 from "../Assets/home-banner-background.png";
import Image from "../Assets/Background_image.png";
import "../Css/Admin_Login.css";
import Button from '@mui/material/Button';



import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";



const Admin_Login = () => {
  return (
   
    <div>
        <>
        <Navbar/>
        </>

        <div className="admin-login-background-container">

            <div className="admin-login-food-image-container">
                <img src={Image} alt=""/>
            </div>

            <div className="admin-login-banner1-container">
            <img src={Banner1} alt=""/>
            </div>

            <div className='admin-login-whitebox'>
            <div className='admin-login-header'>
                <div className='admin-login-text'>Admin Login</div>
                <div className='admin-login-underline'></div>
            </div>
            <div className='admin-login-inputs'>
                <div className='admin-login-input'>
                    <img src={email_icon} alt="" />
                    <input type='email' placeholder="Email" />
                </div>
                <div className='admin-login-input'>
                    <img src={password_icon} alt="" />
                    <input type='password' placeholder="Password" />
                </div>
            </div>
            
            <div className="admin-login-submit-container">
                <Button variant='contained' size='large' color='warning' className='admin-login-button' onClick={{}}>{'LOGIN'}</Button>
            </div>

        </div>

        </div>
    
        
        
       
    </div>
    
    
  )
}

export default Admin_Login;
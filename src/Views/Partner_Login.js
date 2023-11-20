import React from 'react'
import Navbar from "../components/Navbar";
import Banner1 from "../Assets/home-banner-background.png";
import Image from "../Assets/Background_image.png";
import password_icon from "../Assets/password.png";
import Button from '@mui/material/Button';
import "../Css/Partner_Login.css";
import { IconContext } from "react-icons";
import { BsFillKeyFill } from "react-icons/bs";

const Partner_Login = () => {
  return (
        <div>
          <>
            <Navbar />
          </>

          <div className='partner-login-background-container'>

              <div className="partner-login-food-image-container">
                <img src={Image} alt=""/>
              </div>

              <div className="partner-login-banner1-container">
                 <img src={Banner1} alt=""/>
              </div>

              <div className='partner-login-white-box'>

                    <div className='partner-login-header'>
                        <div className='text'>Partner Login</div>
                        <div className='underline'></div>
                    </div>
                    <div className='partner-login-inputs'>

                        <div className='input'>
                            <IconContext.Provider
                               value={{ className: 'react-icons' }}>
                              <div>
                                <BsFillKeyFill />
                              </div>
                            </IconContext.Provider>
                            <input type='email' placeholder="        Unique Id" />
                        </div>

                        <div className='input'>
                            <img src={password_icon} alt="" />
                            <input type='password' placeholder="Password" />
                        </div>

                    </div>
                    
                    
                    <div className="partner-login-submit-container">
                        <Button variant='contained' size='large' color='warning' className='partner-login-button' onClick={{}}>{'LOGIN'}</Button>
                    </div>

        </div>

  
          </div>

        </div>
  )
}

export default Partner_Login
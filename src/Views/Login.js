import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
import Banner1 from "../Assets/home-banner-background.png";
import Image from "../Assets/Background_image.png";
import Box from '@mui/material/Box';
import "../Css/Login.css";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { postData } from '../services/ServerServices';
import Swal from "sweetalert2";


const Login = () => {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const clearData = () => {
        setMail("");
        setPassword("");
      };

    var navigate = useNavigate();

    const handleLogin = async() => {
         var formData = new FormData();
         formData.append("mail", mail);
         formData.append("password", password);

         var result = await postData("/customer/login_customer",{"mail":mail,"password":password});
         if(result){
            navigate("/customer_dashboard");
         }else{
            Swal.fire({
                icon: "error",
                title: "Incorrect/Missing Credentials",
            });
            clearData();
         }
    }


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

            <div className='login-white-box'>

                    <div className='header'>
                        <div className='text'>Login</div>
                        <div className='underline'></div>
                    </div>
                    <div className='inputs'>
                        <div className='input'>
                            <img src={email_icon} alt="" />
                            <input type='email' placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)}/>
                        </div>
                        <div className='input'>
                            <img src={password_icon} alt="" />
                            <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    
                    <Button variant='text' size='string' color='primary' className='reset-password' onClick={() => {navigate("/resetPassword");}}>{'Reset password'}</Button>
                    <div className="submit-container">

                        <Box display="flex" justifyContent="space-between" maxWidth="75%" marginLeft="48px" marginTop="20px">

                            <Button variant='contained' size='large' color='warning' className='register' onClick={() => {navigate("/Registration");}}>{'REGISTER'}</Button>
                            
                            <Button variant='contained' size='large' color='warning' className='login' onClick={handleLogin}>{'LOGIN'}</Button>


                        </Box>   
                    </div>


        </div>

        </div>
    
        
        
       
    </div>
    
    
  )
}


export default Login;
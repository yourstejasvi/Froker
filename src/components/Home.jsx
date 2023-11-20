import React from 'react'
import Navbar from "./Navbar";
import Feedback from './Feedback';
import Footer from './Footer';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from 'react-icons/fi'; 
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt="" />
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Your favourite 'Food Broker'
          </h1>
          <p className='primary-text'>
            Healthy and tasty food prepared with hygiene, at affordable prices, delivered at your doorstep

          </p>
          <button className='secondary-button' onClick={()=>navigate("/Order_now")}>
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className='home-image-container'>
          <img src={BannerImage} alt='' />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default Home
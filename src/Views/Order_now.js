import React from 'react'

import "../Css/Order_now.css";

import Sliding_dashboard from '../components/SlidingDashboard';
import Selector from '../components/Selector';
import Caraousel from '../components/Caraousel';


import Logo from "../Assets/Forker.png";
import Banner1 from "../Assets/home-banner-background.png";

const Order_now = () => {

    const logo_style ={
        height: 130,
    }
  return (
    <>
    <nav>

        <img style={logo_style} src={Logo} alt="" />

        <Sliding_dashboard />
        
        
    </nav>

    <img src={Banner1} className="order-now-banner1" alt="" />
    <Selector />
    <Caraousel />
    
    </>
    
    
    
  )
}

export default Order_now
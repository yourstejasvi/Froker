import React from 'react'
import Logo from "../Assets/Forker.png";
import Banner1 from "../Assets/home-banner-background.png";

import Stepper from "../components/Stepper";

import "../Css/Partner_Registration.css"


const Partner_Registration = () => {

    const logo_style ={
        height: 130,

    }

  return (
    <>

        <nav>
            <img style={logo_style} src={Logo} alt=" " />
        </nav>
        <img src={Banner1} className="pRegistration--banner1" alt=" " />

        <Stepper />

    </>
  )
}

export default Partner_Registration
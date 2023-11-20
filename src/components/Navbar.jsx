import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../Assets/Forker.png';


const Navbar = () => {

    const logo_style ={
        height: 130,

    }

    return <nav>
        <div>
            <img style={logo_style} src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
            <Link to="/Login">Login</Link>
            <Link to="/Admin_login">Admin Login</Link>
            <Link to="/Partner_login">Partner Login</Link>
            <Link to="/Partnership">Partnership</Link>
            
        </div>
        
    </nav>;
  
}

export default Navbar
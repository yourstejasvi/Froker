import React, { useState } from 'react';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Login from "../Pages/Login";

// import Admin_Login from "./components/Registration-Login/Admin_Login.jsx";
// import Partner_Login from "./components/Registration-Login/Partner_Login.jsx";
// import Partnership from "./components/Registration-Login/Partnership.jsx";
import {
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Logo from '../Assets/Forker.png';
import { Margin } from '@mui/icons-material';


const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon />
        },
        {
            text:"About",
            icon:<InfoIcon />
        },
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon />
        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon />
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon />
        },
        
    ];

    const [showLogin, setShowLogin] = useState(false);

    const logo_style ={
        height: 130,

    }

    return <nav>
        <div>
            <img style={logo_style} src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
            <a href='' onClick={() => setShowLogin(true)}>Login</a> 
            {showLogin && <Login />}
            <a href=''>Admin Login</a>
            <a href=''>Partner Login</a>
            <a href=''>Partnership</a>
            {/* <a href=''>
                <BsCart2 className='navbar-cart-icon' />
            </a>  */}
            {/* <button className='primary-button'>Order Now</button> */}
        </div>
        {/* <div classNaame="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
                anchor="right" >
                    <Box sx = {{width:250}}
                    role = "presentation"
                    onClick = {()=> setOpenMenu(false)}
                    onKeyDown = {() => setOpenMenu(false)}>
                        <List>
                            {menuOptions.map((item) => (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer> */}
    </nav>;
  
}

export default Navbar
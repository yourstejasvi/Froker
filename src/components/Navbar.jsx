import React, { useState } from 'react';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Login from "../Pages/Login";
import Admin_Login from '../Pages/Admin_Login';
import Partner_Login from '../Pages/Partner_Login';
import Partnership from '../Pages/Partnership';
import { Link, Route, Routes } from "react-router-dom";
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
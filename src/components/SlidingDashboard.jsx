import React, { useState } from 'react';
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";





const Sliding_dashboard = () => {

    const [openMenu,setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon />
        },
        {
            text:"Customer Care",
            icon:<SupportAgentIcon />
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon />
        },
        
    ];


    return (
        <>

        <nav>
            
        
        <div classNaame="navbar-menu-container">
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
                </Drawer>
    </nav>
        
        
        </>
    )
    
    
  
}

export default Sliding_dashboard
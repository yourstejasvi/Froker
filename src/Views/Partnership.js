import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Banner from "../Assets/home-banner-background.png";
import Map from "../Assets/map.png";
import gps from "../Assets/gps.png";
import Navbar from "../components/Navbar";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import "../Css/Partnership.css";



const Partnership = () => {

  var navigate = useNavigate();


  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div>

      <Navbar />
      
      <div className='partnership-bg'>
        
        <div className='partnership-banner'>
          <img src={Banner} />
        </div>
    
        <div className='partnership-map'>
          <img src={Map} />
        </div>

        <div className='partnership-gps'>
          <img src={gps} />
        </div>
  
      </div>

      <div className='white-box'>
        <h2>Want to join us?</h2>
            <ol className='partnership-rules'>
              <li>Froker ensures fast, cheap, contact-less delivery.</li>
              <li>Froker supports your local business and helps increase your sales.</li>
              <li>Froker delivers top-notch food to its customer, thus needs to have quality-assured partners.</li>
              <li>Additional perks provided to the partners.</li>
              <li>Complete the simple verification process for your outlet and join Froker.</li>
    
            </ol>
        
        <Link aria-describedby={id} underline="hover" className='link' onClick={handleClick}>Documents required for registration?</Link>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorReference='anchorPosition'
            anchorPosition={{top:450, left:700}}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical:'center',
              horizontal:'left',
            }}

          >
            <Typography sx={{ p: 2 }}>
                      <ol className='partnership--popover-text'>
                                  <li>Business Entity Name</li>
                                  <li>Address Details</li>
                                  <li>FSSAI Registration Details</li>
                                  <li>KYC Details to be uploaded (Aadhaar/Passport/Voter ID/Drivers License) in JPEG format</li> 
                                  <li>GST Certificate to be uploaded</li>
                                  <li>FSSAI Certificate to be uploaded</li>
                    </ol>
            </Typography>
          </Popover>

        <br></br>


        <Box marginLeft="160px" marginTop="25px">

          <Button variant='contained' size='large' color='warning' className='partnership-getstarted-button' onClick={() => {navigate("/Partner_Registration");}}>{'GET STARTED'}</Button>

        </Box>
        
      </div>
    
    </div>
  )
}

export default Partnership
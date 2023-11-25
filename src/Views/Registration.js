import React, {useState} from "react";
import Banner1 from "../Assets/home-banner-background.png";
import Logo from "../Assets/Forker.png";
import Diet from "../Assets/diet.png";
import Pizza from "../Assets/Pizza.png";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from "sweetalert2";
import "../Css/Registration.css";
import { postData } from "../services/ServerServices";

function Registration() {

    var navigate = useNavigate();


    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [mail, setMail] = useState("");
    const [mob, setMob] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");


    const clearData = () => {
        setFname("");
        setLname("");
        setMail("");
        setMob("");
        setCity("");
        setPassword("");
      };


      


    const handleRegister = async () => {
        
        var formData = new FormData();
        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("mail", mail);
        formData.append("mob", mob);
        formData.append("city", city);
        formData.append("password", password);
       

        var flag = false;
        var result = await postData("customer/register_customer", {"fname":fname,"lname":lname,"mail":mail,"mob":mob,"city":city,"password":password});
        if (result) {
            flag = true;
            
          Swal.fire({
            icon: "success",
            title: "Registered successfully",
          });
          if(flag) {
            navigate('/Login');

        }          
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed to Submit Record",
          });
        }

        
        clearData();

    
      };


    const logo_style ={
        height: 130,
    };

    const Cities = [
        {
            value: 'del',
            label: 'Delhi',
        },
        {
            value: 'mum',
            label: 'Mumbai',
        },
        {
            value: 'luck',
            label: 'Lucknow',
        },
        {
            value: 'hyd',
            label: 'Hyderabad',
        },
        {
            value: 'chen',
            label: 'Chennai',
        },

    ];

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
     <>
     <nav>
         <img src={Logo} style={logo_style} />
     </nav>
        <div className="registration--background-container">
        
             <img src={Banner1} className="registration--Banner1" />

        </div>

        <img src={Diet} className="registration--diet" />
        <img src={Pizza} className="registration--pizza" />
        

    <Box 
        component="form"
        sx={{
            '& .MuiTextField-root': { m:1, width:'27ch'},
        }} 
        noValidate
        autoComplete="off"
        >
            <div className="registration-form">

                <TextField
                required
                id="fname"
                label="First Name"
                variant="filled"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                />

                <TextField
                required
                id="lname"
                label="Last Name"
                variant="filled"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                />

                <TextField
                required
                id="mail"
                label="Email"
                variant="filled"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                />

                <TextField
                required
                id="mob"
                label="Mobile no."
                variant="filled"
                value={mob}
                onChange={(e) => setMob(e.target.value)}
                />

                <TextField
                required
                id="city"
                select
                label="Select your city"
                variant="filled"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                >
                {Cities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>

                <FormControl sx={{ m: 1, width: '27ch' }} variant="filled">
                <InputLabel required htmlFor="passsword">Password</InputLabel>
                <FilledInput
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>

                <FormControlLabel control={<Checkbox />} label="Agree to terms and conditions of Froker" />

                <Button variant='contained' size='large' color='warning' onClick={handleRegister}>{'REGISTER'}</Button>


            </div>


    </Box>
            
     
     </>
    );

    
    
    
}

export default Registration;
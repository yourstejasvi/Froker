import React , { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import "../Css/Selector.css"

function valuetext(value) {
    return `${value}°C`;
  }
  

const Selector = () => {

    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div className='selector--background-container'>

        <div className='selector--type'>

            <p className='selector--header'>Type</p>

            <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Veg" />
            <FormControlLabel control={<Checkbox />} label="Non-Veg" />
            <FormControlLabel control={<Checkbox />} label="Vegan" />
            </FormGroup>

        </div>

        <div className='selector--Line'></div>

        <div className='selector--cuisine'>

            <p className='selector--header'>Cuisine</p>

            <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Chaat" />
            <FormControlLabel control={<Checkbox />} label="Fast Food" />
            <FormControlLabel control={<Checkbox />} label="Punjabi Tadka" />
            <FormControlLabel control={<Checkbox />} label="South Indian" />
            <FormControlLabel control={<Checkbox />} label="Dessert" />
            </FormGroup>


        </div>

        <div className='selector--Line'></div>

        <div className='selector--price-range'>

            <p>Price range</p>

            <Box sx={{ width: 150 }}>
            <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                step={100}
                marks
                min={200}
                max={1000}
            />
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <Button variant='outlined' color='warning' className='selector--find-button' onClick={{}}>
                Find <SearchIcon />
            </Button>

        </div>

        

    </div>
  )
}

export default Selector
import React, {Component} from 'react';
import './Css/App.css';
import Home from "./components/Home";
import Feedback from './components/Feedback';
import Footer from './components/Footer';

import Login from "./Pages/Login";
import Admin_Login from "./Pages/Admin_Login";
import Partner_Login from "./Pages/Partner_Login";
import Partnership from "./Pages/Partnership";


import { Route, Routes } from "react-router-dom";

function App() {
  return <div className="App">
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Admin_Login' element={<Admin_Login />} />
      <Route path='/Partner_Login' element={<Partner_Login />} />
      <Route path='/Partnership' element={<Partnership />} />
      
  
    </Routes>
  </div>
}


export default App;

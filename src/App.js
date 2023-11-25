import React, {Component} from 'react';
import './Css/App.css';
import Home from "./components/Home";

import Login from "./Views/Login";
import Admin_Login from "./Views/Admin_Login";
import Partner_Login from "./Views/Partner_Login";
import Partnership from "./Views/Partnership";
import Registration from './Views/Registration';
import Order_now  from './Views/Order_now';
import Partner_Registration from './Views/Partner_Registration';
import ResetPassword from './Views/ResetPassword';
import Customer_dashboard from './Views/Customer_dashboard';

import {Route, Routes} from "react-router-dom";

function App() {
  return <div className="App">

      <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Admin_Login' element={<Admin_Login />} />
          <Route path='/Partner_Login' element={<Partner_Login />} />
          <Route path='/Partnership' element={<Partnership />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Order_Now' element={<Order_now />} />
          <Route path='/Partner_Registration' element={<Partner_Registration />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/customer_dashboard' element={<Customer_dashboard />} />

      </Routes>
       
  </div>
}


export default App;

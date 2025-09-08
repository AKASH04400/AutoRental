/** @format */

import React, { use } from 'react';
import Navbar from './components/Navbar';
import {Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import MyBooking from './pages/MyBooking';
import Hero from './components/Hero';

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cars' element={<Cars/>}></Route>
        <Route path='/cars/:id' element={<CarDetails/>}></Route>
        <Route path='/my-bookings' element={<MyBooking/>}></Route>  

      </Routes>
      {/* <Hero /> */}
    </>
  );
};

export default App;

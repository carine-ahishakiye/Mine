import { useState } from 'react';
import './App.css';
import { Outlet, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar /> 
      <Outlet />
      <Footer/>
  
    </>
  );
}

export default App;

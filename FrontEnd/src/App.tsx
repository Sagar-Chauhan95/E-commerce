import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddProducts from './components/AddProducts';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      { <Navbar /> }


      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/add_product' element={ <AddProducts /> } />
      </Routes>
    </>

  );
}

export default App;

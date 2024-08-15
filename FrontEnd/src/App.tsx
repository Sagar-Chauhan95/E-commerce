import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddProducts from './components/AddProducts';
import Navbar from './components/Navbar';
import { ProductContext } from './context/productContext';
import { IProduct } from './types/Product';

function App() {
  const [ products, setProducts ] = useState<IProduct[]>([]);
  return (
    <>
      <ProductContext.Provider value={ { products, setProducts } }>

        { <Navbar /> }


        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/add_product' element={ <AddProducts /> } />
        </Routes>
      </ProductContext.Provider>
    </>

  );
}

export default App;

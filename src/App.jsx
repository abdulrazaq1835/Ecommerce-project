import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


  import { ToastContainer, toast } from 'react-toastify'

import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PlaceOrder from './pages/PlaceOrder'
import Cart from "./pages/Cart";
import Home from './pages/Home'
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Order from './pages/Order'
import Collection from "./pages/Collection";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
;

const App = () => {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
  }, [])
  return (
    <div>
    <ToastContainer/>
    <Navbar/>
    <SearchBar/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/place-order" element={<PlaceOrder />}></Route>
         <Route path="/login" element={<Login />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/collection" element={<Collection />}></Route>

      </Routes>
      <Footer/>

      </div>
    
    
  );
};

export default App;

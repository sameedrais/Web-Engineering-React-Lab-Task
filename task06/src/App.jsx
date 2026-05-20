import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Product";
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";
import './App.css'

function App() {
  const [cart,setcart]=useState([])

  function addtocart(product){
    setcart([...cart,product])
  }

  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products addtocart={addtocart}/>}/>
      <Route path="/cart" element={<Cart cart={cart}/>}/>
      <Route path="/checkout" element={<Checkout/>}/>


    </Routes>


    </BrowserRouter>
    
  )
}

export default App

import React from 'react'
import Navber from './components/navber/Navber'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeorder/PlaceOrder';

const App = () => {
  return (
    <div className='app'>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/order" element={<PlaceOrder />} /> 
      </Routes>
    </div>
  );
}

export default App;
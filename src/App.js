import React, {useEffect} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { FurnitureUpload } from './components/furnitureUpload';
import Shop from './components/product/Shop';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Checkout from './components/checkout/Checkout';

import Nav from './components/Nav';
import { updateTotal } from './features/cartSlice';

const App = () => {

  const { inShoppingCart } = useSelector(store => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTotal())
  }, [inShoppingCart, dispatch])
  

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Nav/>}> */}
          <Route index element={<Home/>} />
          <Route path="shop" element={<Shop/>}/>
          <Route path="shop/:productName" element={<Product/>}/>
          <Route path="upload" element={<FurnitureUpload/>} />
          <Route path="checkout" element={<Checkout />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;

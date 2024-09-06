import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FurnitureUpload } from './components/furnitureUpload';
import Shop from './components/product/Shop';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Checkout from './components/checkout/Checkout';

import Nav from './components/Nav';

const App = () => {

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

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FurnitureUpload } from './components/furnitureUpload';
import Shop from './components/Shop';
import Home from './components/Home';
import Nav from './components/Nav';

const App = () => {

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Home/>} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/upload" element={<FurnitureUpload/>} />
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

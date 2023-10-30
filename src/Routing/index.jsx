import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Header from './../Component/Header/Header'
import Cart from '../Pages/Cart'
import About from '../Pages/About'
import Products from '../Pages/Products'

const Routing = () => {
  return (
    <BrowserRouter>
  <Header/>
      <Routes>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={ <Products/>} />
          <Route path="/" element={<Home/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
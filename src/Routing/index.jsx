import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Header from './../Component/Header/Header'

const Routing = () => {
  return (
    <BrowserRouter>
  <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/home" element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
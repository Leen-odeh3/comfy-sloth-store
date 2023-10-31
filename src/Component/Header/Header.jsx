import { NavLink } from "react-router-dom";
import "./Header.scss";
import TopHeader from "./TopHeader";
import { useState } from "react";

const Header = () => {
  const navs = ["Home", "About", "Products", "Cart"];

  const [open, setopen] = useState(false);

  return (
    <div>
      <TopHeader />

      <div className="main-header">
        <i className="bi bi-list" onClick={() => setopen(!open)}></i>
        <div className="title">
          <h1>C</h1>
        </div>
        <div className="links" style={{ left: open && "30px" }}>
          {navs.map((e, index) => (
            <NavLink active key={index} to={`/${e}`}>
              {e}
            </NavLink>
          ))}
        </div>

        <div className="icons">
          <i className="bi bi-moon-fill"></i>
          <i className="bi bi-cart3"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;

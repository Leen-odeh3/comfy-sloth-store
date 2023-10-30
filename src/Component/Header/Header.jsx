import { NavLink } from "react-router-dom";
import "./Header.scss";
import TopHeader from "./TopHeader";

const Header = () => {
  const navs = ["Home", "About", "Products", "Cart"];

  return (
    <div>
      <TopHeader />

      <div className="main-header">
        <div className="title">
          <h1>C</h1>
        </div>
        <div className="links">
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

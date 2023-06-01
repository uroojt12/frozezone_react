import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuToggle, setMenueToggle] = useState(false);
  function toggleMenu() {
    setMenueToggle(!menuToggle);
  }
  return (
    <>
      <header className="ease">
        <div className="contain-fluid">
          <div class="logo">
            <a href="/">
              <img src="images/logo.jpg" alt="Froze-Zone" />
            </a>
          </div>
          <div
            className={menuToggle === true ? "toggle active" : "toggle"}
            onClick={toggleMenu}
          >
            <span></span>
          </div>
          <nav className={menuToggle === true ? "ease active" : "ease"}>
            <div nav="">
              <ul id="nav">
                <li>
                  <NavLink className="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="about" className="">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="flavor" className="">
                    Flavors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="catering" className="">
                    Catering
                  </NavLink>
                </li>
                <li>
                  <NavLink to="work" className="">
                    Work
                  </NavLink>
                </li>
                <li>
                  <NavLink to="multiform" className="">
                    Multiform
                  </NavLink>
                </li>
                <li>
                  <NavLink to="contact" className="">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div classNameName="clearfix"></div>
        </div>
      </header>
    </>
  );
};
export default Header;

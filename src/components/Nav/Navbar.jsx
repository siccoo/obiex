import React from "react";
import "./Navbar.css";

import HomeLogo from "../../assets/obiexLogo.png";
import WebSearch from "../../assets/webSearch.svg";
import MobileSearch from "../../assets/mobileSearch.png"

const Navbar = () => {

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={HomeLogo} alt="" />
        </div>

        <form role="search">
          <div className="search__bar">
            <img
              src={WebSearch}
              aria-label="search movie"
              tabindex="0"
              alt="Search Icon"
            />
            <div className="search__input">
              <img src={MobileSearch} alt="Search Icon" />
              <input
                type="text"
                aria-label="search movie"
                placeholder="Search"
              />
            </div>
          </div>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;

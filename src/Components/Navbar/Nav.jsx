import React from "react";
import "./Nav.css";
import logo from "../../imgs/logo.png";
import { useState } from "react";
function Nav() {
  const [dropdown, setDropdown] = useState(0);
  return (
    <div className="Nav">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <span>Desitnations</span>
        <span>Hotels</span>
        <span>Flights</span>
        <span>Bookings</span>
        <span>Login</span>
        <span className="singup">Sign up</span>
        <span
          className="dropdown"
          onClick={setDropdown}
          onDoubleClick={() => {
            setDropdown(0);
          }}
        >
          En
          {dropdown ? (
            <div className="items">
              <div className="item">Ban</div>
              <div className="item">Arb</div>
              <div className="item">Spn</div>
            </div>
          ) : (
            ""
          )}
        </span>
      </div>
    </div>
  );
}

export default Nav;

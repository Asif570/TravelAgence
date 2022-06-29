import React from "react";
import "./Nav.css";
import logo from "../../imgs/logo.png";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
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
          {dropdown ? (
            <>
              En <IoIosArrowDown />
              <div className="items">
                <div className="item">Ban</div>
                <div className="item">Arb</div>
                <div className="item">Spn</div>
              </div>
            </>
          ) : (
            <>
              En <IoIosArrowUp />
            </>
          )}
        </span>
      </div>
    </div>
  );
}

export default Nav;

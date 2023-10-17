import React from "react";
import "./Appbar.css";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_header">
        <h2 className="navbar_logo">Muhavur</h2>
        <div className="navbar_link">
          <ul className="navlinkList">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contacts</li>
            </Link>
            <Link to="/login">
              <li>
                <button className="button">Login</button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appbar;

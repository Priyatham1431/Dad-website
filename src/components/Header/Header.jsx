import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="text-container">
          <Link to="/" className="head-text">
            <img className='logo' src='images/logo/sign.jpg' alt='logo' />
          </Link>
        </div>
        <div className="options">
          <Link to="/" className="option">
            Home
          </Link>
          <Link to="/cartoons" className="option">
            Cartoons
          </Link>
          <Link to="/poetry" className="option">
            Poetry
          </Link>
          <Link to="/contact" className="option">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

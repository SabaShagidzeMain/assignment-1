import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header">
      <h3>Logo</h3>
      <nav ref={navRef}>
        <div className="link-wrapper">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/About" className="nav-link">
            About
          </Link>
          <Link to="/Contact" className="nav-link">
            Contact
          </Link>
          <Link to="/BlogPage" className="nav-link">
            Blog
          </Link>
          <Link to="/Assignment3" className="nav-link">
            Assignment 3
          </Link>
          <Link to="">
            <img
              src="src/assets/user-images/serious-man-thinking_1149-1328.avif"
              alt=""
              className="profile-image"
            />
          </Link>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;

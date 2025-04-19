import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import parrcenterlogo from './parrcenterlogo.png';
import person from './person.png';



function Navbar(){
    return(
      <>
      <header className="header">
            <div className="header-left">
                <img src={parrcenterlogo} alt="UNC Logo" className="header-logo" />
            </div>
            <div className="header-right">
              <div className="navbar-buttons">
                
            <Link to="/">
            <button className="nav-button">Home&nbsp;Page</button>
            </Link>
            <Link to="/">
            <button className="flashcard-btn">Flashcard</button>
            </Link>
            <Link to="/faq">
            <button className="qa-btn">Q&A</button>
            </Link>
            <div className="profile-icon">
                <img src={person} alt="Profile" />
            </div>

          </div>

            </div>
        </header>
        </>
    );

}

export default Navbar;
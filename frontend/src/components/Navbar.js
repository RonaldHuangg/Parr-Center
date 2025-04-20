import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav className="navbar">

        <div className="navbar-title">
          <img src = {logo} alt = "UNC College of Arts and Science Parr Center for Ethics"/>
        </div>

        <div className="navbar-buttons">
          <Link to="/">
          <button className="nav-button">Home&nbsp;Page</button>
          </Link>
          <button className="nav-button">Flashcard</button>
          <button className="nav-button">Q&A</button>

          <button className="nav-button"><i className="fa-solid fa-user"></i></button>

        </div>
        
      </nav>
    );

}

export default Navbar;
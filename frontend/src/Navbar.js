import React, { useState } from "react";
import "./Navbar.css";
import logo from "./Images/logo.png";

function Navbar(){
    return(
        <nav className="navbar">

        <div className="navbar-title">
          <img src = {logo} alt = "UNC College of Arts and Science Parr Center for Ethics"/>
        </div>

        <div className="navbar-buttons">
          <button className="nav-button">Home&nbsp;Page</button>
          <button className="nav-button">Flashcard</button>
          <button className="nav-button">Q&A</button>

          <button className="nav-button"><i className="fa-solid fa-user"></i></button>
          <button className="nav-down"><i className="fa-solid fa-angle-down"></i></button>

        </div>
        
      </nav>
    );

}

export default Navbar;
import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";


function NavbarModule(){
    return(
        <nav className="navbar">

        <div className="navbar-title2">
          <img src = {logo} alt = "UNC College of Arts and Science Parr Center for Ethics"/>
        </div>

        <div className="navbar-buttons">
          
          <button className="nav-button">Flashcard</button>
           <Link to="/faq">
          <button className="nav-button">Q&A</button>
          </Link>
          <button className="nav-button"><i className="fa-solid fa-user"></i></button>
          <button className="nav-down"><i className="fa-solid fa-angle-down"></i></button>

        </div>
        
      </nav>
    );

}

export default NavbarModule;
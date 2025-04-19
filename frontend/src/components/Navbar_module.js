import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import parrcenterlogo from './parrcenterlogo.png';
import person from './person.png';


function NavbarModule(){
    return(
      <header className="header">
      <div className="header-left">
          <img src={parrcenterlogo} alt="UNC Logo" className="header-logo" />
      </div>
      <div className="header-right">
          <button className="flashcard-btn">Flashcard</button>
          <Link to="/faq">
          <button className="qa-btn">Q&A</button>
          </Link>
          <div className="profile-icon">
              <img src={person} alt="Profile" />
          </div>
      </div>
  </header>
    );

}

export default NavbarModule;
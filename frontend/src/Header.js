import React from "react";
import "./Header.css";
import whitelogo from "./images/whitelogo.png"

function Header(){
    return(
        <header className="header">
            <img src={whitelogo} alt="UNC College of Arts and Sciences Parr Center for Ethics" />
        </header>
    );
}

export default Header;
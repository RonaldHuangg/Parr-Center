import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import logo from "./parrcenterlogo.png"; 
import profileIcon from "./person.png"; 
import philosophyLogo from "./philosophy_logo.png"; 

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="UNC Parr Center Logo" className="header-logo" />
        </div>
        <div className="header-right">
          <button className="flashcard-btn">Flashcard</button>
          <button className="qa-btn">Q&A</button>
          <div className="profile-dropdown">
            <img src={profileIcon} alt="Profile" className="profile-icon" />
          </div>
        </div>
      </header>

      <div className="content-container">
        <aside className="sidebar">
          <ul>
            <li className="active-module">
              Module 1 <br />
              <span className="module-title">Interstellar Rescue Ethical Dilemma</span>
            </li>
            {[...Array(7)].map((_, index) => (
              <li key={index} className="inactive-module">
                Module {index + 2}
                <br />
                <span className="module-placeholder">nlasnlno jxzciojoq nuvo dovij mdkljfen</span>
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          <section className="module-intro">
            <h1 className="module-heading">Welcome to Module 1</h1>
            <h2 className="module-subheading">Interstellar Rescue Ethical Dilemma</h2>
            <p className="module-description">
              Explore key ethical frameworks through interactive scenarios designed to deepen your understanding of moral philosophy.
            </p>

            <div className="button-group">
              <Link to="/module1/part1" className="button-link">
                <button className="start-module-btn">Start Module</button>
              </Link>
              <button className="view-journal-btn">View Journal</button>
            </div>
          </section>

          <section className="progress-section">
            <h3 className="progress-title">Current Progress</h3>
            <div className="progress-tracker">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="progress-step">
                  {num}
                </div>
              ))}
            </div>
          </section>

          <section className="module-overview">
            <h3 className="overview-title">Module Overview</h3>
            <p className="overview-description">
              This module introduces ethical reasoning through the Interstellar Rescue Dilemma, equipping students with tools to analyze ethical frameworks, apply reasoning to Ethics Bowl cases, and practice Ethics Bowl-specific skills. It emphasizes solo reflection, interactive applications, and structured case analysis, with additional features for guided group discussion.
            </p>
          </section>
        </main>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <img src={philosophyLogo} alt="UNC Philosophy Logo" className="footer-logo" />
          </div>
          <div className="footer-middle">
            <p>
              Philosophy Department • UNC Chapel Hill <br />
              Caldwell Hall • CB# 3125 240 East Cameron Ave. <br />
              Chapel Hill, NC 27599-3125 <br />
              phone: (919) 962-7291 <br />
              fax: (919) 843-3929 <br />
              email: philosophy@unc.edu
            </p>
          </div>
          <div className="footer-right">
            <h3>Quick Links</h3>
            <p>xxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import './ModuleOnePart4.css';
import NavbarModule from "./Navbar_module";
import philosophyLogo from './philosophy_logo.png';


function ModuleOnePart4() {
    const [journalEntry, setJournalEntry] = useState("");

    const handleSave = () => {
        console.log("Journal Entry Saved:", journalEntry);
        alert("Your journal entry has been saved!");
    };


    return(<>
    <NavbarModule/>

         <div className="module-page">
    
                <div className="back-button4">
                    <button>←</button>
                </div>
    
                <div className="main-content">

                    <h1 className='title_4'>Part 4: Analyze a New Ethics Bowl Case</h1>
                    
                    <div className="progress-steps">
                        <div className="step active4">1</div>
                        <div className="step-line"></div>
                        <div className="step active4">2</div>
                        <div className="step-line"></div>
                        <div className="step active4">3</div>
                        <div className="step-line"></div>
                        <div className="step active4">4</div>
                    </div>

                    <div className="instructions">
                        <ol>
                        <li>Read the story carefully to understand the problem. Think about who is involved and what the main issue is.</li>
                        <li>
                            <p>Highlight</p>
                            <ul>
                            <li>What helps the most people (Utilitarian reasoning).</li>
                            <li>What focuses on fairness or equality (Fairness).</li>
                            <li>What helps those who need it the most (Priority View).</li>
                            </ul>
                        </li>
                        <li>
                            <p>Think About the Problem</p>
                        <ul>
                            <li>"What makes this situation tricky or hard to solve?"</li>
                            <li>"How do the ideas I've learned (fairness, helping people, etc) help me understand the problem better?"</li>
                        </ul>
                        </li>
                        <li>
                            <p>Take a Side</p>
                            <ul>
                            <li>Decide which idea (helping the most people, fariness, or helping those in need) is best way to solve the problem and explain why.</li>
                            <li>Think about how another idea might lead to a different answer.</li>
                            </ul>
                        </li>
                        </ol>
                </div>
    
                    <div className="case-section">
                        <div className="case-container">
                            <h2>Placeholder for an NHSEB or IEB case</h2>
                        </div>
                    </div>

                    {/* Journal Entry */}
                <div className="journal-entry">
                    <h2>Post-Reflection Journal Entry</h2>
                    <p>Which ethical framework provides the strongest guidance for resolving the case? Why? How might another framework lead to a different outcome?</p>
                    
                    <textarea
                    rows="4"
                    placeholder="Type your answer here..."
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    ></textarea>
                </div>

                <button className="button4 save-btn" onClick={handleSave}>Save</button>

                {/* Buttons */}
                <div className="button-container4">
                    
                    <button className="button4 finish-btn">Finish</button>
                    <button className="button4 view-btn">View Journal</button>
                </div>

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
    
    </>);
}

export default ModuleOnePart4;
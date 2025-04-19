import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import './ModuleOnePart4.css';
import NavbarModule from "./Navbar_module";
import philosophyLogo from './philosophy_logo.png';
import { Link } from "react-router-dom";


function ModuleOnePart4() {
    const [journalEntry, setJournalEntry] = useState("");

    const handleSave = () => {
        console.log("Journal Entry Saved:", journalEntry);
        alert("Your journal entry has been saved!");
    };


    return(<>
    <NavbarModule/>

         <div className="module-page">
            <Link to='/'>
                <div className="back-button4">
                    <button>←</button>
                </div>
                </Link>
    
                <div className="main-content">

                <p className='blurb'>In this section, interactively explore and analyze key ethical frameworks to deepen your understanding.</p>
                    <h1 className='title_4'>Part 4: Constructive Dialogue</h1>
                    
                    
                    <div className="progress-steps">
                        <Link to="/module1/part1" className="step active">1</Link>
                        <div className="step-line"></div>

                        <Link to="/module1/part1" className="step active">2</Link>
                        <div className="step-line"></div>

                        <Link to="/module1/part1" className="step active">3</Link>
                        <div className="step-line"></div>

                        <Link to="/module1/part4" className="step active">4</Link>
                    </div>


                    <div className="instructions">
                        <p className='instru-p4'><b>Instructions</b></p>
                        <ol>
                        <li><b>Step Into the Role:</b> Imagine you are part of the responding team tasked with providing commentary on the opposing 
                        team’s argument. Your goal is to thoughtfully and critically engage with their initial presentation.</li>
                        <li><b>Evaluate the Argument:</b> Assess the reasoning and evidence provided by the opposing team. Aim to highlight areas of 
                            agreement, identify potential weaknesses, and raise meaningful questions or counterpoints.
        
                        </li>
                        <li><b>Demonstrate Respectful Dialogue:</b> Your commentary should aim to foster a constructive discussion rather than a combative debate. 
                            Focus on exploring the ethical complexities of the issue rather than simply "winning" the argument
                        </li>
                        </ol>
                        <br></br>

                        <div className="description4">
                        <p><b>Your Task</b></p>
                        <p>In your role as the <b>commentating team</b>, respond to the opposing team’s argument. Address questions like:</p>
                        
                        <ul>
                            <li>To what extent has the presenting team successfully supported their position?</li>
                            <li>Are there gaps or oversights in their reasoning or evidence?</li>
                            <li>How might ethical considerations such as fairness, autonomy, or discrimination factor into your response?</li>
                        </ul>
                        <br></br>
                        <p>Write a concise, respectful commentary that engages directly with their argument. Consider awarding points based on these criteria:</p>
                        <ul>
                            <li>Insightfulness and depth of response <i>(10 points)</i></li>
                            <li>Relevance and constructiveness of the critique <i>(10 points)</i></li>
                            <li>Respectful engagement and collaborative tone <i>(5 points)</i></li>
                        </ul>
                        <p>Use the scoring rubric to guide your evaluation and ensure your feedback promotes meaningful ethical reflection.</p>
                        
                        </div>

                </div>
    
                <div className="case-section4">
                    <div className="case-container4">
                        <p className="case-title"><b>Ethics Bowl Case</b></p>
                        <p className="case-paragraph">
                        A tech company has implemented an AI system to help screen job applicants. The AI analyzes resumes and ranks candidates based 
                        on their likelihood of success in the role. However, journalists uncover that the AI system has been disproportionately 
                        downgrading resumes from women and candidates with non-Anglo names. The company claims the AI is unbiased because it was trained 
                        on "neutral" data from past hiring decisions. Critics argue that the system reflects historical biases in hiring practices and call 
                        for its immediate suspension.
                        </p>

                        <p className="case-title"><b>Opposing Team’s Position</b> <span className="subtitle">(Initial Presentation)</span></p>
                        <p className="case-paragraph quote">
                        "The tech company has a moral obligation to suspend the use of this AI system immediately because it perpetuates systemic discrimination. 
                        While the company might argue that the AI is a neutral tool, any system that results in unequal outcomes based on gender or ethnicity is 
                        fundamentally unethical. Furthermore, the company should prioritize fairness over efficiency and take steps to evaluate and redesign the 
                        AI system to ensure it treats all candidates equitably. Allowing this system to continue would compromise the principle of equal opportunity in the workplace."
                        </p>
                    </div>
                </div>


                    {/* Journal Entry */}
                <div className="journal-entry">
                    <textarea
                    rows="4"
                    placeholder="Type your answer here..."
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    ></textarea>
                </div>

                {/*<button className="button4 save-btn" onClick={handleSave}>Save</button>*/}

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
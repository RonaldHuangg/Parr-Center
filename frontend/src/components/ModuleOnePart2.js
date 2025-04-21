import React from 'react';
import NavbarModule from "./Navbar_module";
import { useNavigate } from 'react-router-dom';
import philosophyLogo from './philosophy_logo.png';




const ModuleOnePart2 = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <>
            <NavbarModule/>
            <div className="module-page">
                <div className="back-button">
                    <button onClick={handleBack}>←</button>
                </div>

                <div className="main-content">
                    <h1>Part 2: Argument Builder</h1>
                
                    <div className="progress-steps">
                        <div className="step">1</div>
                        <div className="step-line"></div>
                        <div className="step active">2</div>
                        <div className="step-line"></div>
                        <div className="step">3</div>
                        <div className="step-line"></div>
                        <div className="step">4</div>
                    </div>
                    <div className="instructions">
                        <p>Write at least three reasons for Side A and three reasons for Side B.</p>
                    </div>
                    <div className="argument-section">
                        <div className="argument-box">
                            <h3><strong>Telic 12: </strong>30 middle-aged individuals from some of Earth's poorest districts</h3>
                            <textarea placeholder="Type your answer here...." rows="6" />
                        </div>
                        <div className="argument-box">
                            <h3><strong>Pareto: </strong>20 college students headed for vacation</h3>
                            <textarea placeholder="Type your answer here...." rows="6" />
                        </div>
                    </div>
                    <div className='tips-section'>
                        <h2>Tips for Providing Strong Explanations</h2>
                        <ol>
                            <li><strong>Use "Because":</strong> Always explain why your point makes sense. Start with <em>"because"</em> or <em>"this is important because..."</em> to clarify your reasoning.</li>
                            <li><strong>Connect to Principles:</strong> Tie your reason to a larger idea, like fairness, consequences, or individual rights.</li>
                            <li><strong>Provide Examples:</strong> Use real or hypothetical examples to illustrate your point.</li>
                            <li><strong>Acknowledge Trade-Offs:</strong> Show you understand the pros and cons, even while making your case.</li>
                            <li><strong>Be Specific:</strong> Avoid vague statements—be clear about what you mean and <em>why</em> it matters.</li>
                        </ol>
                    </div>
                    <div className="button-container">
                        <button className="button finish-btn">Finish</button>
                        <button className="button view-btn">View Journal</button>
                    </div>
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
        </>
    )
}   

export default ModuleOnePart2; 
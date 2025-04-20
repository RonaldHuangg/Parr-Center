import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModuleOnePart1.css';
import parrcenterlogo from './parrcenterlogo.png';
import person from './person.png';
import philosophyLogo from './philosophy_logo.png';

const ModuleOnePart1 = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="module-page">
            <header className="header">
                <div className="header-left">
                    <img src={parrcenterlogo} alt="UNC Logo" className="header-logo" />
                </div>
                <div className="header-right">
                    <button className="flashcard-btn">Flashcard</button>
                    <button className="qa-btn">Q&A</button>
                    <div className="profile-icon">
                        <img src={person} alt="Profile" />
                    </div>
                </div>
            </header>

            <div className="back-button">
                <button onClick={handleBack}>←</button>
            </div>

            <div className="main-content">
                <h1>Part 1: Immediate Engagement</h1>
                
                <div className="progress-steps">
                    <div className="step active">1</div>
                    <div className="step-line"></div>
                    <div className="step">2</div>
                    <div className="step-line"></div>
                    <div className="step">3</div>
                    <div className="step-line"></div>
                    <div className="step">4</div>
                </div>

                <div className="video-section">
                    <h2>Watch the Video</h2>
                    <div className="video-container">
                        <button className="play-button">
                            <span className="play-icon">▶</span>
                        </button>
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
        </div>
    );
};

export default ModuleOnePart1; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostReflectionPage.css';
import parrcenterlogo from './parrcenterlogo.png';
import person from './person.png';
import philosophyLogo from './philosophy_logo.png';

const PostReflectionPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/glossary');
    };

    const handleContinue = () => {
        navigate('/next-page'); // Update this with the next page route
    };

    const handleViewJournal = () => {
        // Implement view journal functionality
        console.log('View Journal clicked');
    };

    const handleSave = () => {
        // Implement save functionality
        console.log('Save clicked');
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

                <div className="reflection-section">
                    <h2>Post-Reflection Journal Entry</h2>
                    <p className="reflection-question">
                        After learning about different ethical perspectives, which ship would you choose to save and why? Did your position or reasoning change?
                    </p>
                    <textarea 
                        className="reflection-input"
                        placeholder="Type your answer here...."
                    />
                    <button onClick={handleSave} className="save-button">Save</button>
                </div>

                <div className="glossary-buttons">
                    <button onClick={handleContinue} className="continue-btn">Continue</button>
                    <button onClick={handleViewJournal} className="view-journal-btn">View Journal</button>
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
                            fax: (919) 843-929 <br />
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

export default PostReflectionPage; 
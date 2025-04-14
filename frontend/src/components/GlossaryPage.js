import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GlossaryPage.css';
import parrcenterlogo from './parrcenterlogo.png';
import person from './person.png';
import philosophyLogo from './philosophy_logo.png';

const GlossaryPage = () => {
    const navigate = useNavigate();
    
    const glossaryTerms = [
        {
            term: "Utilitarianism",
            definition: "An ethical theory suggesting that the best action maximizes overall happiness or utility."
        },
        {
            term: "Priority View",
            definition: "Derek Parfit's theory that we should prioritize helping the worst off, even if it doesn't maximize total happiness."
        },
        {
            term: "Taurek's Argument",
            definition: "A fairness-based argument suggesting that all lives are equally valuable, which might justify random selection, such as a coin flip."
        },
        {
            term: "Hedonism",
            definition: "The view that pleasure is the highest good and proper aim of human life."
        },
        {
            term: "Consequentialism",
            definition: "An ethical theory judging actions based on their outcomes or consequences."
        },
        {
            term: "Fairness",
            definition: "Ensuring equal concern and respect for all individuals, regardless of numbers or outcomes."
        },
        {
            term: "Life Years",
            definition: "A calculation of the total potential future years individuals might live, used in utilitarian reasoning."
        },
        {
            term: "Moral Equality",
            definition: "The principle that all individuals have equal inherent worth in ethical decision-making."
        }
    ];

    const handleBack = () => {
        console.log('Back button clicked');
        navigate('/module1/part1');
    };

    const handleContinue = () => {
        navigate('/post-reflection');
    };

    const handleViewJournal = () => {
        // TODO: Implement view journal functionality
        console.log('View Journal clicked');
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
                <button type="button" onClick={() => handleBack()}>←</button>
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

                <div className="glossary-section">
                    <h2>Key Concepts Glossary</h2>
                    <div className="glossary-grid">
                        {glossaryTerms.map((item, index) => (
                            <div key={index} className="glossary-item">
                                <h3>{item.term}</h3>
                                <p>{item.definition}</p>
                            </div>
                        ))}
                    </div>
                    <div className="glossary-buttons">
                        <button onClick={handleContinue} className="continue-btn">Continue</button>
                        <button onClick={handleViewJournal} className="view-journal-btn">View Journal</button>
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

export default GlossaryPage; 
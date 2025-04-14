import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModuleOnePart1.css';
import parrcenterlogo from './parrcenterlogo.png';
import person from './person.png';
import philosophyLogo from './philosophy_logo.png';

const ModuleOnePart1 = () => {
    const navigate = useNavigate();
    const [showJournal, setShowJournal] = useState(false);
    const [journalEntry, setJournalEntry] = useState('');
    const [videoEnded, setVideoEnded] = useState(false);
    const [showGlossary, setShowGlossary] = useState(false);
    const playerRef = useRef(null);
    const hasShownPopupRef = useRef(false);
    const timeCheckIntervalRef = useRef(null);

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

    useEffect(() => {
        // Create a div for the player if it doesn't exist
        let playerDiv = document.getElementById('youtube-player');
        if (!playerDiv) {
            playerDiv = document.createElement('div');
            playerDiv.id = 'youtube-player';
            document.querySelector('.video-container').appendChild(playerDiv);
        }

        // Load YouTube IFrame API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Initialize YouTube Player when API is ready
        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                videoId: '2Oe6HUgrRlQ',
                height: '100%',
                width: '100%',
                playerVars: {
                    enablejsapi: 1,
                    origin: window.location.origin,
                    rel: 0,
                    modestbranding: 1
                },
                events: {
                    onStateChange: onPlayerStateChange
                }
            });
        };

        return () => {
            // Clear interval if it exists
            if (timeCheckIntervalRef.current) {
                clearInterval(timeCheckIntervalRef.current);
            }
            
            // Destroy YouTube player if it exists
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy();
            }
            
            // Clean up the YouTube API ready handler
            delete window.onYouTubeIframeAPIReady;
        };
    }, []);

    const onPlayerStateChange = (event) => {
        // Clear any existing interval
        if (timeCheckIntervalRef.current) {
            clearInterval(timeCheckIntervalRef.current);
        }

        // If video is playing (state 1)
        if (event.data === 1 && !hasShownPopupRef.current) {
            timeCheckIntervalRef.current = setInterval(() => {
                if (!playerRef.current) return;
                const currentTime = playerRef.current.getCurrentTime();
                
                if (currentTime >= 60 && !hasShownPopupRef.current) {
                    playerRef.current.pauseVideo();
                    setShowJournal(true);
                    hasShownPopupRef.current = true;
                    clearInterval(timeCheckIntervalRef.current);
                }
            }, 100);
        }
        // If video has ended (state 0)
        if (event.data === 0) {
            setVideoEnded(true);
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    const handleWatchAgain = () => {
        setShowJournal(false);
        if (playerRef.current) {
            playerRef.current.seekTo(0);
            playerRef.current.playVideo();
        }
    };

    const handleSave = () => {
        setShowJournal(false);
        if (playerRef.current) {
            playerRef.current.playVideo();
        }
    };

    const handleContinue = () => {
        navigate('/glossary');
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

                {!showGlossary ? (
                    <div className="video-section">
                        <h2>Watch the Video</h2>
                        <div className="video-container">
                            <div id="youtube-player"></div>
                        </div>
                        {videoEnded && (
                            <div className="video-end-buttons">
                                <button onClick={handleContinue} className="continue-btn">Continue</button>
                                <button onClick={handleViewJournal} className="view-journal-btn">View Journal</button>
                            </div>
                        )}
                    </div>
                ) : (
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
                )}

                {showJournal && (
                    <div className="journal-overlay">
                        <div className="journal-popup">
                            <h2>Journal Entry</h2>
                            <p>Which ship would you choose to save and why?</p>
                            <textarea
                                placeholder="Type your answer here...."
                                value={journalEntry}
                                onChange={(e) => setJournalEntry(e.target.value)}
                            />
                            <div className="journal-buttons">
                                <button onClick={handleWatchAgain} className="watch-again-btn">Watch again</button>
                                <button onClick={handleSave} className="save-btn">Save</button>
                            </div>
                        </div>
                    </div>
                )}
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

export default ModuleOnePart1; 
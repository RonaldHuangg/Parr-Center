import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ModuleOnePart1 from './components/ModuleOnePart1';
import GlossaryPage from './components/GlossaryPage';
import PostReflectionPage from './components/PostReflectionPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/module1/part1" element={<ModuleOnePart1 />} />
                    <Route path="/glossary" element={<GlossaryPage />} />
                    <Route path="/post-reflection" element={<PostReflectionPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
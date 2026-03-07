import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import Workbook from './components/Workbook';
import Practice from './components/Practice';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <nav className="navbar glass-panel">
                <div className="container nav-content">
                    <div className="brand">
                        <span className="logo-icon">🚀</span>
                        <span className="logo-text">LetsStudySaaS</span>
                    </div>
                    <div className="nav-links">
                        <NavLink
                            to="/workbook"
                            className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}
                        >
                            Workbook
                        </NavLink>
                        <NavLink
                            to="/practice"
                            className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}
                        >
                            Practice
                        </NavLink>
                    </div>
                </div>
            </nav>

            <main className="main-content container animate-fade-in">
                <Routes>
                    <Route path="/" element={<Navigate to="/workbook" replace />} />
                    <Route path="/workbook" element={<Workbook />} />
                    <Route path="/practice" element={<Practice />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;

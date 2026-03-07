import React from 'react';
import './Workbook.css';

const Workbook: React.FC = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="title">Learning Workbook</h1>
                <p className="subtitle">Mastering React, FastAPI, and Supabase integration.</p>
            </header>

            <div className="cards-grid">
                <div className="info-card glass-panel interactive-card">
                    <div className="card-icon">⚛️</div>
                    <h3>React Frontend</h3>
                    <p>Modern component-based UI library for building Single Page Applications. Learn about hooks, routing, and state management.</p>
                </div>

                <div className="info-card glass-panel interactive-card">
                    <div className="card-icon">⚡</div>
                    <h3>FastAPI Backend</h3>
                    <p>High performance Python web framework. Explore asynchronous endpoints, automatic docs (Redoc), and serverless execution.</p>
                </div>

                <div className="info-card glass-panel interactive-card">
                    <div className="card-icon">🗄️</div>
                    <h3>Supabase</h3>
                    <p>Open source Firebase alternative. Manage your database, authentication, and edge functions natively using PostgreSQL.</p>
                </div>
            </div>

            <div className="content-section glass-panel">
                <h2>System Architecture</h2>
                <div className="architecture-diagram">
                    <div className="node react">React App (Webpack)</div>
                    <div className="connector">→ Proxy API →</div>
                    <div className="node fastapi">FastAPI (Netlify Functions)</div>
                    <div className="connector">→ SDK →</div>
                    <div className="node supabase">Supabase DB</div>
                </div>
            </div>
        </div>
    );
};

export default Workbook;

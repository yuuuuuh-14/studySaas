import React, { useState } from 'react';
import axios from 'axios';
import './Practice.css';

const Practice: React.FC = () => {
    const [backendStatus, setBackendStatus] = useState<string>('Offline');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [healthData, setHealthData] = useState<any>(null);

    const checkHealth = async () => {
        setIsLoading(true);
        setBackendStatus('Checking...');
        setHealthData(null);

        try {
            // Use the proxy configured in webpack
            const response = await axios.get('/api/health');
            setBackendStatus('Online');
            setHealthData(response.data);
        } catch (err) {
            setBackendStatus('Offline');
            console.error('API Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="title">Practice Zone</h1>
                <p className="subtitle">Test live interactions between React, FastAPI, and Supabase.</p>
            </header>

            <div className="status-container glass-panel">
                <h2>System Health Check</h2>
                <div className="endpoint-status">
                    <div className={`status-indicator ${backendStatus === 'Online' ? 'online' :
                            backendStatus === 'Checking...' ? 'loading' : 'error'
                        }`}></div>
                    <span className="status-text">
                        Backend API (FastAPI): <strong>{backendStatus}</strong>
                    </span>
                </div>

                <button
                    className="action-btn"
                    onClick={checkHealth}
                    disabled={isLoading}
                >
                    {isLoading ? 'Checking...' : 'Check Connection'}
                </button>
            </div>

            {healthData && (
                <div className="data-container glass-panel animate-fade-in">
                    <h3>API Response:</h3>
                    <pre className="json-display">
                        {JSON.stringify(healthData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default Practice;

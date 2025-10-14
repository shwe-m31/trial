import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const location = useLocation();
    const userEmail = location.state?.userEmail || 'user@example.com';

    const handleLogout = () => {
        // Add logout logic here - redirect to login page
        window.location.href = '/';
    };

    const handleProfileClick = () => {
        // Add profile menu toggle logic here
        alert('Profile menu to be implemented');
    };

    return (
        <div className="dashboard-container">
            {/* Header with profile icon */}
            <header className="dashboard-header">
                <div className="header-content">
                    <h1 className="dashboard-title">Dashboard</h1>
                    <div className="profile-section">
                        <div className="profile-icon" onClick={handleProfileClick}>
                            <span className="profile-letter">
                                {userEmail ? userEmail.charAt(0).toUpperCase() : 'U'}
                            </span>
                        </div>
                        <div className="profile-dropdown">
                            <div className="profile-info">
                                <p className="user-email">{userEmail}</p>
                            </div>
                            <button className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main dashboard content */}
            <main className="dashboard-main">
                <div className="welcome-section">
                    <h2>Welcome to Your Dashboard!</h2>
                    <p>Hello, {userEmail}! You have successfully registered and logged in.</p>
                </div>

                <div className="stats-section">
                    <div className="stat-card">
                        <h3>Profile Status</h3>
                        <p className="stat-value">Active</p>
                    </div>
                    <div className="stat-card">
                        <h3>Account Type</h3>
                        <p className="stat-value">Standard</p>
                    </div>
                    <div className="stat-card">
                        <h3>Member Since</h3>
                        <p className="stat-value">{new Date().toLocaleDateString()}</p>
                    </div>
                </div>

                <div className="content-section">
                    <div className="content-card">
                        <h3>Quick Actions</h3>
                        <div className="action-buttons">
                            <button className="action-btn">Edit Profile</button>
                            <button className="action-btn">Settings</button>
                            <button className="action-btn">Help</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
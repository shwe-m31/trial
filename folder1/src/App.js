import './App.css';
import { useState } from 'react';
import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

// --- Simple placeholder pages ---
function Profile() {
    return (
        <div className="page-container">
            <h2>Profile Page</h2>
            <p>This is where you can view or edit your profile details.</p>
        </div>
    );
}

function Settings() {
    return (
        <div className="page-container">
            <h2>Settings Page</h2>
            <p>Here you can adjust your account and app settings.</p>
        </div>
    );
}

// --- Your existing Register component ---
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.text();
            alert(result);

            // Navigate to dashboard with user email
            navigate('/dashboard', { state: { userEmail: email } });

        } catch (err) {
            console.error("Fetch error:", err);
            alert("Failed to connect to server. Check if Spring Boot is running.");
        }
    };

    return (
        <div className="login-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

// --- App routing setup ---
function App() {
    return (
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
}

export default App;

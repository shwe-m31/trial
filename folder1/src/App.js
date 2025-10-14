import './App.css';
import { useState } from 'react';
import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

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

            // Navigate to dashboard with state
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

function App() {
    return (
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
    );
}

export default App;
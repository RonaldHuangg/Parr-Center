import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage"; // Import the landing page
import ModuleOnePart1 from "./components/ModuleOnePart1";
import faq from "./Faq";
import Navbar from "./Navbar";
import footer from "./Footer";

function App() {
    const [message, setMessage] = useState("Loading...");
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5001/")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.text();
            })
            .then((data) => setMessage(data))
            .catch((err) => {
                console.error("Error fetching data:", err);
                setError("Failed to connect to the backend.");
            });
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:5001/api/users");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                console.error("Error fetching users:", err);
                setError("Failed to fetch users from the database.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch("http://localhost:5001/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            setUsers([...users, result]);
            setNewUser({ username: "", password: "" });
            setSuccess("User added successfully!");

            setTimeout(() => {
                setSuccess(null);
            }, 3000);
        } catch (err) {
            console.error("Error adding user:", err);
            setError("Failed to add new user. Please try again.");
        }
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/module1/part1" element={<ModuleOnePart1 />} />
                </Routes>

                {/* Backend Data Section - Only show on landing page */}
                {window.location.pathname === "/" && (
                    <div style={{ textAlign: "center", marginTop: "50px" }}>
                        <h1>Parr Learning Center</h1>
                        {error ? (
                            <p style={{ color: "red" }}>{error}</p>
                        ) : (
                            <p>Backend says: {message}</p>
                        )}

                        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
                            <h2>Add New User</h2>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            {success && <p style={{ color: "green" }}>{success}</p>}
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: "10px" }}>
                                    <input
                                        type="text"
                                        name="username"
                                        value={newUser.username}
                                        onChange={handleInputChange}
                                        placeholder="Username"
                                        style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
                                        required
                                    />
                                </div>
                                <div style={{ marginBottom: "10px" }}>
                                    <input
                                        type="password"
                                        name="password"
                                        value={newUser.password}
                                        onChange={handleInputChange}
                                        placeholder="Password"
                                        style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        padding: "8px 16px",
                                        backgroundColor: "#4CAF50",
                                        color: "white",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Add User
                                </button>
                            </form>

                            <h2>Users from Supabase</h2>
                            {loading ? (
                                <p>Loading users...</p>
                            ) : users.length > 0 ? (
                                <ul style={{ listStyleType: "none", padding: 0 }}>
                                    {users.map((user) => (
                                        <li
                                            key={user.id}
                                            style={{
                                                border: "1px solid #ddd",
                                                padding: "10px",
                                                marginBottom: "10px",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            <h3>{user.username}</h3>
                                            <p>Password: {user.password}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No users found. Add some!</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Router>
    );
}

export default App;

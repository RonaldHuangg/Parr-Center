import React, { useEffect, useState } from "react";
import "./App.css";

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

    // fetch from the database
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

    // for handling input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    // new user
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
            
            if (Array.isArray(result) && result.length > 0) {
                setUsers([...users, result[0]]);
            } else if (result && !Array.isArray(result)) {
                setUsers([...users, result]);
            } else {
                const refreshResponse = await fetch("http://localhost:5001/api/users");
                const refreshData = await refreshResponse.json();
                setUsers(refreshData);
            }
            
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
        <div className="App">
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
        </div>
    );
}

export default App;

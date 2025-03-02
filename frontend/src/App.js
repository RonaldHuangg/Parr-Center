import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [message, setMessage] = useState("Loading...");
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: "", description: "" });
    const [error, setError] = useState(null);
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
        const fetchItems = async () => {
            try {
                const response = await fetch("http://localhost:5001/api/items");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setItems(data);
            } catch (err) {
                console.error("Error fetching users:", err);
                setError("Failed to fetch users from the database.");
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    // for handling input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    // new user
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5001/api/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            setItems([...items, result[0]]);
            setNewItem({ name: "", description: "" });
        } catch (err) {
            console.error("Error adding item:", err);
            setError("Failed to add new user.");
        }
    };

    return (
        <div className="App">
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Parr learning center</h1>
                {error ? (
                    <p style={{ color: "red" }}>{error}</p>
                ) : (
                    <p>Backend says: {message}</p>
                )}

                <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
                    <h2>Add New User</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "10px" }}>
                            <input
                                type="text"
                                name="name"
                                value={newItem.name}
                                onChange={handleInputChange}
                                placeholder="Username"
                                style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <textarea
                                name="description"
                                value={newItem.description}
                                onChange={handleInputChange}
                                placeholder="Description"
                                style={{ padding: "8px", width: "100%", boxSizing: "border-box", minHeight: "80px" }}
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
                    ) : items.length > 0 ? (
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            {items.map((item) => (
                                <li
                                    key={item.id}
                                    style={{
                                        border: "1px solid #ddd",
                                        padding: "10px",
                                        marginBottom: "10px",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
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

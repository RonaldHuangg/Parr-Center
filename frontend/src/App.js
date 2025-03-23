import React, { useEffect, useState } from "react";

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
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>React + Node.js App</h1>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <p>Backend says: {message}</p>
            )}
        </div>
    );
}

export default App;
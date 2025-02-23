import React, { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");
    const [error, setError] = useState(null);

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

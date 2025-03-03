import React, { useEffect, useState } from "react";
import Header from "./Header";
import Signup from "./Signup";
import Login from "./Login";
import Footer from "./Footer";

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
        <>
            <Header />
            <Signup />
            <Footer />
        </>
    );
}

export default App;
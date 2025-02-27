import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import Faq from "./Faq.js";
import Footer from "./Footer.js";

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
        <Navbar/>
        <Faq/>
        <Footer/>
        </>
        
    );
}

export default App;

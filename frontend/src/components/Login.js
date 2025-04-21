import React, { useState } from "react";
import { supabase } from "../../../backend/db/supabase"
import "./Login.css";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: ""});
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });

            if (error) throw error;

            console.log("User logged in:", data);
        } catch (err) {
            console.error("Login error:", err.message);
            setError(err.message);
        }
    };

    return(
        <div className="login-container">
            <h2 className="login-title">Log In</h2>

            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="login-input-field" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="login-form-group">
                    <label>Password</label>
                    <div className="login-password-container">
                        <input type="password" name="password" className="login-input-field" value={formData.password} onChange={handleChange} required />
                        <span className="login-forgot-password">Forgot your password?</span>
                    </div>
                </div>

                {error && <p className="login-error">{error}</p>}

                <div className="login-remember-me">
                    <input type="checkbox" id="login-remember" />
                    <label htmlFor="login-remember">Remember me</label>
                </div>

                <button type="submit" className="login-submit-btn">Submit</button>
                <div className="login-signup-container">
                    <span className="login-signup-text">Don't have an account? </span>
                    <span className="login-signup-link">Sign Up</span>
                </div>
            </form>
        </div>
    );
}

export default Login;

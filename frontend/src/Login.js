import React from "react";
import "./Login.css";

function Login() {
    return(
        <div className="login-container">
            <h2 className="login-title">Log In</h2>

            <form className="login-form">
                <div className="login-form-group">
                    <label>Username or Email</label>
                    <input type="text" className="login-input-field" />
                </div>

                <div className="login-form-group">
                    <label>Password</label>
                    <div className="login-password-container">
                        <input type="password" className="login-input-field" />
                        <span className="login-forgot-password">Forgot your password?</span>
                    </div>
                </div>

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

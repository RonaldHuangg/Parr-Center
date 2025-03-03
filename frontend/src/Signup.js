import React from "react";
import "./Signup.css";

function Signup() {
    return(
        <div className="signup-container">
            <h2 className="signup-title">Create Account</h2>
            <form className="signup-form">
                {/* First Name and Last Name */}
                <div className="signup-name-info">
                    <div className="signup-input-group">
                        <label>First Name</label>
                        <input type="text" className="signup-input-field" />
                    </div>
                    <div className="signup-input-group">    
                        <label>Last Name</label>
                        <input type="text" className="signup-input-field" />
                    </div>
                </div>

                {/* Email, Password, Re-type Password */}
                <div className="signup-login-info">
                    <div className="signup-input-group">    
                        <label>Email</label>
                        <input type="email" className="signup-input-field" />
                    </div>
                    <div className="signup-input-group">    
                        <label>Password</label>
                        <input type="password" className="signup-input-field" />
                    </div>
                    <div className="signup-input-group">    
                        <label>Re-type Password</label>
                        <input type="password" className="signup-input-field" />
                    </div>
                </div>

                {/* Sign Up Button */}
                <button className="signup-btn">Sign Up</button>

                {/* Separator Line */}
                <div className="signup-separator">
                    <hr /><span>or</span><hr />
                </div>

                {/* Social Login Buttons */}
                <div className="signup-social-option-buttons">
                    <button className="signup-social-btn signup-google-btn">Google</button>
                    <button className="signup-social-btn signup-onyen-btn">Onyen</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;

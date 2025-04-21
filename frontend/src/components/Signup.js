import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "../../backend/firebase/auth";
import { auth } from "../../../backend/firebase"
import { supabase } from "../../../backend/db/supabase"

import "./Signup.css";

function Signup() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user

            const { error } = await supabase
                .from("users")
                .insert([
                    {
                        id: user.uid,
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        email: formData.email,
                        created_at: new Date(),
                    },
                ]);
            
                if (error) throw error;
                alert("Signup successful!");
        } catch (err) {
            console.error("Signup error:", err.message);
            alert(err.message);
        }
    };

    return(
        <div className="signup-container">
            <h2 className="signup-title">Create Account</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                {/* First Name and Last Name */}
                <div className="signup-name-info">
                    <div className="signup-input-group">
                        <label>First Name</label>
                        <input type="text" className="signup-input-field" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="signup-input-group">    
                        <label>Last Name</label>
                        <input type="text" className="signup-input-field" value={formData.lastName} onChange={handleChange} required />
                    </div>
                </div>

                {/* Email, Password, Re-type Password */}
                <div className="signup-login-info">
                    <div className="signup-input-group">    
                        <label>Email</label>
                        <input type="email" className="signup-input-field" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="signup-input-group">    
                        <label>Password</label>
                        <input type="password" className="signup-input-field" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="signup-input-group">    
                        <label>Re-type Password</label>
                        <input type="password" className="signup-input-field" value={formData.confirmPassword} onChange={handleChange} required />
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

// TODO: modify firebase.js, supabase.js to export auth/client
// TODO: change environment variables to be prefixed REACT_APP_ in .env
// TODO: Ensure naming match supabase table

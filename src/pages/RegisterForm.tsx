    // RegisterForm.tsx
import React, { useState } from "react";

const RegisterForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // alert(`Form submitted!\nEmail: ${email}\nUsername: ${username}\nPassword: ${password}`);
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        style={{ width: "100%", padding: "0.5rem" }}
                    />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label>Username:</label><br />
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                        style={{ width: "100%", padding: "0.5rem" }}
                    />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                        style={{ width: "100%", padding: "0.5rem" }}
                    />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label>Confirm Password:</label><br />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                        required
                        style={{ width: "100%", padding: "0.5rem" }}
                    />
                </div>

                <button type="submit" style={{ padding: "0.5rem 1rem" }}>Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;

import React, { useState } from "react";
import { LockKeyhole } from 'lucide-react';
import "../../styles/PopupValidation.css";
import { ClipLoader } from "react-spinners";

interface PopupValidationProps {
    username: string;
    password: string;
    domain: string;
    formType: "login" | "signup";
    onClose: () => void;
}


const PopupValidation: React.FC<PopupValidationProps> = ({ username, password, domain, onClose }) => {
    const [showMore, setShowMore] = useState(true);
    const [loading, setLoading] = useState(false);

    return (
        <div className="save-popup">
            <div className="popup-header">
                <div className="icon-circle"><LockKeyhole size={18} /></div>
                <button className="close-btn" onClick={onClose}>✕</button>
            </div>

            <h2 className="title">Save login details?</h2>
            <p className="subtitle">Don’t ask to save for this website</p>

            <div className="field">
                <label>Domain</label>
                <input type="text" value={domain} readOnly />
            </div>

            <div className="field">
                <label>Email or Username</label>
                <input type="text" value={username} readOnly />
            </div>

            <div className="field">
                <label>Password</label>
                <div className="password-wrapper">
                    <input type="password" value={password} readOnly />
                </div>
            </div>

            <div className="show-more" onClick={() => setShowMore(!showMore)}>
                {showMore ? 'show more' : 'show less'}
            </div>

            <div className="field" hidden={showMore}>
                <label>Website</label>
                <input type="text" value={`https://${domain}`} readOnly />
            </div>

            <button
                className="save-btn"
                onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                        setLoading(false);
                        onClose();
                    }, 500);
                }}
            >
                {loading ? <ClipLoader size={11} /> : 'Save'}
            </button>
        </div>
    );
};

export default PopupValidation;

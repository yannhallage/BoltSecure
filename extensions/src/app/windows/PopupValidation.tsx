import React, { useState } from "react";
import { LockKeyhole } from 'lucide-react';

import "../../styles/PopupValidation.css";
import { ClipLoader } from "react-spinners";

const PopupValidation: React.FC = () => {
    const [showMore, setShowMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const [titre] = useState('localhost:5174')
    return (
        <div className="save-popup">
            <div className="popup-header">
                <div className="icon-circle"><LockKeyhole size={18}/></div>
                <button className="close-btn">✕</button>
            </div>

            <h2 className="title">Save login details?</h2>
            <p className="subtitle">Don’t ask to save for this website</p>

            <div className="field">
                <label>Title</label>
                <input type="text" value={titre} readOnly />
            </div>

            <div className="field">
                <label>Email or Username</label>
                <input type="text" value="kenacaw633@merumart.com" readOnly />
            </div>

            <div className="field">
                <label>Password</label>
                <div className="password-wrapper">
                    <input type="password" value="************" readOnly />
                </div>
            </div>
            <div className="show-more" onClick={() => {
                setShowMore(!showMore)
            }}>{
                    showMore ? 'show more' : 'show less'
                }</div>
            <div className="field" hidden={showMore}>
                <label>Website </label>
                <input type="text" value={`https://${titre}.com`} readOnly />
            </div>

            <button className="save-btn" onClick={() => {
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                },500)
            }}>
                {
                    loading ? (
                        <ClipLoader
                            size={11}
                        />
                    ) : 'save'
                }
            </button>
        </div>
    );
};

export default PopupValidation;

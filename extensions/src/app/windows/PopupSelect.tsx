import React, { useEffect, useState } from "react";
import "../../styles/PopupSelect.css";
import { CircleAlert, Settings, LockKeyhole } from "lucide-react";

interface PasswordItem {
    id: string;
    label: string;
    email?: string;
    type?: "premium" | "normal";
}

interface PopupSelectProps {
    targetInput: HTMLInputElement;
    onClose?: () => void;
}

const PopupSelect: React.FC<PopupSelectProps> = ({ targetInput, onClose }) => {
    const [passwords, setPasswords] = useState<PasswordItem[]>([]);
    const [loading, setLoading] = useState(true);

    // Récupération des passwords via le background script
    useEffect(() => {
        setLoading(true);
        chrome.runtime.sendMessage({ type: "getPasswords" }, (response) => {
            if (response?.success) {
                setPasswords(response.data);
                console.log("✅ Passwords récupérés :", response.data);
            } else {
                console.warn("⚠️ Impossible de récupérer les passwords :", response?.error);
            }
            setLoading(false);
        });
    }, []);

    const handleSelect = (value: string) => {
        targetInput.value = value;
        targetInput.dispatchEvent(new Event("input", { bubbles: true }));
        if (onClose) onClose();
    };

    return (
        <div className="emails-popup">
            {/* Header */}
            <div className="emails-header">
                <h3>Emails</h3>
                <div className="header-actions">
                    <button>
                        <Settings size={18} />
                    </button>
                </div>
            </div>

            {/* Scrollable content */}
            <div className="emails-list">
                {loading ? (
                    <p className="no-data">Chargement...</p>
                ) : passwords.length > 0 ? (
                    passwords.map((item) => (
                        <div
                            key={item.id}
                            className={`email-item ${item.type === "premium" ? "premium" : ""}`}
                            onClick={() => handleSelect(item.label || item.email || "")}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="icon">
                                <LockKeyhole size={18} />
                            </div>
                            <div className="info">
                                <p className="title">{item.label || item.email}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-data">Aucun email disponible</p>
                )}
            </div>

            {/* Footer */}
            <div className="footer-warning">
                <CircleAlert size={11} /> Unprotected website
            </div>
        </div>
    );
};

export default PopupSelect;

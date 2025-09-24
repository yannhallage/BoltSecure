import React from "react";
import "../../styles/PopupSelect.css"
import { CircleAlert, Settings, LockKeyhole } from "lucide-react";

interface EmailItem {
    id: number;
    label: string;
    type?: "premium" | "normal";
}

const data: EmailItem[] = [
    { id: 2, label: "yannhallage2001@gmail.com" },
    { id: 3, label: "contact.yannhallage@gmail.com" },
    { id: 4, label: "exemple1@gmail.com" },
    { id: 5, label: "exemple2@gmail.com" },
    { id: 6, label: "exemple3@gmail.com" },
    { id: 7, label: "exemple4@gmail.com" },
    { id: 8, label: "exemple5@gmail.com" }
];

interface PopupSelectProps {
    targetInput: HTMLInputElement;
    onClose?: () => void;          
}

const PopupSelect: React.FC<PopupSelectProps> = ({ targetInput, onClose }) => {

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
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`email-item ${item.type === "premium" ? "premium" : ""}`}
                        onClick={() => handleSelect(item.label)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="icon"><LockKeyhole size={18} /></div>
                        <div className="info">
                            <p className="title">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="footer-warning"><CircleAlert size={11} /> Unprotected website</div>
        </div>
    );
};

export default PopupSelect;

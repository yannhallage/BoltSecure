import React, { useEffect, useState } from "react";
import "../../styles/PopupSelect.css";
import { CircleAlert, Settings, LockKeyhole } from "lucide-react";

export interface PasswordItem {
    _id: string;
    titre: string;
    identifiant: string;
    motDePasse: string;
    reference?: {
        type: string;
        valeur: string;
    };
    proprietaireId: string;
    dateCreation: string;
    dateModification: string;
    __v: number;
}

interface PopupSelectProps {
    targetInput: HTMLInputElement;
    passwords: PasswordItem[];
    onClose?: () => void;
}

const PopupSelect: React.FC<PopupSelectProps> = ({ targetInput, passwords, onClose }) => {
    const [loading, setLoading] = useState(false);
    
    const handleSelect = (value: string) => {
        targetInput.value = value;
        // Déclenche un événement input pour que le site détecte le changement
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
                            key={item._id}
                            className={`email-item ${item.reference?.type === "premium" ? "premium" : ""}`}
                            onClick={() => handleSelect(item.identifiant || "")}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="icon">
                                <LockKeyhole size={18} />
                            </div>
                            <div className="info">
                                <p className="title">{item.titre }</p>
                                <p className="subtitle">{item.identifiant}</p>
                                {/* <p className="subtitle">{item.motDePasse ? "••••••" : ""}</p> */}
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

import { MoreVertical } from "lucide-react";
import "../../styles/AccountPopup.css";
import { PopupContext } from "../../context/PopupContext";
import { useContext } from "react";

type Account = {
    name: string;
    email: string;
};

export default function AccountPopup() {
    const popupContext = useContext(PopupContext);

    if (!popupContext) return null;

    const { setPopup } = popupContext;

    const accounts: Account[] = [
        {
            name: "Ya",
            email: "yannhallage2001@gmail.com",
        },
        {
            name: "Co",
            email: "contact.yannhallage@gmail.com",
        },
    ];

    return (
        <div className="account-popup">
            {/* Header */}
            <div className="account-header">
                <div className="account-avatar main">{accounts[0].name}</div>
                <span className="account-email">{accounts[0].email}</span>
                <span className="account-plan">Free plan</span>
            </div>

            {/* Other accounts */}
            <div className="account-list">
                {accounts.slice(1).map((acc, index) => (
                    <div key={index} className="account-item">
                        <div className="account-info">
                            <div className="account-avatar secondary">{acc.name}</div>
                            <span>{acc.email}</span>
                        </div>
                        <button className="account-options">
                            <MoreVertical size={16} />
                        </button>
                    </div>
                ))}

                <button className="add-account">
                    <div className="add-icon">+</div>
                    <span>Add another account</span>
                </button>
            </div>

            {/* Footer */}
            <div className="account-footer">
                <button className="btn-account lock" onClick={() => { setPopup('All-items') }}>Retour</button>
                <button className="btn-account logout">Log Out</button>
            </div>
        </div>
    );
}

import { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import { LayoutList, LockKeyhole, CreditCard, Settings } from "lucide-react";

export default function PopupVault() {
    const popupContext = useContext(PopupContext);
    if (!popupContext) return null;

    const { setPopup } = popupContext;

    return (
        <div className="popup-vault-container">
            <h2 className="popup-title">Vault</h2>
            <div className="vault-menu">
                <button className="vault-item"
                    onClick={() => setPopup("All-items")}
                >
                    <LayoutList size={28} />
                    <span>All Items</span>
                </button>
                <button className="vault-item"
                    onClick={() => setPopup("passwords")}
                >
                    <LockKeyhole size={28} />
                    <span>Passwords</span>
                </button>
                <button className="vault-item"
                    onClick={() => setPopup("creditCards")}
                >
                    <CreditCard size={28} />
                    <span>Credit Cards</span>
                </button>
                <button
                    className="vault-item"
                    onClick={() => setPopup("creditCards")}
                >
                    <Settings size={28} />
                    <span>Settings</span>
                </button>
            </div>
        </div>
    );
}

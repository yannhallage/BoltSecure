import { Search, Plus, LayoutGrid, LockKeyhole } from "lucide-react";
import { useEffect, useState } from "react";
import { usePopup } from "../../context/usePopup";
import { socialAccounts, BankAccounts } from "../../data/socialAccounts";

export type ItemData = {
    titre: string;
    identifiant?: string;
    motDePasse?: string;
    image?: string;
};

type PopupItemsProps = {
    title: string;
    type: "passwords" | "creditCards";
};

export default function PopupItems({ title, type }: PopupItemsProps) {
    const {
        dataPasswords,
        dataRegister,
        setPopup,
        setChangeText,
        setTypeChange
    } = usePopup();

    const [optionSelectionner, setOptionSelectionner] = useState<string>("");
    const [data, setData] = useState<ItemData[]>([]);

    useEffect(() => {
        if (title) setOptionSelectionner(title);
    }, [title]);

    useEffect(() => {
        setData(type === "creditCards" ? (dataRegister as ItemData[]) || [] : (dataPasswords as ItemData[]) || []);
    }, [type, dataPasswords, dataRegister]);

    const getItemImage = (titre?: string) => {
        if (!titre) return null;
        const account = socialAccounts.find(acc => acc.name === titre)
            || BankAccounts.find(acc => acc.name === titre);
        return account?.image || null;
    };

    const handleClick = (itemType: string, titre: string) => {
        setChangeText(titre);
        setTypeChange(itemType);
        setPopup("Edit");
    };

    return (
        <div className="popup-items-container">
            <div className="items-header">
                <button className="header-btn" onClick={() => setPopup("Browse")}>
                    <LayoutGrid size={20} />
                </button>
                <div className="header-account" onClick={() => setPopup("account")}>
                    Ya
                </div>
            </div>

            <div className="search-bar">
                <Search size={18} />
                <input type="text" placeholder="Search" />
            </div>

            <h2 className="items-title">{optionSelectionner}</h2>

            <div className="items-list">
                {data.map(item => {
                    const imgSrc = getItemImage(item.titre);
                    return (
                        <div key={item.titre} className="item" onClick={() => handleClick(type, item.titre)}>
                            <div className="item-icon">
                                {imgSrc ? <img src={imgSrc} width={20} height={20} alt={item.titre} /> : <LockKeyhole size={18} />}
                            </div>
                            <div className="item-info">
                                <span className="item-title">{item.titre}</span>
                                {item.identifiant && <span className="item-subtitle">{item.identifiant}</span>}
                            </div>
                            <button className="item-options">⋮</button>
                        </div>
                    );
                })}
            </div>

            <button className="add-button">
                <Plus size={20} />
            </button>
        </div>
    );
}

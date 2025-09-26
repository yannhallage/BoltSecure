import { Search, Plus, LayoutGrid, LockKeyhole } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { PopupContext } from "../../context/PopupContext";
import { socialAccounts, BankAccounts } from "../../data/socialAccounts";
import { usePopup } from "../../context/usePopup";

export type ItemData = {
    titre: string;
    identifiant?: string;
    motDePasse?: string;
    image?: string;
};

type PopupItemsProps = {
    title: string;
    data: ItemData[];
    type:string
};

export default function PopupItems({ title, data, type }: PopupItemsProps) {
    const popupContext = useContext(PopupContext);
    const [optionSelectionner, setOptionSelectionner] = useState<string>("");
    const { setChangeText, setTypeChange } = usePopup();

    useEffect(() => {
        if (title) setOptionSelectionner(title);
    }, [title]);

    if (!popupContext) return null;
    const { setPopup } = popupContext;

    const getItemImage = (titre?: string) => {
        if (!titre) return null;
        const account = socialAccounts.find(acc => acc.name === titre);

        if (account) {
            return account?.image || null;
        } else {
            const account = BankAccounts.find(acc => acc.name === titre)
            return account?.image || null
        }
    };
    const handleClikOnFunction = (indice : string, titre:string) => {
        console.log(indice, titre)
        setChangeText(titre)
        setTypeChange(indice)
        setPopup('Edit')
    }
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
                {data.map((item, index) => {
                    const imgSrc = getItemImage(item.titre);
                    return (
                        <div key={index} className="item" id={type} onClick={() => { handleClikOnFunction(type, item.titre)}}>
                            <div className="item-icon">
                                {imgSrc ? (
                                    <img src={imgSrc} width={20} height={20} alt={item.titre} />
                                ) : (
                                    <LockKeyhole size={18} />
                                )}
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

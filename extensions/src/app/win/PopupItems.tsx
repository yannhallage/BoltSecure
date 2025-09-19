import { Search, Plus, LayoutGrid } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { PopupContext } from "../../context/PopupContext";

type DataType = {
    name: string;
    email: string;
    image: string;
};
type DataBank = {
    name: string;
    email: string;
    image: string;
};

type PopupItemsProps = {
    title: string;
    data: DataType[] | DataBank[];
};

export default function PopupItems({ title, data }: PopupItemsProps) {
    const popupContext = useContext(PopupContext);
    const [optionSelectionner, setOptionSelectionner] = useState<string>("");

    useEffect(() => {
        if (title) {
            setOptionSelectionner(title);
        }
    }, [title]);

    if (!popupContext) return null;

    const { setPopup } = popupContext;

    return (
        <div className="popup-items-container">
            <div className="items-header">
                <button
                    className="header-btn"
                    onClick={() => {
                        setPopup("Browse");
                    }}
                >
                    <LayoutGrid size={20} />
                </button>
                <div className="header-account"
                    onClick={() => {
                        setPopup("account");
                    }}
                >Ya</div>
            </div>

            <div className="search-bar">
                <Search size={18} />
                <input type="text" placeholder="Search" />
            </div>

            <h2 className="items-title">{optionSelectionner}</h2>

            <div className="items-list">
                {data.map((item, index) => (
                    <div key={index} className="item">
                        <div className="item-icon">
                            <img src={item.image} width={20} height={20} alt={item.name} />
                        </div>
                        <div className="item-info">
                            <span className="item-title">{item.name}</span>
                            <span className="item-subtitle">{item.email}</span>
                        </div>
                        <button className="item-options">⋮</button>
                    </div>
                ))}
            </div>

            <button className="add-button">
                <Plus size={20} />
            </button>
        </div>
    );
}

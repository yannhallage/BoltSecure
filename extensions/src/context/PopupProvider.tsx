import { useState, type ReactNode } from "react";
import { PopupContext } from "./PopupContext";

type PopupType = "login" | "Browse" | "All-items" | "passwords" | "creditCards" | "settings" | "account";

export interface PopupContextProps {
    popup: PopupType;
    setPopup: (popup: PopupType) => void;
}



export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [popup, setPopup] = useState<PopupType>("login");

    return (
        <PopupContext.Provider value={{ popup, setPopup }}>
            {children}
        </PopupContext.Provider>
    );
};

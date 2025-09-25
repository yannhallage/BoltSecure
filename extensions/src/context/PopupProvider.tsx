import { useState, type ReactNode } from "react";
import { PopupContext } from "./PopupContext";

type PopupType =
    | "login"
    | "Browse"
    | "Edit"
    | "All-items"
    | "passwords"
    | "creditCards"
    | "settings"
    | "account";

export interface PopupContextProps {
    popup: PopupType;
    setPopup: (popup: PopupType) => void;
    dataPasswords: unknown[];
    setDataPasswords: React.Dispatch<React.SetStateAction<unknown[]>>;
    dataRegister: unknown[];
    setDataRegister: React.Dispatch<React.SetStateAction<unknown[]>>;
}

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [popup, setPopup] = useState<PopupType>("login");
    const [dataPasswords, setDataPasswords] = useState<unknown[]>([]);
    const [dataRegister, setDataRegister] = useState<unknown[]>([]);

    return (
        <PopupContext.Provider
            value={{
                popup,
                setPopup,
                dataPasswords,
                setDataPasswords,
                dataRegister,
                setDataRegister,
            }}
        >
            {children}
        </PopupContext.Provider>
    );
};

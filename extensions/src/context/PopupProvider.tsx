import { useState, type ReactNode } from "react";
import { PopupContext } from "./PopupContext";
import type { PasswordItem } from "../types/web/PasswordItem ";

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
    dataPasswords: PasswordItem[];
    setDataPasswords: (data: PasswordItem[]) => void;
    dataRegister: unknown[];
    setDataRegister: React.Dispatch<React.SetStateAction<unknown[]>>;
    changeText: string;
    typeChange: string;
    setChangeText: React.Dispatch<React.SetStateAction<string>>;
    setTypeChange: React.Dispatch<React.SetStateAction<string>>;
}

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [popup, setPopup] = useState<PopupType>("login");
    const [dataPasswords, setDataPasswords] = useState<PasswordItem[]>([]); // ✅ corrigé
    const [dataRegister, setDataRegister] = useState<unknown[]>([]);
    const [changeText, setChangeText] = useState<string>("");
    const [typeChange, setTypeChange] = useState<string>("");

    return (
        <PopupContext.Provider
            value={{
                popup,
                setPopup,
                dataPasswords,
                setDataPasswords,
                dataRegister,
                setDataRegister,
                changeText,
                setChangeText,
                typeChange,
                setTypeChange,
            }}
        >
            {children}
        </PopupContext.Provider>
    );
};

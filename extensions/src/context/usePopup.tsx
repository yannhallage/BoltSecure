import { useContext } from "react";
import { PopupContext } from "./PopupContext";



export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error("usePopup must be used within PopupProvider");
    }
    return context;
};

import { createContext } from "react";
import { type PopupContextProps } from './PopupProvider';


export const PopupContext = createContext<PopupContextProps | undefined>(
    undefined
);
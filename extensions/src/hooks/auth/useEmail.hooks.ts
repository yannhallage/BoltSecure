import { useState } from "react";
import { AuthService } from "../../services/auth/authService";
import type { UseEmailResult } from "../../types/register/general.types";
import { encrypt } from "../../lib/url/crypto";
import { storage } from "../../lib/storage";

export interface AuthEmailResponse {
    message: string;
}

export const useEmail = (initialValue = ""): UseEmailResult => {
    const [valueEmail, setValueEmail] = useState(initialValue);
    const [validEmail, setValidEmail] = useState(false);
    const [loadingEmail, setLoadingEmail] = useState(false);
    const [errorEmail, setErrorEmail] = useState<string | null>(null);

    const checkValid = (val: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setValidEmail(val.length > 6 && emailRegex.test(val));
    };

    const submitEmail = async (): Promise<boolean> => {
        if (!validEmail) {
            setErrorEmail("Le mail est invalide ou trop court");
            return false;
        }

        try {
            setLoadingEmail(true);
            setErrorEmail(null);

            const res: AuthEmailResponse = await AuthService.Email(valueEmail);

            if (res.message) {
                const encryptedEmail = encrypt(valueEmail);
                // ⚡ On sauvegarde email chiffré + identifiant utilisateur
                // await storage.set({ xxxml: encryptedEmail, utilisateur: valueEmail });
                await storage.set({ xxxml: encryptedEmail });
                console.log("Email sauvegardés dans storage");

                return true;
            } else {
                setErrorEmail("Email non valide");
                return false;
            }
        } catch (err: any) {
            setErrorEmail(err.message || "Erreur inconnue");
            return false;
        } finally {
            setLoadingEmail(false);
        }
    };


    const handleChange = (val: string) => {
        setValueEmail(val);
        checkValid(val);
    };

    return { valueEmail, validEmail, loadingEmail, errorEmail, setValueEmail: handleChange, submitEmail };
};

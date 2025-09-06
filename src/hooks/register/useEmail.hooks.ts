import { useState } from "react";
import { RegisterService } from "@/services/register/registerService";
import type { UseEmailResult } from "../../types/register/general.types";
import { encrypt } from "@/lib/url/crypto";


export interface AuthEmailResponse {
    message: string;
}


export const useEmail = (initialValue = ""): UseEmailResult => {
    const [valueEmail, setValueEmail] = useState(initialValue);
    const [validEmail, setValidEmail] = useState(false);
    const [loadingEmail, setLoadingEmail] = useState(false);
    const [errorEmail, setErrorEmail] = useState<string | null>(null);

    const checkValid = (val: string) => {
        // simple validation longueur + regex basique email
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

            const res: AuthEmailResponse = await RegisterService.Email({ email: valueEmail });

            if (res.message) {
                console.log(res.message); // "OTP envoyé avec succès."
                const encryptedEmail = encrypt(valueEmail);
                localStorage.setItem('xxxml', encryptedEmail);
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

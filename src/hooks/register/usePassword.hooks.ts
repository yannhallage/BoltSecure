import { useState } from "react";
import { RegisterService } from "@/services/register/registerService";
import type { IAuthmotDePasseInput } from "@/validations/register.zod";
import { encrypt } from "@/lib/url/crypto";
import { decrypt } from "@/lib/url/crypto";


export const usePassword = (initialValue = "") => {
    const [valuePassword, setValuePassword] = useState(initialValue);
    const [validPassword, setValidPassword] = useState(false);
    const [loadingPassword, setLoadingPassword] = useState(false);
    const [errorPassword, setErrorPassword] = useState<string | null>(null);

    const checkValid = (val: string) => {
        setValidPassword(val.length > 6);
    };

    const submitPassword = async (): Promise<boolean> => {
        if (!validPassword) {
            setErrorPassword("Le mot de passe doit être plus de 6 caractères");
            return false;
        }

        try {
            setLoadingPassword(true);
            setErrorPassword(null);

            const encryptedEmail = localStorage.getItem('xxml');
            const encryptedOtp = localStorage.getItem('xxop');
            if (!encryptedEmail || !encryptedOtp) {
                alert("Email introuvable");
                return false;
            }

            const email = decrypt(encryptedEmail);
            const opt = decrypt(encryptedOtp);

            const payload: IAuthmotDePasseInput = { motDePasse: valuePassword, email, otp: opt };

            const res = await RegisterService.Password(payload);

            const encryptedPassword = encrypt(valuePassword)
            localStorage.setItem('xxxpp', encryptedPassword);
            
            if ((res as any).success ?? true) {
                return true;
            } else {
                setErrorPassword((res as any).message || "Mot de passe invalide");
                return false;
            }
        } catch (err: any) {
            setErrorPassword(err?.message || "Erreur inconnue");
            return false;
        } finally {
            setLoadingPassword(false);
        }
    };

    // Gestion du changement de valeur
    const handleChange = (val: string) => {
        setValuePassword(val);
        checkValid(val);
    };

    return {
        valuePassword,
        validPassword,
        loadingPassword,
        errorPassword,
        setValuePassword: handleChange,
        submitPassword,
    };
};

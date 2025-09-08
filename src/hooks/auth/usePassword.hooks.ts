import { useState } from "react";
import { AuthService } from "@/services/auth/authService";
// import type { IAuthmotDePasseInput } from "@/validations/register.zod";
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

            const encryptedEmail = localStorage.getItem('xxxml');
            if (!encryptedEmail) {
                alert("email introuvable");
                return false;
            }

            const email = decrypt(encryptedEmail);
            
            const res = await AuthService.Password(
                email.trim(),
                valuePassword.trim(),
            );

            const encryptedPassword = encrypt(valuePassword)
            localStorage.setItem('xxxpp', encryptedPassword);

            if ((res as any).data ?? true) {
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

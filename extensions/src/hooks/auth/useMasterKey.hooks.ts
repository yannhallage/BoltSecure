import { useState } from "react";
import { AuthService } from "../../services/auth/authService";
// import type { IAuthMasterKeyInput } from "@/validations/register.zod";
import { type UseMasterKeyResult } from "../../types/register/general.types";
import { decrypt, encrypt } from "../../lib/url/crypto";



export const useMasterKey = (initialValue = ""): UseMasterKeyResult => {
    const [valueMasterKey, setValueMasterKey] = useState(initialValue);
    const [validMasterKey, setValidMasterKey] = useState(false);
    const [loadingMasterKey, setLoadingMasterKey] = useState(false);
    const [errorMasterKey, setErrorMasterKey] = useState<string | null>(null);

    // Vérifie si la master key est valide
    const checkValid = (val: string) => {
        setValidMasterKey(val.length > 6);
    };

    // Soumission de la master key
    const submitMasterKey = async (): Promise<boolean> => {
        if (!validMasterKey) {
            setErrorMasterKey("La master key doit contenir plus de 6 caractères");
            return false;
        }

        try {
            setLoadingMasterKey(true);
            setErrorMasterKey(null);

            const encryptedEmail = localStorage.getItem('xxxml');
            // const encryptedOtp = localStorage.getItem('xxxop');
            const encryptedPassword = localStorage.getItem('xxxpp');
            if (!encryptedEmail  || !encryptedPassword) {
                alert("un problème est survenu lors de la récupération des données");
                return false;
            }

            const email = decrypt(encryptedEmail);
            const motdepasse = decrypt(encryptedPassword);

            const res = await AuthService.MasterKey(
                email.trim(),
                motdepasse.trim(),
                valueMasterKey.trim()
            );

            const encryptedMasterKey = encrypt(valueMasterKey);
            localStorage.setItem('xxxmm', encryptedMasterKey);

            if ((res as any).success ?? true) {
                return true;
            } else {
                setErrorMasterKey((res as any).message || "MasterKey invalide");
                return false;
            }
        } catch (err: any) {
            setErrorMasterKey(err.message || "Erreur inconnue");
            return false;
        } finally {
            setLoadingMasterKey(false);
        }
    };


    // À chaque changement, on valide la master key
    const handleChange = (val: string) => {
        setValueMasterKey(val);
        checkValid(val);
    };

    return {
        valueMasterKey,
        validMasterKey,
        loadingMasterKey,
        errorMasterKey,
        setValueMasterKey: handleChange,
        submitMasterKey,
    };
};

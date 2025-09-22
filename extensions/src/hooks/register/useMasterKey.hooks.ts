import { useState } from "react";
import { RegisterService } from "../../services/register/registerService";
// import type { IAuthMasterKeyInput } from "../../validations/register.zod";
import { type UseMasterKeyResult } from "../../types/register/general.types";
import { encrypt } from "../../lib/url/crypto";
import { decrypt } from "../../lib/url/crypto";



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
            const encryptedOtp = localStorage.getItem('xxxop');
            const encryptedPassword = localStorage.getItem('xxxpp');
            if (!encryptedEmail || !encryptedOtp || !encryptedPassword) {
                alert("un problème est survenu lors de la récupération des données");
                return false;
            }

            const email = decrypt(encryptedEmail);
            const otp = decrypt(encryptedOtp);
            const motdepasse = decrypt(encryptedPassword);

            const res = await RegisterService.MasterKey(
                email.trim(),
                motdepasse.trim(),
                otp.trim(),
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

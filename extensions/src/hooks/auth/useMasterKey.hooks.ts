import { useState } from "react";
import { AuthService } from "../../services/auth/authService";
import { encrypt, decrypt } from "../../lib/url/crypto";
import { storage } from "../../lib/storage";
import type { UseMasterKeyResult } from "../../types/register/general.types";

export const useMasterKey = (initialValue = ""): UseMasterKeyResult => {
    const [valueMasterKey, setValueMasterKey] = useState(initialValue);
    const [validMasterKey, setValidMasterKey] = useState(false);
    const [loadingMasterKey, setLoadingMasterKey] = useState(false);
    const [errorMasterKey, setErrorMasterKey] = useState<string | null>(null);

    const checkValid = (val: string) => setValidMasterKey(val.length > 6);

    const submitMasterKey = async (): Promise<boolean> => {
        if (!validMasterKey) {
            setErrorMasterKey("La master key doit contenir plus de 6 caractères");
            return false;
        }

        try {
            setLoadingMasterKey(true);
            setErrorMasterKey(null);

            const result = await storage.get(["xxxml", "xxxpp"]);
            const encryptedEmail = result.xxxml || null;
            const encryptedPassword = result.xxxpp || null;
            // const utilisateur = result.utilisateur || null;

            if (!encryptedEmail || !encryptedPassword) {
                alert("Un problème est survenu lors de la récupération des données");
                return false;
            }

            const email = decrypt(encryptedEmail);
            const password = decrypt(encryptedPassword);
            const res = await AuthService.MasterKey(email.trim(), password.trim(), valueMasterKey.trim());

            const encryptedMasterKey = encrypt(valueMasterKey);

            // ⚡ On sauvegarde masterKey et utilisateur pour session persistante
            await storage.set({ xxxmm: encryptedMasterKey});
            console.log("MasterKey et utilisateur sauvegardés dans storage");

            if ((res as any).success ?? true) return true;
            setErrorMasterKey((res as any).message || "MasterKey invalide");
            return false;
        } catch (err: any) {
            setErrorMasterKey(err.message || "Erreur inconnue");
            return false;
        } finally {
            setLoadingMasterKey(false);
        }
    };

    const handleChange = (val: string) => {
        setValueMasterKey(val);
        checkValid(val);
    };

    return { valueMasterKey, validMasterKey, loadingMasterKey, errorMasterKey, setValueMasterKey: handleChange, submitMasterKey };
};

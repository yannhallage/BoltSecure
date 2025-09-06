import { useState } from "react";
import { type UseMasterKeyResult } from "../../types/register/general.types";


export const useMasterKey = (initialValue = ""): UseMasterKeyResult => {
    const [valueMasterKey, setValueMasterKey] = useState(initialValue);
    const [validMasterKey, setValidMasterKey] = useState(false);
    const [loadingMasterKey, setLoadingMasterKey] = useState(false);
    const [errorMasterKey, setErrorMasterKey] = useState<string | null>(null);

    const checkValid = (val: string) => {
        setValidMasterKey(val.length > 6)
    };

    const submitMasterKey = async (): Promise<boolean> => {
        if (!validMasterKey) {
            setErrorMasterKey("Le mot de passe master key doit etre plus de 6 caractères");
            return false;
        }

        try {
            setLoadingMasterKey(true);
            setErrorMasterKey(null);

            // 🔥 Appel API simulé
            // const res = await fetch("http://localhost:2001/api/verify-otp", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ otp: value }),
            // });

            // if (!res.ok) throw new Error("Erreur API");

            // const data = await res.json();
            const data = true
            if (data) {
                return true;
            } else {
                setErrorMasterKey("MasterKey invalide");
                return false;
            }
        } catch (err: any) {
            setErrorMasterKey(err.message || "Erreur inconnue");
            return false;
        } finally {
            setLoadingMasterKey(false);
        }
    };

    // À chaque changement de valeur, on vérifie la validité
    const handleChange = (val: string) => {
        setValueMasterKey(val);
        checkValid(val);
    };

    return { valueMasterKey, validMasterKey, loadingMasterKey, errorMasterKey, setValueMasterKey: handleChange, submitMasterKey };
};

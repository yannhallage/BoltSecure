import { useState } from "react";
import { type UsePasswordResult } from "../../types/register/general.types";


export const usePassword = (initialValue = ""): UsePasswordResult => {
    const [valuePassword, setValuePassword] = useState(initialValue);
    const [validPassword, setValidPassword] = useState(false);
    const [loadingPassword, setLoadingPassword] = useState(false);
    const [errorPassword, setErrorPassword] = useState<string | null>(null);

    const checkValid = (val: string) => {
        setValidPassword(val.length > 6)
    };

    const submitPassword = async (): Promise<boolean> => {
        if (!validPassword) {
            setErrorPassword("Le mot de passe doit etre plus de 6 caractères");
            return false;
        }

        try {
            setLoadingPassword(true);
            setErrorPassword(null);

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
                setErrorPassword("Password invalide");
                return false;
            }
        } catch (err: any) {
            setErrorPassword(err.message || "Erreur inconnue");
            return false;
        } finally {
            setLoadingPassword(false);
        }
    };

    // À chaque changement de valeur, on vérifie la validité
    const handleChange = (val: string) => {
        setValuePassword(val);
        checkValid(val);
    };

    return { valuePassword, validPassword, loadingPassword, errorPassword, setValuePassword: handleChange, submitPassword };
};

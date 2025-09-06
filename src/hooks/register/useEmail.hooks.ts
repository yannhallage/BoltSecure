import { useState } from "react";
import { type UseEmailResult } from "../../types/register/general.types";


export const useEmail = (initialValue = ""): UseEmailResult => {
    const [valueEmail, setValueEmail] = useState(initialValue);
    const [validEmail, setValidEmail] = useState(false);
    const [loadingEmail, setLoadingEmail] = useState(false);
    const [errorEmail, setErrorEmail] = useState<string | null>(null);

    const checkValid = (val: string) => {
        setValidEmail(val.length > 6)
    };

    const submitEmail = async (): Promise<boolean> => {
        if (!validEmail) {
            setErrorEmail("Le mail doit contenir plus de 6 caractères");
            return false;
        }

        try {
            setLoadingEmail(true);
            setErrorEmail(null);

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
                setErrorEmail("email invalide");
                return false;
            }
        } catch (err: any) {
            setErrorEmail(err.message || "Erreur inconnue");
            return false;
        } finally {
            setLoadingEmail(false);
        }
    };

    // À chaque changement de valeur, on vérifie la validité
    const handleChange = (val: string) => {
        setValueEmail(val);
        checkValid(val);
    };

    return { valueEmail, validEmail, loadingEmail, errorEmail, setValueEmail: handleChange, submitEmail };
};

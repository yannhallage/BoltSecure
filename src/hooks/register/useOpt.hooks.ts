import { useState } from "react";
import { type UseOtpResult } from "../../types/register/general.types";


export const useOtpCode = (initialValue = ""): UseOtpResult => {
    const [value, setValue] = useState(initialValue);
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const checkValid = (val: string) => {
        setValid(val.length === 6)
    };

    const submitOtp = async (): Promise<boolean> => {
        if (!valid) {
            setError("Le code OTP doit contenir 6 chiffres");
            return false;
        }

        try {
            setLoading(true);
            setError(null);

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
                setError("Code OTP invalide");
                return false;
            }
        } catch (err: any) {
            setError(err.message || "Erreur inconnue");
            return false;
        } finally {
            setLoading(false);
        }
    };

    // À chaque changement de valeur, on vérifie la validité
    const handleChange = (val: string) => {
        setValue(val);
        checkValid(val);
    };

    return { value, valid, loading, error, setValue: handleChange, submitOtp };
};

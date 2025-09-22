import { useState } from "react";
import { RegisterService } from "../../services/register/registerService";
import type { UseOtpResult } from "../../types/register/general.types";
import type { IAuthOtpVerificationInput } from "../../validations/register.zod";
import { encrypt } from "../../lib/url/crypto";
import { decrypt } from "../../lib/url/crypto";

export const useOtpCode = (initialValue = ""): UseOtpResult => {
    const [value, setValue] = useState(initialValue);
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const checkValid = (val: string) => {
        setValid(/^\d{6}$/.test(val));
    };

    const submitOtp = async (): Promise<boolean> => {
        if (!valid) {
            setError("Le code OTP doit contenir 6 chiffres");
            return false;
        }

        try {
            setLoading(true);
            setError(null);

            const encryptedEmail = localStorage.getItem('xxxml');
            if (!encryptedEmail) {
                setError("Email introuvable");
                return false;
            }
            const email = decrypt(encryptedEmail);

            const payload: IAuthOtpVerificationInput = {
                email,
                otp: value,
            };
            
            const encryptedOtp = encrypt(value);
            localStorage.setItem('xxxop', encryptedOtp);

            const res = await RegisterService.verifyOtp(payload);

            if ((res)) {
                return true;
            } else {
                setError((res as any).message || "Code OTP invalide");
                return false;
            }
        } catch (err: any) {
            setError(err?.message || "Erreur inconnue");
            return false;
        } finally {
            setLoading(false);
        }

    };

    const handleChange = (val: string) => {
        setValue(val);
        checkValid(val);
    };

    return { value, valid, loading, error, setValue: handleChange, submitOtp };
};

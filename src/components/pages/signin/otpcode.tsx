import React, { useRef, useState } from "react";

const OTP_LENGTH = 6;

function OtpInputs({
    onSubmit,
}: {
    onSubmit?: (code: string) => void;
}) {
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
    const refs = useRef<Array<HTMLInputElement | null>>([]);

    const focusAt = (idx: number) => {
        const el = refs.current[idx];
        if (el) el.focus();
    };

    const handleChange = (idx: number, val: string) => {
        // garder uniquement les chiffres
        const digit = val.replace(/\D/g, "").slice(0, 1);

        setOtp(prev => {
            const next = [...prev];
            next[idx] = digit ?? "";

            // auto-focus vers la droite si une valeur a été saisie
            if (digit && idx < OTP_LENGTH - 1) focusAt(idx + 1);
            return next;
        });
    };

    const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        const key = e.key;

        if (key === "Backspace") {
            e.preventDefault();
            setOtp(prev => {
                const next = [...prev];
                if (next[idx]) {
                    next[idx] = "";
                } else if (idx > 0) {
                    next[idx - 1] = "";
                    focusAt(idx - 1);
                }
                return next;
            });
            return;
        }

        if (key === "ArrowLeft" && idx > 0) {
            e.preventDefault();
            focusAt(idx - 1);
            return;
        }
        if (key === "ArrowRight" && idx < OTP_LENGTH - 1) {
            e.preventDefault();
            focusAt(idx + 1);
            return;
        }
        if (key === "Enter") {
            const code = otp.join("");
            onSubmit?.(code);
        }
    };

    const handlePaste = (idx: number, e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
        if (!pasted) return;

        setOtp(prev => {
            const next = [...prev];
            for (let i = 0; i < pasted.length && idx + i < OTP_LENGTH; i++) {
                next[idx + i] = pasted[i];
            }
            // focus sur la première case vide ou la dernière
            const firstEmpty = next.findIndex(c => c === "");
            focusAt(firstEmpty === -1 ? OTP_LENGTH - 1 : firstEmpty);
            return next;
        });
    };

    return (
        <div className="grid grid-cols-6 gap-2 sm:gap-3">
            {otp.map((value, i) => (
                <input
                    key={i}
                    ref={el => (refs.current[i] = el)}
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    pattern="\d*"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    onPaste={(e) => handlePaste(i, e)}
                    className="h-12 w-10 sm:h-14 sm:w-12 text-center text-lg sm:text-xl font-semibold rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-white focus:border-white"
                />
            ))}
        </div>
    );
}

export default OtpInputs;

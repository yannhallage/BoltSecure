import { useState } from "react";
import { encrypt } from "../../lib/url/crypto";
import { jwtDecode } from "jwt-decode";
import { type GoogleJwtPayload, type GoogleUser } from "../../types/register/google.type";



export function useGoogleAuth() {
    const [user, setUser] = useState<GoogleUser | null>(null);
    const [resultMailing, setResultMailing] = useState<boolean>(false);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState<string | null>(null);

    const loginWithGoogle = async (credentialResponse: any) => {

        try {
            // setLoading(true);
            // setError(null);
            const decoded = jwtDecode<GoogleJwtPayload>(credentialResponse.credential);

            if (decoded.exp * 1000 < Date.now()) {
                throw new Error("❌ Token expiré !");
            }

            const res = await fetch("http://localhost:2001/api/google/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: credentialResponse.credential }),
            });

            if (!res.ok) {
                throw new Error("Erreur backend lors de l'auth Google");
            }

            const data = await res.json();

            if (data.user) {
                console.log(data.user.email)
                const encryptedEmail = encrypt(data.user.email);
                localStorage.setItem('xxxml', encryptedEmail);
                setResultMailing(true);
            }
            // 4. Sauvegarder et mettre à jour l’état
            // localStorage.setItem("auth_token", data.token);
            // localStorage.setItem("auth_user", JSON.stringify(data.user));
            
            setUser(data.user);

            console.log("✅ Utilisateur authentifié via Google:", data.user);
            return data;
        } catch (err: any) {
            console.error("Erreur lors de l’authentification Google :", err);
            // setError(err.message || "Erreur inconnue");
        } finally {
            // setLoading(false);
        }
    };

    return { user, loginWithGoogle, resultMailing };
}

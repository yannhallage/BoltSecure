import { useEffect, useState } from "react";
import { PasswordService } from "../../../services/web/password.service";

export function useGetPasswords(userId: string) {
    const [passwords, setPasswords] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) return;

        const fetchPasswords = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await PasswordService.getAll(userId);
                setPasswords(data);
            } catch (err: any) {
                console.error("Erreur lors de la récupération des mots de passe :", err.message);
                setError(err.message || "Erreur inconnue");
            } finally {
                setLoading(false);
            }
        };

        fetchPasswords();
    }, [userId]);

    return { passwords, loading, error };
}

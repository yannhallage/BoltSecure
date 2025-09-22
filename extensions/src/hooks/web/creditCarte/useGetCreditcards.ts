import { useEffect, useState } from "react";
import { CreditCardService } from "../../../services/web/creditcard.service";

export function useGetCreditcards(userId: string) {
    const [creditCards, setCreditCards] = useState<string[]>([]);
    const [loadings, setLoadings] = useState(false);
    const [errors, setErrors] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) return;

        const fetchCreditCards = async () => {
            try {
                setLoadings(true);
                setErrors(null);
                const data = await CreditCardService.getAll(userId);

                if (data) console.log(data)
                setCreditCards(data);
            } catch (err: any) {
                console.error("Erreur lors de la récupération des mots de passe :", err.message);
                setErrors(err.message || "Erreur inconnue");
            } finally {
                setLoadings(false);
            }
        };

        fetchCreditCards();
    }, [userId]);

    return { creditCards, loadings, errors };
}

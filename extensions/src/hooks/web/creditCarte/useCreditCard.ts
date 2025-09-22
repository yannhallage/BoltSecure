import { useState } from "react";
import { toast } from "react-toastify";
import { CreditCardService } from "../../../services/web/creditcard.service";
import { z } from "zod";
import { CreditCardZod } from "../../../types/web/interface.type";

type CreditCardInput = z.infer<typeof CreditCardZod>;

export function useCreditCard(userId: string, setMessage?: (msg: string) => void) {
    const [loading, setLoading] = useState(false);
    const [setAsDefault, setSetAsDefault] = useState(false);

    const handleSave = async (data: CreditCardInput, onSuccess?: () => void) => {
        try {
            setLoading(true);

            if (userId) {
                console.log("Utilisateur:", userId);
            }

            console.log("Data:", data);

            await CreditCardService.create(userId, data);

            setLoading(false);
            setSetAsDefault(false);

            if (setMessage) setMessage("MainComponent");
            toast.success("Carte de crédit enregistrée !");
            if (onSuccess) onSuccess();
            window.location.reload()
        } catch (error: any) {
            console.error("Erreur lors de l'enregistrement:", error);
            toast.error("Échec de l'enregistrement de la carte");
            setLoading(false);
        }
    };

    const handleCancel = (resetForm: () => void) => {
        resetForm();
        setTimeout(() => {
            window.location.reload();
        }, 900);
    };

    return {
        loading,
        setAsDefault,
        setSetAsDefault,
        handleSave,
        handleCancel,
    };
}

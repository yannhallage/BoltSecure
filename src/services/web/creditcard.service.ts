import { Http } from "@/api/http";
import { ENDPOINTS_CREDITCARDS } from "@/api/web/Endpoint";
import { CreditCardZod } from "@/types/web/interface.type";
import { z } from "zod";

export class CreditCardService {
    static async create(userId: string, data: z.infer<typeof CreditCardZod>): Promise<string> {
        return Http(ENDPOINTS_CREDITCARDS.CreerMotDePasse.replace(":id", userId), {
            method: "POST",
            body: data,
        }) as Promise<string>;
    }

    static async getAll(userId: string) {
        return Http(ENDPOINTS_CREDITCARDS.ObtenirMotDePasseID.replace(":id", userId), {
            method: "GET",
        });
    }

    static async update(cardId: string, data: z.infer<typeof CreditCardZod>) {
        return Http(ENDPOINTS_CREDITCARDS.UpdateMotDePasseID.replace(":id", cardId), {
            method: "PUT",
            body: data,
        });
    }

    static async delete(cardId: string): Promise<{ message: string }> {
        return Http(ENDPOINTS_CREDITCARDS.DeleteMotDePasseID.replace(":id", cardId), {
            method: "DELETE",
        }) as Promise<{ message: string }>;
    }
}

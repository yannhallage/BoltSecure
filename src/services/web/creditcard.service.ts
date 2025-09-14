import { Http } from "@/api/http";
import { ENDPOINTS_CREDITCARDS } from "@/api/web/Endpoint";


export class CreditCardService {
    static async create(userId: string, data: ICreditCardInput): Promise<ICreditCardOutput> {
        return Http(ENDPOINTS_CREDITCARDS.CreerMotDePasse.replace(":id", userId), {
            method: "POST",
            body: data,
        }) as Promise<ICreditCardOutput>;
    }

    static async getAll(userId: string): Promise<ICreditCardOutput[]> {
        return Http(ENDPOINTS_CREDITCARDS.ObtenirMotDePasseID.replace(":id", userId), {
            method: "GET",
        }) as Promise<ICreditCardOutput[]>;
    }

    static async update(cardId: string, data: Partial<ICreditCardInput>): Promise<ICreditCardOutput> {
        return Http(ENDPOINTS_CREDITCARDS.UpdateMotDePasseID.replace(":id", cardId), {
            method: "PUT",
            body: data,
        }) as Promise<ICreditCardOutput>;
    }

    static async delete(cardId: string): Promise<{ message: string }> {
        return Http(ENDPOINTS_CREDITCARDS.DeleteMotDePasseID.replace(":id", cardId), {
            method: "DELETE",
        }) as Promise<{ message: string }>;
    }
}
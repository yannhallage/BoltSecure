// services/password.service.ts
import { Http } from "@/api/http";
import { z } from "zod";
import { ENDPOINTS_PASSWORDS } from "@/api/web/Endpoint";
import { PasswordZod } from "@/types/web/interface.type";


export class PasswordService {
    // Créer un mot de passe
    static async create(userId: string, data: z.infer<typeof PasswordZod>): Promise<string> {
        return Http(ENDPOINTS_PASSWORDS.CreerMotDePasse.replace(":id", userId), {
            method: "POST",
            body: data,
        }) as Promise<string>;
    }

    // Récupérer tous les mots de passe d'un utilisateur
    static async getAll(userId: string): Promise<string[]> {
        return Http(ENDPOINTS_PASSWORDS.ObtenirMotDePasseID.replace(":userId", userId), {
            method: "GET",
        }) as Promise<string[]>;
    }

    // Mettre à jour un mot de passe
    static async update(passwordId: string, data: z.infer<typeof PasswordZod>): Promise<string> {
        return Http(ENDPOINTS_PASSWORDS.UpdateMotDePasseID.replace(":id", passwordId), {
            method: "PUT",
            body: data,
        }) as Promise<string>;
    }

    // Supprimer un mot de passe
    static async delete(passwordId: string): Promise<{ message: string }> {
        return Http(ENDPOINTS_PASSWORDS.DeleteMotDePasseID.replace(":id", passwordId), {
            method: "DELETE",
        }) as Promise<{ message: string }>;
    }
}



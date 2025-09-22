import { PasswordService } from "../../../services/web/password.service";
import { PasswordZod } from "../../../types/web/interface.type";
import { z } from "zod";

export async function createPassword(userId: string, data: z.infer<typeof PasswordZod>) {
    let loading = true;
    try {
        const password = await PasswordService.create(userId, data);
        return password;
    } catch (err: any) {
        console.error("Erreur lors de la création du mot de passe :", err.message);
        throw err;
    } finally {
        loading = false;
    }
}

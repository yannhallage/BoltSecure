// services/background/password.ts
import { PasswordService } from "../../services/web/password.service";
import type { PasswordItem } from "../../types/web/PasswordItem ";

export async function getPasswordsForExtension(userId: string): Promise<PasswordItem[]> {
    if (!userId) return [];
    try {
        const data: PasswordItem[] = await PasswordService.getAllFromExtension(userId);
        console.log("✅ Passwords récupérés dans background :", data);
        return data;
    } catch (err: any) {
        console.error("Erreur lors de la récupération des mots de passe :", err.message);
        return [];
    }
}

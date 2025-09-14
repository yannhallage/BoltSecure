import { PasswordService } from "@/services/web/password.service";
// import { PasswordZod } from "@/types/web/interface.type";

export async function getPasswords(userId: string) {
    try {
        const passwords: string[] = await PasswordService.getAll(userId);
        return passwords;
    } catch (err: any) {
        console.error("Erreur lors de la récupération des mots de passe :", err.message);
        throw err;
    }
}

import { PasswordService } from "../../../services/web/password.service";

export async function deletePassword(id: string) {
    try {
        const result = await PasswordService.delete(id);
        return result;
    } catch (err: any) {
        console.error("Erreur lors de la suppression du mot de passe :", err.message);
        throw err;
    }
}

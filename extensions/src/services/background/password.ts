// // src/services/background/password.ts
// import type { PasswordItem } from "../../types/web/PasswordItem";

// // Base URL : ajuste si nécessaire
// const API_BASE = "http://localhost:2001/api/operations";

// async function tryParseJsonSafe(res: Response) {
//     const text = await res.text();
//     try {
//         return JSON.parse(text);
//     } catch {
//         return text;
//     }
// }

// export async function getPasswordsForExtension(userId: string): Promise<PasswordItem[]> {
//     if (!userId) return [];

//     // chemins candidats (ton backend semblait utiliser "extensionmdp")
//     const candidatePaths = [
//         `extensionmdp/${userId}`,
//         `extensions/${userId}`,
//         `extension/${userId}`,
//         `${userId}` // (si ton route est juste /api/operations/:userId)
//     ];

//     for (const path of candidatePaths) {
//         const url = `${API_BASE}/${path}`;
//         console.log(`🔎 Tentative fetch -> ${url}`);
//         try {
//             const res = await fetch(url, {
//                 method: "GET",
//                 headers: {
//                     "Accept": "application/json",
//                     "Content-Type": "application/json",
//                 },
//             });

//             console.log(`➡️ réponse status ${res.status} pour ${url}`);

//             if (!res.ok) {
//                 // si 404 ou 403, on essaie le suivant
//                 console.warn(`⚠️ réponse non OK (${res.status}) pour ${url}`);
//                 continue;
//             }

//             // parse safe
//             const parsed = await tryParseJsonSafe(res);
//             console.log("📦 Réponse brute API :", parsed);

//             // cas : backend renvoie { data: [...] }
//             if (parsed && Array.isArray(parsed.data)) {
//                 return parsed.data as PasswordItem[];
//             }

//             // cas : backend renvoie directement un tableau
//             if (Array.isArray(parsed)) {
//                 return parsed as PasswordItem[];
//             }

//             // cas : backend renvoie { passwords: [...] } ou autre
//             if (parsed && Array.isArray(parsed.passwords)) {
//                 return parsed.passwords as PasswordItem[];
//             }

//             console.warn("⚠️ Format inattendu de la réponse, on retourne tableau vide.");
//             return [];
//         } catch (err: any) {
//             console.error(`❌ Erreur fetch pour ${url} :`, err?.message ?? err);
//             // on n'abandonne pas tout de suite : on essaie le prochain chemin candidat
//         }
//     }

//     console.error("❌ Toutes les tentatives ont échoué, retour tableau vide.");
//     return [];
// }

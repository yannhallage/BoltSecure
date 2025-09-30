import { getPasswordsForExtension } from "./services/background/password";
import { storage } from "./lib/storage"; 

console.log("🔑 BoltSecure background lancé...");

chrome.runtime.onInstalled.addListener(() => {
    console.log("🚀 BoltSecure installé avec succès !");
});

// Listener pour sauvegarder un mot de passe
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "SAVE_PASSWORD") {
        console.log("Mot de passe reçu :", message.payload);
        console.log(sender);
        sendResponse({ success: true });
    }
});

// Listener pour récupérer les passwords
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.type === "getPasswords") {
        try {
            // 1️⃣ Vérifier le storage pour l'utilisateur
            const result = await storage.get(["xxxml", "xxxpp", "xxxmm", "utilisateur"]);
            console.log("Storage récupéré :", result);
            const utilisateur = result.utilisateur ?? null;

            if (!utilisateur) {
                console.warn("⚠️ Aucun utilisateur trouvé dans le storage !");
                sendResponse({ success: false, error: "Utilisateur non trouvé" });
                return;
            }

            // 2️⃣ Récupérer les passwords via ton service
            const passwords = await getPasswordsForExtension(utilisateur);
            console.log("Passwords récupérés :", passwords);

            if (passwords) console.log(passwords)
            // 3️⃣ Envoyer la réponse au composant React
            sendResponse({ success: true, data: passwords });
        } catch (err: any) {
            console.error("Erreur lors de la récupération des passwords :", err);
            sendResponse({ success: false, error: err.message });
        }

        return true; // permet la réponse asynchrone
    }
});

import type { PasswordItem } from "./app/windows/PopupSelect";

console.log("🔑 BoltSecure background lancé...");

chrome.runtime.onInstalled.addListener(() => {
    console.log("🚀 BoltSecure installé avec succès !");
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {

    // --- Récupérer les passwords ---
    if (msg.type === "getPasswords") {
        chrome.storage.local.get(["cachedPasswords"], (res) => {
            sendResponse({ success: true, data: res.cachedPasswords || [] });
        });
        return true;
    }

    // --- Mettre à jour les passwords ---
    if (msg.type === "setPasswords") {
        chrome.storage.local.set({ cachedPasswords: msg.data || [] }, () => {
            sendResponse({ success: true });
        });
        return true; // pour support async
    }

    // --- Sauvegarder un nouveau mot de passe (optionnel) ---
    if (msg.type === "SAVE_PASSWORD") {
        console.log("Mot de passe reçu :", msg.payload);

        // On récupère les anciens passwords puis on ajoute le nouveau
        chrome.storage.local.get(["cachedPasswords"], (res) => {
            const existing: PasswordItem[] = res.cachedPasswords || [];
            const updated = [...existing, msg.payload];
            chrome.storage.local.set({ cachedPasswords: updated }, () => {
                sendResponse({ success: true });
            });
        });
        return true;
    }
});

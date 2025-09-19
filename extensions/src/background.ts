
console.log("🔑 BoltSecure background lancé...");

chrome.runtime.onInstalled.addListener(() => {
    console.log("🚀 BoltSecure installé avec succès !");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "SAVE_PASSWORD") {
        console.log("Mot de passe reçu :", message.payload);
        console.log(sender)
        sendResponse({ success: true });
    }
});

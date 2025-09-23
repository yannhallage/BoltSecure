import ReactDOM from "react-dom/client";
import PopupSelect from "./app/windows/PopupSelect";



console.log("✅ Content script chargé !");

// Injecte un container React dans la page
function injectPopup(target: HTMLElement) {
    // éviter d'injecter plusieurs fois
    if (document.getElementById("emails-popup")) return;

    const rect = target.getBoundingClientRect(); // récupère position et taille de l'input

    const container = document.createElement("div");
    container.id = "emails-popup";
    container.style.position = "fixed";  // reste visible même au scroll
    container.style.zIndex = "999999";

    // largeur = largeur de l'input si elle est supérieure à un minimum
    container.style.width = `${Math.max(rect.width, 280)}px`;

    // position par défaut en haut à droite
    container.style.top = "10px";
    container.style.right = "10px";

    document.body.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(<PopupSelect />);
}



// Détection des inputs
function setupListeners() {
    document.addEventListener("focusin", (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT") {
            injectPopup(target);
        }
    });

    // Retirer le popup si clic ailleurs
    document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (!(target.tagName === "INPUT")) {
            const popup = document.getElementById("emails-popup");
            if (popup) popup.remove();
        }
    });
}

setupListeners();

import ReactDOM from "react-dom/client";
import PopupSelect from "./app/windows/PopupSelect";


// Injecte un container React dans la page
function injectPopup(target: HTMLElement) {
    // éviter d'injecter plusieurs fois
    if (document.getElementById("boltsecure-popup")) return;

    const container = document.createElement("div");
    container.id = "boltsecure-popup";
    container.style.position = "absolute";
    container.style.zIndex = "999999";
    container.style.width = "280px";
    container.style.right = "10px";
    container.style.top = `${target.getBoundingClientRect().bottom + window.scrollY + 5}px`;

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
            const popup = document.getElementById("boltsecure-popup");
            if (popup) popup.remove();
        }
    });
}

setupListeners();

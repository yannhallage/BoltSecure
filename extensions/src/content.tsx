import ReactDOM from "react-dom/client";
import PopupSelect from "./app/windows/PopupSelect";
import PopupValidation from "./app/windows/PopupValidation";

console.log("✅ Content script chargé !");

checkStorage();

async function checkStorage() {
    try {
        let hasData = false;

        // Vérification stockage
        if (chrome?.storage?.local) {
            const result = await chrome.storage.local.get(["xxxml", "xxxpp", "xxxmm"]);
            hasData = !!(result.xxxml && result.xxxpp && result.xxxmm);
        } else {
            const email = localStorage.getItem("xxxml");
            const password = localStorage.getItem("xxxpp");
            const masterKey = localStorage.getItem("xxxmm");
            hasData = !!(email && password && masterKey);
        }

        // Ignorer la webapp
        if (!hasData || window.location.href.includes("localhost:5173/web")) return;

        /**
         * 🏗️ Fonction générique pour monter un composant React
         */
        function mountReactComponent(
            id: string,
            Component: React.ReactNode,
            style: Partial<CSSStyleDeclaration>
        ) {
            let container = document.getElementById(id);

            if (!container) {
                container = document.createElement("div");
                container.id = id;

                Object.assign(container.style, {
                    position: "fixed",
                    zIndex: "999999",
                    ...style,
                });

                document.body.appendChild(container);

                const root = ReactDOM.createRoot(container);
                root.render(Component);
            } else {
                console.warn(`⚠️ Le container #${id} existe déjà, injection ignorée.`);
            }
        }

        /**
         * Popup de sélection (autofill)
         */
        function injectPopupSelect(target: HTMLElement) {
            mountReactComponent(
                "emails-popup",
                <PopupSelect
                    targetInput={target as HTMLInputElement}
                    onClose={() => document.getElementById("emails-popup")?.remove()}
                />,
                { width: "400px", top: "10px", right: "10px" }
            );
        }

        /**
         * Popup de validation (sauvegarde / update)
         */
        function injectPopupValidation({
            username,
            password,
            domain,
            formType,
        }: {
            username: string;
            password: string;
            domain: string;
            formType: "login" | "signup";
        }) {
            mountReactComponent(
                "save-popup",
                <PopupValidation
                    username={username}
                    password={password}
                    domain={domain}
                    formType={formType}
                    onClose={() => document.getElementById("save-popup")?.remove()}
                />,
                { width: "350px", right: "10px" }
            );
        }

        /**
         * Détection du type de formulaire
         */
        function detectFormType(form: HTMLFormElement): "login" | "signup" {
            const action = form.getAttribute("action")?.toLowerCase() || "";
            const hasConfirmPassword =
                form.querySelectorAll("input[type='password']").length > 1;

            if (
                action.includes("signup") ||
                action.includes("register") ||
                action.includes("inscription") ||
                hasConfirmPassword
            ) {
                return "signup";
            }
            return "login";
        }

        /**
         * Extraction des identifiants d’un formulaire
         */
        function extractCredentials(form: HTMLFormElement) {
            const inputs = form.querySelectorAll("input");
            let username = "";
            let password = "";

            inputs.forEach((input) => {
                if (input.type === "password") password = input.value;
                if (
                    input.type === "email" ||
                    input.name.toLowerCase().includes("user")
                ) {
                    username = input.value;
                }
            });

            return { username, password };
        }

        /**
         * Gestion de la soumission d’un formulaire
         */
        function handleFormSubmit(form: HTMLFormElement) {
            const { username, password } = extractCredentials(form);
            if (!username || !password) return;

            const domain = window.location.hostname;
            const formType = detectFormType(form);

            chrome.storage.local.get([domain], (result) => {
                const existing = result[domain] || null;

                if (!existing) {
                    injectPopupValidation({ username, password, domain, formType });
                } else if (existing.password !== password) {
                    injectPopupValidation({ username, password, domain, formType });
                } else if (formType === "signup") {
                    injectPopupValidation({ username, password, domain, formType });
                } else {
                    console.log("✅ Identifiants déjà enregistrés pour ce domaine");
                }
            });
        }

        /**
         * Setup des listeners
         */
        function setupListeners() {
            // Autofill (input focus)
            document.addEventListener("focusin", (e) => {
                const target = e.target as HTMLElement;
                if (target.tagName === "INPUT") injectPopupSelect(target);
            });

            // Fermeture du popup select si clic ailleurs
            document.addEventListener("click", (e) => {
                const target = e.target as HTMLElement;
                if (!(target.tagName === "INPUT")) {
                    document.getElementById("emails-popup")?.remove();
                }
            });

            // Sauvegarde / update (submit classique)
            document.addEventListener("submit", (e) => {
                handleFormSubmit(e.target as HTMLFormElement);
            });

            // Sauvegarde / update (bouton JS sans submit)
            document.addEventListener("click", (e) => {
                const target = e.target as HTMLElement;
                if (
                    target.tagName === "BUTTON" ||
                    (target as HTMLInputElement).type === "submit"
                ) {
                    const form = target.closest("form") as HTMLFormElement | null;
                    if (form) handleFormSubmit(form);
                }
            });
        }

        setupListeners();
    } catch (err) {
        console.error("Erreur lors de la vérification du storage :", err);
    }
}

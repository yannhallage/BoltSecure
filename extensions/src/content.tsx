import ReactDOM from "react-dom/client";
import PopupSelect from "./app/windows/PopupSelect";
import PopupValidation from "./app/windows/PopupValidation";

console.log("✅ Content script chargé !");

checkStorage();

async function checkStorage() {
    try {
        let hasData = false;

        // Vérification stockage global
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
         * Mount React component
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
            }
        }

        /**
         * PopupSelect → autofill
         */
        function injectPopupSelect(target: HTMLInputElement) {
            mountReactComponent(
                "emails-popup",
                <PopupSelect
                    targetInput={target}
                    onClose={() => document.getElementById("emails-popup")?.remove()}
                />,
                { width: "400px", top: "10px", right: "10px" }
            );
        }

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
         * Vérifie si l’input est pertinent
         */
        function isRelevantInput(input: HTMLInputElement): boolean {
            return input.type === "email" || input.type === "password";
        }

        /**
         * Détecte le type de formulaire
         */
        function detectFormType(form: HTMLFormElement): "login" | "signup" {
            const action = form.getAttribute("action")?.toLowerCase() || "";
            const hasConfirmPassword = form.querySelectorAll("input[type='password']").length > 1;

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
         * Vérifie si PopupValidation doit s'afficher selon formulaire et domaine
         */
        function shouldTriggerValidation(form: HTMLFormElement): boolean {
            const formType = detectFormType(form);
            const hasEmail = !!form.querySelector("input[type='email']");
            const hasPassword = !!form.querySelector("input[type='password']");
            const domain = window.location.hostname;

            // Si formulaire signup et email+password présents
            if (formType !== "signup" || !hasEmail || !hasPassword) return false;

            // Vérifie si on a déjà des identifiants pour ce domaine
            chrome.storage.local.get([domain], (result) => {
                const existing = result[domain] || null;
                if (!existing) return true; // Pas d'identifiants → popup à afficher
                return false; // Déjà enregistré → pas de popup
            });

            return true; // Par défaut, afficher
        }

        /**
         * Extraction des identifiants
         */
        function extractCredentials(form: HTMLFormElement) {
            const inputs = form.querySelectorAll("input");
            let username = "";
            let password = "";

            inputs.forEach((input) => {
                if (input.type === "password") password = input.value;
                if (input.type === "email" || input.name.toLowerCase().includes("user")) {
                    username = input.value;
                }
            });

            return { username, password };
        }

        /**
         * Gestion de la soumission de formulaire
         */
        function handleFormSubmit(form: HTMLFormElement) {
            const domain = window.location.hostname;
            const formType = detectFormType(form);
            const { username, password } = extractCredentials(form);

            if (!username || !password) return;
            if (formType !== "signup") return; // Seulement signup

            chrome.storage.local.get([domain], (result) => {
                const existing = result[domain] || null;

                // Si pas d'identifiants ou mot de passe différent → popup
                if (!existing || existing.password !== password) {
                    injectPopupValidation({ username, password, domain, formType });
                }
            });
        }

        /**
         * Setup listeners
         */
        function setupListeners() {
            // Autofill uniquement sur inputs pertinents
            document.addEventListener("focusin", (e) => {
                const target = e.target as HTMLInputElement;
                if (target && target.tagName === "INPUT" && isRelevantInput(target)) {
                    injectPopupSelect(target);
                }
            });

            // Fermeture du PopupSelect si clic ailleurs
            document.addEventListener("click", (e) => {
                const target = e.target as HTMLElement;
                if (!(target.tagName === "INPUT" && isRelevantInput(target as HTMLInputElement))) {
                    document.getElementById("emails-popup")?.remove();
                }
            });

            // Soumission formulaire classique
            document.addEventListener("submit", (e) => {
                const form = e.target as HTMLFormElement;
                if (form) handleFormSubmit(form);
            });

            // Soumission via bouton JS
            document.addEventListener("click", (e) => {
                const target = e.target as HTMLElement;
                if (
                    target.tagName === "BUTTON" ||
                    (target instanceof HTMLInputElement && target.type === "submit")
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

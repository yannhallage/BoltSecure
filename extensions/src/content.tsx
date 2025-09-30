// content-script.tsx
import ReactDOM from "react-dom/client";
import PopupSelect from "./app/windows/PopupSelect";
import PopupValidation from "./app/windows/PopupValidation";

const DEBUG = true;
console.log("✅ Content script chargé !");

// --- Storage simulé pour tests ---
const storedLogins: { domain: string; email: string; password: string }[] = [
    { domain: "example.com", email: "test@example.com", password: "123456" }
];

(async function main() {
    try {
        const hasData = await getStoredCredentials();
        if (!hasData || window.location.href.includes("localhost:5173/web")) {
            if (DEBUG) console.log("⛔ Pas de données ou page webapp — arrêt.");
            return;
        }

        const ROOTS = (window as any).__EXT_ROOTS = (window as any).__EXT_ROOTS || new Map<string, any>();
        const debug = (...args: any[]) => { if (DEBUG) console.log("[CS]", ...args); };

        // --- Mount / Unmount React Components ---
        function mountReactComponent(id: string, Component: React.ReactNode, style: Partial<CSSStyleDeclaration>) {
            let container = document.getElementById(id);
            if (!container) {
                container = document.createElement("div");
                container.id = id;
                Object.assign(container.style, { position: "fixed", zIndex: "2147483647", pointerEvents: "auto", ...style });
                document.body.appendChild(container);
                const root = ReactDOM.createRoot(container);
                root.render(Component);
                ROOTS.set(id, { root, container });
                debug("Mounted", id);
                return;
            }
            if (!ROOTS.has(id)) {
                const root = ReactDOM.createRoot(container);
                root.render(Component);
                ROOTS.set(id, { root, container });
                debug("Mounted existing container", id);
            } else {
                ROOTS.get(id).root.render(Component);
                debug("Re-rendered", id);
            }
        }

        function removePopup(id: string) {
            const entry = ROOTS.get(id);
            if (entry) {
                try { entry.root.unmount(); } catch { }
                try { entry.container.remove(); } catch { }
                ROOTS.delete(id);
                debug("Removed", id);
            } else {
                const el = document.getElementById(id);
                if (el) el.remove();
            }
        }

        // --- Helpers ---
        function isRelevantInput(input: HTMLInputElement) {
            const t = (input.type || "").toLowerCase();
            const name = (input.name || "").toLowerCase();
            const ph = (input.placeholder || "").toLowerCase();
            return t === "email" || t === "password" ||
                name.includes("email") || name.includes("user") || name.includes("login") ||
                ph.includes("email") || ph.includes("mot de passe") || ph.includes("password");
        }

        function extractCredentials(form: HTMLFormElement) {
            let username = "", password = "";
            Array.from(form.querySelectorAll("input")).forEach(input => {
                const t = (input.type || "").toLowerCase();
                const name = (input.name || "").toLowerCase();
                if (t === "password" && !password) password = input.value;
                if ((t === "email" || name.includes("user") || name.includes("email") || name.includes("login")) && !username) {
                    username = input.value;
                }
            });
            return { username, password };
        }

        // --- Validation Logic ---
        async function shouldTriggerValidation(form: HTMLFormElement) {
            const { username } = extractCredentials(form);
            const domain = window.location.hostname;
            const formType = detectFormType(form);

            // Vérifie si email existe déjà
            const existing = storedLogins.find(u => u.domain === domain && u.email === username);

            // Popup si signup et email inexistant, ou login et email inexistant
            return !existing;
        }

        function detectFormType(form: HTMLFormElement): "login" | "signup" {
            const action = form.getAttribute("action")?.toLowerCase() || "";
            const hasConfirmPassword = form.querySelectorAll("input[type='password']").length > 1;
            if (action.includes("signup") || action.includes("register") || action.includes("inscription") || hasConfirmPassword) return "signup";
            return "login";
        }

        async function handleFormSubmit(form: HTMLFormElement) {
            const { username, password } = extractCredentials(form);
            if (!username || !password) return;

            const domain = window.location.hostname;

            if (await shouldTriggerValidation(form)) {
                // Inject PopupValidation
                injectPopupValidation(username, password, domain);

                // Ajoute au storage simulé
                storedLogins.push({ domain, email: username, password });
                console.log("[TEST] Nouveau login ajouté:", { domain, username, password });
            }
        }

        // --- Inject Popups ---
        function injectPopupSelect(target: HTMLInputElement) {
            if (!target || document.getElementById("emails-popup")) return;
            mountReactComponent("emails-popup",
                <PopupSelect targetInput={target} onClose={() => removePopup("emails-popup")} />,
                { width: "400px", top: "10px", right: "10px" }
            );
        }

        function injectPopupValidation(username: string, password: string, domain: string) {
            if (document.getElementById("save-popup")) return;
            mountReactComponent("save-popup",
                <PopupValidation username={username} password={password} domain={domain} onClose={() => removePopup("save-popup")} formType="signup" />,
                { width: "350px", right: "10px", top: "10px" }
            );
        }

        // --- Event Listeners ---
        document.addEventListener("focusin", e => {
            const target = e.target as HTMLInputElement;
            if (target && target.tagName === "INPUT" && isRelevantInput(target)) injectPopupSelect(target);
        });

        document.addEventListener("click", e => {
            const target = e.target as HTMLElement;
            const clickInsideInput = !!target.closest("input");
            const clickInsideEmailsPopup = !!target.closest("#emails-popup");
            if (!clickInsideInput && !clickInsideEmailsPopup) removePopup("emails-popup");
        }, true);

        document.addEventListener("submit", e => {
            const form = e.target as HTMLFormElement;
            if (form) handleFormSubmit(form);
        }, true);

        document.addEventListener("click", e => {
            const target = e.target as HTMLElement;
            if (target.tagName === "BUTTON" || (target instanceof HTMLInputElement && target.type === "submit")) {
                const form = target.closest("form") as HTMLFormElement | null;
                if (form) handleFormSubmit(form);
            }
        }, true);

        debug("Listeners set ✅");

    } catch (err) {
        console.error("Erreur checkStorage", err);
    }
})();

// --- Storage Helpers ---
function getFromStorage(key: string): Promise<any> {
    return new Promise(resolve => {
        if (typeof chrome !== "undefined" && chrome.storage?.local) {
            chrome.storage.local.get([key], res => resolve(res ? res[key] ?? null : null));
        } else {
            resolve(localStorage.getItem(key));
        }
    });
}

async function getStoredCredentials() {
    const email = await getFromStorage("xxxml");
    const password = await getFromStorage("xxxpp");
    const masterKey = await getFromStorage("xxxmm");
    return !!(email && password && masterKey);
}

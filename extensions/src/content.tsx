import ReactDOM from "react-dom/client";
import PopupSelect from "./app/windows/PopupSelect";
import PopupValidation from "./app/windows/PopupValidation";

console.log("✅ Content script chargé !");

checkStorage();

async function checkStorage() {
    try {
        let hasData = false;

        if (chrome?.storage?.local) {
            const result = await chrome.storage.local.get(["xxxml", "xxxpp", "xxxmm"]);
            hasData = !!(result.xxxml && result.xxxpp && result.xxxmm);
        } else {
            const email = localStorage.getItem("xxxml");
            const password = localStorage.getItem("xxxpp");
            const masterKey = localStorage.getItem("xxxmm");
            hasData = !!(email && password && masterKey);
        }

        if (hasData) {
            if (window.location.href.includes("localhost:5173/web")) return;

            function injectPopupSelect(target: HTMLElement) {
                if (document.getElementById("emails-popup")) return;

                const container = document.createElement("div");
                container.id = "emails-popup";
                container.style.position = "fixed";
                container.style.zIndex = "999999";
                container.style.width = "400px";
                container.style.top = "10px";
                container.style.right = "10px";

                document.body.appendChild(container);

                const root = ReactDOM.createRoot(container);
                root.render(
                    <PopupSelect
                        targetInput={target as HTMLInputElement}
                        onClose={() => container.remove()}
                    />
                );
            }

            function injectPopupValidation({ username, password, domain, formType }: { username: string; password: string; domain: string; formType: "login" | "signup" }) {
                if (document.getElementById("save-popup")) return;

                const container = document.createElement("div");
                container.id = "save-popup";
                container.style.position = "fixed";
                container.style.zIndex = "999999";
                container.style.width = "360px";
                container.style.bottom = "20px";
                container.style.right = "20px";

                document.body.appendChild(container);

                const root = ReactDOM.createRoot(container);
                root.render(
                    <PopupValidation
                        username={username}
                        password={password}
                        domain={domain}
                        formType={formType}
                        onClose={() => container.remove()}
                    />
                );
            }

            function detectFormType(form: HTMLFormElement): "login" | "signup" {
                const action = form.getAttribute("action")?.toLowerCase() || "";
                const hasConfirmPassword = form.querySelectorAll("input[type='password']").length > 1;

                if (action.includes("signup") || action.includes("register") || action.includes("inscription") || hasConfirmPassword) {
                    return "signup";
                }
                return "login";
            }

            function setupListeners() {
                document.addEventListener("focusin", (e) => {
                    const target = e.target as HTMLElement;
                    if (target.tagName === "INPUT") injectPopupSelect(target);
                });

                document.addEventListener("click", (e) => {
                    const target = e.target as HTMLElement;
                    if (!(target.tagName === "INPUT")) {
                        const popup = document.getElementById("emails-popup");
                        if (popup) popup.remove();
                    }
                });

                document.addEventListener("submit", (e) => {
                    const form = e.target as HTMLFormElement;
                    const inputs = form.querySelectorAll("input");
                    let username = "";
                    let password = "";

                    inputs.forEach((input) => {
                        if (input.type === "password") password = input.value;
                        if (input.type === "email" || input.name.toLowerCase().includes("user")) username = input.value;
                    });

                    if (username && password) {
                        const domain = window.location.hostname;
                        const formType = detectFormType(form);

                        chrome.storage.local.get([domain], (result) => {
                            const existing = result[domain] || null;

                            if (!existing) injectPopupValidation({ username, password, domain, formType });
                            else if (existing.password !== password) injectPopupValidation({ username, password, domain, formType });
                            else if (formType === "signup") injectPopupValidation({ username, password, domain, formType });
                            else console.log("✅ Identifiants déjà enregistrés pour ce domaine");
                        });
                    }
                });
            }

            setupListeners();
        }
    } catch (err) {
        console.error("Erreur lors de la vérification du storage :", err);
    }
}

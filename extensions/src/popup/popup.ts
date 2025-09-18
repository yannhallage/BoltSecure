let currentStep = 1;
const totalSteps = 3;

const steps = document.querySelectorAll<HTMLElement>(".step");
const stepTitle = document.getElementById("stepTitle") as HTMLElement;
const prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;
const togglePasswordBtn = document.getElementById("togglePassword") as HTMLButtonElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;

// Fonction pour afficher la bonne étape
function showStep(step: number) {
    steps.forEach(s => s.classList.add("hidden"));
    const activeStep = document.querySelector<HTMLElement>(`.step[data-step="${step}"]`);
    if (activeStep) activeStep.classList.remove("hidden");

    // Mettre à jour titre
    if (step === 1) stepTitle.textContent = "Étape 1 : Email";
    if (step === 2) stepTitle.textContent = "Étape 2 : Mot de passe";
    if (step === 3) stepTitle.textContent = "Étape 3 : Master Key";

    // Gérer boutons navigation
    prevBtn.classList.toggle("hidden", step === 1);
    nextBtn.textContent = step === totalSteps ? "Valider" : "Suivant";
}

prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    } else {
        // Dernière étape → récupérer les valeurs
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;
        const masterkey = (document.getElementById("masterkey") as HTMLInputElement).value;

        console.log("Données saisies :", { email, password, masterkey });
        alert("Vos données ont été enregistrées !");
    }
});

// Toggle mot de passe
togglePasswordBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordBtn.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        togglePasswordBtn.textContent = "👁";
    }
});

// Init
showStep(currentStep);

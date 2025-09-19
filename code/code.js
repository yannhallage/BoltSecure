function showStep(step) {
    document.querySelectorAll(".step").forEach(el => el.classList.remove("active"));
    document.querySelector(`.step[data-step="${step}"]`).classList.add("active");
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

function validate() {
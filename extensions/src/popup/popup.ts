let currentStep = 1;
const totalSteps = 3;
let emailGlobal: string = "";
let passwordGlobal: string = "";

function showStep(step: number): void {
  document.querySelectorAll<HTMLElement>(".step").forEach(el => {
    el.classList.remove("active");
  });
  const target = document.querySelector<HTMLElement>(`.step[data-step="${step}"]`);
  if (target) target.classList.add("active");
}

function togglePassword(id: string): void {
  const input = document.getElementById(id) as HTMLInputElement | null;
  if (input) {
    input.type = input.type === "password" ? "text" : "password";
  }
}

async function sendStepData(step: number): Promise<boolean> {
  try {
    if (step === 1) {
      const email = (document.getElementById("email") as HTMLInputElement)?.value.trim();
      if (!email) return false;

      const res = await fetch("http://localhost:2001/api/auth/authentification/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (!res.ok) throw new Error("Email invalide");
      emailGlobal = email;
      return true;
    }

    if (step === 2) {
      const password = (document.getElementById("password") as HTMLInputElement)?.value.trim();
      if (!password) return false;

      const res = await fetch("http://localhost:2001/api/auth/authentification/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailGlobal, motDePasse: password })
      });

      if (!res.ok) throw new Error("Mot de passe invalide");
      passwordGlobal = password;
      return true;
    }

    if (step === 3) {
      const master = (document.getElementById("master") as HTMLInputElement)?.value.trim();
      if (!master) return false;

      const res = await fetch("http://localhost:2001/api/auth/authentification/master-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailGlobal,
          motDePasse: passwordGlobal,
          masterKey: master
        })
      });

      if (!res.ok) throw new Error("MasterKey invalide");
      return true;
    }

    return false;
  } catch (err) {
    console.error("❌ Erreur API:", err);
    alert((err as Error).message);
    return false;
  }
}

document.querySelectorAll<HTMLButtonElement>(".btn").forEach((btn, index) => {
  btn.addEventListener("click", async () => {
    const success = await sendStepData(currentStep);
    if (success) {
      if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
      } else {
        alert("🎉 Connexion réussie !");
      }
    }
  });
});


document.querySelectorAll<HTMLButtonElement>(".toggle-password").forEach(btn => {
  const targetId = btn.getAttribute("data-target");
  if (targetId) {
    btn.addEventListener("click", () => togglePassword(targetId));
  }
});

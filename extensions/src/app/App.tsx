import "../styles/style.css";
import "../styles/popup.css";
import { PopupProvider } from "../context/PopupProvider";
import PopupLogin from "./windows/PopupLogin";
import PopupVault from "./windows/PopupVault";
import AccountPopup from "./windows/AccountPopup";
import EditPopup from "./windows/EditePopup";

import { useEffect, useState } from "react";
import { usePopup } from "../context/usePopup";
import { useGetPasswords } from "../hooks/web/password/useGetPasswords";
import { useGetCreditcards } from "../hooks/web/creditCarte/useGetCreditcards";
import { storage } from "../lib/storage";
import PopupItems from "./windows/PopupItems";

function PopupContainer() {
  const { popup, setPopup, setDataPasswords, setDataRegister } = usePopup();

  const [userId, setUserId] = useState<string | null>(null);
  const { passwords } = useGetPasswords(userId ?? "");
  const { creditCards } = useGetCreditcards(userId ?? "");
  
  useEffect(() => {
    const checkUserStorage = async () => {
      try {
        const result = await storage.get(["xxxml", "xxxpp", "xxxmm", "utilisateur"]);
        console.log("Storage récupéré:", result);

        const utilisateur = result.utilisateur ?? null;
        const hasData =
          !!(result.xxxml?.length &&
            result.xxxpp?.length &&
            result.xxxmm?.length &&
            result.utilisateur?.length);

        if (utilisateur) setUserId(utilisateur);
        if (hasData) setPopup("Browse");
      } catch (err) {
        console.error("Erreur lors de la vérification du storage :", err);
      }
    };

    checkUserStorage();
  }, [setPopup]);

  // Met à jour les données dans le contexte
  useEffect(() => {
    if (passwords) setDataPasswords(passwords);
  }, [passwords, setDataPasswords]);

  useEffect(() => {
    if (creditCards) setDataRegister(creditCards);
  }, [creditCards, setDataRegister]);

  // Rendu conditionnel selon popup
  switch (popup) {
    case "login":
      return <PopupLogin />;
    case "Browse":
      return <PopupVault />
    case "All-items":
      return <PopupVault />;
    case "passwords":
      return <PopupItems
        type="passwords"
        title="All Passwords"
      />;
    case "creditCards":
      return <PopupItems
        type="creditCards"
        title="All creditCards"
      />;
    case "account":
      return <AccountPopup />;
    case "Edit":
      return <EditPopup />;
    default:
      return <PopupVault />;
  }
}

// App wrapper avec provider
export default function App() {
  return (
    <PopupProvider>
      <PopupContainer />
    </PopupProvider>
  );
}

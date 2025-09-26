// PopupContainer.tsx
import "../styles/style.css";
import "../styles/popup.css";
import { PopupProvider } from "../context/PopupProvider";
import PopupLogin from "./windows/PopupLogin";
import { usePopup } from "../context/usePopup";
import PopupVault from "./windows/PopupVault";
import PopupItems from "./windows/PopupItems";
import AccountPopup from "./windows/AccountPopup";
import EditPopup from "./windows/EditePopup";
import { useEffect, useState } from "react";
import { useGetPasswords } from "../hooks/web/password/useGetPasswords";
import { useGetCreditcards } from "../hooks/web/creditCarte/useGetCreditcards";

function PopupContainer() {
  const { popup, setPopup, setDataPasswords, setDataRegister } = usePopup();

  const [userId, setUserId] = useState<string | null>(null);
  const { passwords, loading, error } = useGetPasswords(userId ?? "");
  const { creditCards, loadings, errors } = useGetCreditcards(userId ?? "");

  useEffect(() => {
    async function checkStorage() {
      try {
        let hasData = false;

        if (chrome?.storage?.local) {
          const result = await chrome.storage.local.get([
            "xxxml",
            "xxxpp",
            "xxxmm",
            "utilisateur",
          ]);
          hasData =
            !!(
              result.xxxml &&
              result.xxxpp &&
              result.xxxmm &&
              result.utilisateur
            );
          if (result.utilisateur) setUserId(result.utilisateur);
        } else {
          const email = localStorage.getItem("xxxml");
          const password = localStorage.getItem("xxxpp");
          const masterKey = localStorage.getItem("xxxmm");
          const utilisateur = localStorage.getItem("utilisateur");
          hasData = !!(email && password && masterKey && utilisateur);
          if (utilisateur) setUserId(utilisateur);
        }

        if (hasData) setPopup("Browse");
      } catch (err) {
        console.error("Erreur lors de la vérification du storage :", err);
      }
    }

    checkStorage();
  }, [setPopup]);

  useEffect(() => {
    if (passwords) {
      setDataPasswords(prev => [...prev, ...passwords]);
    }
  }, [passwords, setDataPasswords]);

  useEffect(() => {
    if (creditCards) {
      setDataRegister(prev => [...prev, ...creditCards]);
    }
  }, [creditCards, setDataRegister]);

  switch (popup) {
    case "login":
      return <PopupLogin />;

    case "Browse":
      return <PopupVault />
    case "settings":
      return <PopupVault />;
    case "All-items":
      return <PopupVault />;
    case "creditCards":
      if (!userId) return <div>Loading user...</div>;
      if (loadings) return <div>Loading passwords...</div>;
      if (errors) return <div>Error: {errors}</div>;

      return <PopupItems
        title="All creditCards"
        data={creditCards}
        type="creditCards"
      />;

    case "passwords":
      if (!userId) return <div>Loading user...</div>;
      if (loading) return <div>Loading passwords...</div>;
      if (error) return <div>Error: {error}</div>;

      return <PopupItems
        title="All passwords"
        data={passwords}
        type="passwords"
      />;

    case "account":
      return <AccountPopup />;
    case "Edit":
      return <EditPopup />;
    default:
      return null;
  }


}

export default function App() {
  return (
    <PopupProvider>
      <PopupContainer />
    </PopupProvider>
  );
}

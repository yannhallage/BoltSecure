import "../styles/style.css";
import "../styles/popup.css";
import { PopupProvider } from "../context/PopupProvider";
import PopupLogin from "./windows/PopupLogin";
import { usePopup } from "../context/usePopup";
import PopupVault from "./windows/PopupVault";
import PopupItems from "./windows/PopupItems";
import { BankAccounts, socialAccounts } from "../data/socialAccounts";
import AccountPopup from "./windows/AccountPopup";
import EditPopup from "./windows/EditePopup";
import { useEffect } from "react";
// import PopupSelect from "./windows/PopupSelect";

function PopupContainer() {
  const { popup, setPopup } = usePopup();

  useEffect(() => {
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
          setPopup("Browse");
        }
      } catch (err) {
        console.error("Erreur lors de la vérification du storage :", err);
      }
    }

    checkStorage();
  }, [setPopup]);

  switch (popup) {
    case "login":
      return <PopupLogin />;
    case "Browse":
      return <PopupVault />;
    case "settings":
      return <PopupVault />;
    case "All-items":
      return <PopupItems title={"All items"} data={socialAccounts} />;
    case "passwords":
      return <PopupItems title={"All passwords"} data={socialAccounts} />;
    case "creditCards":
      return <PopupItems title={"All credit Cards"} data={BankAccounts} />;
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

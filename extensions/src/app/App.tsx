import "../styles/style.css";
import "../styles/popup.css";
import { PopupProvider } from "../context/PopupProvider";
import PopupLogin from "./windows/PopupLogin";

import { usePopup } from "../context/usePopup";
import PopupVault from "./windows/PopupVault";
import PopupItems from "./windows/PopupItems";
import { BankAccounts, socialAccounts } from "../data/socialAccounts";
import AccountPopup from "./windows/AccountPopup";

function PopupContainer() {
  const { popup } = usePopup();

  switch (popup) {
    case "login":
      return <PopupLogin />;
    case "Browse":
      return <PopupVault />;
    case "settings":
      return <PopupVault />;
    case "All-items":
      return <PopupItems title={'All items'} data={socialAccounts} />
    case "passwords":
      return <PopupItems title={'All passwords'} data={socialAccounts} />;
    case "creditCards":
      return <PopupItems title={'All credit Cards'} data={BankAccounts} />;
    case "account":
      return <AccountPopup />;
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

import { useEffect, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { usePopup } from '../../context/usePopup';
import '../../styles/EditPopup.css';
import { socialAccounts, BankAccounts } from '../../data/socialAccounts';


export default function EditPopup() {
    const { changeText, dataPasswords, dataRegister, typeChange, setPopup } = usePopup();

    const [editData, setEditData] = useState<any | null>(null);
    const [imageBanks, setImageBanks] = useState('')

    useEffect(() => {
        if (typeChange === 'creditCards') {
            const card = dataRegister.find((card: any) => card.titre === changeText);
            const imageBank = BankAccounts.find((acc: any) => acc.name === changeText);
            if (card) setEditData(card);
            if (imageBank) setImageBanks(imageBank.image);
        } else {
            const password = dataPasswords.find((acc: any) => acc.titre === changeText);
            const imageBank = socialAccounts.find((acc: any) => acc.name === changeText);

            if (password) setEditData(password);
            if (imageBank) setImageBanks(imageBank.image);
        }
    }, [typeChange, changeText, dataPasswords, dataRegister]);


    if (!editData) {
        return <div>Chargement des données...</div>;
    }

    return (
        <div className="item-detail-EditPopup">
            <div className="item-detail-header-EditPopup">
                <button className="back-btn-EditPopup" onClick={() => setPopup('All-items')}>
                    <ChevronLeft size={15} />
                </button>
                <span className="edit-link-EditPopup">Edit</span>
            </div>
            {imageBanks ? (
                <div className="item-logo-EditPopup">
                    <img src={imageBanks} alt="Logo" />
                </div>
            ) : (
                <div className="item-logo-EditPopup">
                    <img src="https://via.placeholder.com/40" alt="Default logo" />
                </div>
            )}



            <h2 className="item-title-EditPopup">{editData.titre}</h2>
            <div className="item-actions-EditPopup">
                <button className="action-btn-EditPopup">📎 Attach File</button>
                <button className="action-btn-EditPopup">📤 Share</button>
                <button className="action-btn-EditPopup">⋯ More</button>
            </div>

            <div className="item-info-EditPopup">
                <div className="info-block-EditPopup">
                    <label>Email or Username</label>
                    <p>{editData.identifiant}</p>
                </div>

                <div className="info-block-EditPopup">
                    <label>Password</label>
                    <p>{editData.motDePasse && '•••••••••'}</p>
                </div>

                <div className="info-block-EditPopup">
                    <label className="label-EditPopup">Website</label>
                    <a href={editData.url} className="a-EditPopup" target="_blank">
                        {editData.url}
                    </a>
                </div>
            </div>
        </div>
    );
}

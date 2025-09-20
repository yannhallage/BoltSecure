import { useContext } from 'react';
import { PopupContext } from '../../context/PopupContext';
import '../../styles/EditPopup.css'
import { ChevronLeft } from 'lucide-react';

export default function EditPopup() {
    const popupContext = useContext(PopupContext);
    if (!popupContext) return null;

    const { setPopup } = popupContext;
    return (
        <div className="item-detail-EditPopup">
            <div className="item-detail-header-EditPopup">
                <button className="back-btn-EditPopup" onClick={() => { setPopup('All-items') }}><ChevronLeft size={15} /></button>
                <span className="edit-link-EditPopup">Edit</span>
            </div>
            <div className="item-logo-EditPopup">
                <img src="https://www.svgrepo.com/show/475700/youtube-color.svg" alt="Youtube" />
            </div>

            <h2 className="item-title-EditPopup">Youtube.com</h2>
            <div className="item-actions-EditPopup">
                <button className="action-btn-EditPopup">📎 Attach File</button>
                <button className="action-btn-EditPopup">📤 Share</button>
                <button className="action-btn-EditPopup">⋯ More</button>
            </div>

            <div className="item-info-EditPopup">
                <div className="info-block-EditPopup">
                    <label>Email or Username</label>
                    <p>YannHallage</p>
                </div>

                <div className="info-block-EditPopup">
                    <label>Password</label>
                    <p>••••••••••</p>
                </div>

                <div className="info-block-EditPopup">
                    <label>Password Health</label>
                    <p className="strong-EditPopup">✔ Strong Password</p>
                </div>

                <div className="info-block-EditPopup">
                    <label className="label-EditPopup">Website</label>
                    <a href="https://youtube.com" className="a-EditPopup" target="_blank">
                        https://youtube.com
                    </a>
                </div>
            </div>
        </div>

    );
}

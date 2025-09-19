import { useState } from "react";
import { useContext } from "react";
import { ClipLoader } from 'react-spinners';
import { PopupContext } from "../../context/PopupContext";

const PopupLogin = () => {
    const popupContext = useContext(PopupContext);
    const [password, setPassword] = useState("");
    
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [multiple] = useState(3);
    const [size] = useState(13);

    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [masterKey, setMasterKey] = useState("");

    if (!popupContext) return null;

    const { setPopup } = popupContext;

    const EvenementOnClick = () => {
        setLoading(true)
        if (step === 3) {
            setTimeout(() => {
                setPopup("Browse")
                setLoading(false)
            }, 1000)
        } else {
            setTimeout(() => {
                setStep(step + 1)
                setLoading(false)
            }, 1000)
       }
    }
    return (
        <>
            <div className="popup-container">
                <img
                    src="https://www.gstatic.com/marketing-cms/assets/images/e4/8e/85fdbcab45359a409bbd132d7040/160px-2x.png=s160-fcrop64=1,00000000ffffffff-rw"
                    alt="Logo"
                    className="logo"
                />

                {step === 1 && (
                    <>
                        <h2 className="title">Welcome!!</h2>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Entrez votre Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="button" onClick={() => setShow(!show)}>
                                👁
                            </button>
                        </div>

                        <a href="#" className="link">
                            Forgot your Master Password?
                        </a>

                        <button className="btn" onClick={EvenementOnClick}>
                            {loading ? <ClipLoader size={size} speedMultiplier={multiple} /> : "Continuez"}
                        </button>

                        <label className="checkbox">
                            <input type="checkbox" /> <span>Keep extension unlocked</span>
                        </label>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h2 className="title">Votre mot de passe</h2>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Entrez votre mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="button" onClick={EvenementOnClick}>
                                👁
                            </button>
                        </div>

                        <a href="#" className="link">
                            Forgot your Master Password?
                        </a>

                        <button className="btn" onClick={EvenementOnClick}>
                            {loading ? <ClipLoader size={size} speedMultiplier={multiple} /> : "Continuez"}
                        </button>

                        <label className="checkbox">
                            <input type="checkbox" /> <span>Keep extension unlocked</span>
                        </label>
                    </>
                )}

                {step === 3 && (
                    <>
                        <h2 className="title">MasterKey</h2>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Entrez votre Master Key"
                                value={masterKey}
                                onChange={(e) => setMasterKey(e.target.value)}
                            />
                            <button type="button" onClick={() => setShow(!show)}>
                                👁
                            </button>
                        </div>

                        <a href="#" className="link">
                            Forgot your Master Password?
                        </a>

                        <button className="btn" onClick={EvenementOnClick}>
                            {loading ? <ClipLoader size={size} speedMultiplier={multiple} /> : "Validez"}
                        </button>

                        <label className="checkbox">
                            <input type="checkbox" /> <span>Keep extension unlocked</span>
                        </label>
                    </>
                )}

                <div className="account">
                    <div className="circle">Ya</div>
                    <p className="email">yannhallage2001@gmail.com</p>
                    <a href="#" className="link">
                        Switch account
                    </a>
                </div>
            </div>
        </>
    )
}

export default PopupLogin
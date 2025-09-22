import { useState } from "react";
import { useContext } from "react";
import { ClipLoader } from 'react-spinners';
import { TriangleAlert } from 'lucide-react';

import { PopupContext } from "../../context/PopupContext";
import { useMasterKey } from "../../hooks/auth/useMasterKey.hooks";
import { useEmail } from "../../hooks/auth/useEmail.hooks";
import { usePassword } from "../../hooks/auth/usePassword.hooks";

const PopupLogin = () => {
    const popupContext = useContext(PopupContext);
    // const [password, setPassword] = useState("");

    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(true);
    const [loading, setLoading] = useState(false);
    const [multiple] = useState(3);
    const [size] = useState(13);

    const [step, setStep] = useState(1);
    // const [email, setEmail] = useState("");
    // const [masterKey, setMasterKey] = useState("");

    const { valueEmail,
        validEmail,
        loadingEmail
        , errorEmail
        , setValueEmail,
        submitEmail

    } = useEmail("");

    const { valuePassword,
        validPassword,
        loadingPassword,
        errorPassword,
        setValuePassword,
        submitPassword

    } = usePassword("");

    const { valueMasterKey,
        validMasterKey,
        loadingMasterKey,
        errorMasterKey,
        setValueMasterKey,
        submitMasterKey
    } = useMasterKey("");

    if (!popupContext) return null;

    const { setPopup } = popupContext;

    const EvenementOnClickEmail = async () => {
        if (valueEmail !== '') {
            const succes = await submitEmail()
            if (succes) {
                setLoading(true)
                if (step === 3) {
                    setTimeout(() => {
                        setPopup("Browse")
                        setLoading(false)
                    }, 1000)
                } else {
                    setTimeout(() => {
                        setStep(step + 1)
                        setShowAlert(true)
                        setLoading(false)
                    }, 1000)
                }
            }
        } else {
            setLoading(true)
            setTimeout(() => {
                setShowAlert(false)
                setLoading(false)
            }, 300)
        }
    }
    const EvenementOnClickPassword = async () => {
        if (valuePassword !== '') {
            const success = await submitPassword()

            if (success) {
                setLoading(true)
                if (step === 3) {
                    setTimeout(() => {
                        setPopup("Browse")
                        setLoading(false)
                    }, 1000)
                } else {
                    setTimeout(() => {
                        setShowAlert(true)
                        setStep(step + 1)
                        setLoading(false)
                    }, 1000)
                }
            }
        } else {
            setLoading(true)
            setTimeout(() => {
                setShowAlert(false)
                setLoading(false)
            }, 300)
        }
    }
    const EvenementOnClickMasterKey =async () => {
        if (valueMasterKey !== '') {
            const success = await submitMasterKey()

            if (success) {
                setLoading(true)
                if (step === 3) {
                    setTimeout(() => {
                        setPopup("Browse")
                        setLoading(false)
                    }, 1000)
                } else {
                    setTimeout(() => {
                        setStep(step + 1)
                        setShowAlert(true)
                        setLoading(false)
                        setShowAlert(false)
                    }, 1000)
                }
            }
        } else {
            setLoading(true)
            setTimeout(() => {
                setShowAlert(false)
                setLoading(false)
            }, 300)
        }
    }


    if (errorEmail) {
        console.log(errorEmail)
    }
    if (errorMasterKey) {
        console.log(errorMasterKey)
    }
    if (errorPassword) {
        console.log(errorPassword)
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
                                value={valueEmail}
                                onChange={(e) => setValueEmail(e.target.value)}
                            />
                            <button type="button" onClick={() => setShow(!show)}>
                                👁
                            </button>
                        </div>

                        <span
                            className="link"
                            hidden={showAlert}
                            style={{
                                color: "#E4004B",
                                backgroundColor: '#18181b',
                                fontSize: '11px',
                                fontFamily: 'monospace',
                                textDecoration: "none",
                                cursor: "",
                                padding: '10px',
                                border: 'solid 1px #333'
                            }}
                        >
                            veuillez remplir tout les champs <TriangleAlert size={15} />
                        </span>

                        <a href="#" className="link">
                            Forgot your Master Password?
                        </a>

                        <button className="btn" onClick={EvenementOnClickEmail}>
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
                                value={valuePassword}
                                onChange={(e) => setValuePassword(e.target.value)}
                            />
                            <button type="button">
                                👁
                            </button>
                        </div>

                        <span
                            className="link"
                            hidden={showAlert}
                            style={{
                                color: "#E4004B",
                                backgroundColor: '#18181b',
                                fontSize: '11px',
                                fontFamily: 'monospace',
                                textDecoration: "none",
                                cursor: "",
                                padding: '10px',
                                border: 'solid 1px #333'
                            }}
                        >
                            veuillez remplir tout les champs <TriangleAlert size={15} />
                        </span>
                        <a href="#" className="link">
                            Forgot your Master Password?
                        </a>

                        <button className="btn" onClick={EvenementOnClickPassword}>
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
                                value={valueMasterKey}
                                onChange={(e) => setValueMasterKey(e.target.value)}
                            />
                            <button type="button" onClick={() => setShow(!show)}>
                                👁
                            </button>
                        </div>

                        <span
                            className="link"
                            hidden={showAlert}
                            style={{
                                color: "#E4004B",
                                backgroundColor: '#18181b',
                                fontSize: '11px',
                                fontFamily: 'monospace',
                                textDecoration: "none",
                                cursor: "",
                                padding: '10px',
                                border: 'solid 1px #333'
                            }}
                        >
                            veuillez remplir tout les champs <TriangleAlert size={15} />
                        </span>
                        <a href="#" className="link">
                            Forgot your Master Password?
                        </a>

                        <button className="btn" onClick={EvenementOnClickMasterKey}>
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
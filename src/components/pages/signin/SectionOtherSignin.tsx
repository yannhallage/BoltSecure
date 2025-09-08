"use client"

import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ClipLoader } from 'react-spinners';
import { useState } from "react"
import { useNavigate } from "react-router";

import { useEmail } from "@/hooks/auth/useEmail.hooks"
import { usePassword } from "@/hooks/auth/usePassword.hooks"
import { useMasterKey } from "@/hooks/auth/useMasterKey.hooks"

const SectionOtherSignin = () => {
    const { toast } = useToast()
    const [children, setChildren] = useState('CreerCompteAvecEmail')
    const [textChange, setTextChange] = useState('Bienvenue à nouveau')
    const [text, setText] = useState("Obtenez un compte pour vous connecter à BoltSecure.")
    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(false)
    const navigate = useNavigate()

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


    const handclickEmail = async () => {

        if (valueEmail) {
            console.log(valueEmail)
            const succes = await submitEmail()

            if (succes) {
                setBtnDisabled(true)
                setLoadingSpinner(true)
                setTimeout(() => {
                    setChildren('motDepasse')
                    setTextChange("Creer un mot de passe")
                    setText(`entrez un mot de passe securisé pour votre compte `)
                    setLoadingSpinner(false)
                    setBtnDisabled(false)
                }, 2000)
            }
            if (errorEmail) {
                console.log(errorEmail)
            }
        } else {
            toast({
                title: "We couldn't complete your request!",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

    const handclickPassword = async () => {
        if (valuePassword) {
            console.log(valuePassword)
            const success = await submitPassword()

            if (success) {
                setBtnDisabled(true)
                setLoadingSpinner(true)
                setTimeout(() => {
                    setChildren('masterKey')
                    setTextChange("Creer une clé de connexion")
                    setText(`entrez une clé de connexion pour votre compte `)
                    setLoadingSpinner(false)
                    setBtnDisabled(false)
                }, 2000);
            }
            if (errorPassword) {
                console.log(errorPassword)
            }
        } else {
            toast({
                title: "We couldn't complete your request!",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

    const handclickMasterKey = async () => {
        if (valueMasterKey) {
            console.log(valueMasterKey)
            const success = await submitMasterKey()

            if (success) {
                setBtnDisabled(true)
                setLoadingSpinner(true)
                setTimeout(() => {
                    setChildren('')
                    setBtnDisabled(false)
                    setLoadingSpinner(false)
                    navigate('/web')
                }, 2000)
            }
            if (errorMasterKey) {
                console.log(errorMasterKey)
            }
        } else {
            toast({
                title: "We couldn't complete your request!",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

    return (
        <div>
            <div className="bg-gray-900">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            aria-hidden="true"
                            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        >
                            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#ffff" />
                                    <stop offset={1} stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex lg:flex-col lg:justify-center lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                {
                                    textChange
                                }
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                {text}
                            </p>

                            {
                                children === "CreerCompteAvecEmail" ? (
                                    <div className="mt-10 flex flex-col space-y-4 sm:mt-12">
                                        <Input
                                            type="email"
                                            value={valueEmail}
                                            onChange={(e) => setValueEmail(e.target.value)}
                                            placeholder="Email"
                                            className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        />

                                        <Button
                                            className="w-full rounded-md px-5 py-2.5 text-sm cursor-pointer font-semibold text-white hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 "
                                            onClick={handclickEmail}
                                            disabled={btnDisabled}
                                        >
                                            {loadingSpinner ? (
                                                <ClipLoader
                                                    color="#ffff"
                                                    size={13}
                                                    speedMultiplier={2}
                                                />
                                            ) : 'Créer votre compte'}
                                        </Button>

                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <span className="flex-1 border-t border-gray-600"></span>
                                            <span>ou</span>
                                            <span className="flex-1 border-t border-gray-600"></span>
                                        </div>

                                        {/* Connexion avec Google */}
                                        <Button className="items-center cursor-pointer bg-white text-black hover:bg-white hover:opacity-70 justify-center whitespace-nowrap font-medium" type="button">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" className="flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                                c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                                C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                                c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                                c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg><span>Continuer avec Google</span>
                                        </Button>
                                        <p className="text-sm text-gray-400 text-center">
                                            Pas de compte ?{' '}
                                            <span className="font-semibold cursor-pointer text-white hover:text-gray-100" onClick={() => {
                                                setChildren("otpCode")
                                                setTextChange("Confirmez le code de confirmation")
                                            }}>
                                                {
                                                    children === "CreerCompteAvecEmail" ? "Inscrivez-vous" : ""
                                                }
                                            </span>
                                        </p>
                                    </div>
                                ) : children === "motDepasse" ? (
                                    <div className="mt-10 flex flex-col space-y-4 sm:mt-12">
                                        {/* Email */}
                                        <Input
                                            type="password"
                                            placeholder="mot de passe"
                                            value={valuePassword}
                                            onChange={(e) => setValuePassword(e.target.value)}
                                            className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        />
                                        {/* Bouton de connexion */}
                                        <Button
                                            className="w-full rounded-md px-5 py-2.5 text-sm cursor-pointer font-semibold text-white hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 "
                                            onClick={handclickPassword}
                                            disabled={btnDisabled}
                                        >
                                            {loadingSpinner ? (
                                                <ClipLoader
                                                    color="#ffff"
                                                    size={13}
                                                    speedMultiplier={2}
                                                />
                                            ) : 'Continuez'}
                                        </Button>

                                        {/* Ou divider */}
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <span className="flex-1 border-t border-gray-600"></span>
                                            <span>ou</span>
                                            <span className="flex-1 border-t border-gray-600"></span>
                                        </div>

                                        {/* Connexion avec Google */}
                                        <Button className="items-center cursor-pointer bg-white text-black hover:bg-white hover:opacity-70 justify-center whitespace-nowrap font-medium" type="button">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" className="flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                                                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                                                c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                                                C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                                                c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                                                c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg><span>Continuer avec Google</span>
                                        </Button>

                                        {/* Lien secondaire */}
                                        <p className="text-sm text-gray-400 text-center">
                                            Pas de compte ?{' '}
                                            <a href="#" className="font-semibold text-white hover:text-gray-100">
                                                Inscrivez-vous
                                            </a>
                                        </p>
                                    </div>
                                ) : (
                                    <div className="mt-10 flex flex-col space-y-4 sm:mt-12">
                                        {/* Email */}
                                        <Input
                                            type="password"
                                            value={valueMasterKey}
                                            onChange={(e) => setValueMasterKey(e.target.value)}
                                            placeholder="MaterKey"
                                            className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        />
                                        {/* Bouton de connexion */}
                                        <Button
                                            className="w-full rounded-md px-5 py-2.5 text-sm cursor-pointer font-semibold text-white hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 "
                                            onClick={handclickMasterKey}
                                            disabled={btnDisabled}
                                        >
                                            {loadingSpinner ? (
                                                <ClipLoader
                                                    color="#ffff"
                                                    size={13}
                                                    speedMultiplier={2}
                                                />
                                            ) : 'Inscrivez-vous'}
                                        </Button>

                                        {/* Ou divider */}
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <span className="flex-1 border-t border-gray-600"></span>
                                            <span>ou</span>
                                            <span className="flex-1 border-t border-gray-600"></span>
                                        </div>

                                        {/* Connexion avec Google */}
                                        <Button className="items-center cursor-pointer bg-white text-black hover:bg-white hover:opacity-70 justify-center whitespace-nowrap font-medium" type="button">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" className="flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                                                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                                                c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                                                C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                                                c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                                                c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg><span>Continuer avec Google</span>
                                        </Button>

                                        {/* Lien secondaire */}
                                        <p className="text-sm text-gray-400 text-center">
                                            Pas de compte ?{' '}
                                            <a href="#" className="font-semibold text-white hover:text-gray-100">
                                                Inscrivez-vous
                                            </a>
                                        </p>
                                    </div>
                                )
                            }
                        </div>


                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                alt="App screenshot"
                                src="https://www.gstatic.com/marketing-cms/assets/images/05/1f/ec5ae55b4ba4b88f4f7bd8a52b43/desktop-2x.webp=n-w1597-h1274-fcrop64=1,00000000ffffffff-rw"
                                width={1824}
                                height={1020}
                                className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionOtherSignin;
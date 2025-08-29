import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



export default function SectionOtherSignin() {
    return (
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
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex lg:flex-col lg:justify-center lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Bienvenue à nouveau
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Poursuivons votre voyage d'apprentissage.
                        </p>

                        <form className="mt-10 flex flex-col space-y-4 sm:mt-12">
                            {/* Email */}
                            <Input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            />

                            {/* Password */}
                            <Input
                                type="password"
                                placeholder="Mot de passe"
                                className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            />

                            {/* Bouton de connexion */}
                            <Button
                                type="submit"
                                className="w-full rounded-md px-5 py-2.5 text-sm cursor-pointer font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Se connecter
                            </Button>

                            {/* Ou divider */}
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <span className="flex-1 border-t border-gray-600"></span>
                                <span>ou</span>
                                <span className="flex-1 border-t border-gray-600"></span>
                            </div>

                            {/* Connexion avec Google */}
                            <Button className="items-center cursor-pointer justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-lg px-8 shadow-lg w-full text-md h-12 flex gap-2 bg-white dark:bg-neutral-800/20 text-primary border border-primary/10 hover:bg-primary/5 hover:dark:bg-primary/5" type="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" className="flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg><span>Continuer avec Google</span></Button>

                            {/* Lien secondaire */}
                            <p className="text-sm text-gray-400 text-center">
                                Pas de compte ?{' '}
                                <a href="#" className="font-semibold text-white hover:text-gray-100">
                                    Inscrivez-vous
                                </a>
                            </p>
                        </form>
                    </div>


                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            alt="App screenshot"
                            src="https://assets.cms.bolt.eu/Index_DT_Media_11_e4c0bc0c41_9c01312691.webp"
                            width={1824}
                            height={1080}
                            className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


"use client"
import { motion } from "framer-motion";
import TableExample from "@/components/comp-467";
// import NavbarComponentLanding from "@/components/pages/Navbar";
import NavbarApp from "@/components/pages/app/navbarApp";


// import { Upload, Link2, Mic, Box, MoreHorizontal, Plus } from "lucide-react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"


export default function BolstSecurePage() {
    return (
        <>
            <header>
                <NavbarApp />
            </header>
            <main>
                <motion.section
                    className="flex flex-col items-center justify-center min-h-[500px] bg-white px-4 text-center gap-6"
                    initial="hidden"
                    animate="visible"
                    // variants={fadeUp}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-xs text-gray-400 uppercase tracking-widest bg-gray-100 px-2 py-1 rounded-full">
                        Backed by Y Combinator
                    </span>

                    <motion.p
                        className="text-gray-600 max-w-xl animate__animated animate__fadeIn"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Store, generate, and manage your passwords safely in one place. Fast, encrypted, and accessible anywhere.
                    </motion.p>

                    <motion.div className="flex gap-4"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                        <div className="flex flex-col text-center 2xl:max-w-[672px] xl:max-w-[576px] md:max-w-[512px] w-full z-30">
                            <div className="sm:justify-center sm:items-center gap-3 sm:flex grid grid-cols-1 w-full">

                                <div className="flex-1 w-full sm:w-1/3">
                                    <div
                                        className="border text-card-foreground rounded-3xl group shadow-[0_4px_10px_rgba(0,0,0,0.02)] 
                                            hover:dark:border-neutral-700/40 bg-white dark:bg-neutral-800/50 cursor-pointer 
                                            transition-all duration-200 relative"
                                        data-state="closed"
                                    >
                                        <div
                                            className="absolute top-2 right-2 dark:text-[#3CB371] text-[#3CB371] text-xs rounded-full 
                                            px-2 py-0.5 font-normal bg-gradient-to-b from-[#3CB371]/10 to-[#3CB371]/5 
                                            dark:from-[#3CB371]/10 dark:to-[#3CB371]/5 backdrop-blur-sm border-t-[0.5px] 
                                            border-l-[0.5px] border-r-[0.25px] border-b-[0.5px] border-[#3CB371]/50 
                                            dark:border-[#3CB371] z-20"
                                        >
                                            Populaire
                                        </div>
                                        <div className="p-4 px-5 sm:h-[112px] flex flex-col sm:flex-col items-start justify-center gap-y-1">
                                            <div className="flex items-center gap-x-3 sm:block space-y-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-upload h-6 w-6 text-primary/70 dark:text-primary/80 
                         group-hover:text-primary transition-colors sm:mb-2 flex-shrink-0"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                    <polyline points="17 8 12 3 7 8"></polyline>
                                                    <line x1="12" x2="12" y1="3" y2="15"></line>
                                                </svg>
                                                <div className="flex flex-col justify-center">
                                                    <div className="flex items-center gap-x-1">
                                                        <h3
                                                            className="font-medium text-sm sm:text-base text-left text-primary/70 
                             dark:text-primary/80 group-hover:text-primary transition-colors"
                                                        >
                                                            Télécharger
                                                        </h3>
                                                    </div>
                                                    <p
                                                        className="text-xs sm:text-sm group-hover:text-primary/80 text-left text-primary/50 
                           dark:text-primary/60 transition-colors"
                                                    >
                                                        Fichier, audio, vidéo
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 w-full sm:w-1/3">
                                    <div
                                        className="border text-card-foreground rounded-3xl group shadow-[0_4px_10px_rgba(0,0,0,0.02)] 
                                            hover:dark:border-neutral-700/40 bg-white dark:bg-neutral-800/50 cursor-pointer 
                                            transition-all duration-200 relative"
                                        data-state="closed"
                                    >
                                        <div className="p-4 px-5 sm:h-[112px] flex flex-col sm:flex-col items-start justify-center gap-y-1">
                                            <div className="flex items-center gap-x-3 sm:block space-y-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-link2 lucide-link-2 h-6 w-6 text-primary/70 dark:text-primary/80 
                         group-hover:text-primary transition-colors sm:mb-2 flex-shrink-0"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                                                    <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                                                    <line x1="8" x2="16" y1="12" y2="12"></line>
                                                </svg>
                                                <div className="flex flex-col justify-center">
                                                    <div className="flex items-center gap-x-1">
                                                        <h3
                                                            className="font-medium text-sm sm:text-base text-left text-primary/70 
                             dark:text-primary/80 group-hover:text-primary transition-colors"
                                                        >
                                                            Coller
                                                        </h3>
                                                    </div>
                                                    <p
                                                        className="text-xs sm:text-sm group-hover:text-primary/80 text-left text-primary/50 
                           dark:text-primary/60 transition-colors"
                                                    >
                                                        YouTube, site web, texte
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex-1 w-full sm:w-1/3">
                                    <div
                                        className="border text-card-foreground rounded-3xl group shadow-[0_4px_10px_rgba(0,0,0,0.02)] 
                   hover:dark:border-neutral-700/40 bg-white dark:bg-neutral-800/50 cursor-pointer 
                   transition-all duration-200 relative"
                                        data-state="closed"
                                    >
                                        <div className="p-4 px-5 sm:h-[112px] flex flex-col sm:flex-col items-start justify-center gap-y-1">
                                            <div className="flex items-center gap-x-3 sm:block space-y-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-mic h-6 w-6 text-primary/70 dark:text-primary/80 
                         group-hover:text-primary transition-colors sm:mb-2 flex-shrink-0"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                                    <line x1="12" x2="12" y1="19" y2="22"></line>
                                                </svg>
                                                <div className="flex flex-col justify-center">
                                                    <div className="flex items-center gap-x-1">
                                                        <h3
                                                            className="font-medium text-sm sm:text-base text-left text-primary/70 
                             dark:text-primary/80 group-hover:text-primary transition-colors"
                                                        >
                                                            Enregistrer
                                                        </h3>
                                                    </div>
                                                    <p
                                                        className="text-xs sm:text-sm group-hover:text-primary/80 text-left text-primary/50 
                           dark:text-primary/60 transition-colors"
                                                    >
                                                        Enregistrer un cours, un appel vidéo
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div className="flex items-center gap-2 text-gray-500 text-sm" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                        <div className="flex -space-x-2">
                            <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=1" alt="A" />
                            <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=2" alt="R" />
                            <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=3" alt="Z" />
                            <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=4" alt="A" />
                        </div>
                        <span>Loved by 1,000,000+ users</span>
                    </motion.div>
                </motion.section>


                <motion.section
                    transition={{ duration: 0.8 }}
                >
                    <motion.div className=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="sm:px-10 lg:px-24 xl:px-36 mt-8 w-full relative">
                            <div className="flex flex-col gap-6 mb-12">
                                <div className="w-full mb-10">
                                    <div className="text-left w-full flex items-center gap-2 text-base lg:text-lg">
                                        <span className="items-end">Espaces</span>
                                    </div>
                                    <div className="mt-4">
                                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 py-1">
                                            <a href="/space/8f76c0ad71634000">
                                                <div className="group w-full text-primary/80 hover:text-primary flex flex-row justify-between items-center p-3 rounded-2xl border shadow-[0_4px_10px_rgba(0,0,0,0.02)] hover:dark:border-neutral-700/40 bg-white dark:bg-neutral-800/50 cursor-pointer transition-all duration-200"><div className="flex flex-row space-x-3 items-center flex-1 truncate"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-box flex-shrink-0 h-4 w-4" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg><div className="flex flex-col space-y-1 truncate flex-1"><span className="truncate text-sm tracking-wide font-medium">Yann's Space</span><div className="text-xs text-muted-foreground">0 <span className="lowercase">contenu</span></div></div></div><div className="flex flex-row items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis w-3.5 h-3.5 flex-shrink-0 opacity-100 xl:opacity-0 group-hover:opacity-100 text-primary" type="button" id="radix-_r_u9_" aria-haspopup="menu" aria-expanded="false" data-state="closed"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div></div></a><a href="/space/07227cce6b154933"><div className="group w-full text-primary/80 hover:text-primary flex flex-row justify-between items-center p-3 rounded-2xl border shadow-[0_4px_10px_rgba(0,0,0,0.02)] hover:dark:border-neutral-700/40 bg-white dark:bg-neutral-800/50 cursor-pointer transition-all duration-200"><div className="flex flex-row space-x-3 items-center flex-1 truncate"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-box flex-shrink-0 h-4 w-4" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg><div className="flex flex-col space-y-1 truncate flex-1"><span className="truncate text-sm tracking-wide font-medium">Espace sans titre</span><div className="text-xs text-muted-foreground">0 <span className="lowercase">contenu</span></div></div></div><div className="flex flex-row items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis w-3.5 h-3.5 flex-shrink-0 opacity-100 xl:opacity-0 group-hover:opacity-100 text-primary" type="button" id="radix-_r_ub_" aria-haspopup="menu" aria-expanded="false" data-state="closed"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div></div></a><button className="w-full lg:w-[66px] h-[66px] bg-transparent hover:border-primary/20 dark:text-neutral-400 text-neutral-600 dark:hover:text-neutral-50 hover:text-neutral-900 hover:text-primary border-dashed border-2 border-primary/10 dark:border-primary/20 flex items-center justify-start lg:justify-center p-3.5 cursor-pointer transition-all duration-200 rounded-2xl drop-shadow-sm gap-2" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus h-6 w-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg><span className="lg:hidden block text-sm font-medium">Créer un espace</span></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                <motion.section className="sm:px-10 lg:px-24 xl:px-36 w-full relative"
                    transition={{ duration: 0.8 }}
                >
                    <motion.div className="mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="text-left w-full flex justify-between items-center mb-4">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="text-base lg:text-lg">Explorer</span>
                                    <div className="cursor-pointer" data-state="closed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-refresh-cw w-4 h-4 text-primary/60 hover:text-primary" aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg></div></div></div>
                            <a className="self-center" href="/explore"><button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-9 rounded-lg px-3 text-xs sm:text-sm border-none font-normal hover:bg-transparent hover:text-primary/70"><span>Voir tous</span></button></a>
                        </div>
                    </motion.div>
                    <motion.div className="border p-5 rounded-3xl flex flex-col text-center 2xl:max-w-[672px] xl:max-w-[1076px] md:max-w-[712px] w-full z-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <TableExample />
                    </motion.div>
                </motion.section>
                <section className="mt-12"></section>
            </main>
        </>
    );
}



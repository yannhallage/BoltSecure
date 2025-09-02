
"use client"
import { motion } from "framer-motion";

import TableExample, { TableExampleForDocuments } from "@/components/TableExample";
// import NavbarComponentLanding from "@/components/pages/Navbar";
import NavbarApp from "@/components/pages/app/navbarApp";
import { Settings, Trash2, Download } from 'lucide-react';

import ToolitpPassword, { ToolitpCreditCards, ToolitpPasskeys, ToolitpButtonCreeFolder } from "@/components/comp-357";
import MenuWithIcons from "@/components/MenuWithIcons";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
import { DropdownMenuDemo } from "@/components/pages/app/DropdownMenuDemo";
import SettingsDialog from "@/components/pages/app/SettingsDialog";


export default function BolstSecurePage() {
    const [folderChange, setFolderChange] = useState<boolean>(true)

    const DocumentSelect = [
        {
            id: 1,
            name: "Yann's Space",
            contenu: 2,
            // icon: <Download className="w-6 h-6 text-gray-400" />
        },
        {
            id: 2,
            name: "Document 2",
            contenu: 2,
            // icon: <Download className="w-6 h-6 text-gray-400" />
        },
        {
            id: 3,
            name: "Document 3",
            contenu: 2,
            // icon: <Download className="w-6 h-6 text-gray" />
        }
    ]
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
                        Stockez, générez et gérez vos mots de passe en toute sécurité en un seul endroit. Rapide, crypté et accessible partout.
                    </motion.p>

                    <motion.div className="flex gap-4"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                        <div className="flex flex-col text-center 2xl:max-w-[672px] xl:max-w-[576px] md:max-w-[512px] w-full z-30">
                            <div className="sm:justify-center sm:items-center gap-3 sm:flex grid grid-cols-1 w-full">
                                <ToolitpPassword
                                />
                                <ToolitpCreditCards
                                />
                                <ToolitpPasskeys
                                />
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

                    <motion.div className=""
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                    >
                        {/* <FloatingDockDemo /> */}
                        <div className="border space-x-4  p-3 flex bg-gray-100 rounded-3xl shadow-md text-xs sm:text-sm group-hover:text-primary/80 text-left text-primary/50 
                           dark:text-primary/60 transition-colors" style={{ width: "100%" }}>
                            <div className="flex items-center text-sm font-mono gap-2">
                                <Settings
                                    className="cursor-pointer"
                                    size={14}
                                />
                                {"parameters"}
                            </div>
                            <div className="flex items-center text-sm font-mono gap-2">
                                <Trash2
                                    className="cursor-pointer"
                                    size={14}
                                />
                                {"Trash"}
                            </div>
                            <div className="flex items-center text-sm font-mono gap-2">
                                <Download
                                    className="cursor-pointer"
                                    size={14}
                                />
                                {"download"}
                            </div>
                        </div>
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
                                        <span className="items-end">Documents</span>
                                    </div>
                                    <div className="mt-4">
                                        <div onClick={() => setFolderChange(!folderChange)} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 py-1">
                                            {
                                                DocumentSelect.map((item) => {
                                                    return (
                                                        <motion.div className=""
                                                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                                                        >
                                                            <span>
                                                                <div className="group w-full text-primary/80 hover:text-primary flex flex-row justify-between items-center p-3 rounded-2xl border shadow-[0_4px_10px_rgba(0,0,0,0.02)] hover:dark:border-neutral-700/40 bg-white dark:bg-neutral-800/50 cursor-pointer transition-all duration-200">
                                                                    <div className="flex flex-row space-x-3 items-center flex-1 truncate">
                                                                        <img width={50}
                                                                            src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-6TJq3TblGrgJLKvMLFj3N2YcDEXG2A.png&w=500&q=75"
                                                                            alt="" />
                                                                        <div className="flex flex-col space-y-1 truncate flex-1">
                                                                            <span className="truncate text-sm tracking-wide font-medium"> 
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </span>
                                                                            <div className="text-xs text-muted-foreground">
                                                                                { item.contenu}<span className="lowercase"> contenu</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-row items-center gap-2">
                                                                        <MenuWithIcons />
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </motion.div>
                                                    )
                                                })
                                            }
                                            < ToolitpButtonCreeFolder
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                <motion.section className="lg:px-24 xl:px-36 w-full relative"
                >
                    <motion.div className="mb-6"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                    >
                        <div className="text-left w-full flex justify-between items-center mb-4">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="text-base lg:text-lg">
                                        {
                                            folderChange ? (
                                                <div className="cursor-pointer flex flex-row space-x-2 items-center" data-state="closed">
                                                    <span>Explorer</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-refresh-cw w-4 h-4 text-primary/60 hover:text-primary" aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path>
                                                    </svg>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="flex flex-row space-x-2 items-center">
                                                        <img src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-6TJq3TblGrgJLKvMLFj3N2YcDEXG2A.png&w=500&q=75"
                                                            alt=""
                                                            width={25}
                                                        />
                                                        <span className="text-xl lg:text-[15px]">documents</span>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                            <a className="self-center">
                                {
                                    folderChange ? (
                                        <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-9 rounded-lg px-3 text-xs sm:text-sm border-none font-normal hover:bg-transparent hover:text-primary/70"><span>Voir tous</span>
                                        </button>
                                    ) : (

                                        <DropdownMenuDemo />
                                    )
                                }
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="border p-5 rounded-3xl flex flex-col text-center 2xl:max-w-[672px] xl:max-w-[1076px] md:max-w-[712px] w-full z-30"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                    >
                        {
                            folderChange ? (
                                <TableExample />
                            ) : (
                                <TableExampleForDocuments />
                            )
                        }
                    </motion.div>
                </motion.section>
                <section className="mt-12"></section>
            </main>
        </>
    );
}



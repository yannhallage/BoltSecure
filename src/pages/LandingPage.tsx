"use client";

import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import NavbarComponentLanding from "@/components/pages/Navbar";

import { Button } from "../components/ui/button";
import { TextGenerateEffectDemo } from "../components/pages/TextGenerateEffectDemo";
import 'animate.css';
import HeaderSection from "../components/pages/HeaderSection";
import SectionOther from "../components/pages/SectionOther";

import SectionLogoCloud from "../components/pages/SectionLogoCloud";
import { InfiniteMovingCardsDemo } from "../components/pages/InfiniteMovingCardsDemo";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <NavbarComponentLanding />
            </header>

            {/* Hero Section */}
            <motion.section
                className="flex flex-col items-center justify-center min-h-[500px] bg-white px-4 text-center gap-6"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.8 }}
            >
                <span className="text-xs text-gray-400 uppercase tracking-widest bg-gray-100 px-2 py-1 rounded-full">
                    Backed by Y Combinator
                </span>

                <h1 className="text-4xl sm:text-5xl font-bold text-black">
                    <TextGenerateEffectDemo
                        text={'Sécurisez vos mots de passe, sans effort'} />
                </h1>

                <motion.p
                    className="text-gray-600 max-w-xl animate__animated animate__fadeIn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Stockez, générez et gérez vos mots de passe en toute sécurité, en un seul endroit. Rapide, chiffré et accessible partout.
                </motion.p>

                <motion.div className="flex gap-4 mt-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                    <Button className="bg-white border rounded-full border-gray-300 text-gray-800 hover:bg-gray-100">
                        Voir les fonctionnalités
                    </Button>
                    <Button className="rounded-full text-white bg-[#112E70] cursor-pointer"
                        onClick={() => {
                            navigate("/Signin");
                        }}
                    >
                        Commencer
                    </Button>
                </motion.div>

                <motion.div className="flex items-center gap-2 mt-6 text-gray-500 text-sm" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                    <div className="flex -space-x-2">
                        <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=1" alt="A" />
                        <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=2" alt="R" />
                        <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=3" alt="Z" />
                        <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=4" alt="A" />
                    </div>
                    <span>Loved by 1,000,000+ users</span>
                </motion.div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                className="bg-gray-50 py-16 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-center mb-12">Des fonctionnalités qui vous simplifient la vie</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { title: "Générateur de mot de passe", desc: "Générez instantanément des mots de passe forts et uniques pour tous vos comptes." },
                        { title: "Stockage sécurisé", desc: "Tous vos mots de passe sont cryptés et stockés en toute sécurité dans le cloud." },
                        { title: "Remplissage automatique", desc: "Remplissez automatiquement les formulaires de connexion et gagnez du temps sur tous les appareils et navigateurs." },
                        { title: "Partage sécurisé", desc: "Partagez les mots de passe avec les membres de l’équipe en toute sécurité sans les exposer en texte clair." },
                        { title: "Accès multi-appareils", desc: "Accédez à vos mots de passe sur ordinateur, mobile ou tablette en toute transparence. "},
                        { title: "Alertes de sécurité", desc: "Soyez averti si l’un de vos mots de passe est compromis en ligne." },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <section >
                <SectionLogoCloud
                />
            </section>
            {/* Security Section */}
            <motion.section
                className="flex flex-col lg:flex-row items-center justify-center bg-white px-4 py-16 gap-8 max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
            >
                <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <img
                        src="https://www.gstatic.com/marketing-cms/assets/images/84/83/ed82a79f48108fb5a26495f5567e/laptop-2x.webp=n-w1493-h788-fcrop64=1,00000000ffffffff-rw"
                        alt="Security illustration"
                        className="w-full rounded-xl shadow"
                    />
                </motion.div>
                <motion.div className="lg:w-1/2 flex flex-col gap-4" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-3xl font-bold">Sécurité de premier ordre</h2>
                    <p className="text-gray-600">
                        Nous utilisons le chiffrement AES-256 et une architecture à connaissance nulle. Votre mot de passe principal reste toujours sur votre appareil.
                    </p>
                    <Button className="bg-[#112E70] cursor-pointer text-white rounded-full w-fit mt-4 hover:bg-gray-900">
                        En savoir plus
                    </Button>
                </motion.div>
            </motion.section>

            {/* User Features Section */}
            <motion.section
                className="bg-white py-16 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-center mb-12">
                    Fonctionnalités Utilisateur de BoltSecure
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "1. Gestion des identifiants",
                            items: [
                                "Ajouter un identifiant/mot de passe (ex : Gmail, Facebook, LinkedIn…)",
                                "Modifier un identifiant/mot de passe existant",
                                "Supprimer un identifiant/mot de passe",
                                "Organiser ses identifiants par catégories (travail, perso, social, etc.)",
                                "Rechercher un identifiant rapidement",
                            ],
                        },
                        {
                            title: "2. Sécurité & Authentification",
                            items: [
                                "Connexion avec un mot de passe maître (Master Password)",
                                "Possibilité d’ajouter une authentification à deux facteurs (2FA)",
                                "Chiffrement/déchiffrement local (AES, PBKDF2/Argon2)",
                                "Déconnexion automatique après une période d’inactivité",
                            ],
                        },
                        {
                            title: "3. Interface Web",
                            items: [
                                "Accéder à tous ses identifiants via un tableau de bord",
                                "Modifier, supprimer, ou consulter ses données",
                                "Générateur de mots de passe sécurisés",
                                "Historique des modifications (optionnel)",
                                "Paramètres de sécurité (changer mot de passe maître, activer 2FA, etc.)",
                            ],
                        },
                        {
                            title: "4. Extension Navigateur",
                            items: [
                                "Détection automatique des champs login/password sur les sites",
                                "Proposition de remplissage automatique (auto-fill)",
                                "Enregistrement automatique de nouveaux identifiants",
                                "Consultation rapide des mots de passe enregistrés sans aller sur le site principal",
                                "Synchronisation avec l’application web (via API sécurisée)",
                            ],
                        },
                        {
                            title: "5. Extras (optionnels)",
                            items: [
                                "Notifications de sécurité (mot de passe faible, fuite connue)",
                                "Mode hors-ligne (accès aux données déjà déchiffrées en cache)",
                                "Exportation/importation chiffrée des données",
                                "Partage sécurisé d’un mot de passe avec un autre utilisateur",
                            ],
                        },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <h3 className="font-semibold text-xl mb-4">{feature.title}</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {feature.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <section>
                <HeaderSection
                />
            </section>

            <motion.section className="py-16 px-4 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-12">Built for any use case</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            img: "https://www.gstatic.com/marketing-cms/assets/images/05/1f/ec5ae55b4ba4b88f4f7bd8a52b43/desktop-2x.webp=n-w1597-h1274-fcrop64=1,00000000ffffffff-rw",
                            title: "The Genetic Code and Translation",
                            desc: "Explore the basics of DNA transcription and protein synthesis."
                        },
                        {
                            img: "https://www.gstatic.com/marketing-cms/assets/images/09/fe/fc52f17d4cfb9f43aa65d27f3b2b/tablet-2x.webp=n-w1103-h990-fcrop64=1,00000000ffffffff-rw",
                            title: "Cellular Respiration",
                            desc: "Understand how cells generate energy efficiently."
                        },
                        {
                            img: "https://www.gstatic.com/marketing-cms/assets/images/a3/97/1b7cfa434368b71097c5278bc06d/phone-2x.webp=s784-fcrop64=1,00000000ffffffff-rw",
                            title: "Genetic Mutations",
                            desc: "Learn how mutations affect organisms and evolution."
                        },
                    ].map((item, i) => (
                        <div key={i} className="space-y-4 flex flex-col items-center">
                            <div className="rounded-2xl p-3 flex items-center justify-center shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="rounded-2xl object-cover w-full h-64 md:h-48"
                                />
                            </div>
                            <div className="text-left max-w-xs">
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            <section>
                <SectionOther
                />
            </section>

            <section>
                <InfiniteMovingCardsDemo
                />
            </section>

            <section className="flex flex-col items-center justify-center border rounded-2xl bg-gray-50 py-16 px-4 text-center gap-6">
                <h2 className="text-3xl font-bold">Start securing your passwords today</h2>
                <p className="text-gray-600 font-myfont max-w-xl">
                    Join millions of users who trust us to keep their digital lives safe and organized.
                </p>
                <Button className="bg-black text-white rounded-full mt-4 hover:bg-gray-900"
                    onClick={() => {
                        navigate("/Signin");
                    }}
                >
                    Get Started
                </Button>
            </section>
        </>
    );
};

export default LandingPage;

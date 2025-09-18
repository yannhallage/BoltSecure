"use client";
import { Label } from "@/components/ui/label"
import { CopyPlus } from 'lucide-react';

import { PasswordZod } from "@/types/web/interface.type";
import { z } from "zod";
import { XCircle, Save } from "lucide-react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";


import { useEffect, useRef, useState } from 'react';
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ClipLoader } from 'react-spinners';

import {
    Home,
    Lock,
    Folder,
    CreditCard,
    Settings,
    HelpCircle,
    Download,
    ChevronDown,
    LogOut,
    User,
    Trash2,
    BookOpen,
    Repeat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import TableExample, { TableExampleForDocuments } from "@/components/others/TableExample";

import { Checkbox } from "@/components/ui/checkbox";
import CreerFolders from "@/components/others/CreerFolders";
import { motion } from "framer-motion";
import { createPassword } from "@/hooks/web/password/useCreatePassword";
import { getSession, removeSession } from "@/lib/localstorage";
import { useCreditCard } from "@/hooks/web/creditCarte/useCreditCard";

enum View {
    Main = "MainComponent",
    AddPassword = "AddPassword",
    Passwords = "PassordsComponent",
    CrediCards = "CreditCardsComponent",
    TrashComponent = "TrashComponent",
    CreditCard = "CreditCardAdd",
}


export default function Layout() {
    const [openFolders, setOpenFolders] = useState(false);
    const [stateOfChange, setStateOfChange] = useState<string>("MainComponent");
    const [message, setMessage] = useState("");
    const navigate = useNavigate()
    const handleclickHome = () => setStateOfChange(View.Main);
    const handleclickPassword = () => setStateOfChange(View.AddPassword);
    const handleclickCreditCards = () => setStateOfChange(View.CreditCard);
    const handleclickTrash = () => setStateOfChange(View.TrashComponent);
    const { Email } = getSession()
    const [active, setActive] = useState("home")


    useEffect(() => {
        if (message === "PassordsComponent") {
            setStateOfChange(View.Passwords)
            console.log(message)
            setMessage("");
        }
        if (message === "CreditCardsComponent") {
            setStateOfChange(View.CrediCards)
            console.log(message)
            setMessage("");
        }
    }, [message])

    return (
        <div className="flex h-screen">
            {/* Sidebar fixe */}
            <aside className="w-64 border-r border-gray-100 rounded-r-2xl 
                bg-gradient-to-b from-white via-gray-50 to-white 
                p-4 flex flex-col justify-between fixed inset-y-0 left-0 
                shadow-[0_2px_10px_rgba(0,0,0,0.05)]">

                {/* Top: Logo + Navigation */}
                <div className="overflow-y-auto h-full bg-transparent p-4">
                    <h1 className="text-2xl font-extrabold mb-8 tracking-tight text-gray-900">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
                            BoltSecure
                        </span>
                    </h1>

                    <nav className="space-y-1">
                        <Button
                            variant="ghost"
                            className={`w-full justify-start cursor-pointer rounded-xl px-3 py-2 transition-all duration-200
                ${active === "home"
                                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 shadow-sm"
                                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/60"}`}
                            onClick={() => {
                                setActive("home")
                                handleclickHome()
                            }}
                        >
                            <Home className="mr-2 h-5 w-5 opacity-80" /> Home
                        </Button>

                        <Button
                            variant="ghost"
                            className={`w-full justify-start cursor-pointer rounded-xl px-3 py-2 transition-all duration-200
                ${active === "passwords"
                                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 shadow-sm"
                                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/60"}`}
                            onClick={() => {
                                setActive("passwords")
                                handleclickPassword()
                            }}
                        >
                            <Lock className="mr-2 h-5 w-5 opacity-80" /> Passwords
                        </Button>

                        <Button
                            variant="ghost"
                            className={`w-full justify-start cursor-pointer rounded-xl px-3 py-2 transition-all duration-200
                ${active === "creditcards"
                                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 shadow-sm"
                                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/60"}`}
                            onClick={() => {
                                setActive("creditcards")
                                handleclickCreditCards()
                            }}
                        >
                            <CreditCard className="mr-2 h-5 w-5 opacity-80" /> Credit Cards
                        </Button>

                        <Separator className="my-4" />

                        {/* Folders avec toggle */}
                        <div>
                            <Button
                                variant="ghost"
                                className="w-full justify-between text-gray-700 cursor-pointer hover:text-blue-600 hover:bg-blue-50/60 rounded-xl px-3 py-2 transition-all duration-200"
                                onClick={() => setOpenFolders(!openFolders)}
                            >
                                <span className="flex items-center">
                                    <Folder className="mr-2 h-5 w-5 opacity-80" /> Folders
                                </span>
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${openFolders ? "rotate-180" : ""}`}
                                />
                            </Button>
                            {openFolders && (
                                <div className="ml-6 mt-2 space-y-1">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-sm text-gray-600 cursor-pointer hover:text-blue-600 hover:bg-blue-50/60 rounded-lg px-3 py-1.5 transition-all"
                                    >
                                        Folder 1
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-sm text-gray-600 cursor-pointer hover:text-blue-600 hover:bg-blue-50/60 rounded-lg px-3 py-1.5 transition-all"
                                    >
                                        Folder 2
                                    </Button>
                                </div>
                            )}
                        </div>

                        <Separator className="my-4" />

                        <Button
                            variant="ghost"
                            className={`w-full justify-start rounded-xl px-3 py-2 transition-all duration-200
                ${active === "download"
                                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 shadow-sm"
                                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/60"}`}
                            onClick={() => setActive("download")}
                        >
                            <Download className="mr-2 h-5 w-5 opacity-80" /> Download
                        </Button>

                        <Button
                            variant="ghost"
                            className={`w-full justify-start rounded-xl px-3 py-2 transition-all duration-200
                ${active === "settings"
                                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 shadow-sm"
                                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/60"}`}
                            onClick={() => setActive("settings")}
                        >
                            <Settings className="mr-2 h-5 w-5 opacity-80" /> Settings
                        </Button>

                        <Button
                            variant="ghost"
                            className={`w-full justify-start rounded-xl px-3 py-2 transition-all duration-200
                ${active === "support"
                                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 shadow-sm"
                                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/60"}`}
                            onClick={() => setActive("support")}
                        >
                            <HelpCircle className="mr-2 h-5 w-5 opacity-80" /> Support
                        </Button>

                        <Separator className="my-4" />

                        <Button
                            variant="ghost"
                            className={`w-full justify-start rounded-xl px-3 py-2 transition-all duration-200
                ${active === "trash"
                                    ? "bg-red-50 text-red-700 shadow-sm"
                                    : "text-red-600 hover:text-red-700 hover:bg-red-50/70"}`}
                            onClick={() => {
                                setActive("trash")
                                handleclickTrash()
                            }}
                        >
                            <Trash2 className="mr-2 h-5 w-5 opacity-80" /> Trash
                        </Button>
                    </nav>
                </div>

                {/* Bottom: Profil utilisateur */}
                <div className="mt-6 border border-gray-100 rounded-2xl p-2 bg-gradient-to-r from-white to-gray-50 backdrop-blur-sm cursor-pointer hover:bg-gray-50 transition shadow-sm">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="w-full justify-between px-2 py-2 rounded-xl hover:bg-gray-50/70 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <Avatar className="h-9 w-9 ring-1 ring-gray-200">
                                        <AvatarImage src="https://i.pravatar.cc/40" alt="Olivia Rhye" />
                                        <AvatarFallback>OR</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col text-left">
                                        <span className="text-sm font-semibold text-gray-900">
                                            Olivia Rhye
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {Email ? Email : 'olivia@untitledui.com'}
                                        </span>
                                    </div>
                                </div>
                                <ChevronDown className="h-4 w-4 opacity-60" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 rounded-xl shadow-lg border border-gray-100" align="end">
                            <DropdownMenuLabel className="text-xs uppercase text-gray-500">Mon compte</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" /> View profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" /> Account settings
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BookOpen className="mr-2 h-4 w-4" /> Documentation
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel className="text-xs uppercase text-gray-500">Switch account</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <Avatar className="mr-2 h-6 w-6 ring-1 ring-gray-200">
                                    <AvatarImage src="https://i.pravatar.cc/41" alt="Olivia Rhye" />
                                    <AvatarFallback>OR</AvatarFallback>
                                </Avatar>
                                Olivia Rhye
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Avatar className="mr-2 h-6 w-6 ring-1 ring-gray-200">
                                    <AvatarImage src="https://i.pravatar.cc/42" alt="Sienna Hewitt" />
                                    <AvatarFallback>SH</AvatarFallback>
                                </Avatar>
                                Sienna Hewitt
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Repeat className="mr-2 h-4 w-4" /> Add account
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500 cursor-pointer" onClick={() => {
                                removeSession()
                                navigate("/auth");
                            }}>
                                <LogOut className="mr-2 h-4 w-4" /> Sign out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </aside>


            {/* Contenu principal scrollable */}
            <main className="ml-64 flex-1 h-screen overflow-y-auto bg-[#EFEEEA] p-6 space-y-6">
                {stateOfChange === 'MainComponent' && <MainComponent />}
                {stateOfChange === 'AddPassword' && <AddPassword setMessage={setMessage} />}
                {stateOfChange === 'PassordsComponent' && <PasswordsComponent />}
                {stateOfChange === 'TrashComponent' && <TrashComponent />}
                {stateOfChange === 'CreditCardsComponent' && <CreditCardAddComponent />}
                {stateOfChange === 'CreditCardAdd' && <CreditCardAdd setMessage={setMessage} />}
            </main>
        </div>
    );
}



function AddPassword({ setMessage }: { setMessage: (msg: string) => void }) {
    return (
        <div className="flex items-center justify-center h-[500px]">
            <Card className=" border-none shadow-xl text-center">
                <CardContent className="flex flex-col items-center gap-4 p-8">
                    {/* Icône */}
                    <div className="bg-lime-400 rounded-xl p-4 flex items-center justify-center">
                        <Lock className="w-8 h-8 text-black" />
                    </div>

                    {/* Texte */}
                    <div>
                        <h2 className="text-black text-lg font-semibold mt-4">
                            Ajouter un nouveal mot de passe
                        </h2>
                        <p className="text-gray-400 text-[16px] mt-1">
                            Ajoutez vos mots de passe et accédez-y sur n'importe quel appareil, à tout moment
                        </p>
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-6">
                        <Button variant="default" className="w-full text-white cursor-pointer bg-black hover:bg-gray-700"
                            onClick={() => setMessage("PassordsComponent")}
                        >
                            Ajouter un mot de passe
                        </Button>
                        <Button variant="secondary" className="w-full  text-black cursor-pointer">
                            Importer un mot de passe
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function CreditCardAdd({ setMessage }: { setMessage: (msg: string) => void }) {
    return (
        <div className="flex items-center justify-center h-[500px]">
            <Card className=" border-none shadow-xl text-center">
                <CardContent className="flex flex-col items-center gap-4 p-8">
                    {/* Icône */}
                    <div className="bg-lime-400 rounded-xl p-4 flex items-center justify-center">
                        <CreditCard className="w-8 h-8 text-black" />
                    </div>

                    {/* Texte */}
                    <div>
                        <h2 className="text-black text-lg font-semibold mt-4">
                            Carte de Credit
                        </h2>
                        <p className="text-gray-400 text-[16px] mt-1">
                            Ajoutez les détails de votre carte de crédit pour les remplir <br /> automatiquement lors de vos achats en ligne
                        </p>
                    </div>

                    {/* Boutons */}
                    <div className="w-full flex flex-col gap-2 mt-6">
                        <Button variant="default" className="w-full text-white cursor-pointer bg-black hover:bg-gray-700"
                            onClick={() => setMessage("CreditCardsComponent")}
                        >
                            Ajouter une carte de Credit
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function MainComponent() {

    const dossiersCree = [
        {
            title: "Pages per session",
            value: "316",
            growth: "+6.0%",
            growthColor: "text-green-600 bg-green-100",
            icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-6TJq3TblGrgJLKvMLFj3N2YcDEXG2A.png&w=500&q=75"
        },
        {
            title: "Users online",
            value: "120",
            growth: "-3.5%",
            growthColor: "text-red-600 bg-red-100",
            icon: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        },
        {
            title: "Conversions",
            value: "58",
            growth: "+12.4%",
            growthColor: "text-green-600 bg-green-100",
            icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
        },
    ]
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold tracking-tight text-gray-800">
                    Dossiers
                </h2>
                <div className="flex items-center gap-2">
                    <CreerFolders />
                    <Button className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium px-4 py-2 rounded-lg shadow hover:shadow-md transition">
                        <div className="flex items-center gap-2">
                            <span>Export report</span>
                        </div>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {dossiersCree.length > 0 &&
                    dossiersCree.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <Card className="border border-gray-100 rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition duration-300">
                                {/* Header */}
                                <CardHeader className="flex items-center justify-between pb-2">
                                    <CardTitle className="text-base font-semibold text-gray-800">
                                        {item.title}
                                    </CardTitle>
                                    <button className="p-1 rounded-full hover:bg-red-100 transition">
                                        <Trash2 className="w-5 h-5 cursor-pointer text-gray-400 hover:text-red-600" />
                                    </button>
                                </CardHeader>

                                {/* Content */}
                                <CardContent className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gradient-to-tr from-lime-200 to-lime-100 rounded-full p-2 flex items-center justify-center shadow-inner">
                                            <img
                                                width={28}
                                                src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-6TJq3TblGrgJLKvMLFj3N2YcDEXG2A.png&w=500&q=75"
                                                alt="pages"
                                            />
                                        </div>
                                        <p className="text-lg text-gray-800 font-semibold">
                                            {item.value}
                                        </p>
                                    </div>

                                    <p className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded-lg shadow-sm">
                                        {item.growth}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
            </div>

            <Card className="border border-gray-100 shadow-sm rounded-xl">
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-gray-800">
                        All items
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between mb-4">
                        <Input
                            placeholder="Search"
                            className="w-64 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <Button
                            variant="outline"
                            className="rounded-lg border-gray-200 hover:bg-blue-50 hover:text-blue-600 transition"
                        >
                            Filters
                        </Button>
                    </div>
                    <TableExample />
                </CardContent>
            </Card>
        </>
    )
}

function PasswordsComponent() {
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [website, setWebsite] = useState("");
    const [folder, setFolder] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const { user } = getSession()

    const handleCancel = () => {
        setTitle("");
        setEmail("");
        setPassword("");
        setWebsite("");
        setFolder("");

        setTimeout(() => {
            window.location.reload()
        }, 900)
    };

    const handleSave = async () => {
        if (!user) return;

        // Vérification des champs vides
        if (!title.trim() || !email.trim() || !password.trim()) {
            toast.error("Titre, email et mot de passe sont obligatoires !");
            return;
        }

        if (password.trim().length < 6) {
            toast.error("Le mot de passe doit contenir au moins 6 caractères !");
            return;
        }

        const dataSending: z.infer<typeof PasswordZod> = {
            titre: title.trim(),
            identifiant: email.trim(),
            motDePasse: password.trim(),
            proprietaireId: user,
            dossierId: folder || undefined,
            // reference: website ? { type: "autre", valeur: website.trim() } : undefined,
            trash: false
        };

        const parseResult = PasswordZod.safeParse(dataSending);
        if (!parseResult.success) {
            parseResult.error.errors.forEach((err) => {
                toast.error(`Erreur: ${err.path.join(".")} - ${err.message}`);
            });
            return;
        }

        setLoading(true);
        try {
            await createPassword(user, parseResult.data);
            toast.success("Mot de passe enregistré !");
            handleCancel();
        } catch (err: any) {
            console.error("Erreur:", err.message);
            toast.error("Erreur lors de l'enregistrement !");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[600px]">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-lg p-6 space-y-6">
                <div className="flex justify-center">
                    <div className="bg-lime-400 rounded-full p-4 shadow-md">
                        <Lock className="w-8 h-8 text-black" />
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Ajouter un mot de passe</h2>
                </div>

                <form className="space-y-5">
                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="title">Titre</Label>
                        <Input
                            id="title"
                            className="h-11"
                            placeholder="ex: Compte Facebook"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="email">Email / Identifiant</Label>
                        <Input
                            id="email"
                            className="h-11"
                            placeholder="ex: jean.dupont@gmail.com"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input
                            id="password"
                            className="h-11"
                            placeholder="********"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            ref={inputRef}
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="website">Site web</Label>
                        <Input
                            id="website"
                            className="h-11"
                            placeholder="https://facebook.com"
                            type="url"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="folder">Dossier associé</Label>
                        <Select value={folder} onValueChange={setFolder}>
                            <SelectTrigger className="h-14 w-full ">
                                <SelectValue placeholder="Choisir un dossier d'emplacement" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="perso">Personnel</SelectItem>
                                <SelectItem value="travail">Travail</SelectItem>
                                <SelectItem value="banque">Banque</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={handleCancel}
                        >
                            <XCircle className="w-4 h-4" /> Annuler
                        </Button>
                        <Button
                            type="button"
                            onClick={handleSave}
                            disabled={loading}
                            className="bg-lime-500 hover:bg-lime-600 cursor-pointer text-white flex items-center gap-2"
                        >
                            {loading ? (
                                <ClipLoader color="#fff" size={15} speedMultiplier={1.5} />
                            ) : (
                                <>
                                    <Save className="w-4 h-4" /> Enregistrer
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}


interface CreditCardFormProps {
    setMessage?: (msg: string) => void;
}

function CreditCardAddComponent({ setMessage }: CreditCardFormProps) {
    const [title, setTitle] = useState("");
    const [nomTitulaire, setNomTitulaire] = useState("");
    const [numeroCarte, setNumeroCarte] = useState("");
    const [dateExpiration, setDateExpiration] = useState("");
    const [cvc, setCVC] = useState("");
    const [setAsDefault, setSetAsDefault] = useState(false);


    type Reference = {
        type: "carte_credit" | "reseau_social" | "autre";
        valeur: string;
    };

    const { user } = getSession();
    const { handleSave, handleCancel, loading } = useCreditCard(user || '', setMessage);

    const handleCancelForm = () => {
        setTitle("");
        setNomTitulaire("");
        setNumeroCarte("");
        setDateExpiration("");
        setCVC("");
    };

    const onSave = () => {

        const reference: Reference = {
            type: "carte_credit",
            valeur: title || ""
        };
        const data = {
            titre: title,
            nomTitulaire,
            numeroCarte,
            dateExpiration,
            cvc,
            reference,
            proprietaireId: user || ""
        };

        handleSave(data, handleCancelForm);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] px-4">
            {/* Header + Image */}
            <div className="flex flex-col gap-2 items-center mb-4">
                <div className="flex items-center justify-center rounded-full w-16 h-16 bg-lime-400 shadow-md">
                    <CreditCard className="w-8 h-8 text-black" />
                </div>
                <div className="text-center space-y-1">
                    <h2 className="text-xl font-semibold">Ajouter une carte de crédit</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Ajoutez les détails de votre carte pour remplir automatiquement vos paiements en ligne.
                    </p>
                </div>
            </div>

            {/* Formulaire */}
            <Card className="w-full max-w-md shadow-lg border-none rounded-2xl">
                <CardContent className="space-y-5 p-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Titre</Label>
                        <Input
                            id="title"
                            placeholder="ex: Carte Perso"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="h-11"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="nomTitulaire">Nom du titulaire</Label>
                        <Input
                            id="nomTitulaire"
                            placeholder="ex: Jean Dupont"
                            value={nomTitulaire}
                            onChange={(e) => setNomTitulaire(e.target.value)}
                            required
                            className="h-11"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="numeroCarte">Numéro de carte</Label>
                        <Input
                            id="numeroCarte"
                            className="h-11"
                            placeholder="0000 0000 0000 0000"
                            value={numeroCarte}
                            onChange={(e) => setNumeroCarte(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                            <Label htmlFor="dateExpiration">Date d'expiration</Label>
                            <Input
                                id="dateExpiration"
                                className="h-11"
                                placeholder="MM/AA"
                                value={dateExpiration}
                                onChange={(e) => setDateExpiration(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input
                                id="cvc"
                                className="h-11"
                                placeholder="123"
                                value={cvc}
                                onChange={(e) => setCVC(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="primary"
                            checked={setAsDefault}
                            onCheckedChange={(val) => setSetAsDefault(Boolean(val))}
                        />
                        <Label htmlFor="primary" className="text-muted-foreground font-normal">
                            Définir comme méthode de paiement par défaut
                        </Label>
                    </div>

                    <Button
                        type="button"
                        className="w-full cursor-pointer bg-lime-500 hover:bg-lime-600 text-white"
                        onClick={onSave}
                        disabled={loading}
                    >
                        {loading ? (
                            <ClipLoader color="#fff" size={15} speedMultiplier={1.5} />
                        ) : (
                            "Enregistrer"
                        )}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}


function TrashComponent() {
    return (
        <div className="flex items-center justify-center h-[500px]">
            <div className="text-center">
                <div className="flex flex-col items-center gap-4 p-8">
                    {/* Icône */}
                    <div className="bg-lime-400 rounded-xl p-4 flex items-center justify-center">
                        <Trash2 className="w-8 h-8 text-black" />
                    </div>

                    {/* Texte */}
                    <div>
                        <h2 className="text-black text-lg font-semibold mt-4">
                            La corbeille est vide
                        </h2>
                        <p className="text-gray-400 text-[16px] mt-1">
                            Tous les elements deplacés vers la corbeille peuvent etre restaurés jusqu'a ce que vous <br />
                            les supprimiez définitivement
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
"use client";
import { Label } from "@/components/ui/label"

import { PasswordZod } from "@/types/web/interface.type";
import { z } from "zod";
import { XCircle, Save } from "lucide-react";
import { toast } from 'react-toastify';
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

import TableExample, { TableExampleForDocuments } from "@/components/TableExample";

import { Checkbox } from "@/components/ui/checkbox";
import CreerFolders from "@/components/CreerFolders";
import { motion } from "framer-motion";
import { createPassword } from "@/hooks/web/useCreatePassword";
import { getSession } from "@/lib/localstorage";

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

    const handleclickHome = () => setStateOfChange(View.Main);
    const handleclickPassword = () => setStateOfChange(View.AddPassword);
    const handleclickCreditCards = () => setStateOfChange(View.CreditCard);
    const handleclickTrash = () => setStateOfChange(View.TrashComponent);

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
            <aside className="w-64 border-r rounded-r-2xl bg-gradient-to-b from-gray-50 via-white to-gray-100 p-4 flex flex-col justify-between fixed inset-y-0 left-0 shadow-md">
                {/* Top: Logo + Navigation */}
                <div className="overflow-y-auto">
                    <h1 className="text-xl font-bold mb-6 text-gray-800">Untitled UI</h1>

                    <nav className="space-y-2">
                        <Button
                            variant="ghost"
                            className="w-full justify-start cursor-pointer hover:bg-gray-100 rounded-lg"
                            onClick={handleclickHome}
                        >
                            <Home className="mr-2 h-4 w-4" /> Home
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start cursor-pointer hover:bg-gray-100 rounded-lg"
                            onClick={handleclickPassword}
                        >
                            <Lock className="mr-2 h-4 w-4" /> Passwords
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start cursor-pointer hover:bg-gray-100 rounded-lg"
                            onClick={handleclickCreditCards}
                        >
                            <CreditCard className="mr-2 h-4 w-4" /> Credit Cards
                        </Button>

                        <Separator className="my-2" />

                        {/* Folders avec toggle */}
                        <div>
                            <Button
                                variant="ghost"
                                className="w-full justify-between hover:bg-gray-100 rounded-lg"
                                onClick={() => setOpenFolders(!openFolders)}
                            >
                                <span className="flex items-center">
                                    <Folder className="mr-2 h-4 w-4" /> Folders
                                </span>
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${openFolders ? "rotate-180" : ""
                                        }`}
                                />
                            </Button>
                            {openFolders && (
                                <div className="ml-6 mt-1 space-y-1">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-sm hover:bg-gray-100 rounded-md"
                                    >
                                        Folder 1
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-sm hover:bg-gray-100 rounded-md"
                                    >
                                        Folder 2
                                    </Button>
                                </div>
                            )}
                        </div>

                        <Separator className="my-2" />

                        <Button
                            variant="ghost"
                            className="w-full justify-start hover:bg-gray-100 rounded-lg"
                        >
                            <Download className="mr-2 h-4 w-4" /> Download
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start hover:bg-gray-100 rounded-lg"
                        >
                            <Settings className="mr-2 h-4 w-4" /> Settings
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start hover:bg-gray-100 rounded-lg"
                        >
                            <HelpCircle className="mr-2 h-4 w-4" /> Support
                        </Button>

                        <Separator className="my-2" />

                        <Button
                            variant="ghost"
                            className="w-full justify-start cursor-pointer hover:bg-red-100 rounded-lg"
                            onClick={handleclickTrash}
                        >
                            <Trash2 className="mr-2 h-4 w-4" /> Trash
                        </Button>
                    </nav>
                </div>

                {/* Bottom: Profil utilisateur */}
                <div className="mt-6 border rounded-2xl p-1 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition shadow-sm">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="w-full justify-between px-2 py-2"
                            >
                                <div className="flex items-center space-x-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="https://i.pravatar.cc/40" alt="Olivia Rhye" />
                                        <AvatarFallback>OR</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col text-left">
                                        <span className="text-sm font-medium text-gray-800">
                                            Olivia Rhye
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            olivia@untitledui.com
                                        </span>
                                    </div>
                                </div>
                                <ChevronDown className="h-4 w-4 opacity-70" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-56" align="end">
                            <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
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
                            <DropdownMenuLabel>Switch account</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <Avatar className="mr-2 h-6 w-6">
                                    <AvatarImage src="https://i.pravatar.cc/41" alt="Olivia Rhye" />
                                    <AvatarFallback>OR</AvatarFallback>
                                </Avatar>
                                Olivia Rhye
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Avatar className="mr-2 h-6 w-6">
                                    <AvatarImage src="https://i.pravatar.cc/42" alt="Sienna Hewitt" />
                                    <AvatarFallback>SH</AvatarFallback>
                                </Avatar>
                                Sienna Hewitt
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Repeat className="mr-2 h-4 w-4" /> Add account
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500">
                                <LogOut className="mr-2 h-4 w-4" /> Sign out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </aside>

            {/* Contenu principal scrollable */}
            <main className="ml-64 flex-1 h-screen overflow-y-auto p-6 space-y-6">
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
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Site traffic</h2>
                <div className="space-x-2">
                    {/* <Button variant="outline" className="cursor-pointer">Ajouter un dossier</Button> */}
                    <CreerFolders />
                    <Button className="cursor-pointer">Export report</Button>
                </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {dossiersCree.length > 0 &&
                    dossiersCree.map((item, index) => (
                        <motion.div
                        // initial={{ opacity: 0, y: 10 }
                        // } animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        >
                            <Card
                                key={index}
                                className="shadow-md rounded-xl bg-white backdrop-blur-sm hover:shadow-lg transition duration-300"
                            >
                                {/* Header */}
                                <CardHeader className="flex items-center justify-between">
                                    <CardTitle className="text-base font-medium text-gray-700">
                                        {item.title}
                                    </CardTitle>
                                    <button className="p-1 rounded-full hover:bg-red-100">
                                        <Trash2 className="w-5 h-5 cursor-pointer text-gray-500 hover:text-red-700" />
                                    </button>
                                </CardHeader>

                                {/* Content */}
                                <CardContent className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-lime-100 rounded-full p-2 flex items-center justify-center">
                                            <img
                                                width={28}
                                                src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-6TJq3TblGrgJLKvMLFj3N2YcDEXG2A.png&w=500&q=75"
                                                alt="pages"
                                            />
                                        </div>
                                        <p className="text-xl font-bold">{item.value}</p>
                                    </div>

                                    <p className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-lg">
                                        {item.growth}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
            </div>

            {/* Table */}
            <Card>
                <CardHeader><CardTitle>Pages and screens</CardTitle></CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between mb-4">
                        <Input placeholder="Search" className="w-64" />
                        <Button variant="outline">Filters</Button>
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
            reference: website ? { type: "autre", valeur: website.trim() } : undefined,
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
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [holderName, setHolderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCVC] = useState("");
    const [setAsDefault, setSetAsDefault] = useState(false);

    const handleSave = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setTitle("");
            setHolderName("");
            setCardNumber("");
            setExpiry("");
            setCVC("");
            setSetAsDefault(false);
            if (setMessage) setMessage("MainComponent");
            toast.success("Carde de credit enregistrée ! ");
        }, 1500);
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
                        <Label htmlFor="holderName">Nom du titulaire</Label>
                        <Input
                            id="holderName"
                            placeholder="ex: Jean Dupont"
                            value={holderName}
                            onChange={(e) => setHolderName(e.target.value)}
                            required
                            className="h-11"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cardNumber">Numéro de carte</Label>
                        <Input
                            id="cardNumber"
                            className="h-11"
                            placeholder="0000 0000 0000 0000"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                            <Label htmlFor="expiry">Date d'expiration</Label>
                            <Input
                                id="expiry"
                                className="h-11"
                                placeholder="MM/AA"
                                value={expiry}
                                onChange={(e) => setExpiry(e.target.value)}
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
                        onClick={handleSave}
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
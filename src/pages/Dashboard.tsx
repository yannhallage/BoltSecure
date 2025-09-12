"use client";
import { Label } from "@/components/ui/label"
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

enum View {
    Main = "MainComponent",
    AddPassword = "AddPassword",
    Passwords = "PassordsComponent",
    CrediCards = "CreditCardsComponent",
    CreditCard = "CreditCardAdd",
}


export default function Layout() {
    const [openFolders, setOpenFolders] = useState(false);
    const [stateOfChange, setStateOfChange] = useState<string>("MainComponent");
    const [message, setMessage] = useState("");

    const handleclickHome = () => setStateOfChange(View.Main);
    const handleclickPassword = () => setStateOfChange(View.AddPassword);
    const handleclickCreditCards = () => setStateOfChange(View.CreditCard);

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
            <aside className="w-64 border rounded-2xl mx-1 bg-card p-4 flex flex-col justify-between fixed inset-y-0 left-0">
                {/* Top: Logo + Navigation */}
                <div className="overflow-y-auto">
                    <h1 className="text-xl font-bold mb-6">Untitled UI</h1>

                    <nav className="space-y-2">
                        <Button variant="ghost" className="w-full justify-start cursor-pointer " onClick={handleclickHome} >
                            <Home className="mr-2 h-4 w-4"
                            />Home
                        </Button>

                        <Button variant="ghost" className="w-full justify-start cursor-pointer" onClick={handleclickPassword}>
                            <Lock className="mr-2 h-4 w-4" /> Passwords
                        </Button>

                        <Button variant="ghost" className="w-full justify-start cursor-pointer" onClick={handleclickCreditCards}>
                            <CreditCard className="mr-2 h-4 w-4" /> Credit Cards
                        </Button>

                        <Separator className="my-2" />
                        {/* Folders avec toggle */}
                        <div>
                            <Button
                                variant="ghost"
                                className="w-full justify-between"
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
                                    <Button variant="ghost" className="w-full justify-start text-sm">
                                        Folder 1
                                    </Button>
                                    <Button variant="ghost" className="w-full justify-start text-sm">
                                        Folder 2
                                    </Button>
                                </div>
                            )}
                        </div>
                        <Separator className="my-2" />

                        <Button variant="ghost" className="w-full justify-start">
                            <Download className="mr-2 h-4 w-4" /> download
                        </Button>

                        <Button variant="ghost" className="w-full justify-start">
                            <Settings className="mr-2 h-4 w-4" /> settings
                        </Button>

                        <Button variant="ghost" className="w-full justify-start">
                            <HelpCircle className="mr-2 h-4 w-4" /> Support
                        </Button>

                        <Separator className="my-2" />

                        <Button variant="ghost" className="w-full justify-start">
                            <Trash2 className="mr-2 h-4 w-4" /> Trash
                        </Button>
                    </nav>
                </div>

                {/* Bottom: Profil utilisateur */}
                <div className="mt-6 border rounded-2xl p-1 hover:bg-gray-50">
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
                                        <span className="text-sm font-medium">Olivia Rhye</span>
                                        <span className="text-xs text-muted-foreground">
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
                {stateOfChange === 'PassordsComponent' && <PassordsComponent />}
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

    // const sessions = [
    //     { name: "Documentation", sessions: 4288, avg: "1m 24s", percent: "62.4%" },
    //     { name: "Projects", sessions: 582, avg: "1m 08s", percent: "8.2%" },
    //     { name: "Reports", sessions: 464, avg: "1m 12s", percent: "7.6%" },
    //     { name: "Accounts", sessions: 446, avg: "2m 22s", percent: "7.2%" },
    // ];
    return (
        <>
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Site traffic</h2>
                <div className="space-x-2">
                    <Button variant="outline">Switch dashboard</Button>
                    <Button>Export report</Button>
                </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-4">
                <Card>
                    <CardHeader><CardTitle>Total sessions</CardTitle></CardHeader>
                    <CardContent>
                        {/* <p className="text-2xl font-bold">526</p> */}
                        <img width={40}
                            src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-6TJq3TblGrgJLKvMLFj3N2YcDEXG2A.png&w=500&q=75"
                            alt="" />
                        <p className="text-sm text-green-500">+2.4% vs last month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Session duration</CardTitle></CardHeader>
                    <CardContent>
                        {/* <p className="text-2xl font-bold">2:24</p> */}
                        <img width={40}
                            src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-6TJq3TblGrgJLKvMLFj3N2YcDEXG2A.png&w=500&q=75"
                            alt="" />
                        <p className="text-sm text-green-500">+8.6% vs last month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Pages per session</CardTitle></CardHeader>
                    <CardContent>
                        {/* <p className="text-2xl font-bold">316</p> */}
                        <img width={40}
                            src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-6TJq3TblGrgJLKvMLFj3N2YcDEXG2A.png&w=500&q=75"
                            alt="" />
                        <p className="text-sm text-green-500">+6.0% vs last month</p>
                    </CardContent>
                </Card>
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

function PassordsComponent() {
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [website, setWebsite] = useState("");
    const [folder, setFolder] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);

    const handleCancel = () => {
        setTitle("");
        setEmail("");
        setPassword("");
        setWebsite("");
        setFolder("");
    };

    const handleSave = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            handleCancel();
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[600px] gap-6 px-4">
            {/* Icône en haut */}
            <div className="bg-lime-400 rounded-xl p-4 flex items-center justify-center">
                <Lock className="w-8 h-8 text-black" />
            </div>

            {/* Formulaire */}
            <form className="space-y-4 w-full max-w-md">
                {/* Titre */}
                <div className="flex flex-col space-y-1">
                    <Label htmlFor="title">Titre</Label>
                    <Input
                        id="title"
                        className="h-12"
                        placeholder="ex: Compte Facebook"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Email / Identifiant */}
                <div className="flex flex-col space-y-1">
                    <Label htmlFor="email">Email / Identifiant</Label>
                    <Input
                        id="email"
                        className="h-12"
                        placeholder="ex: jean.dupont@gmail.com"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Mot de passe */}
                <div className="flex flex-col space-y-1">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                        id="password"
                        className="h-12"
                        placeholder="********"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ref={inputRef}
                    />
                </div>

                {/* Site web */}
                <div className="flex flex-col space-y-1">
                    <Label htmlFor="website">Site web</Label>
                    <Input
                        id="website"
                        className="h-12"
                        placeholder="https://facebook.com"
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>

                {/* Dossier associé */}
                <div className="flex flex-col space-y-1">
                    <Label htmlFor="folder">Dossier associé</Label>
                    <Select value={folder} onValueChange={setFolder}>
                        <SelectTrigger>
                            <SelectValue placeholder="Choisir un dossier" className="w-full" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="perso">Personnel</SelectItem>
                            <SelectItem value="travail">Travail</SelectItem>
                            <SelectItem value="banque">Banque</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Boutons */}
                <div className="flex justify-end gap-2 pt-4">
                    <Button type="button" variant="outline" onClick={handleCancel}>
                        Annuler
                    </Button>
                    <Button
                        type="button"
                        onClick={handleSave}
                        disabled={loading}
                        className="cursor-pointer"
                    >
                        {loading ? (
                            <ClipLoader color="#ffff" size={13} speedMultiplier={2} />
                        ) : (
                            "Enregistrer"
                        )}
                    </Button>
                </div>
            </form>
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
            if (setMessage) setMessage("MainComponent"); // exemple retour
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] gap-4">
            {/* Header + Image */}
            <div className="flex flex-col gap-2 items-center">
                <div className="flex items-center justify-center rounded-full w-16 h-16 bg-lime-400">
                    <CreditCard className="w-8 h-8 text-black" />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Ajouter une carte de crédit</h2>
                    <p className="text-sm text-gray-400">
                        Ajoutez les détails de votre carte pour remplir <br /> automatiquement lors de vos achats en ligne.
                    </p>
                </div>
            </div>

            {/* Formulaire */}
            <Card className="w-full max-w-md shadow-xl border-none">
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Titre</Label>
                        <Input
                            id="title"
                            placeholder="Titre Obligatoire"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="holderName">Nom du titulaire</Label>
                        <Input
                            id="holderName"
                            placeholder="Nom du titulaire Obligatoire"
                            value={holderName}
                            onChange={(e) => setHolderName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cardNumber">Numéro de carte</Label>
                        <Input
                            id="cardNumber"
                            placeholder="0000 0000 0000 0000"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                            <Label htmlFor="expiry">Expiry date</Label>
                            <Input
                                id="expiry"
                                placeholder="MM/YY"
                                value={expiry}
                                onChange={(e) => setExpiry(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input
                                id="cvc"
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
                            Set as default payment method
                        </Label>
                    </div>

                    <Button
                        type="button"
                        className="w-full cursor-pointer"
                        onClick={handleSave}
                        disabled={loading}
                    >
                        {loading ? <ClipLoader color="#ffff" size={13} speedMultiplier={2} /> : "Enregistrer"}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
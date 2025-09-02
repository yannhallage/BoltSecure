"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    // DialogTrigger,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const sections = [
    { id: "general", label: "Général" },
    { id: "notifications", label: "Notifications" },
    { id: "personalization", label: "Personnalisation" },
    { id: "apps", label: "Applications connectées" },
    { id: "data", label: "Gestion des données" },
    { id: "security", label: "Sécurité" },
    { id: "account", label: "Compte" },
]
interface interfaceSetting {
    open: boolean
    onOpenChange: (open: boolean) => void
}
export default function SettingsDialog({ open, onOpenChange }: interfaceSetting) {
    const [active, setActive] = useState("general")

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="!max-w-[50%] w-full p-0 overflow-hidden">
                <div className="flex h-[550px]">
                    {/* Sidebar */}
                    <div className="w-64 bg-gray-50 border-r">
                        <div className="p-4 font-semibold text-lg">Paramètres</div>
                        <nav className="flex flex-col">
                            {sections.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => setActive(s.id)}
                                    className={`flex items-center justify-between px-4 py-2 text-left hover:bg-gray-100 ${active === s.id ? "bg-gray-200 font-medium" : ""
                                        }`}
                                >
                                    {s.label}
                                    <ChevronRight size={16} className="text-gray-400" />
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-semibold capitalize">
                                {sections.find((s) => s.id === active)?.label}
                            </DialogTitle>
                        </DialogHeader>

                        {active === "general" && (
                            <div className="space-y-4">
                                <div>
                                    <Label>Langue</Label>
                                    <select className="border rounded p-2 mt-1">
                                        <option>Français</option>
                                        <option>Anglais</option>
                                        <option>Espagnol</option>
                                    </select>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="theme" />
                                    <Label htmlFor="theme">Mode sombre</Label>
                                </div>
                            </div>
                        )}
                        {active === "notifications" && (
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Switch id="notif-email" />
                                    <Label htmlFor="notif-email">Notifications par e-mail</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="notif-push" />
                                    <Label htmlFor="notif-push">Notifications push</Label>
                                </div>
                            </div>
                        )}

                        {active === "personalization" && (
                            <div>
                                <Label>Couleur principale</Label>
                                <input type="color" className="ml-2 w-10 h-10 rounded" />
                            </div>
                        )}
                        {active === "apps" && (
                            <div>
                                <p className="text-sm text-gray-600 mb-2">
                                    Gérez les applications ayant accès à votre compte.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Google Drive (actif)</li>
                                    <li>Microsoft OneDrive (actif)</li>
                                    <li>Slack (désactivé)</li>
                                </ul>
                            </div>
                        )}
                        {active === "data" && (
                            <div>
                                <p className="text-sm text-gray-600 mb-4">
                                    Exportez ou supprimez vos données personnelles.
                                </p>
                                <Button>Exporter mes données</Button>
                                <Button variant="destructive" className="ml-3">
                                    Supprimer mon compte
                                </Button>
                            </div>
                        )}
                        {active === "security" && (
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Switch id="2fa" />
                                    <Label htmlFor="2fa">Activer l’authentification à deux facteurs</Label>
                                </div>
                                <div>
                                    <Label>Changer le mot de passe</Label>
                                    <input
                                        type="password"
                                        className="border rounded p-2 mt-1 block w-1/2"
                                        placeholder="Nouveau mot de passe"
                                    />
                                </div>
                            </div>
                        )}
                        {active === "account" && (
                            <div>
                                <Label>Nom d’utilisateur</Label>
                                <input
                                    type="text"
                                    defaultValue="yannhallage"
                                    className="border rounded p-2 mt-1 block w-1/2"
                                />
                                <div className="mt-4">
                                    <Button variant="destructive">Supprimer le compte</Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

"use client";

import { useState } from "react";

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

export function Sidebar() {
    const [openFolders, setOpenFolders] = useState(false);

    return (
        <aside className="w-64 border rounded-2xl mx-1 bg-card p-4 flex flex-col justify-between fixed inset-y-0 left-0">
            {/* Top: Logo + Navigation */}
            <div className="overflow-y-auto">
                <h1 className="text-xl font-bold mb-6">Untitled UI</h1>

                <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start ">
                        <Home className="mr-2 h-4 w-4" /> Home
                    </Button>

                    <Button variant="ghost" className="w-full justify-start">
                        <Lock className="mr-2 h-4 w-4" /> Passwords
                    </Button>

                    <Button variant="ghost" className="w-full justify-start">
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
    );
}

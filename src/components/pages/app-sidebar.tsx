import {
    FileText,
    KeyRound,
    Image,
    CreditCard,
    Contact,
    Folder,
    Users,
    Trash2,
    LayoutDashboard,
    ChevronDown,
    Settings,
} from "lucide-react"

import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />

            <SidebarContent>
                {/* Categories */}
                <SidebarGroup>
                    <SidebarGroupLabel>Categories</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        <span>All Items</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <KeyRound className="mr-2 h-4 w-4" />
                                        <span>Passwords</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Users className="mr-2 h-4 w-4" />
                                        <span>Passkeys</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Image className="mr-2 h-4 w-4" />
                                        <span>Secure Notes</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <CreditCard className="mr-2 h-4 w-4" />
                                        <span>Credit Cards</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Contact className="mr-2 h-4 w-4" />
                                        <span>Contact Info</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#" className="flex items-center gap-2">
                                        <FileText className="mr-2 h-4 w-4" />
                                        <span>Documents</span>
                                        <span className="ml-auto rounded bg-green-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                                            NEW
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Users className="mr-2 h-4 w-4" />
                                        <span>Shared Items</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        <span>Trash</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Folders */}
                <SidebarGroup>
                    <SidebarGroupLabel>Folders</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Folder className="mr-2 h-4 w-4" />
                                        <span>My Folders</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Tools */}
                <SidebarGroup>
                    <SidebarGroupLabel>Tools</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Preferences</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer avec dropdown (compte utilisateur) */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <Users className="mr-2 h-4 w-4" />
                                    <span>Username</span>
                                    <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="top" className="w-48">
                                <DropdownMenuItem>Account</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Sign out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

import { useState } from "react"
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { User2, ChevronUp, PanelRight } from "lucide-react"

export default function AppSidebar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <SidebarProvider>
            {/* Bouton toggle */}
            <div className="p-2">
                <button
                    className="border bg-black text-white rounded-md p-2 hover:bg-accent"
                    onClick={toggleSidebar}
                >
                    <PanelRight className="w-5 h-5" />
                </button>
            </div>

            {/* Sidebar */}
            {isOpen && (
                <Sidebar>
                    <SidebarHeader />
                    <SidebarContent />
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <SidebarMenuButton>
                                            <User2 /> Username
                                            <ChevronUp className="ml-auto" />
                                        </SidebarMenuButton>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                                        <DropdownMenuItem><span>Account</span></DropdownMenuItem>
                                        <DropdownMenuItem><span>Billing</span></DropdownMenuItem>
                                        <DropdownMenuItem><span>Sign out</span></DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
            )}
        </SidebarProvider>
    )
}

import {
  // BoltIcon,
  // BookOpenIcon,
  ChevronDownIcon,
  // Layers2Icon,
  LogOutIcon,
  // PinIcon,
  Download,
  Trash2,
  Settings,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SettingsDialog from "../pages/app/SettingsDialog"
import { useState } from "react"



export default function Account() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-auto cursor-pointer p-0 hover:bg-transparent">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile image" />
              <AvatarFallback>KK</AvatarFallback>
            </Avatar>
            <ChevronDownIcon
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-64">
          <DropdownMenuLabel className="flex min-w-0 flex-col">
            <span className="text-foreground truncate text-sm font-medium">
              Keith Kennedy
            </span>
            <span className="text-muted-foreground truncate text-xs font-normal">
              k.kennedy@originui.com
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => { setOpen(true) }}>
              <Settings size={16} className="opacity-60" aria-hidden="true" />
              <span>parameters</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download size={16} className="opacity-60" aria-hidden="true" />
              <span>  download</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 size={16} className="opacity-60" aria-hidden="true" />
              <span>Trash</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SettingsDialog
        open={open}
        onOpenChange={setOpen}
      />
    </>
  )
}

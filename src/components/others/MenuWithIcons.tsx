import {
  BoltIcon,
  ChevronDownIcon,
  CopyPlusIcon,
  FilesIcon,
  Layers2Icon,
} from "lucide-react"

// import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function MenuWithIcons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline">
          Menu with icons
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis w-3.5 h-3.5 flex-shrink-0 opacity-100 xl:opacity-0 group-hover:opacity-100 text-primary" type="button" id="radix-_r_u9_" aria-haspopup="menu" aria-expanded="false" data-state="closed"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <CopyPlusIcon size={16} className="opacity-60" aria-hidden="true" />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Layers2Icon size={16} className="opacity-60" aria-hidden="true" />
          Group
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FilesIcon size={16} className="opacity-60" aria-hidden="true" />
          Clone
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

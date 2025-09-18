import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    // DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    // DropdownMenuPortal,
    DropdownMenuSeparator,
    // DropdownMenuShortcut,
    // DropdownMenuSub,
    // DropdownMenuSubContent,
    // DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import AddPassword from "@/components/others/AddPassword"
import CreditCard from "@/components/others/CreditCard"

export function DropdownMenuDemo() {
    const [open, setOpen] = useState(false)
    const [openCreditCard, setOpenCreditCard] = useState(false)
    // const [itemsCreditCard, setItemsCreditCards] = useState(false)
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="cursor-pointer">Ajoutez</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-46" align="start">
                    <DropdownMenuLabel>Ajoutez items</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <div className="flex space-x-2">
                            <img
                                src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-EvpVqXgiKOwI32jZyyBn5jfgsOUi97.png&w=500&q=75"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <span onClick={() => { setOpen(true) }} className="cursor-pointer">
                                Passwords
                            </span>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <div className="flex space-x-2">
                            <img
                                src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-xylXWxjRoBYdaH9IPOx1080olvl5Ur.png&w=500&q=75"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <span onClick={() => { setOpenCreditCard(true) }} className="cursor-pointer">
                                Credit Cards
                            </span>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                        <div className="flex space-x-2">
                            <img
                                src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-sqlu5u2Ofc9tXq9AqsBeZMCkWXEyzj.png&w=500&q=75"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <span onClick={() => { console.log("test") }} className="cursor-pointer">
                                Passkeys
                            </span>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <AddPassword
                open={open}
                onOpenChange={setOpen}
            />
            <CreditCard
                open={openCreditCard}
                onOpenChange={setOpenCreditCard}
            />
        </>
    )
}

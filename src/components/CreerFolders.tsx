import { useId } from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreerFolders() {
  const id = useId()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          onClick={() => console.log("Créer un espace")}
          className="w-full lg:w-[66px] h-[66px] bg-transparent hover:border-primary/20 dark:text-neutral-400 text-neutral-600 dark:hover:text-neutral-50 hover:text-neutral-900 hover:text-primary border-dashed border-2 border-primary/10 dark:border-primary/20 flex items-center justify-start lg:justify-center p-3.5 cursor-pointer transition-all duration-200 rounded-2xl drop-shadow-sm gap-2" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus h-6 w-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
          <span className="lg:hidden block text-sm font-medium">Créer un espace</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center"
            aria-hidden="true"
          >
            <img
              src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-En0WuV9h3Cjev3oISjtJqXetnfA18d.png&w=500&q=75"
              width={70}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">Ajoutez un nouveau dossier</DialogTitle>
            <DialogDescription className="sm:text-center">
              Enter your credentials to login to your account.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-email`}>Dossier</Label>
              <Input
                id={`${id}-email`}
                placeholder="nouveau dossier"
                type="text"
                className="h-[50px]"
                required
              />
            </div>
          </div>
          <Button type="button" className="w-full cursor-pointer">
            Creer
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

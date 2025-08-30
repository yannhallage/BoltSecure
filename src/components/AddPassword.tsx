"use client"

import { useRef, useState } from "react"
import { CheckIcon, CopyIcon, LockKeyhole  } from "lucide-react"

// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  // Tooltip,
  // TooltipContent,
  // TooltipProvider,
  // TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface AddPasswordProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AddPassword({ open, onOpenChange }: AddPasswordProps) {
  const [title, setTitle] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [website, setWebsite] = useState("")
  const [folder, setFolder] = useState("")
  // const [copied, setCopied] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCancel = () => {
    setTitle("")
    setEmail("")
    setPassword("")
    setWebsite("")
    setFolder("")
    onOpenChange(false)
  }

  const handleSave = () => {
    // ici tu peux envoyer les données au backend ou à ton state manager
    console.log({ title, email, password, website, folder })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onOpenAutoFocus={(e) => {
          e.preventDefault()
        }}
        className="w-[95vw] sm:max-w-lg md:max-w-xl lg:max-w-xl"

      >
        <div className="flex flex-col gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full "
            aria-hidden="true"
          >
            <img src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-EvpVqXgiKOwI32jZyyBn5jfgsOUi97.png&w=500&q=75" alt="" />
            {/* <LockKeyhole  className="opacity-80" size={16} /> */}
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">Ajouter un mot de passe</DialogTitle>
            <DialogDescription className="text-left">
              Enregistrez vos identifiants de manière sécurisée.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-2">
          <div className="*:not-first:mt-2">
            <Label htmlFor="title">Titre</Label>
            <Input
              id="title"
              className="h-11"
              placeholder="ex: Compte Facebook"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="*:not-first:mt-2">
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

          <div className="*:not-first:mt-2">
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

          <div className="*:not-first:mt-2">
            <Label htmlFor="website">Site web</Label>
            <Input
              className="h-11"
              id="website"
              placeholder="https://facebook.com"
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="*:not-first:mt-2">
            <Label htmlFor="folder">Dossier associé</Label>
            <Select value={folder} onValueChange={setFolder}
            >
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

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Annuler
            </Button>
            <Button type="button" onClick={handleSave}>
              Valider
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

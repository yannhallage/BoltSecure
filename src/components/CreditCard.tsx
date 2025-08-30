"use client"

import { useId } from "react"
import { CreditCardIcon, WalletIcon } from "lucide-react"
import { usePaymentInputs } from "react-payment-inputs"
import images, { type CardImages } from "react-payment-inputs/images"

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



interface AddPasswordProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}


export default function CreditCard({ open, onOpenChange }: AddPasswordProps) {
  const id = useId()
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
  } = usePaymentInputs()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="flex flex-col gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full "
            aria-hidden="true"
          >
            {/* <WalletIcon className="opacity-80" size={16} /> */}
            <img src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-xylXWxjRoBYdaH9IPOx1080olvl5Ur.png&w=500&q=75" alt="" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">Update your card</DialogTitle>
            <DialogDescription className="text-left">
              Your new card will replace your current card.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`name-${id}`}>Titre</Label>
              <Input id={`name-${id}`} type="text" placeholder="Titre Obligatoire" required />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`name-${id}`}>Nom du titulaire</Label>
              <Input id={`name-${id}`} type="text" placeholder="Nom du titulaire Obligatoire" required />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`number-${id}`}>Card Number</Label>
              <div className="relative">
                <Input
                  {...getCardNumberProps()}
                  id={`number-${id}`}
                  className="peer pe-9 [direction:inherit]"
                />
                <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
                  {meta.cardType ? (
                    <svg
                      className="overflow-hidden rounded-sm"
                      {...getCardImageProps({
                        images: images as unknown as CardImages,
                      })}
                      width={20}
                    />
                  ) : (
                    <CreditCardIcon size={16} aria-hidden="true" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor={`expiry-${id}`}>Expiry date</Label>
                <Input
                  className="[direction:inherit]"
                  {...getExpiryDateProps()}
                  id={`expiry-${id}`}
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor={`cvc-${id}`}>CVC</Label>
                <Input
                  className="[direction:inherit]"
                  {...getCVCProps()}
                  id={`cvc-${id}`}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id={`primary-${id}`} />
            <Label
              htmlFor={`primary-${id}`}
              className="text-muted-foreground font-normal"
            >
              Set as default payment method
            </Label>
          </div>
          <Button type="button" className="w-full">
            Enregistrer
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

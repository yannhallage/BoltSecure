"use client"

import { useState } from "react"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Send } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function PersonalInfo() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[600px] bg-white px-4 text-center gap-6">
            <div className="w-full max-w-sm flex flex-col gap-6">
                {/* Titre */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">Personal Information</h1>
                    <p className="text-sm text-gray-600">Veuillez fournir vos informations personnelles pour continuer.</p>
                </div>

                {/* Champs en Select */}
                <div className="flex flex-col gap-4 text-left">
                    {/* First Name */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="firstName">Langue</Label>
                        <Select>
                            <SelectTrigger id="firstName" className="w-full p-5">
                                <SelectValue placeholder="Select First Name" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="john">John</SelectItem>
                                <SelectItem value="jane">Jane</SelectItem>
                                <SelectItem value="paul">Paul</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="lastName">Comment voulez-vous utiliser BoltSecure</Label>
                        <Select>
                            <SelectTrigger id="lastName" className="w-full p-5">
                                <SelectValue placeholder="Select Last Name" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="doe">Doe</SelectItem>
                                <SelectItem value="smith">Smith</SelectItem>
                                <SelectItem value="johnson">Johnson</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="email">Comment avez-vous entendue parler de BoltSecure ?</Label>
                        <Select>
                            <SelectTrigger id="email" className="w-full p-5">
                                <SelectValue placeholder="Select Email" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="john@example.com">john@example.com</SelectItem>
                                <SelectItem value="jane@example.com">jane@example.com</SelectItem>
                                <SelectItem value="paul@example.com">paul@example.com</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Bouton */}
                {/* <Button className="w-full cursor-pointer text-white border-none font-semibold py-6 px-6 rounded-md" disabled>
                    Continuer <Send />
                </Button> */}
                <OnboardingDialog />
            </div>
        </section>
    )
}




export function OnboardingDialog() {
    const [step, setStep] = useState(1)

    const stepContent = [
        {
            title: "Welcome to Origin UI",
            description:
                "Discover a powerful collection of components designed to enhance your development workflow.",
            image:
                "https://a.storyblok.com/f/157611/1260x1173/40855321a4/nordpass-desktop-all-items-b2b-630x586.png/m/640x0/filters:quality(60):format(avif)",
        },
        {
            title: "Customizable Components",
            description:
                "Each component is fully customizable and built with modern web standards in mind.",
            image:
                "https://a.storyblok.com/f/157611/1100x612/dd10003e44/password-policy-small-550x306.png/m/640x0/filters:quality(60):format(avif)",
        },
        {
            title: "Ready to Start?",
            description:
                "Begin building amazing interfaces with our comprehensive component library.",
            image:
                "https://a.storyblok.com/f/157611/868x800/4fe01393fc/banner-man-working-on-laptop-487x400.png/m/640x0/filters:quality(60):format(avif)",
        },
        {
            title: "Get Support",
            description:
                "Access our extensive documentation and community resources to make the most of Origin UI.",
            image:
                "https://a.storyblok.com/f/157611/1260x1173/40855321a4/nordpass-desktop-all-items-b2b-630x586.png/m/640x0/filters:quality(60):format(avif)", // tu peux mettre une autre si besoin
        },
    ]

    const totalSteps = stepContent.length

    const handleContinue = () => {
        if (step < totalSteps) {
            setStep(step + 1)
        }
    }

    return (
        <Dialog
            onOpenChange={(open) => {
                if (open) setStep(1)
            }}
        >
            <DialogTrigger asChild>
                <Button className="w-full cursor-pointer text-white border-none font-semibold py-6 px-6 rounded-md" disabled={true}>
                    Continuer <Send />
                </Button>
            </DialogTrigger>

            <DialogContent className="gap-0 p-0 [&>button:last-child]:text-white">
                <div className="p-2">
                    <img
                        className="w-full rounded-md"
                        src={stepContent[step - 1].image}
                        width={382}
                        height={216}
                        alt="dialog"
                    />
                </div>

                <div className="space-y-6 px-6 pt-3 pb-6">
                    <DialogHeader>
                        <DialogTitle>{stepContent[step - 1].title}</DialogTitle>
                        <DialogDescription>
                            {stepContent[step - 1].description}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        {/* Progress Dots */}
                        <div className="flex justify-center space-x-1.5 max-sm:order-1">
                            {[...Array(totalSteps)].map((_, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "bg-primary size-1.5 rounded-full",
                                        index + 1 === step ? "bg-primary" : "opacity-20"
                                    )}
                                />
                            ))}
                        </div>

                        {/* Footer Buttons */}
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="ghost">
                                    Skip
                                </Button>
                            </DialogClose>

                            {step < totalSteps ? (
                                <Button
                                    className="group"
                                    type="button"
                                    onClick={handleContinue}
                                >
                                    Next
                                    <ArrowRightIcon
                                        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                                        size={16}
                                        aria-hidden="true"
                                    />
                                </Button>
                            ) : (
                                <DialogClose asChild>
                                    <Button type="button">Okay</Button>
                                </DialogClose>
                            )}
                        </DialogFooter>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
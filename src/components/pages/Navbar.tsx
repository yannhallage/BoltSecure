"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

export default function NavbarComponentLanding() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // active le style après 50px de scroll
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "backdrop-blur-xl bg-white/30 shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <img
                        src="https://framerusercontent.com/images/2Qgh6K1tlFdsi2TUQHGLrkGT60.png"
                        alt="Logo"
                        className="w-24"
                    />
                    <Button className="rounded-full px-4 py-2 text-white text-sm font-normal">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}

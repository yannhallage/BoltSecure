"use client";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router";
import { Button } from "../ui/button";

export default function NavbarComponentLanding() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

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
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="127 97.5 247 306"
                        width="20.9" height="20.8"
                        preserveAspectRatio="xMinYMin">
                        <polygon points="295.6,97.5 237.1,249.7 195.5,249.7 226.1,127.6 164.7,249.7 127,249.7 185.5,97.5"
                            fill="rgb(17, 46, 112)" />
                        <defs>
                            <linearGradient id="grad1" x1="167.66" y1="314.29" x2="1122.79" y2="314.29" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="rgb(0, 158, 237)" />
                                <stop offset="1" stop-color="rgb(0, 60, 175)" />
                            </linearGradient>
                        </defs>
                        <polygon points="374,225 177.9,403.5 236.4,251.3 275.7,225"
                            fill="url(#grad1)" />
                    </svg>
                    <h1 className="text-2xl font-extrabold tracking-wide">
                        <span className="text-[#112E70]">Bolt</span>
                        <span className="bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">Secure</span>
                    </h1>
                    <Button className="rounded-full px-4 bg-[#112E70] cursor-pointer py-2 text-white text-sm font-normal"
                        onClick={() => {
                            navigate("/Signin");
                        }}
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}

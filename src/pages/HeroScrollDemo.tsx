"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Unleash the power of <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Scroll Animations
                            </span>
                        </h1>
                    </>
                }
            >
                <img
                    src={`https://www.gstatic.com/marketing-cms/assets/images/84/83/ed82a79f48108fb5a26495f5567e/laptop-2x.webp=n-w1493-h788-fcrop64=1,00000000ffffffff-rw`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}

"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

interface TextGenerateEffectDemoProps {
    text: string;
}

export function TextGenerateEffectDemo({ text }: TextGenerateEffectDemoProps) {
    return <TextGenerateEffect words={text}  className="text-xl"/>;
}

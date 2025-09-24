import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                { src: "src/styles/*", dest: "styles" } // CSS du content script
            ]
        })
    ],
    build: {
        outDir: "dist",
        emptyOutDir: false,
        target: "es2015",
        rollupOptions: {
            input: resolve(__dirname, "src/content.tsx"),
            output: {
                entryFileNames: "content.js",
                format: "iife" // obligatoire pour MV3 content scripts
            }
        }
    }
});

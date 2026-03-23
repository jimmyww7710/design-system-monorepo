import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans"
});

export const metadata: Metadata = {
    title: "UI Playground",
    description: "Local Next.js playground for the monorepo UI library"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html className={geist.variable} lang="en">
            <body>{children}</body>
        </html>
    );
}
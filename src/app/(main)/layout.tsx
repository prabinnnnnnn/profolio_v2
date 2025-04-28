import GoBackUp from "@/components/util/go-back-up";
import { ThemeProvider } from "@/providers/theme-context";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { ScrollToHash } from "@/components/scroll-to-hash";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/navbar/navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import Footer from "@/components/footer";

import { config } from "@/config";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: `${config.name} | Mern Stack Developer`,
    description:
        "I'm a mern stack developer with a passion for building web applications.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const lenisOptions = {
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: false,
        smooth: true,
    };

    return (
        <html
            lang="en" className="w-screen  dark" suppressHydrationWarning={true}>
            <head>
                <meta name="theme-color" content="#000000" />
                <link rel="icon" href="/logo/circle.svg" sizes="any" />
            </head>
            <ReactLenis root options={lenisOptions}>
                <ThemeProvider>
                    <body className={`${inter.className} antialiased relative w-full h-fit`} cz-shortcut-listen="true">
                        <Navbar />
                        <MobileNavbar />
                        <ScrollToHash />
                        {children}
                        <GoBackUp />
                        <Footer />
                    </body>
                </ThemeProvider>
            </ReactLenis>
        </html>
    );
}

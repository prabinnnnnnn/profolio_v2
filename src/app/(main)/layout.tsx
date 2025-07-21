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
import SchemaLD from "@/config/schema";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {

    title: `Prabin Moktan | Mern Stack Developer, Building Modern Web Experiences`,
    description:
        "I'm a prabin moktan, a mern stack developer with a passion for building web applications.",
    keywords: "prabinmoktan, prabin moktan,prabinnnnn_,prabinnnnnnn,mern stack developer, MERN Develeoper",
    robots: "index, follow",
    alternates: {
        canonical: "https://prabinmoktan.com.np/",
    },
    publisher: 'Prabin Moktan',
    metadataBase: new URL("https://www.prabinmoktan.com.np"),
    authors: [
        {
            name: "Prabin Moktan",
            url: "https://prabinmoktan.com.np",
        },
    ],
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
        <html lang="en" className="w-screen  dark" >
            <head>
                <meta name="theme-color" content="#000000" />
                <link rel="icon" href="/logo/BlackIcon.png" sizes="any" type="image/x-icon" />
                <SchemaLD />
            </head>
            <ReactLenis root options={lenisOptions}>
                <ThemeProvider>
                    <body className={`${inter.className} antialiased relative w-full h-fit`}>
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

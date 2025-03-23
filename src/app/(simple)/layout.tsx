import ReactLenis from "lenis/react";
import type { Metadata } from "next";

import "../../styles/globals.css";
import { config } from "@/config";
import { ThemeProvider } from "@/providers/theme-context";

export const metadata: Metadata = {
  title: `${config.name} | Full Stack Developer & Machine Learning Engineer`,
  description:
    "I'm a full stack developer and machine learning engineer with a passion for building delightful software.",
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
    <html lang="en" className="w-screen" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/logo/circle.svg" sizes="any" />
      </head>
      <ReactLenis root options={lenisOptions}>
        <ThemeProvider>
          <body>{children}</body>
        </ThemeProvider>
      </ReactLenis>
    </html>
  );
}

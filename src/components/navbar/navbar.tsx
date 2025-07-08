"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "./links";
import { config } from "@/config";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Image from "next/image";

export default function Navbar() {
    const [isCompressed, setIsCompressed] = useState(false);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        document.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                setIsCompressed(true);
            } else {
                setIsCompressed(false);
            }
        });
    }, [setIsCompressed]);

    const [mainContentOffset, setMainContentOffset] = useState(0);

    useEffect(() => {
        const leftSection = scope.current.querySelector("#left-section");
        const rightSection = scope.current.querySelector("#right-section");
        setMainContentOffset(
            rightSection.offsetWidth - leftSection.offsetWidth,
        );
        console.log(
            leftSection.offsetWidth,
            rightSection.offsetWidth,
            mainContentOffset,
        );
    }, [scope]);

    const transitionOptions = {
        duration: 0.3,
        bounce: 0.2,
    };

    useEffect(() => {
        function animateCompressed() {
            animate(
                scope.current,
                {
                    backgroundColor: "rgba(9, 11, 10, 0.1)",
                    width: "auto",
                },
                {
                    ...transitionOptions,
                    bounce: 1,
                    bounceDamping: 10,
                    stiffness: 100,
                    duration: 0.3,
                },
            );



            animate(
                scope.current.querySelector("#companyLogo"),
                {
                    transform: "rotate(360deg)",
                },
                {
                    ...transitionOptions,
                    type: "spring",
                    mass: 0.5,

                    duration: 0.2,
                },
            );
        }

        function animateExpanded() {
            animate(
                scope.current,
                {
                    backgroundColor: "transparent",
                    width: "100%",
                },
                {
                    ...transitionOptions,

                    bounce: 1,
                    bounceDamping: 10,
                    stiffness: 100,
                    duration: 0.1,
                },
            );

        }

        if (isCompressed) animateCompressed();
        else animateExpanded();
    }, [isCompressed]);

    return (
        <nav
            className={cn("top-0 fixed flex justify-center z-50 px-8  w-full min-h-[76px] max-md:hidden", !isCompressed && "border-b",)}>
            <motion.div
                id="main-nav-content"
                className={cn(
                    "z-50   my-3  mx-auto transition-transform duration-300 ",
                    !isCompressed &&
                    "  flex justify-between px-8  gap-6 w-full ",
                    !isCompressed &&
                    `transform -translate-x-[${mainContentOffset}px]`,
                    isCompressed &&
                    "flex gap-4  px-4 rounded-full backdrop-blur-sm border",
                )}
                ref={scope}
            >
                <div className="flex items-center gap-4" id="left-section">
                    <Link href={"/"}>
                        <div className={cn("rounded-full border size-[40px] flex items-center justify-center text-secondary relative overflow-clip",)} id="companyLogo">
                            <Image src="/logo/Whitelogo.svg"
                                fill
                                className="object-cover scale-200"
                                alt="logo"
                                title="logo"
                            />
                        </div>
                    </Link>
                </div>

                <div
                    className={cn(
                        " justify-center gap-4 max-md:hidden mx-auto my-auto  w-fit h-fit text-sm ",
                        !isCompressed &&
                        "left-1/2 absolute -translate-x-1/2 py-4",
                    )}
                >
                    <motion.ul
                        className={cn(
                            "flex gap-8 ",
                            isCompressed && "gap-4 ",
                            isCompressed
                                ? "dark:text-primary text-background"
                                : "text-foreground ",
                        )}
                    >
                        {links.map((link) => (
                            <li
                                key={link.name}
                                className="mx-auto w-full font-medium text-foreground/80"
                            >
                                <Link href={link.href} aria-label={link.name} title={link.name}>{link.name}</Link>
                            </li>
                        ))}
                    </motion.ul>
                </div>
                <div
                    className={cn("flex justify-end items-center gap-4")}
                    id="right-section"
                >
                    {!isCompressed && (
                        <div className="flex gap-4">
                            <Link
                                href={config.social.github.url}
                                target="_blank"
                                aria-label={config.social.github.ariaLabel}
                            >
                                <SiGithub className=" transition-colors size-5" />
                            </Link>
                            <Link
                                href={config.social.linkedin.url}
                                target="_blank"
                                aria-label={config.social.linkedin.ariaLabel}
                            >
                                <SiLinkedin className=" transition-colors size-5" />
                            </Link>
                            <Link
                                href={config.social.instagram.url}
                                target="_blank"
                                aria-label={config.social.instagram.ariaLabel}
                                title={config.social.instagram.ariaLabel}
                            >
                                <SiInstagram className="transition-colors size-5" />
                            </Link>
                        </div>
                    )}
                </div>
            </motion.div>
        </nav>
    );
}

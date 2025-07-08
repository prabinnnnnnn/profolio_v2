"use client";

import { config } from "@/config";
import { Marquee } from "./magicui/marquee";
import HeaderTitle from "./util/header-title";
import Image from "next/image";

export const Skill = () => {
    const developmentSkills = config.developmentSkills

    return (
        <section className="py-12 md:py-32 px-4 w-full " id="experience">
            <div className=" container mx-auto">
                <HeaderTitle className="mb-8 text-center">Development Skills</HeaderTitle>
                <div className="relative flex  flex-col items-center gap-x-6 space-x-7 justify-center overflow-hidden">
                    <Marquee className="py-4" pauseOnHover>
                        {developmentSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="w-fit p-6 backdrop-blur-sm px-10"
                            >
                                <Image src={skill.image} alt={skill.title} title={skill.title} width={64} height={64} />
                            </div>
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>

            </div>
        </section>
    );
};

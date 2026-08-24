import { config } from "@/config";
import { Marquee } from "./magicui/marquee";
import HeaderTitle from "./util/header-title";
import Image from "next/image";

export const Skill = () => {
    const developmentSkills = config.developmentSkills

    return (
        <section className="w-full px-4 py-12 md:py-32 " id="skills">
            <div className="container mx-auto ">
                <HeaderTitle className="mb-8 text-center">Development Skills</HeaderTitle>
                <div className="relative flex flex-col items-center justify-center overflow-hidden gap-x-6 space-x-7">
                    <Marquee className="py-4" pauseOnHover>
                        {developmentSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="p-6 px-10 w-fit backdrop-blur-sm"
                            >
                                <Image src={skill.image} alt={skill.title || "icons"} title={skill.title} width={64} height={64} />
                            </div>
                        ))}
                    </Marquee>
                    <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-background"></div>
                    <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-background"></div>
                </div>

            </div>
        </section>
    );
};

import Skills from "@/components/features";
import HeroSection from "@/components/hero-section";
import { Certificate } from "@/components/certificte";
import { Projects } from "@/components/projects";
import { Skill } from "@/components/development-skills";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center ">
            <HeroSection />
            <Skills />
            <Projects />
            <Certificate />
            <Skill />
        </main>
    );
}

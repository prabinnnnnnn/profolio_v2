"use client";
import Skills from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import { Certificate } from "@/components/certificte";
import Testimonials from "@/components/testimonials";
import { Projects } from "@/components/projects";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <HeroSection />
      <Skills />
      <Projects />
      <Certificate />
      <Testimonials />
    </div>
  );
}

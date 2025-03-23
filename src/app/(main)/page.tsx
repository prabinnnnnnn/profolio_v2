"use client";
import Skills from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import { Education } from "@/components/education";
import Testimonials from "@/components/testimonials";
import { Projects } from "@/components/projects";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <HeroSection />
      <Skills />
      <Projects />
      <Education />
      <Testimonials />
    </div>
  );
}

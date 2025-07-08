"use client";

import HeaderTitle from "./util/header-title";
import { config, Project } from "@/config";
import ProjectCard from "./card/project-card";

export function Projects() {
  return (
    <section className="py-16 md:py-32" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <HeaderTitle>Projects</HeaderTitle>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {config.education.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 ">
          {config.projects.map((project: Project,index) => (<ProjectCard key={index} project={project} />))}
        </div>
      </div>
    </section>
  );
}
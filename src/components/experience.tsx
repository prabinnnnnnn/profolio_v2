"use client";

import { config } from "@/config";
import { Marquee } from "./magicui/marquee";
import HeaderTitle from "./util/header-title";

export const Experience = () => {
  // Filter projects that are work experience (not personal projects)
  const workExperience = config.projects.filter(
    (project) => !project.isPersonalProject
  );

  return (
    <div className="py-12 md:py-32 px-4 w-full" id="experience">
      <HeaderTitle className="mb-8 text-center">Experience</HeaderTitle>
      <div className="relative flex  flex-col items-center justify-center overflow-hidden">
        <Marquee className="py-4" pauseOnHover>
          {workExperience.map((experience, index) => (
            <div
              key={index}
              className="w-[400px] p-6 rounded-xl dark:bg-[var(--bg-card-custom)] backdrop-blur-sm mx-4 border dark:border-white/10"
            >
              <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
              <p className="text-black/80 dark:text-white/80 mb-2">
                {experience.company}
              </p>
              <p className="text-sm text-black/80 dark:text-white/80 mb-4">
                {experience.startDate} - {experience.endDate}
              </p>
              <p className="text-sm mb-3">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.tags?.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs rounded-full bg-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
};

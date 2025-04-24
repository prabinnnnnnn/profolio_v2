"use client";

import Link from "next/link";
import HeaderTitle from "./util/header-title";
import { config } from "@/config";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader } from "./ui/card";
import Image from "next/image";

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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2">
          {config.projects.map((project) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <CardHeader>
                      {project.link?.href ? (
                        <Link href={project.link.href}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span> // If no link exists, render plain text
                      )}
                    </CardHeader>
                    <CardDescription>{project.description}</CardDescription>
                    <div>
                      <ul className="list-disc pl-5 ">
                        {project.bullets.map((bullet, index) => (
                          <li key={index} className="text-sm py-1">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 border-t border-silver/30"></div>
                    <div className="space-y-6">
                      <h4 className="mb-2 text-sm font-semibold">Languages</h4>
                      {project.tags?.map((tag, index) => (
                        <Button
                          variant={"outline"}
                          key={index}
                          className="text-xs  px-3 py-1 rounded-full mr-2 mb-2 focus:outline-none"
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-16 w-20 overflow-hidden rounded-lg">
                    <Image
                      src={project.image || ""}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

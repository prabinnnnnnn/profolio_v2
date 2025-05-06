
import React from "react";
import { ArrowUpRight, Calendar, Briefcase, User } from "lucide-react";
import Tag from "./tag";
import Image from "next/image";

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        bullets: string[];
        company: string;
        image: string;
        tags: string[];
        position?: string;
        type?: string;
        startDate?: string;
        endDate?: string;
        link?: {
            href: string;
            label: string
        }

    }
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="group rounded-lg overflow-hidden border hover:shadow-md transition-all duration-300">
            <div className="relative aspect-auto ">
                <Image
                    src={project.image}
                    alt={project.title}
                    width="2700"
                    height="1440"
                    className="w-full h-full grayscale "
                />
            </div>
            <div className="p-6 col-span-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold leading-tight mb-2 text-muted-foreground">{project.title}</h3>
                    <a
                        href={project.link?.href}
                        className="text-slate-600 hover:text-slate-900 transition-colors p-1 rounded-full hover:bg-slate-100"
                        aria-label="View project"
                    >
                        <ArrowUpRight className="h-5 w-5" />
                    </a>
                </div>
                <p className="text-slate-600 mb-4">{project.description}</p>

                {project.bullets.length > 0 && (
                    <ul className="mb-4 space-y-1">
                        {project.bullets.map((bullet: string, index: number) => (
                            <li key={index} className="text-sm text-slate-600 flex items-start">
                                <span className="mr-2 text-slate-400 mt-1">•</span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag: string) => (
                        <Tag key={tag} label={tag} />
                    ))}
                </div>

                <div className="pt-4 border-t border-muted-foreground mt-4 flex flex-col gap-2">
                    {project.company && (
                        <div className="flex items-center text-sm text-slate-500">
                            <Briefcase className="h-4 w-4 mr-2 text-slate-400" />
                            <span>{project.company}</span>
                            {/* {project.type && <span className="text-slate-400 ml-1">· {project.type}</span>} */}
                        </div>
                    )}

                    {project.position && (
                        <div className="flex items-center text-sm text-slate-500">
                            <User className="h-4 w-4 mr-2 text-slate-400" />
                            <span>{project.position}</span>
                        </div>
                    )}

                    {(project.startDate || project.endDate) && (
                        <div className="flex items-center text-sm text-slate-500">
                            <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                            <span>
                                {project.startDate}
                                {project.endDate && project.startDate !== project.endDate && ` - ${project.endDate}`}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

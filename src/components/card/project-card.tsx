
import { ArrowUpRight, Calendar, Briefcase, User } from "lucide-react";
import Tag from "./tag";
import Image from "next/image";
import Link from "next/link";

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
        link: {
            href: string;
            label: string
        }

    }
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Link href={project.link.href} target="_blank" className="overflow-hidden transition-all duration-300 border rounded-lg group hover:shadow-md">
            <div className="relative aspect-auto ">
                <Image
                    src={project.image}
                    alt={project.title}
                    title={project.title + ' Project'}
                    width="2700"
                    height="1440"
                    className="w-full h-full grayscale "
                />
            </div>
            <div className="col-span-2 p-6">
                <div className="flex items-start justify-between">
                    <h3 className="mb-2 text-xl font-semibold leading-tight text-muted-foreground">{project.title}</h3>
                    <div
                        className="p-1 transition-colors rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        aria-label="View project"
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
                <p className="mb-4 text-slate-600">{project.description}</p>

                {project.bullets.length > 0 && (
                    <ul className="mb-4 space-y-1">
                        {project.bullets.map((bullet: string, index: number) => (
                            <li key={index} className="flex items-start text-sm text-slate-600">
                                <span className="mt-1 mr-2 text-slate-400">•</span>
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

                <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-muted-foreground">
                    {project.company && (
                        <div className="flex items-center text-sm text-slate-500">
                            <Briefcase className="w-4 h-4 mr-2 text-slate-400" />
                            <span>{project.company}</span>
                        </div>
                    )}

                    {project.position && (
                        <div className="flex items-center text-sm text-slate-500">
                            <User className="w-4 h-4 mr-2 text-slate-400" />
                            <span>{project.position}</span>
                        </div>
                    )}

                    {(project.startDate || project.endDate) && (
                        <div className="flex items-center text-sm text-slate-500">
                            <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                            <span>
                                {project.startDate}
                                {project.endDate && project.startDate !== project.endDate && ` - ${project.endDate}`}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;

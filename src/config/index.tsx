// Types
import { ReactNode } from "react";
import { Laptop, Monitor, Database } from "lucide-react";
export type SocialLink = {
    url: string;
    ariaLabel: string;
};

export type SocialLinks = {
    github: SocialLink;
    linkedin: SocialLink;
    instagram: SocialLink;
};

export interface Project {
    title: string;
    description: string;
    bullets: string[];
    tags: string[]
    company: string;
    image: string
    link: {
        label: string;
        href: string;
    };
    position?: string;
    type:
    | "fulltime"
    | "contract"
    | "internship"
    | "freelance"
    | "personal project";
    startDate?: string;
    endDate?: string;
}

export interface Education {
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
    description: string;
    logo: string;
    grades?: {
        subject: string;
        grade: string;
        year: string;
    }[];
}

export interface Certification {
    items: {
        platform: string;
        degree: string;
        certificateLink?: string;
        startDate: string;
        endDate: string;
        description: string;
        logo: string;
        certificationImage?: string;
    }[];
    title: string;
    subtitle: string;
}

export interface Contact {
    title: string;
    subtitle: string;
}
export interface Testimonial {
    name: string;
    image: string;
    quote: string;
    company?: string;
}

export interface Skills {
    title: string;
    description: string;
    icon: ReactNode;
}

export type Config = {
    name: string;
    contactEmail: string;
    hero: {
        title: string;
        subtitle: string;
        backgroundImage?: string;
    };
    social: SocialLinks;
    projects: Project[];
    education: {
        items: Education[];
        title: string;
        subtitle: string;
    };
    skills: {
        items: Skills[];
        title: ReactNode;
        description: ReactNode;
    };
    testimonials: {
        items: Testimonial[];
        title: string;
        subtitle: string;
    };
    contact: Contact;
    certifications: Certification;
};

// Configuration
export const config: Config = {
    name: "Prabin",
    contactEmail: "mprabintamang@gmai.com",
    hero: {
        title: "Hi, I'm Prabin Moktan",
        subtitle: "I build things that are insanely great",
        backgroundImage: "/hero.png",
    },
    social: {
        github: {
            url: "https://github.com/prabinnnnnnn",
            ariaLabel: "GitHub",
        },
        linkedin: {
            url: "https://www.linkedin.com/in/prabin-moktan-832329309/",
            ariaLabel: "LinkedIn",
        },
        instagram: {
            url: "https://www.instagram.com/prabinnnnn_",
            ariaLabel: "Instagram",
        },
    },
    projects: [
        {
            title: "My Portfolio",
            description:
                "A showcase of my work as a web developer, featuring projects like a music player app and an e-commerce platform built with React, Node.js, and MongoDB.",
            bullets: [
                "Designed and developed a personal portfolio to highlight my projects and skills",
                "Showcased real-world applications, including a music player and e-commerce platform",
                "Implemented a clean, responsive UI with smooth navigation",
                "Integrated project links, descriptions, and a contact section",
            ],
            company: "Personal Project",
            image: "/project/portfolio.png",
            tags: ["React", "Node.js", "MongoDB", "Web Development"],
            position: "Full-Stack Developer",
            type: "personal project",
            startDate: "2025",
            endDate: "Present",
            link: {
                label: "View Portfolio",
                href: "https://your-portfolio-link.com",
            },
        },

        {
            title: "Web Music Player",
            description:
                "A web-based music player that allows users to stream and play music tracks.",
            bullets: [
                "Built using HTML5, CSS3, and JavaScript for seamless media playback",
                "Implemented a playlist feature to let users create custom music queues",
                "Created a custom audio player with playback controls and volume adjustments",
                "Optimized for performance, reducing load times for better user experience",
            ],
            company: "Freelance",
            image: "/project/music.webp",
            tags: ["JavaScript", "Web Audio API", "CSS", "Frontend"],
            position: "Frontend Developer",
            type: "personal project",
            startDate: "2021",
            endDate: "2021",
            link: {
                label: "View Portfolio",
                href: "https://your-portfolio-link.com",
            },
        },
        {
            title: "E-commerce Store",
            description:
                "An e-commerce platform where users can browse and purchase items online.",
            bullets: [
                "Implemented a full-featured product catalog with search and filter options",
                "Integrated payment gateways such as Stripe for seamless transactions",
                "Created an admin dashboard for managing products and orders",
                "Optimized user experience for both desktop and mobile devices",
            ],
            company: "Freelance",
            image: "/project/ecomers.png",
            tags: ["React", "Node.js", "MongoDB", "Tailwind"],
            position: "Full-Stack Developer",
            type: "internship",
            startDate: "2021",
            endDate: "2022",
            link: {
                label: "View Portfolio",
                href: "https://your-portfolio-link.com",
            },
        },

        {
            title: "Personal Blog",
            description:
                "A blog where I share my thoughts on web development, design, and technology.",
            bullets: [
                "Built with a custom CMS built in Node.js",
                "Implemented a dark mode feature with localStorage persistence",
                "Optimized for performance and SEO",
                "Integrated social media sharing buttons",
            ],
            company: "Freelance",
            image: "/project/blog.webp",
            tags: ["Node.js", "Next js", "SEO", "Tailwind"],
            position: "Developer & Designer",
            type: "personal project",
            startDate: "2020",
            endDate: "Present",
            link: {
                label: "View Portfolio",
                href: "https://your-portfolio-link.com",
            },
        },
    ],
    education: {
        items: [
            {
                school: "Free Code Camp",
                degree: "Dropped Out",
                startDate: "1972",
                endDate: "1974",
                description:
                    "Studied calligraphy and eastern philosophy before dropping out. Later credited this experience with inspiring Apple's typography.",
                logo: "/logo/fcc.png",
                grades: [
                    {
                        subject: "Calligraphy",
                        grade: "A+",
                        year: "1972",
                    },
                    {
                        subject: "Eastern Philosophy",
                        grade: "A",
                        year: "1973",
                    },
                    {
                        subject: "Typography Design",
                        grade: "A+",
                        year: "1973",
                    },
                ],
            },
            {
                school: "Skill Training Nepal",
                degree: "Dropped Out",
                startDate: "1972",
                endDate: "1974",
                description:
                    "Studied calligraphy and eastern philosophy before dropping out. Later credited this experience with inspiring Apple's typography.",
                logo: "/logo/skill.png",
                grades: [
                    {
                        subject: "Computer Science",
                        grade: "A",
                        year: "1972",
                    },
                    {
                        subject: "Design Thinking",
                        grade: "A+",
                        year: "1973",
                    },
                    {
                        subject: "Innovation",
                        grade: "A+",
                        year: "1974",
                    },
                ],
            },
        ],
        title: "Education Journey",
        subtitle: "The foundation of my knowledge and experiences",
    },
    skills: {
        items: [
            {
                title: "MERN Stack Development",
                description:
                    "Proficient in both frontend and backend development",
                icon: <Laptop />,
            },
            {
                title: "Frontend Engineering",
                description: "Expertise in building user-friendly interfaces",
                icon: <Monitor />,
            },
            {
                title: "Backend Architecture",
                description:
                    "Strong foundation in server-side development and system design",
                icon: <Database />,
            },
        ],
        title: (
            <>
                What I bring <br className=" sm:hidden" /> to the table
            </>
        ),
        description: "Proficient in both frontend and backend development",
    },
    testimonials: {
        items: [
            {
                name: "Bill Gates",
                image: "/users/avatar-1.jpg",
                quote: "Even though we were competitors, I always admired his vision and dedication to creating insanely great products that changed the world.",
                company: "Microsoft",
            },
            {
                name: "Jony Ive",
                image: "/users/avatar-2.jpg",
                quote: "Working together, we pushed the boundaries of what was possible in industrial design. His perfectionism was infectious.",
                company: "LoveFrom",
            },
            {
                name: "Wozniak",
                image: "/users/avatar-3.jpg",
                quote: "We started in a garage and ended up changing the world. His marketing genius and my technical skills were the perfect combination.",
                company: "Apple Co-founder",
            },
            {
                name: "Tim Cook",
                image: "/users/avatar-4.jpg",

                quote: "His attention to detail and innovative thinking transformed our entire approach to product design. The results speak for themselves.",
                company: "Apple Inc.",
            },
        ],
        title: "Kind Words",
        subtitle: "This is what the peeps say about me",
    },
    contact: {
        title: "Let's Connect",
        subtitle:
            "I'm always looking for new challenges and opportunities to grow. Let's connect and see how we can make something great together.",
    },

    certifications: {
        items: [
            {
                platform: "Free Code Camp",
                degree: "JavaScript Algorithms and Data Structures",
                certificateLink:
                    "https://www.freecodecamp.org/certification/prabinmoktan/javascript-algorithms-and-data-structures-v8",
                startDate: "1972",
                endDate: "1974",
                description:
                    "Studied calligraphy and eastern philosophy before dropping out. Later credited this experience with inspiring Apple's typography.",
                logo: "/logo/fcc.png",
                certificationImage: "/certification/freecodecamp.png"
            },
            {
                platform: "Skill Training Nepal",
                degree: "MERN stack",
                certificateLink: "",
                startDate: "1972",
                endDate: "1974",
                description:
                    "Studied calligraphy and eastern philosophy before dropping out. Later credited this experience with inspiring Apple's typography.",
                logo: "/logo/skill.png",
                certificationImage: "/certification/skilltraningnepal.png"
            },
            {
                platform: "Simpli Learn",
                degree: "Docker",
                certificateLink: "https://simpli-web.app.link/e/AvGjWCuyQSb",
                startDate: "1972",
                endDate: "1974",
                description:
                    "Gained hands-on experience in containerization, Docker CLI, image and container management, Docker Compose, and deploying scalable applications using Docker best practices",
                logo: "/logo/simplilearn.png",
                certificationImage: "/certification/simplelearn.png"
            },
        ],
        title: "Certifications",
        subtitle:
            "Recognizing my dedication to continuous learning and professional growth",
    },
};

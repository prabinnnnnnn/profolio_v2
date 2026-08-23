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
    gmail: SocialLink;
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

export interface DevelopmentSkills {
    title: string;
    image: string
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
    developmentSkills: DevelopmentSkills[];
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
        gmail: {
            url: "mailto:mprabintamang@gmail.com",
            ariaLabel: "Mail",
        },
    },
    projects: [
        {
            title: "Kathmandu Infotech",
            description:
                "A web-based music player that allows users to stream and play music tracks.",
            bullets: [
                "Built using HTML5, CSS3, and JavaScript for seamless media playback",
                "Implemented a playlist feature to let users create custom music queues",
                "Created a custom audio player with playback controls and volume adjustments",
                "Optimized for performance, reducing load times for better user experience",
            ],
            company: "Project",
            image: "/project/kit.png",
            tags: ["Next js", "express", "Mysql", "Redux", "Framer Motion"],
            position: "Web Developer",
            type: "fulltime",
            startDate: "2021",
            endDate: "2021",
            link: {
                label: "View Portfolio",
                href: "https://Kathmanduinfotech.com",
            },
        },
        {
            title: "Gamitech",
            description:
                "An e-commerce platform where gaming products can browse and purchase items online.",
            bullets: [
                "Implemented a full-featured product catalog with search and filter options",
                "Created an admin dashboard for managing products and orders",
                "Optimized user experience for both desktop and mobile devices",
            ],
            company: "Project",
            image: "/project/gamitech.png",
            tags: ["Next js", "Mysql", "Django", "Redux", "Framer Motion", "Gsap"],
            position: "Full-Stack Developer",
            type: "fulltime",
            startDate: "2021",
            endDate: "2022",
            link: {
                label: "View in Portfolio",
                href: "https://gemitech.vercel.app/",
            },
        },

        {
            title: "Blog Website",
            description:
                "A blog where I share my thoughts on web development, design, and technology.",
            bullets: [
                "Built with a custom CMS built in Node.js",
                "Implemented a dark mode feature with localStorage persistence",
                "Optimized for performance and SEO",
                "Integrated social media sharing buttons",
            ],
            company: "internship",
            image: "/project/skilltechnepal.png",
            tags: ["Node.js", "Next js", "SEO", "MongoDb", "Express"],
            position: "Full-stack Developer & Designer",
            type: "personal project",
            startDate: "2020",
            endDate: "Present",
            link: {
                label: "View Portfolio",
                href: "https://skilltechnepal.com",
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
    developmentSkills: [
        { title: 'GitHub', image: '/logo/github.svg' },
        { title: 'Css', image: '/logo/css.svg' },
        { title: 'Tailwind', image: '/logo/tailwind-css.svg' },
        { title: 'docker', image: '/logo/docker.svg' },
        { title: 'git', image: '/logo/git.svg' },
        { title: 'html', image: '/logo/html.svg' },
        { title: 'mysql', image: '/logo/mysql.svg' },
        { title: 'nodejs', image: '/logo/nodejs.svg' },
        { title: 'react', image: '/logo/react.svg' },
        { title: 'express js', image: '/logo/express-js.svg' },
        { title: 'MongoDb', image: '/logo/mongodb.svg' },
    ],

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

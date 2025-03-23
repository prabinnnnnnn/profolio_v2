import {
  HomeIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  MessageSquareIcon,
  WrenchIcon,
} from "lucide-react";

interface Link {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const links: Link[] = [
  {
    name: "Intorduction",
    href: "#introduction",
    icon: <BriefcaseIcon className="size-4" />,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: <WrenchIcon className="size-4" />,
  },
  {
    name: "Testimonials",
    href: "#testimonials",
    icon: <MessageSquareIcon className="size-4" />,
  },
  {
    name: "Contacts",
    href: "#contact",
    icon: <GraduationCapIcon className="size-4" />,
  },
];

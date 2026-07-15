export type ProjectType = "static" | "dynamic";

export interface WebProject {
  id: number;
  title: string;
  description: string;
  type: ProjectType;
  tags: string[];
  live?: string;
  github?: string;
  year: string;
}

export interface DesignProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const webProjects: WebProject[] = [
  {
    id: 1,
    title: "Project Static 1",
    description: "Landing page modern untuk kebutuhan bisnis.",
    type: "static",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "#",
    year: "2025",
  },
  {
    id: 2,
    title: "Project Static 2",
    description: "Portfolio personal dengan desain minimalis.",
    type: "static",
    tags: ["Next.js", "Tailwind"],
    live: "#",
    github: "#",
    year: "2025",
  },
  {
    id: 3,
    title: "Project Static 3",
    description: "Company profile clean dan responsif.",
    type: "static",
    tags: ["HTML", "CSS"],
    live: "#",
    github: "#",
    year: "2025",
  },
  {
    id: 4,
    title: "Project Static 4",
    description: "Website produk UMKM dengan UI elegan.",
    type: "static",
    tags: ["React", "Tailwind"],
    live: "#",
    github: "#",
    year: "2026",
  },
  {
    id: 5,
    title: "Project Static 5",
    description: "Landing page event dengan layout editorial.",
    type: "static",
    tags: ["HTML", "CSS", "JS"],
    live: "#",
    github: "#",
    year: "2026",
  },
  {
    id: 6,
    title: "Project Static 6",
    description: "Microsite promosi dengan animasi halus.",
    type: "static",
    tags: ["Next.js", "Framer Motion"],
    live: "#",
    github: "#",
    year: "2026",
  },
  {
    id: 7,
    title: "Project Dynamic 1",
    description: "Web app full-stack dengan database dan autentikasi.",
    type: "dynamic",
    tags: ["Next.js", "TypeScript", "Prisma"],
    live: "#",
    github: "#",
    year: "2026",
  },
];

export const designProjects: DesignProject[] = [
  {
    id: 1,
    title: "Desain 1",
    description: "Karya desain grafis.",
    image: "/desain/IMG_20260715_053625.jpg",
    tags: ["Graphic Design"],
  },
  {
    id: 2,
    title: "Desain 2",
    description: "Karya desain grafis.",
    image: "/desain/IMG_20260715_053645.jpg",
    tags: ["UI/UX"],
  },
  {
    id: 3,
    title: "Desain 3",
    description: "Karya desain grafis.",
    image: "/desain/IMG_20260715_053658.jpg",
    tags: ["Graphic Design"],
  },
  {
    id: 4,
    title: "Desain 4",
    description: "Karya desain grafis.",
    image: "/desain/IMG_20260715_053711.jpg",
    tags: ["Branding"],
  },
  {
    id: 5,
    title: "Desain 5",
    description: "Karya desain grafis.",
    image: "/desain/IMG_20260715_053721.jpg",
    tags: ["Graphic Design"],
  },
  {
    id: 6,
    title: "Desain 6",
    description: "Karya desain grafis.",
    image: "/desain/IMG_20260715_053733.jpg",
    tags: ["UI/UX"],
  },
  {
    id: 7,
    title: "Desain 7",
    description: "Karya desain grafis.",
    image: "/desain/IMG_20260715_053746.jpg",
    tags: ["Branding"],
  },
  {
    id: 8,
    title: "Desain 8",
    description: "Karya desain grafis.",
    image: "/desain/IMG_20260715_053812.jpg",
    tags: ["Graphic Design"],
  },
];

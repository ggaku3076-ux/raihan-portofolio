export type ProjectType = "static" | "dynamic";

export interface WebProject {
  id: number;
  title: string;
  description: string;
  type: ProjectType;
  tags: string[];
  image: string;
  live?: string;
  github?: string;
  year: string;
}

export interface DesignProject {
  id: number;
  title: string;
  category: "logo" | "poster" | "instagram";
  image: string;
  tags: string[];
}

export const webProjects: WebProject[] = [
  // Static - Travel
  {
    id: 1,
    title: "Mustika Travel",
    description: "Landing page pariwisata profesional untuk layanan tour Bromo dan Jombang.",
    type: "static",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    image: "/assets/travel/mustika.jpg",
    live: "https://mustika-travel.vercel.app/",
    year: "2026",
  },
  {
    id: 2,
    title: "Berkah Trip",
    description: "Platform pemesanan paket wisata travel lokal dengan user interface yang modern.",
    type: "static",
    tags: ["HTML", "CSS", "Tailwind CSS", "React"],
    image: "/assets/travel/berkah.jpg",
    live: "https://berkah-trip.vercel.app/",
    year: "2026",
  },
  {
    id: 3,
    title: "Banua Travel",
    description: "Website portal pariwisata Banjarmasin (Trip Banua Kita) dengan navigasi clean.",
    type: "static",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/assets/travel/banua.jpg",
    live: "https://trip-banua-kita.vercel.app/",
    year: "2026",
  },
  // Static - Coffeeshop
  {
    id: 4,
    title: "Walking Drums Surabaya",
    description: "Landing page representatif kafe Walking Drums dengan visual estetik minimalis.",
    type: "static",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    image: "/assets/coffe/walking-drum.jpg",
    live: "https://walkingdrums-surabaya.vercel.app/",
    year: "2026",
  },
  {
    id: 5,
    title: "Sunny Cafe Jombang",
    description: "Website menu interaktif dan branding digital untuk Sunny Cafe Jombang.",
    type: "static",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    image: "/assets/coffe/sunny.jpg",
    live: "https://sunny-cafe-jombang.vercel.app/",
    year: "2026",
  },
  {
    id: 6,
    title: "Mols Coffee",
    description: "Company profile & digital catalog untuk brand kopi lokal Mols Coffee.",
    type: "static",
    tags: ["HTML", "CSS", "Tailwind CSS"],
    image: "/assets/coffe/mols.jpg",
    live: "https://molscoffe.vercel.app/",
    year: "2026",
  },
  // Static - Company Profile
  {
    id: 7,
    title: "Senyum Delta Care",
    description: "Company profile resmi klinik gigi Delta Care dengan detail booking layanan.",
    type: "static",
    tags: ["HTML", "CSS", "Tailwind CSS", "React"],
    image: "/assets/company/klinik.jpg",
    live: "https://senyum-delta-care.web.id/",
    year: "2026",
  },
  // Dynamic - SaaS
  {
    id: 8,
    title: "Langganan Yuk",
    description: "Aplikasi dynamic SaaS untuk langganan layanan digital dengan backend logic.",
    type: "dynamic",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: "/assets/saas/langganan.jpg",
    live: "https://langgananyuk.web.id/",
    year: "2026",
  },
];

export const designProjects: DesignProject[] = [
  {
    id: 1,
    title: "Logo Desain 1",
    category: "logo",
    image: "/assets/logo/logo1.jpg",
    tags: ["Logo Brand"],
  },
  {
    id: 2,
    title: "Logo Desain 2",
    category: "logo",
    image: "/assets/logo/logo2.jpg",
    tags: ["Logo Brand"],
  },
  {
    id: 3,
    title: "Poster Campaign 1",
    category: "poster",
    image: "/assets/poster/poster1.jpg",
    tags: ["Poster Art"],
  },
  {
    id: 4,
    title: "Poster Campaign 2",
    category: "poster",
    image: "/assets/poster/poster2.jpg",
    tags: ["Poster Art"],
  },
  {
    id: 5,
    title: "Poster Campaign 3",
    category: "poster",
    image: "/assets/poster/poster3.jpg",
    tags: ["Poster Art"],
  },
  {
    id: 6,
    title: "Poster Campaign 4",
    category: "poster",
    image: "/assets/poster/poster4.jpg",
    tags: ["Poster Art"],
  },
  {
    id: 7,
    title: "Instagram Grid 3x3",
    category: "instagram",
    image: "/assets/ig-grid.jpg",
    tags: ["Social Media Layout"],
  },
];

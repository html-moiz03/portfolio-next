export type Project = {
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  image: string;
  liveUrl?: string;
  codeUrl?: string;
  codeLabel?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    category: "CRM",
    title: "Warrantix",
    description:
      "A full CRM for my own warranty sales office — leads pipeline, customers, callbacks, tasks, and a team workspace. Built, shipped, and in use.",
    tags: ["Next.js", "Prisma", "Supabase", "Vercel"],
    accent: "#3d5aff",
    image: "/work/warrantix.jpg",
    liveUrl: "https://warrantix-peach.vercel.app",
  },
  {
    index: "02",
    category: "SAAS / CRM",
    title: "Freelancer Proposal Tracker",
    description:
      "Full-featured freelancer CRM: Kanban drag-and-drop, revenue charts, PDF report generation, onboarding tour, command palette, and multi-account localStorage persistence.",
    tags: ["React", "Vite", "Recharts", "jsPDF"],
    accent: "#ff2e88",
    image: "/work/fp-tracker.jpg",
    liveUrl: "https://freelancer-proposal-tracker.netlify.app",
    codeUrl: "https://github.com/html-moiz03/freelancer-proposal-tracker",
  },
  {
    index: "03",
    category: "AGENCY SITE",
    title: "HN Solutions",
    description:
      "Client-facing portfolio site for an outbound sales BPO — services, process, team, and standards pages, positioned to win carrier trust at a glance.",
    tags: ["React", "Vite", "Responsive"],
    accent: "#ff5e1a",
    image: "/work/hn-solutions.jpg",
    liveUrl: "https://hn-solutions-nine.vercel.app",
    codeUrl: "https://github.com/html-moiz03/hn-solutions",
  },
  {
    index: "04",
    category: "WARRANTY MARKETING SITE",
    title: "US-MAN Global Services",
    description:
      "Extended auto warranty marketing site with deep navy / gold branding — Home, Plans, Compare, Reviews, a multi-step Quote flow, and full FAQ/Contact pages.",
    tags: ["React", "Vite", "Multi-step Forms"],
    accent: "#8a2be2",
    image: "/work/driveshield.jpg",
    liveUrl: "https://www.us-manglobalservices.com",
    codeUrl: "https://github.com/html-moiz03/us-global",
  },
  {
    index: "05",
    category: "IMAGE GALLERY",
    title: "Lens — Image Gallery",
    description:
      "Dark glassmorphic image gallery with category filtering across 25 curated images, a masonry grid, and a full-screen lightbox with keyboard + touch navigation.",
    tags: ["HTML5", "CSS Grid", "Vanilla JS"],
    accent: "#00c98d",
    image: "/work/lens.jpg",
    liveUrl: "https://lens-image-gallery.netlify.app",
    codeUrl: "https://github.com/html-moiz03/CodeAlpha_ImageGallery",
  },
];

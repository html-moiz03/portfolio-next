export type Project = {
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
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
      "A full CRM for my own warranty sales office — leads pipeline, customers, callbacks, tasks, and a team workspace. Being polished before rollout to my team.",
    tags: ["Next.js", "Prisma", "Supabase", "Vercel"],
    accent: "#3d5aff",
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
    liveUrl: "https://freelancer-proposal-tracker.netlify.app",
    codeUrl: "https://github.com/html-moiz03/freelancer-proposal-tracker",
  },
  {
    index: "03",
    category: "RESTAURANT SITE",
    title: "The Coastal Spoon",
    description:
      "A responsive restaurant site built in pure HTML/CSS/JS, with a table reservation system: full validation, password-strength meter, and screen-reader-friendly ARIA support.",
    tags: ["HTML5", "CSS3", "Vanilla JS", "ARIA"],
    accent: "#ff5e1a",
    liveUrl: "https://the-coastal-spoon4.netlify.app/",
    codeUrl: "https://github.com/html-moiz03/decodelabs_task4",
  },
  {
    index: "04",
    category: "INTERNSHIP BUILD",
    title: "DriveShield",
    description:
      "Extended auto warranty marketing site with deep navy / electric blue branding — Home, Plans, Compare, Reviews, a multi-step Quote flow, and full FAQ/Contact pages.",
    tags: ["React", "Vite", "Multi-step Forms"],
    accent: "#8a2be2",
    codeUrl: "https://github.com/html-moiz03",
    codeLabel: "GitHub Profile",
  },
  {
    index: "05",
    category: "IMAGE GALLERY",
    title: "Lens — Image Gallery",
    description:
      "Dark glassmorphic image gallery with category filtering across 25 curated images, a masonry grid, and a full-screen lightbox with keyboard + touch navigation.",
    tags: ["HTML5", "CSS Grid", "Vanilla JS"],
    accent: "#00c98d",
    liveUrl: "https://lens-image-gallery.netlify.app",
    codeUrl: "https://github.com/html-moiz03/CodeAlpha_ImageGallery",
  },
  {
    index: "06",
    category: "MEDIA PLAYER",
    title: "Vybe — Music Player",
    description:
      "Gold-and-black music player with a rotating vinyl + tonearm animation, animated equalizer bars, drag-to-seek progress, shuffle/repeat, and a 17-track playlist.",
    tags: ["HTML5 Audio API", "CSS Animation", "Vanilla JS"],
    accent: "#f6ff3f",
    liveUrl: "https://vybe-musicplayer.netlify.app",
    codeUrl: "https://github.com/html-moiz03/CodeAlpha_MusicPlayer",
  },
];

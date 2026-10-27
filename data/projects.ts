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
  // "Live demo" is misleading when a project is gated behind a real login
  // (real customer data, not a sandboxed demo account) — demoNote overrides
  // the link label with something honest instead of implying open access.
  demoNote?: string;
  caseStudy: {
    problem: string;
    contribution: string;
    decisions: string;
    challenges: string;
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    index: "01",
    category: "CRM",
    title: "Warrantix",
    description:
      "A full CRM for my own warranty sales office — leads pipeline, customers, callbacks, tasks, and a team workspace. Built and deployed solo; rolling it out to my team now.",
    tags: ["Next.js", "Prisma", "Supabase", "Vercel"],
    accent: "#3d5aff",
    image: "/work/warrantix.jpg",
    liveUrl: "https://warrantix-peach.vercel.app",
    demoNote: "Private CRM — live link requires a login",
    caseStudy: {
      problem:
        "My warranty sales office ran leads, callbacks, and customer records across spreadsheets — no single view of where a deal actually stood, and callbacks fell through the cracks.",
      contribution:
        "Built solo, end to end: the data model, the API routes, and every screen — leads pipeline, customer records, callback scheduling, and a team workspace.",
      decisions:
        "Modeled leads, customers, and callbacks as separate linked tables in Prisma instead of one flat table, so a customer's full history — every call, quote, and outcome — stays attached to them as they move through the pipeline. Used Supabase for the database and Next.js API routes instead of a separate backend service, since this is a one-person build running alongside a full-time job.",
      challenges:
        "Getting the pipeline board to reflect a stage change immediately — without a full page reload, and without losing the change if the request failed — meant handling optimistic UI updates with rollback on error for drag-and-drop stage moves. That was the trickiest part of the build.",
      outcome:
        "Live and deployed on Vercel; I use it as admin daily. Still rolling it out to the rest of the sales team, which is why the live link sits behind a real login rather than a public demo account — it holds real customer data.",
    },
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
    caseStudy: {
      problem:
        "The Zynvex internship brief was to build a CRM a freelancer would actually use to track proposals and revenue day to day — not just a static list view.",
      contribution:
        "Built the entire frontend solo: the Kanban board, the revenue dashboard, the PDF report generator, the command palette, and onboarding flow, as a client-side React app.",
      decisions:
        "Used Recharts for the revenue dashboard so charts update live as proposals move stages, and jsPDF to generate real downloadable PDF reports instead of a placeholder button. Multi-account localStorage persistence covers the backend-less scope the internship called for — no server was part of the brief.",
      challenges:
        "Keeping drag-and-drop state, localStorage persistence, and the live chart data all in sync without a backend took real care — moving one card had to update the board, the stored data, and the dashboard numbers in a single action without a stale read anywhere.",
      outcome:
        "Shipped and live on Netlify with the source fully public — the project I'd point a reviewer at first, since nothing about it is gated behind a login.",
    },
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
    caseStudy: {
      problem:
        "HN Solutions, an outbound sales BPO I co-founded, needed a client-facing site that reads as an established team to the carriers evaluating who to trust with a warranty campaign.",
      contribution:
        "Designed and built the site end to end — services, process, team, and standards pages.",
      decisions:
        "Built with React + Vite for a fast, simple marketing site, rather than pulling in a CMS the small team didn't need yet.",
      challenges:
        "Positioning mattered as much as the code — structuring pages and writing copy so the site reads as credible at a glance, without inflated claims or metrics that don't exist yet.",
      outcome: "Live and in active use as the team's client-facing site.",
    },
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
    caseStudy: {
      problem:
        "An auto-warranty marketing site needed a multi-step quote flow that doesn't lose a lead halfway through — a common failure point on long warranty-quote forms.",
      contribution:
        "Built the full site — Home, Plans, Compare, Reviews, the multi-step Quote flow, and FAQ/Contact — and managed its deployment, favicon, and branding assets.",
      decisions:
        "Split the quote form into discrete steps with state persisted between them in React, so a user who gets interrupted mid-form doesn't lose their progress on refresh or back-navigation.",
      challenges:
        "Keeping validation consistent and the user oriented — what step they're on, what's left — across a multi-step flow, without pulling in a form library.",
      outcome: "Live at us-manglobalservices.com, with the source public on GitHub.",
    },
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
    caseStudy: {
      problem:
        "The CodeAlpha internship brief: build an image gallery with category filtering and a lightbox in vanilla JS — no framework, to demonstrate core HTML/CSS/JS fluency.",
      contribution:
        "Built the masonry grid, the category filter, and the full-screen lightbox with keyboard and touch navigation, solo.",
      decisions:
        "Used CSS Grid for the masonry layout and vanilla JS for filter/lightbox state, since the brief was specifically about core fundamentals, not framework usage.",
      challenges:
        "Known issue: a few tiles currently render with extra empty space under the image on certain aspect ratios — the grid-row span isn't recalculating correctly for every image. Flagged and next on my list to fix.",
      outcome:
        "Live on Netlify with the source public. Functional end to end, with the one layout bug above still open — noted here rather than hidden.",
    },
  },
];

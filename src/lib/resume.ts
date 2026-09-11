export const profile = {
  name: "Isaiah Guzman",
  title: "Computer Science Student at Rutgers",
  initials: "IG",
  location: "Union, NJ",
  timeZone: "America/New_York",
  email: "imguzman0813@gmail.com",
  phone: "(908) 590-5037",
  linkedin: {
    label: "/in/isaiah-guzman",
    href: "https://linkedin.com/in/isaiah-guzman-626069233",
  },
  github: {
    label: "/zayguz",
    href: "https://github.com/zayguz",
  },
};

export const about = [
  { text: "Computer Science student at Rutgers", mark: true },
  { text: " building " },
  { text: "full-stack web and mobile applications", mark: true },
  {
    text: ". I work across React, React Native, and Node, and I have shipped client projects end to end — requirements and design through deployment. Alongside school I founded and run an independent service business, which is where I learned ",
  },
  { text: "project management and client communication", mark: true },
  { text: " the hard way." },
];

export type Entry = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
  href?: string;
};

export const experience: Entry[] = [
  {
    title: "Founder & Operator",
    org: "Independent Auto Detailing Business · Union, NJ",
    period: "2023 – Present",
    bullets: [
      "Founded and grew a profitable service business, building a recurring client base through targeted social media marketing and referral-based outreach.",
      "Managed all business operations autonomously: client scheduling, invoicing, supply chain procurement, and service quality control.",
    ],
  },
  {
    title: "Media Production Coordinator",
    org: "Calvary Christian Center",
    period: "2022 – Present",
    bullets: [
      "Led technical production for live and streamed services, managing A/V systems, broadcast software, and multimedia pipelines for audiences of 200+.",
      "Coordinated with volunteers and staff to ensure flawless execution of weekly and special-event productions.",
    ],
  },
];

export const projects: Entry[] = [
  {
    title: "Freelance Website Development",
    org: "Full-Stack Web",
    period: "2026 – Present",
    href: "https://immarealestate.com",
    bullets: [
      "Designed and delivered custom websites for small business clients, managing full project lifecycles from requirements and design through deployment.",
      "Built responsive sites and integrated Follow Up Boss, Zapier webhooks, and Google Analytics.",
    ],
  },
  {
    title: "JOLO — Coffee & Drink Social App",
    org: "Mobile Development",
    period: "2026",
    bullets: [
      "Built a cross-platform mobile app for discovering new drinks, posting creations, and searching for your café.",
      "Implemented persistent local storage, dynamic UI components, and third-party APIs including Google Maps.",
    ],
  },
  {
    title: "Extern — AI Document Reader",
    org: "Full-Stack Web",
    period: "2025",
    bullets: [
      "Used advanced OCR, RAG, and blob processing for document classification and routing.",
      "Integrated a chatbot and agents into the final product to reduce hallucinations and deliver accurate, reliable results.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Science in Computer Science",
    org: "Rutgers University, New Brunswick",
    period: "Expected 01/2027",
  },
];

export const certifications = [
  {
    title: "Claude Certified Architect (CCA)",
    org: "Anthropic",
    period: "In progress",
    href: "https://www.anthropic.com",
  },
];

export const skills = [
  "python",
  "openjdk",
  "javascript",
  "typescript",
  "c",
  "cplusplus",
  "sharp",
  "html5",
  "css",
  "postgresql",
  "mysql",
  "react",
  "expo",
  "nodedotjs",
  "dotnet",
  "pandas",
  "numpy",
  "git",
  "github",
  "docker",
  "figma",
  "linux",
  "claude",
  "googlegemini",
] as const;

export const domains = [
  "Full-Stack Web",
  "Mobile Development",
  "Database Engineering",
  "Machine Learning",
  "Client & Project Management",
];

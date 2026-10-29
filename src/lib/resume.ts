export const profile = {
  name: "Isaiah Guzman",
  title: "Computer Science Student at Rutgers",
  initials: "IG",
  location: "Union, NJ",
  timeZone: "America/New_York",
  email: "imguzman0813@gmail.com",
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
    title: "Extern — AI-Powered Document Q&A Tool",
    org: "AI Powered Application",
    period: "2026",
    bullets: [
      "Built AI pipelines to process pharmaceutical vendor files using OCR (Tesseract, PaddleOCR) and RAG for data extraction and classification across 5+ vendor documents, reaching ~80% field-extraction accuracy.",
      "Developed a RAG-based document retrieval system with LlamaIndex, optimized with chunk tuning and open-source LLMs (Mistral, Phi-2), improving top-5 retrieval relevance ~25% over baseline.",
      "Conducted end-to-end evaluation of the document intelligence system — benchmarking OCR accuracy, RAG retrieval quality, and routing performance on a 50-query test set. Delivered a technical report on model trade-offs, optimization strategies, and deployment recommendations, and built a UI for demo purposes.",
    ],
  },
  {
    title: "Media Production Coordinator",
    org: "Calvary Christian Center",
    period: "2022 – Present",
    bullets: [
      "Lead technical production for live and streamed services, managing A/V systems, broadcast software, and multimedia pipelines for in-person audiences of 200+ and a remote stream.",
      "Operate and troubleshoot audio, video, and streaming equipment live with minimal disruption.",
      "Coordinate and train volunteers and staff for weekly and special-event productions.",
    ],
  },
];

export const projects: Entry[] = [
  {
    title: "JOLO — Cross-Platform Mobile App",
    org: "React Native, Expo, TypeScript",
    period: "2026",
    bullets: [
      "Built a cross-platform iOS/Android/web app with React Native 0.81 and Expo SDK 54 (New Architecture), configuring TypeScript, Babel module-resolver aliasing, and platform build manifests.",
      "Architected file-based navigation in Expo Router, using nested route groups to isolate the auth flow from a tab-navigated main app.",
      "Developed a reusable themed component library and custom React hook driven by centralized design tokens, delivering automatic light/dark theming app-wide.",
    ],
  },
  {
    title: "Freelance Website Development",
    org: "Full-Stack Web Project",
    period: "2026 – Present",
    href: "https://immarealestate.com",
    bullets: [
      "Designed and delivered custom websites for 2+ small business clients, managing full project lifecycles from requirements and design through deployment.",
      "Built a responsive website using HTML and integrated multiple APIs, including Follow Up Boss, Zapier webhooks, and Google Analytics. Automated lead capture, saving 5 hrs/week of manual entry.",
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
  "nodedotjs",
  "nextdotjs",
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
  "Full-Stack Web & Mobile Development",
  "Client & Project Management",
  "Database Engineering",
  "Machine Learning",
];

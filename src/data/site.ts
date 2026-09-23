// Edit this file to personalize your portfolio.
export const site = {
  name: 'Your Name',
  role: 'Full-Stack Developer',
  tagline:
    'I build fast, accessible web experiences with a focus on clean code and thoughtful design.',
  location: 'Earth',
  email: 'you@example.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle' },
    { label: 'X', href: 'https://x.com/your-handle' },
  ],
  about: [
    "I'm a developer who loves turning ideas into polished products. I enjoy working across the stack — from designing APIs to crafting pixel-perfect interfaces.",
    "When I'm not coding, you'll find me exploring new tools, contributing to open source, or writing about what I've learned.",
  ],
};

export const skills = [
  { name: 'TypeScript', note: 'Primary language for web projects' },
  { name: 'React', note: 'Component architecture & hooks' },
  { name: 'Astro', note: 'Content-driven, fast static sites' },
  { name: 'Tailwind CSS', note: 'Utility-first styling' },
  { name: 'Node.js', note: 'APIs, tooling and scripts' },
  { name: 'PostgreSQL', note: 'Relational data modeling' },
  { name: 'Docker', note: 'Containerized dev & deploys' },
  { name: 'Figma', note: 'Prototyping & design handoff' },
];

export type Project = {
  title: string;
  description: string;
  category: 'web' | 'tool' | 'design';
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: 'Syntax Guild',
    description: 'A community hub for developers to share snippets, run challenges, and level up together.',
    category: 'web',
    tags: ['Astro', 'React', 'Tailwind'],
    href: '#',
    repo: '#',
  },
  {
    title: 'DevDash',
    description: 'A real-time dashboard that aggregates CI, deploy, and error-tracking status in one place.',
    category: 'web',
    tags: ['Next.js', 'WebSockets', 'PostgreSQL'],
    href: '#',
  },
  {
    title: 'snipcli',
    description: 'A tiny CLI to save, search, and paste code snippets from your terminal.',
    category: 'tool',
    tags: ['Node.js', 'TypeScript'],
    repo: '#',
  },
  {
    title: 'Lint Presets',
    description: 'Opinionated, shareable ESLint + Prettier configs used across a dozen repos.',
    category: 'tool',
    tags: ['ESLint', 'Tooling'],
    repo: '#',
  },
  {
    title: 'Aurora UI Kit',
    description: 'A Figma design system with tokens synced to Tailwind via a custom plugin.',
    category: 'design',
    tags: ['Figma', 'Design Tokens'],
    href: '#',
  },
];

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Acme Corp',
    period: '2024 — Present',
    points: [
      'Led migration of the marketing site to Astro, cutting load time by 60%.',
      'Built a shared component library used by 5 product teams.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Startup Inc.',
    period: '2021 — 2024',
    points: [
      'Shipped customer-facing features end-to-end across React and Node.js.',
      'Designed the billing service handling 10k+ monthly subscriptions.',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Agency Co.',
    period: '2019 — 2021',
    points: ['Built responsive sites for 20+ clients.', 'Introduced automated testing to the team workflow.'],
  },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/abhipuribuilds",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/abhipuribuilds",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@abhipuribuilds",
  },
];

export const homeMetrics = [
  { value: "11+", label: "Years engineering products" },
  { value: "40-60%", label: "QA effort reduced with PixelProof" },
  { value: "7-12", label: "Member delivery teams led" },
];

export const profileCards = [
  {
    index: "01",
    title: "Platform architecture",
    description:
      "Designs high-performance, modular systems with API-first thinking and resilient delivery paths.",
  },
  {
    index: "02",
    title: "AI automation",
    description:
      "Uses AI validation, workflow automation, and data comparison engines to reduce manual effort.",
  },
  {
    index: "03",
    title: "Enterprise execution",
    description:
      "Leads cross-functional teams across feasibility, requirements, development, QA, and deployment.",
  },
];

export const careerJourney = [
  {
    date: "Jul 2022 - Present",
    title: "Senior Manager | Jivox",
    description:
      "Drives AI automation, scalable AdTech architecture, platform delivery, and automation-led campaign operations at enterprise scale.",
  },
  {
    date: "Aug 2021 - Jun 2022",
    title: "Associate Manager | Jivox",
    description:
      "Expanded delivery ownership across sprint planning, backlog management, stakeholder alignment, and cross-team coordination.",
  },
  {
    date: "Oct 2019 - Jul 2021",
    title: "Team Lead | Jivox",
    description:
      "Led modular API-driven systems, ETL workflows, feed ingestion, and dynamic campaign execution for global enterprise clients.",
  },
  {
    date: "Feb 2018 - Sep 2019",
    title: "Associate Technical Lead | Jivox",
    description:
      "Moved into AdTech platform engineering, building campaign systems, dynamic ad workflows, and high-volume delivery foundations.",
  },
  {
    date: "Feb 2017 - Feb 2018",
    title: "Senior Software Developer | Ness",
    description:
      "Delivered translation management, mobile optimization, and analytics solutions for a global e-commerce platform.",
  },
  {
    date: "Dec 2015 - Jan 2017",
    title: "Software Developer | Accenture",
    description:
      "Developed My Automation Store, an internal enterprise portal using ASP.NET MVC, Web APIs, AngularJS, and SQL Server.",
  },
  {
    date: "Oct 2014 - Nov 2015",
    title: "Associate Software Developer | Accenture",
    description:
      "Built SharePoint knowledge platforms and the NorthStar Wiki, improving content access and usability across enterprise teams.",
  },
];

export const projects = [
  {
    title: "PixelProof",
    category: "AI Validation",
    status: "Live build",
    description:
      "AI-based validation system detecting image-text overlap, formatting issues, and compliance errors, reducing manual QA by 40-60%.",
    stack: ["Python", "Computer Vision", "QA Automation", "APIs"],
    links: {
      github: "https://github.com/abhipuribuilds",
    },
  },
  {
    title: "DiffSense",
    category: "Data QA",
    status: "Live build",
    description:
      "Python-based comparison engine for discrepancy analysis and match-rate calculation across large campaign datasets.",
    stack: ["Python", "Pandas", "ETL", "Data Validation"],
    links: {
      github: "https://github.com/abhipuribuilds",
    },
  },
  {
    title: "Workflow Automation",
    category: "Ops Automation",
    status: "Active",
    description:
      "n8n and API-driven automations for calendar responses, Google Sheets pipelines, campaign ops, and team productivity workflows.",
    stack: ["n8n", "APIs", "Google Sheets", "Webhooks"],
  },
  {
    title: "AI Resume Analyzer",
    category: "AI Tool",
    status: "Coming soon",
    description:
      "A focused resume review system that scores role fit, extracts gaps, and suggests crisp positioning improvements.",
    stack: ["React", "LLMs", "PDF Parsing", "Prompting"],
  },
  {
    title: "AI Chatbot",
    category: "AI Assistant",
    status: "Coming soon",
    description:
      "A polished assistant experience for portfolio Q&A, project discovery, and guided engineering conversations.",
    stack: ["React", "RAG", "Node", "Vector Search"],
  },
  {
    title: "YouTube Automation System",
    category: "Creator Ops",
    status: "Coming soon",
    description:
      "A production workflow for ideation, scripting, publishing checklists, metadata, and repeatable creator operations.",
    stack: ["Automation", "LLMs", "YouTube", "Notion"],
  },
];

export const tools = [
  {
    title: "Resume Analyzer",
    description: "Role-fit review, gap detection, scoring, and AI-assisted rewrite suggestions.",
    status: "Coming Soon",
  },
  {
    title: "AI Chatbot",
    description: "Conversational project guide trained around the AbhiPuri Builds ecosystem.",
    status: "Coming Soon",
  },
  {
    title: "Prompt Optimizer",
    description: "Turn rough prompts into structured, testable, production-ready instructions.",
    status: "Coming Soon",
  },
  {
    title: "Campaign Validator",
    description: "AI QA checks for campaign assets, content rules, layout risk, and delivery hygiene.",
    status: "Coming Soon",
  },
  {
    title: "AI Workflow Assistant",
    description: "A lab for chaining APIs, schedules, Sheets, and AI decisions into reliable operations.",
    status: "Coming Soon",
  },
];

export const blogPosts = [
  {
    title: "Day 1 - VPS + Docker Setup",
    category: "Infrastructure",
    date: "Build Log",
    excerpt:
      "Setting up the deployment base layer: VPS access, Docker mental models, containers, ports, and production hygiene.",
    tags: ["VPS", "Docker", "DevOps"],
    featured: true,
  },
  {
    title: "Day 2 - Building My AI Brand",
    category: "Brand",
    date: "Build Log",
    excerpt:
      "Shaping AbhiPuri Builds into a public AI builder identity with a clear voice, visual system, and shipping rhythm.",
    tags: ["Brand", "AI", "Portfolio"],
  },
  {
    title: "Day 3 - Understanding Real Developer Workflow",
    category: "Engineering",
    date: "Build Log",
    excerpt:
      "Moving from tutorials to real workflows: repos, branches, issues, review loops, deployment, and debugging in context.",
    tags: ["Workflow", "Git", "Learning"],
  },
];

export const evolutionJourney = [
  {
    day: "Day 1",
    title: "First HTML Website",
    versionUrl: "/versions/day-1/index.html",
    progress: 25,
    status: "Origin",
    description:
      "The first public version: a raw HTML website shipped live while learning the deployment layer underneath it.",
    changed: "VPS setup, Docker, Nginx, HTTPS, and the first live deployment.",
    technologies: ["HTML", "VPS", "Docker", "Nginx", "HTTPS"],
    milestones: ["First live site", "Server basics", "Production URL"],
  },
  {
    day: "Day 2",
    title: "Branding and Structure",
    versionUrl: "/versions/day-2/index.html",
    progress: 50,
    status: "Identity",
    description:
      "The website started becoming a creator ecosystem instead of a simple resume page.",
    changed: "Branding, CSS/JS improvements, creator ecosystem thinking, and clearer portfolio structure.",
    technologies: ["CSS", "JavaScript", "Brand System", "Portfolio IA"],
    milestones: ["Visual identity", "Better sections", "Creator direction"],
  },
  {
    day: "Day 3",
    title: "Premium AI UI Direction",
    versionUrl: "/versions/day-3/index.html",
    progress: 75,
    status: "Craft",
    description:
      "The site matured into a darker, cinematic AI-founder surface with stronger motion and premium interaction language.",
    changed: "Git/GitHub workflow, AI-assisted design, SuperDesign prompts, animations, and premium UI polish.",
    technologies: ["Git", "GitHub", "AI Design", "SuperDesign", "Animations"],
    milestones: ["Version control", "AI-assisted UI", "Premium motion"],
  },
  {
    day: "Day 4",
    title: "React Portfolio Ecosystem",
    versionUrl: "/",
    progress: 100,
    status: "System",
    description:
      "The current website becomes a scalable React application with routes, reusable components, Dockerized development, and product ecosystem thinking.",
    changed: "React app transformation, multi-page architecture, Dockerized frontend workflow, and AI ecosystem structure.",
    technologies: ["React", "React Router", "Vite", "Framer Motion", "Docker"],
    milestones: ["Component system", "Multi-page app", "Hot reload workflow"],
  },
];

export const skills = [
  { title: "Languages", description: "Python, C#, JavaScript, PHP" },
  { title: "Frameworks", description: ".NET Core, ASP.NET MVC, Angular, AngularJS, ExpressJS" },
  { title: "Data", description: "PySpark, ETL pipelines, Jupyter, Anaconda, Snowflake, MySQL" },
  { title: "Cloud and tools", description: "AWS S3, Git, NPM, Webpack, Gulp, CI/CD" },
  { title: "Architecture", description: "REST APIs, microservices, API-first design, scalable systems" },
  { title: "Leadership", description: "Agile delivery, sprint planning, stakeholder management, team leadership" },
];

export const clients = [
  "Nike",
  "Marriott",
  "Mazda",
  "Claritin",
  "Facebook",
  "YouTube",
  "Bridgestone",
  "Volkswagen",
  "Bose",
  "Dove",
  "MIQ",
];

export const awards = [
  {
    title: "Above & Beyond Award (3x)",
    description: "Jivox | Q3 FY2018, Q2 FY2020, Q2 FY2024",
  },
  {
    title: 'Gold Standard "ACE" Award',
    description: "Accenture | Q3 FY2016",
  },
];

/* ============================================================
   Lighthouse Learning Hub — Site Data
   ------------------------------------------------------------
   This is the ONLY file you need to edit to update site content:
   courses, resources, announcements, roadmap, FAQs and links.
   Every page reads from these arrays at load time.
   ============================================================ */

window.SITE_CONFIG = {
  name: "Lighthouse Learning Hub",
  tagline: "Guiding you from beginner to builder — free, forever.",
  description:
    "A free, community-driven learning hub for AI and modern software engineering. Video courses live on YouTube; roadmaps and resources live here.",
  channelUrl: "https://www.youtube.com/@LighthouseLearning_Hub",
  contact: {
    email: "lighthousecoachinginstitute@gmail.com", // ← replace with your real email
    phone: "+91 9834879138 / +91 9881386503"                  // ← replace with your real phone / WhatsApp number
  },
  newsletter: {
    // Subscriber emails are sent here. Create a free form at https://formspree.io,
    // copy its endpoint URL and paste it below (looks like https://formspree.io/f/abcd1234).
    // Until you replace this, subscriptions are NOT collected (demo mode).
    endpoint: "https://formspree.io/f/mqerdndg"
  },
  social: {
    youtube: "https://www.youtube.com/@LighthouseLearning_Hub",
    // discord: "https://discord.gg/REPLACE_ME",
    // github: "https://github.com/REPLACE_ME",
    // twitter: "https://x.com/REPLACE_ME",
    // linkedin: "https://www.linkedin.com/company/REPLACE_ME"
  },
  stats: {
    learners: "2,000+",
    courses: "3",
    resources: "60+",
    hoursOfContent: "16+"
  }
};

/* ------------------------------------------------------------
   COURSES
   status: "live" | "in-progress" | "coming-soon"
   level:  "Beginner" | "Intermediate" | "Advanced" | "All Levels"

   ── HOW TO ADD A RESOURCE (downloadable file) ─────────────────
   1. Copy your file into the course's folder:
        assets/downloads/flutter/   assets/downloads/ai/   assets/downloads/sql/
      (e.g. assets/downloads/flutter/setup-guide.pdf)
   2. Add one line inside that course's  resources: [ ... ]  array below:
        { id: "flutter-setup", title: "Flutter Setup Guide (PDF)", type: "pdf", size: "1.0 MB", downloads: 0, url: "assets/downloads/flutter/setup-guide.pdf" },
   3. Save — it appears automatically on the course page, the
      Resources page and the home page. Nothing else to change.

   Notes:
   • type controls the icon: pdf | cheatsheet | code | prompts | assignment | practice
   • size and downloads are just display text — type them yourself.
   • When a visitor clicks Download, the file is served from your
     website and saved to THEIR Downloads folder.
   • Big file? Host it on Google Drive/Dropbox and paste the share
     link as url instead.
   ------------------------------------------------------------ */
window.COURSES = [
  {
    id: "deep-dive-flutter",
    title: "Deep Dive in Flutter",
    tagline: "One codebase, beautiful apps — from first widget to app store.",
    description:
      "A complete, hands-on Flutter journey: Dart fundamentals, OOP, UI design, networking, Firebase, authentication, state management, AI-assisted development and deploying your app to multiple platforms.",
    category: "Mobile",
    level: "All Levels",
    duration: "12 modules",
    lessons: 0,
    status: "live",
    featured: true,
    cover: "assets/img/covers/flutter.svg",
    accent: "#38bdf8",
    playlist: "https://www.youtube.com/playlist?list=REPLACE_PLAYLIST_FLUTTER",
    tags: ["Flutter", "Dart", "OOP", "Firebase", "State Management", "Deployment"],
    learners: "",
    lastUpdated: "2026-07-23",
    outcomes: [
      "Build beautiful cross-platform apps with Flutter and Dart",
      "Design clean UIs with widgets, themes and animations",
      "Connect apps to APIs, Firebase and cloud storage — with real authentication",
      "Manage app state confidently: setState, callbacks and Provider",
      "Use AI tools to code faster and catch bugs early",
      "Build the final .APK and deploy your app to multiple platforms"
    ],
    prerequisites: ["No prior app development experience needed", "Basic programming logic helps"],
    modules: [
      { title: "Fundamental Flutter Concepts", duration: "Flutter", topics: ["Stateful vs. Stateless widgets", "The widget tree", "State management basics", "Animations and themes"] },
      { title: "Fundamental Dart Concepts", duration: "Dart", topics: ["Lists, maps and enums", "Loops", "Futures and streams", "Mixins and classes"] },
      { title: "Object Oriented Programming (OOP)", duration: "OOPs", topics: ["The type system", "Variables, functions and methods", "Inheritance", "Classes and protocols"] },
      { title: "Control Structures", duration: "Loops", topics: ["If/Else clauses", "Switch statements", "Using logic to control the flow of execution"] },
      { title: "Data Structures", duration: "Data", topics: ["Working with collections", "Lists", "Maps"] },
      { title: "Software Design", duration: "Design & Animation", topics: ["Organising and formatting code for readability", "The Model-View-Controller (MVC) design pattern"] },
      { title: "Networking", duration: "Network", topics: ["Asynchronous API calls", "Storing and retrieving data from the cloud", "The JSON format for server communication"] },
      { title: "Data Storage", duration: "Storage", topics: ["Firebase Cloud Firestore", "Using Firestore as the backend for your Flutter apps"] },
      { title: "Authentication", duration: "Security", topics: ["Logging users in", "Registering users for your Flutter apps"] },
      { title: "State Management", duration: "State", topics: ["setState and prop drilling", "Lifting state up", "Callbacks", "The Provider package"] },
      { title: "Artificial Intelligence", duration: "AI", topics: ["Automating repetitive tasks with AI", "Catching bugs early and shipping faster", "Boilerplate code and AI-powered systems"] },
      { title: "GitHub & App Deployment", duration: "Deployment", topics: ["Finalizing the app as an .APK file", "Deploying the app on multiple platforms"] }
    ],
    resources: [
      // Your first Flutter resource goes here — put the file in assets/downloads/flutter/, then uncomment and edit this line:
      // { id: "flutter-setup", title: "Flutter Setup Guide (PDF)", type: "pdf", size: "1.0 MB", downloads: 0, url: "assets/downloads/flutter/setup-guide.pdf" },
    ],
    faqs: [
      { q: "Do I need to know Dart before starting?", a: "No — Dart fundamentals get their own module (Module 2), and OOP concepts are built up from scratch inside the course." }
    ]
  },
  {
    id: "generative-ai",
    title: "Future ready with AI",
    tagline: "From prompts to production-grade AI apps.",
    description:
      "Master large language models, prompt engineering, RAG pipelines, embeddings, agents and AI app deployment. Built for developers who want to ship real AI products, not just demos.",
    category: "AI & ML",
    level: "Intermediate",
    duration: "6 hours",
    lessons: 10,
    status: "in-progress",
    featured: true,
    cover: "assets/img/covers/ai.svg",
    accent: "#22d3ee",
    playlist: "https://www.youtube.com/playlist?list=REPLACE_PLAYLIST_AI",
    tags: ["LLMs", "RAG", "Agents", "Prompt Engineering", "Python"],
    learners: "12,400",
    lastUpdated: "2026-07-15",
    outcomes: [
      "Design reliable prompts and evaluate model outputs systematically",
      "Create multi-step AI agents with tool use",
      "Deploy AI apps with streaming, caching and cost controls"
    ],
    prerequisites: ["Basic coding", "Comfort with APIs and JSON"],
    modules: [
      { title: "Foundations of LLMs", duration: "15 min", topics: ["How transformers work (intuition-first)", "Tokens, context windows & pricing", "Choosing the right model", "Setting up your AI dev environment"] },
      { title: "Prompt Engineering in Practice", duration: "1 hrs", topics: ["Zero-shot, few-shot & chain-of-thought", "Structured outputs with JSON schemas", "Prompt evaluation & regression testing", "Common failure modes and fixes"] },
      { title: "Embeddings & RAG", duration: "6 hrs", topics: ["Embeddings and semantic search", "Chunking strategies that actually work", "Vector databases (pgvector, Chroma)", "Building a full RAG chatbot project"] },
      { title: "AI Agents & Tool Use", duration: "6 hrs", topics: ["Function calling & tool schemas", "Multi-step agent loops", "Guardrails, retries and evals", "Project: research assistant agent"] },
      { title: "Shipping to Production", duration: "6.5 hrs", topics: ["Streaming responses & UX patterns", "Caching, rate limits & cost control", "Observability for AI apps", "Capstone: deploy your AI product"] }
    ],
    resources: [
      { id: "ai-prompt-pack", title: "The Ultimate Prompt Pack", type: "prompts", size: "58 KB", downloads: 8214, updated: "2026-07-15", url: "assets/downloads/Prompt_Engineering_Complete_Guide.pdf" },
      { id: "ai-rag-cheatsheet", title: "Ai_Model_Comparison_Cheat_Sheet", type: "cheatsheet", size: "860 KB", downloads: 6120, updated: "2026-07-10", url: "assets/downloads/Ai_Model_Comparison_Cheat_Sheet.pdf" },
      // { id: "ai-source", title: "Course Source Code — All Projects", type: "code", size: "4.8 MB", downloads: 5430, updated: "2026-07-15", url: "assets/downloads/source-code.zip" },
      //{ id: "ai-notes", title: "Full Course Notes (PDF)", type: "pdf", size: "3.1 MB", downloads: 7050, updated: "2026-06-28", url: "assets/downloads/placeholder.pdf" },
      //{ id: "ai-assignments", title: "Hands-on Assignments Pack", type: "assignment", size: "540 KB", downloads: 3890, updated: "2026-06-20", url: "assets/downloads/placeholder.pdf" }
    ],
    faqs: [
      { q: "Do I need a paid API key to follow along?", a: "Most lessons work with free-tier API credits. We also show local open-source model alternatives for every project so you can learn with zero cost." },
      { q: "Is this course beginner friendly?", a: "You should be comfortable with basic Python and calling APIs. If you're brand new to programming, spend a little time on Python basics first — then jump in." },
      { q: "Will the course stay up to date?", a: "Yes — the AI space moves fast, so we re-record outdated lessons whenever the tools change significantly." },
      { q: "Do I get a certificate?", a: "The course is free and certificate-less by design. Your capstone project portfolio is worth far more to employers." }
    ]
  },
  // {
  //   id: "nodejs-backend",
  //   title: "Node.js Backend Mastery",
  //   tagline: "APIs, auth, databases and deployment — end to end.",
  //   description:
  //     "Build production-ready backends with Node.js and Express. REST APIs, authentication, PostgreSQL, testing, caching, WebSockets and deployment — everything you need to work as a backend developer.",
  //   category: "Backend",
  //   level: "Beginner",
  //   duration: "22 hours",
  //   lessons: 40,
  //   status: "live",
  //   featured: true,
  //   cover: "assets/img/covers/node.svg",
  //   accent: "#4ade80",
  //   playlist: "https://www.youtube.com/playlist?list=REPLACE_PLAYLIST_NODE",
  //   tags: ["Node.js", "Express", "PostgreSQL", "REST", "JWT"],
  //   learners: "9,800",
  //   lastUpdated: "2026-07-08",
  //   outcomes: [
  //     "Build and document RESTful APIs with Express",
  //     "Implement secure authentication with JWT and sessions",
  //     "Model data with PostgreSQL and write efficient queries",
  //     "Test, containerize and deploy a real backend"
  //   ],
  //   prerequisites: ["JavaScript fundamentals", "Basic terminal usage"],
  //   modules: [
  //     { title: "Node.js Fundamentals", duration: "3 hrs", topics: ["The event loop, explained simply", "Modules, npm and project structure", "Async patterns: callbacks → promises → async/await", "Building a CLI tool"] },
  //     { title: "Express & REST APIs", duration: "5 hrs", topics: ["Routing, middleware & error handling", "Validation and sanitization", "REST design that scales", "Project: task manager API"] },
  //     { title: "Databases with PostgreSQL", duration: "5 hrs", topics: ["Schema design & migrations", "Query building and ORMs", "Transactions and indexing basics", "Connecting the API to real data"] },
  //     { title: "Auth & Security", duration: "4 hrs", topics: ["Password hashing done right", "JWT vs sessions", "Role-based access control", "OWASP top-10 for Node devs"] },
  //     { title: "Testing & Deployment", duration: "5 hrs", topics: ["Unit & integration tests", "Docker fundamentals", "CI pipelines", "Deploying to a cloud VPS"] }
  //   ],
  //   resources: [
  //     { id: "node-cheatsheet", title: "Express Middleware Cheat Sheet", type: "cheatsheet", size: "620 KB", downloads: 5211, updated: "2026-07-08", url: "assets/downloads/placeholder.pdf" },
  //     { id: "node-source", title: "Task Manager API — Full Source", type: "code", size: "2.4 MB", downloads: 4780, updated: "2026-07-08", url: "assets/downloads/source-code.zip" },
  //     { id: "node-pdf", title: "Node.js Backend Handbook (PDF)", type: "pdf", size: "2.8 MB", downloads: 6340, updated: "2026-06-12", url: "assets/downloads/placeholder.pdf" },
  //     { id: "node-practice", title: "API Design Practice Challenges", type: "practice", size: "410 KB", downloads: 2915, updated: "2026-05-25", url: "assets/downloads/placeholder.pdf" }
  //   ],
  //   faqs: [
  //     { q: "Which Node.js version does the course use?", a: "Everything is recorded on the current LTS release. Any Node 20+ version works — we call out the rare differences when they matter." },
  //     { q: "Do I need to know a database already?", a: "No. The PostgreSQL module starts from zero and teaches SQL alongside the backend work." },
  //     { q: "Is TypeScript used?", a: "The core course uses modern JavaScript to stay focused. A bonus section converts the final project to TypeScript, and our TypeScript course goes deeper." }
  //   ],
  //   updates: [
  //     { date: "2026-07-08", text: "Deployment module updated with a new zero-downtime deploy lesson." },
  //     { date: "2026-06-12", text: "Handbook PDF refreshed; added rate limiting chapter." }
  //   ]
  // },
  // {
  //   id: "react-frontend",
  //   title: "React — The Complete Path",
  //   tagline: "Components to full apps, with modern patterns.",
  //   description:
  //     "Learn React from first principles: components, hooks, state management, data fetching, routing, performance and testing. Finish by shipping a full production app.",
  //   category: "Frontend",
  //   level: "Beginner",
  //   duration: "20 hours",
  //   lessons: 38,
  //   status: "live",
  //   featured: true,
  //   cover: "assets/img/covers/react.svg",
  //   accent: "#60a5fa",
  //   playlist: "https://www.youtube.com/playlist?list=REPLACE_PLAYLIST_REACT",
  //   tags: ["React", "Hooks", "Router", "State", "Vite"],
  //   learners: "11,050",
  //   lastUpdated: "2026-06-30",
  //   outcomes: [
  //     "Think in components and manage state confidently",
  //     "Fetch, cache and mutate server data cleanly",
  //     "Build accessible, responsive UIs",
  //     "Test and deploy a complete React application"
  //   ],
  //   prerequisites: ["HTML & CSS", "JavaScript fundamentals"],
  //   modules: [
  //     { title: "React Foundations", duration: "4 hrs", topics: ["JSX and components", "Props, state & events", "Conditional rendering & lists", "Project: interactive dashboard widgets"] },
  //     { title: "Hooks Deep Dive", duration: "4 hrs", topics: ["useState & useEffect properly", "useRef, useMemo, useCallback", "Custom hooks", "Common hook mistakes"] },
  //     { title: "Routing & Data", duration: "4 hrs", topics: ["Client-side routing", "Data fetching patterns", "Loading & error states", "Optimistic updates"] },
  //     { title: "State at Scale", duration: "4 hrs", topics: ["Lifting state vs context", "Reducers", "When you need a state library", "Project: shopping cart"] },
  //     { title: "Ship It", duration: "4 hrs", topics: ["Performance profiling", "Accessibility essentials", "Component testing", "Build & deploy"] }
  //   ],
  //   resources: [
  //     { id: "react-cheatsheet", title: "Hooks Decision Cheat Sheet", type: "cheatsheet", size: "540 KB", downloads: 7830, updated: "2026-06-30", url: "assets/downloads/placeholder.pdf" },
  //     { id: "react-source", title: "All Course Projects — Source", type: "code", size: "3.6 MB", downloads: 5106, updated: "2026-06-30", url: "assets/downloads/source-code.zip" },
  //     { id: "react-pdf", title: "React Patterns Handbook (PDF)", type: "pdf", size: "2.2 MB", downloads: 6015, updated: "2026-05-18", url: "assets/downloads/placeholder.pdf" }
  //   ],
  //   faqs: [
  //     { q: "Class components or hooks?", a: "Hooks and function components only — that's what modern codebases use. We mention class components once so you can read legacy code." },
  //     { q: "Does the course cover Next.js?", a: "No — this course builds rock-solid React fundamentals first. A dedicated Next.js course is on the roadmap." }
  //   ],
  //   updates: [
  //     { date: "2026-06-30", text: "New lesson on the latest React version features; cheat sheet updated." },
  //     { date: "2026-05-18", text: "Patterns handbook v2 released with 12 new patterns." }
  //   ]
  // },
  // {
  //   id: "typescript",
  //   title: "TypeScript for Serious Developers",
  //   tagline: "Types that scale from scripts to systems.",
  //   description:
  //     "Go beyond 'JavaScript with types'. Learn the type system deeply — generics, narrowing, utility types, declaration files — and apply it to real Node and React codebases.",
  //   category: "Languages",
  //   level: "Intermediate",
  //   duration: "14 hours",
  //   lessons: 30,
  //   status: "live",
  //   featured: false,
  //   cover: "assets/img/covers/typescript.svg",
  //   accent: "#818cf8",
  //   playlist: "https://www.youtube.com/playlist?list=REPLACE_PLAYLIST_TS",
  //   tags: ["TypeScript", "Generics", "Type Safety", "tooling"],
  //   learners: "6,700",
  //   lastUpdated: "2026-06-18",
  //   outcomes: [
  //     "Model real-world data precisely with the type system",
  //     "Write and constrain generics without fear",
  //     "Type existing JavaScript libraries",
  //     "Configure TypeScript for Node, React and monorepos"
  //   ],
  //   prerequisites: ["Solid JavaScript"],
  //   modules: [
  //     { title: "Type System Core", duration: "3 hrs", topics: ["Primitives to object types", "Unions, intersections & literals", "Narrowing and type guards", "Structural typing mindset"] },
  //     { title: "Generics That Make Sense", duration: "3.5 hrs", topics: ["Generic functions & constraints", "keyof, typeof, indexed access", "Conditional & mapped types", "Building typed utilities"] },
  //     { title: "TypeScript in the Wild", duration: "4 hrs", topics: ["Typing React components & hooks", "Typing Express APIs end-to-end", "Declaration files", "Migrating a JS codebase"] },
  //     { title: "Tooling & Config", duration: "3.5 hrs", topics: ["tsconfig demystified", "Strictness flags worth enabling", "Monorepo setups", "Publishing typed packages"] }
  //   ],
  //   resources: [
  //     { id: "ts-cheatsheet", title: "Utility Types Cheat Sheet", type: "cheatsheet", size: "480 KB", downloads: 4920, updated: "2026-06-18", url: "assets/downloads/placeholder.pdf" },
  //     { id: "ts-practice", title: "50 Type Challenges (with solutions)", type: "practice", size: "390 KB", downloads: 3540, updated: "2026-06-01", url: "assets/downloads/placeholder.pdf" },
  //     { id: "ts-source", title: "Course Code & Migration Example", type: "code", size: "1.9 MB", downloads: 2870, updated: "2026-06-18", url: "assets/downloads/source-code.zip" }
  //   ],
  //   faqs: [
  //     { q: "Should I learn TypeScript before React or Node?", a: "Learn JavaScript first, then either framework, then TypeScript. This course assumes you already write JS comfortably." }
  //   ],
  //   updates: [
  //     { date: "2026-06-18", text: "Added lessons on the newest TypeScript release features." }
  //   ]
  // },
  {
    id: "sql-databases",
    title: "SQL & Database Design",
    tagline: "Query, model and optimize real data.",
    description:
      "From SELECT to schema design and query optimization. Learn PostgreSQL hands-on with realistic datasets, and finish able to design and debug production databases.",
    category: "Data",
    level: "Beginner",
    duration: "16 hours",
    lessons: 32,
    status: "coming-soon",
    featured: false,
    cover: "assets/img/covers/sql.svg",
    accent: "#f59e0b",
    playlist: "https://www.youtube.com/playlist?list=REPLACE_PLAYLIST_SQL",
    tags: ["SQL", "PostgreSQL", "Modeling", "Indexes"],
    learners: "5,300",
    lastUpdated: "2026-05-22",
    outcomes: [
      "Write complex queries: joins, subqueries, window functions",
      "Design normalized schemas that stay maintainable",
      "Read query plans and add the right indexes",
      "Handle migrations and data integrity safely"
    ],
    prerequisites: ["None — true beginner friendly"],
    modules: [
      { title: "SQL Fundamentals", duration: "4 hrs", topics: ["SELECT, WHERE, ORDER BY", "Aggregations & GROUP BY", "Joins, visualized", "Practice: analytics on a real dataset"] },
      { title: "Intermediate SQL", duration: "4 hrs", topics: ["Subqueries & CTEs", "Window functions", "Set operations", "Cleaning messy data"] },
      { title: "Database Design", duration: "4 hrs", topics: ["Normalization without the jargon", "Keys, constraints & relationships", "Modeling a real product", "Migrations"] },
      { title: "Performance", duration: "4 hrs", topics: ["How indexes actually work", "EXPLAIN plans", "N+1 and other classic mistakes", "Transactions & locking"] }
    ],
    resources: [
    //   { id: "sql-cheatsheet", title: "SQL Joins & Window Functions Cheat Sheet", type: "cheatsheet", size: "710 KB", downloads: 6480, updated: "2026-05-22", url: "assets/downloads/placeholder.pdf" },
    //   { id: "sql-practice", title: "Practice Dataset + 80 Exercises", type: "practice", size: "5.2 MB", downloads: 4210, updated: "2026-05-22", url: "assets/downloads/source-code.zip" },
    //   { id: "sql-pdf", title: "Database Design Workbook (PDF)", type: "pdf", size: "1.9 MB", downloads: 3660, updated: "2026-04-30", url: "assets/downloads/placeholder.pdf" }
     ],
    faqs: [
      { q: "PostgreSQL or MySQL?", a: "We teach on PostgreSQL, but 95% of the course is standard SQL that transfers directly to MySQL, SQLite and SQL Server." }
    ]
  }
  /*
  {
    id: "python-for-ai",
    title: "Python for AI Builders",
    tagline: "The fastest path from zero to AI-ready Python.",
    description:
      "A focused Python course for people who want to build AI applications. Skip the fluff — learn exactly the Python, data handling and API skills the Generative AI course expects.",
    category: "AI & ML",
    level: "Beginner",
    duration: "12 hours",
    lessons: 26,
    status: "live",
    featured: false,
    cover: "assets/img/covers/python.svg",
    accent: "#fbbf24",
    playlist: "https://www.youtube.com/playlist?list=REPLACE_PLAYLIST_PY",
    tags: ["Python", "APIs", "Data", "Foundations"],
    learners: "8,900",
    lastUpdated: "2026-06-05",
    outcomes: [
      "Write clean, idiomatic Python",
      "Work with JSON, files and HTTP APIs",
      "Manage environments and dependencies properly",
      "Be fully prepared for the Generative AI course"
    ],
    prerequisites: ["None — start here if you're new"],
    modules: [
      { title: "Python Essentials", duration: "4 hrs", topics: ["Variables, types & control flow", "Functions and modules", "Lists, dicts & comprehensions", "Errors & debugging"] },
      { title: "Working with Data", duration: "4 hrs", topics: ["Files & JSON", "HTTP requests & APIs", "Virtual environments & pip", "Project: API data pipeline"] },
      { title: "Python for AI Work", duration: "4 hrs", topics: ["Type hints & dataclasses", "Async basics", "Calling AI APIs", "Project: your first AI script"] }
    ],
    resources: [
      { id: "py-cheatsheet", title: "Python Syntax Cheat Sheet", type: "cheatsheet", size: "520 KB", downloads: 7120, updated: "2026-06-05", url: "assets/downloads/placeholder.pdf" },
      { id: "py-assignments", title: "Beginner Assignment Pack", type: "assignment", size: "460 KB", downloads: 4480, updated: "2026-05-15", url: "assets/downloads/placeholder.pdf" },
      { id: "py-source", title: "All Lesson Code", type: "code", size: "1.1 MB", downloads: 3950, updated: "2026-06-05", url: "assets/downloads/source-code.zip" }
    ],
    faqs: [
      { q: "Is this a full Python course?", a: "It's deliberately focused: everything you need for AI development, nothing you don't. For data science or scripting careers you may want additional material afterwards." }
    ],
    updates: [
      { date: "2026-06-05", text: "New async basics lesson added to Module 3." }
    ]
  },
  {
    id: "cloud-fundamentals",
    title: "Cloud Fundamentals (AWS)",
    tagline: "Deploy anything, understand everything.",
    description:
      "Compute, storage, networking, IAM and serverless — learn cloud concepts on AWS that transfer to any provider. Recording in progress; first modules already published.",
    category: "Cloud",
    level: "Beginner",
    duration: "18 hours (planned)",
    lessons: 20,
    status: "in-progress",
    featured: false,
    cover: "assets/img/covers/cloud.svg",
    accent: "#f472b6",
    playlist: "https://www.youtube.com/playlist?list=REPLACE_PLAYLIST_CLOUD",
    tags: ["AWS", "EC2", "S3", "Serverless", "IAM"],
    learners: "2,100",
    lastUpdated: "2026-07-18",
    outcomes: [
      "Understand core cloud building blocks and pricing",
      "Deploy apps on EC2, containers and Lambda",
      "Secure workloads with IAM done right",
      "Architect a real project on the free tier"
    ],
    prerequisites: ["Basic terminal usage", "Any backend basics help"],
    modules: [
      { title: "Cloud Concepts & Setup", duration: "3 hrs", topics: ["Regions, AZs and the shared responsibility model", "Free tier without surprise bills", "CLI & console basics"] },
      { title: "Compute & Storage", duration: "5 hrs", topics: ["EC2 from zero", "S3 & static hosting", "EBS, snapshots, backups", "Project: deploy a full app"] },
      { title: "Networking & IAM (recording)", duration: "5 hrs", topics: ["VPCs demystified", "Security groups", "IAM users, roles & policies"] },
      { title: "Serverless (planned)", duration: "5 hrs", topics: ["Lambda & API Gateway", "DynamoDB basics", "Event-driven patterns"] }
    ],
    resources: [
      { id: "cloud-cheatsheet", title: "AWS Services Map Cheat Sheet", type: "cheatsheet", size: "780 KB", downloads: 1830, updated: "2026-07-18", url: "assets/downloads/placeholder.pdf" },
      { id: "cloud-pdf", title: "Free Tier Survival Guide (PDF)", type: "pdf", size: "900 KB", downloads: 2240, updated: "2026-07-01", url: "assets/downloads/placeholder.pdf" }
    ],
    faqs: [
      { q: "When will the course be complete?", a: "Modules release every 2–3 weeks. Follow the Updates page or subscribe to the newsletter to get notified the moment new modules drop." },
      { q: "Will this cost me money in AWS bills?", a: "Every lesson is designed for the free tier, and the Free Tier Survival Guide shows you how to set billing alarms before you touch anything." }
    ],
    updates: [
      { date: "2026-07-18", text: "Module 2 (Compute & Storage) fully published. Networking module recording underway." },
      { date: "2026-06-25", text: "Course announced; Module 1 live." }
    ]
  },
  {
    id: "devops-cicd",
    title: "DevOps & CI/CD Pipelines",
    tagline: "Automate everything between commit and production.",
    description:
      "Docker, GitHub Actions, infrastructure-as-code, monitoring and deployment strategies. Planned to open after Cloud Fundamentals completes — vote for it on the roadmap.",
    category: "DevOps",
    level: "Intermediate",
    duration: "20 hours (planned)",
    lessons: 0,
    status: "coming-soon",
    featured: false,
    cover: "assets/img/covers/devops.svg",
    accent: "#c084fc",
    playlist: "",
    tags: ["Docker", "CI/CD", "GitHub Actions", "Terraform"],
    learners: "—",
    lastUpdated: "2026-07-01",
    outcomes: [
      "Containerize any application with Docker",
      "Build CI/CD pipelines with GitHub Actions",
      "Provision infrastructure as code",
      "Monitor and roll back deployments safely"
    ],
    prerequisites: ["Node.js Backend Mastery or equivalent", "Cloud Fundamentals recommended"],
    modules: [
      { title: "Containers (planned)", duration: "5 hrs", topics: ["Docker fundamentals", "Images, layers & registries", "Docker Compose"] },
      { title: "CI/CD (planned)", duration: "5 hrs", topics: ["GitHub Actions from scratch", "Testing pipelines", "Deploy workflows"] },
      { title: "Infrastructure as Code (planned)", duration: "5 hrs", topics: ["Terraform basics", "Environments & state", "Real project provisioning"] },
      { title: "Operations (planned)", duration: "5 hrs", topics: ["Monitoring & alerts", "Logging", "Deployment strategies & rollbacks"] }
    ],
    resources: [],
    faqs: [
      { q: "When does this course start?", a: "Target is Q4 2026, after Cloud Fundamentals wraps. The roadmap page always shows the current plan." }
    ],
    updates: [
      { date: "2026-07-01", text: "Curriculum draft published on the roadmap. Tell us what to include on Discord!" }
    ]
  }
  */
];

/* ------------------------------------------------------------
   ROADMAP  (order = display order)
   status: "live" | "in-progress" | "planned" | "researching"
   ------------------------------------------------------------ */
window.ROADMAP = [
  {
    quarter: "Now",
    status: "live",
    title: "Deep Dive in Flutter",
    courseId: "deep-dive-flutter",
    description: "All 12 modules — Flutter, Dart, OOP, Firebase, state management, AI-assisted development and multi-platform deployment.",
    eta: "Live now"
  },
  {
    quarter: "Now",
    status: "in-progress",
    title: "Future ready with AI",
    courseId: "generative-ai",
    description: "Prompt engineering, RAG, agents and shipping real AI products. New lessons are being recorded and released regularly.",
    eta: "Releasing regularly"
  },
  {
    quarter: "Next",
    status: "planned",
    title: "SQL & Database Design",
    courseId: "sql-databases",
    description: "From SELECT to schema design and query optimization — hands-on with realistic datasets.",
    eta: "Coming soon"
  }
];

/* ------------------------------------------------------------
   WHY LEARN WITH US  (trust signals on the home page)
   ------------------------------------------------------------ */
window.TRUST_POINTS = [
  { icon: "free", title: "100% Free, Forever", text: "Every course and resource is free. No paywalls, no 'premium tier', no bait." },
  { icon: "beginner", title: "Beginner Friendly", text: "Clear prerequisites on every course, and a guided path that starts from absolute zero." },
  { icon: "project", title: "Project-Based", text: "Every course ends with real projects you can put in your portfolio — not just theory." },
  { icon: "community", title: "Real Community", text: "Stuck at 11pm? Ask in the YouTube comments — questions get answered, and future learners benefit too." },
  { icon: "roadmap", title: "Public Roadmap", text: "See exactly what's coming next and tell us what to build. You shape the academy." }
];

import { SiteConfig, Project, SkillCategory, ExperienceItem, CertificationItem, LearningItem } from '@/types';

export const siteConfig: SiteConfig = {
  name: "Abhishek Thakur",
  title: "Software Developer | Web Development | Automation | AI/LLM Applications",
  positioning: "Software Developer building modern web applications, robust business automation systems, and intelligent AI-powered tools.",
  bioSummary: "Zoho Developer and Full-Stack Software Engineer with real-world experience designing and deploying business process automations, scalable subform logic, and production web applications. Combines deep mastery of Deluge and Zoho's enterprise ecosystem with modern React, TypeScript, Python, and emerging AI/LLM technologies to engineer high-impact solutions.",
  contact: {
    email: "abhishek43900@gmail.com",
    phone: "+91 9329701582",
    location: "Raipur, Chhattisgarh, India",
    github: "https://github.com/LEARNERabhi21",
    linkedin: "https://linkedin.com/in/abhishek-thakur-dev",
  },
  stats: [
    { label: "Production Automations", value: "30+", sublabel: "Deluge, GAS & REST Flows" },
    { label: "Enterprise Experience", value: "~1 Year", sublabel: "Ratusaria Industries Pvt Ltd" },
    { label: "Automated Tests Written", value: "54+", sublabel: "Jest & Apps Script Suite" },
    { label: "Ecosystem Mastery", value: "4+", sublabel: "Zoho CRM, Books, Flow, Creator" },
  ]
};

export const projectsData: Project[] = [
  {
    id: "avinash-roadways",
    title: "Avinash Roadways",
    subtitle: "Transport Management Platform & Live Trip Entry",
    category: ["Web", "React", "Automation"],
    featured: true,
    status: "Production",
    description: "Production web platform featuring a Google Apps Script backend for live trip data entry with LockService-protected Trip ID sequencing, 54-test automated QA suite, and a Supabase RLS-backed architecture.",
    techStack: ["React", "TypeScript", "Vite", "Google Apps Script", "Supabase", "GitHub Actions", "Jest", "Tailwind CSS"],
    githubUrl: "https://github.com/LEARNERabhi21/transport-company",
    liveUrl: "https://avinashroadways.com",
    metrics: [
      { label: "Test Coverage", value: "54 Tests" },
      { label: "Race Conditions", value: "0% Fail Rate" },
      { label: "Pipeline", value: "GitHub CI/CD" }
    ],
    caseStudy: {
      problem: "In logistics management, concurrent dispatchers entering trip logs simultaneously created race conditions in auto-incrementing Trip IDs, causing duplicate entries, data desynchronization, and lost billing records.",
      requirements: [
        "Eliminate Trip ID race conditions across concurrent browser sessions.",
        "Implement server-side validation to catch malformed data before database write.",
        "Build a modern, responsive dispatcher interface in React + TypeScript.",
        "Provide automated regression testing to safeguard against string/numeric parsing bugs."
      ],
      approach: "Engineered a dual-layer architecture combining a high-performance React + TypeScript frontend hosted with automated GitHub Actions CI/CD and a resilient Google Apps Script service leveraging LockService for atomic sequential ID generation.",
      architecture: "Client (React + Vite SPA) → REST Payload Validation → Google Apps Script Controller (LockService concurrency protection) → Google Sheets / Supabase persistent store.",
      technologies: ["React 18", "TypeScript", "Vite", "Google Apps Script", "Supabase RLS", "Jest", "GitHub Actions"],
      implementation: [
        "Created an atomic sequencing function with LockService.getScriptLock() with a 30-second timeout window.",
        "Engineered a 54-test automated test suite using Jest and Mock GAS environments.",
        "Built a responsive, zero-latency booking and tracking form with real-time feedback.",
        "Deployed a public company interface secured with Row-Level Security (RLS) on Supabase."
      ],
      challenges: "During initial testing, JavaScript loose typing caused numeric string equality checks ('0045' == 45) to misroute regional truck allocations.",
      solutions: "Instituted strict TypeScript type gates and expanded the Jest suite to test 18 specific edge cases for pad-start formatting and type coercion before CI build passed.",
      result: "Zero race-condition duplicate IDs in production, sub-second dispatch confirmations, and fully automated deployment on every commit to main.",
      lessonsLearned: "Concurrency control at the persistence layer is mandatory even in lightweight backends; automated unit tests prevent subtle type mismatch regressions."
    }
  },
  {
    id: "production-tracker",
    title: "Production Tracker",
    subtitle: "Factory Operations & Shift Tracking System",
    category: ["Web", "React", "Automation"],
    featured: true,
    status: "Production",
    description: "Industrial factory operations app enabling shift-, division-, and operator-based tracking with a 12-hour controlled edit window, archive-and-append versioning, and an IST timezone synchronization engine.",
    techStack: ["React", "JavaScript", "Google Apps Script", "Tailwind CSS", "HTML5", "Sheets API"],
    githubUrl: "https://github.com/LEARNERabhi21/production-tracker-app-code-base",
    metrics: [
      { label: "Edit Window", value: "12 Hours Locked" },
      { label: "Data Integrity", value: "100% IST Sync" },
      { label: "Audit Trail", value: "Append Versioning" }
    ],
    caseStudy: {
      problem: "Manufacturing floor operations suffered from accidental overwrites of previous shift tallies, unauthorized retro-edits days later, and timezone offsets distorting daily production metrics.",
      requirements: [
        "Enforce strict role/shift boundaries (Morning/Evening/Night).",
        "Lock historical records after a 12-hour grace period to prevent tampering.",
        "Retain an append-only audit trail preserving all revision snapshots.",
        "Solve UTC-to-IST date rollover discrepancies in automated Google Sheets reporting."
      ],
      approach: "Designed a lightweight, touchscreen-friendly operator interface in React paired with a Google Apps Script service enforcing timestamp-gated mutations and immutable append-only versioning.",
      architecture: "Shop-floor React Web App → Timestamp Validation Layer → Timezone Normalizer (IST UTC+05:30) → Versioned Archival Sheet Store.",
      technologies: ["React", "Google Apps Script", "Tailwind CSS", "Custom IST Date Helpers"],
      implementation: [
        "Implemented a client & server dual-timestamp validation ensuring edits older than 12 hours are rejected.",
        "Built a custom date-formatting helper that prevents Google Sheets from auto-converting ISO date strings to local server midnight.",
        "Constructed operator-friendly large numeric inputs suitable for industrial tablet displays."
      ],
      challenges: "Google Sheets' automatic locale conversion repeatedly shifted night-shift records logged between 12:00 AM and 05:30 AM into the previous calendar day.",
      solutions: "Constructed an explicit IST date serialization protocol using formatted string tokens ('YYYY-MM-DD HH:mm:ss IST') that bypassed Sheets' native date coercion.",
      result: "100% accurate shift-to-day reconciliation, eliminated unauthorized retrospective edits, and provided factory supervisors with reliable daily production summaries.",
      lessonsLearned: "Spreadsheet backends have non-deterministic type coercion; explicit string serializations and timezone anchors are crucial for industrial audit trails."
    }
  },

  {
    id: "widget",
    title: "Widget",
    subtitle: "Enterprise Zoho CRM Customization",
    category: ["Zoho", "Automation", "Web"],
    featured: true,
    status: "Production",
    description: "Enterprise Zoho CRM Widget built with HTML/CSS/JavaScript and Zoho JavaScript SDK to enhance record workflows, perform live calculations, auto-generate standardized record names, and enforce validation rules.",
    techStack: ["Deluge", "Zoho CRM SDK", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    githubUrl: "https://github.com/LEARNERabhi21",
    metrics: [
      { label: "Widget Speed", value: "Instant Calc" },
      { label: "Data Quality", value: "Zero Duplicates" },
      { label: "Platform", value: "Zoho CRM Extension" }
    ],
    caseStudy: {
      problem: "Standard Zoho CRM interfaces lacked complex multi-row validation, dynamic column filtering based on parent fields, and automatic standardized nomenclature for vehicle detail records.",
      requirements: [
        "Provide seamless UI embedding inside Zoho CRM record detail pages.",
        "Iterate record rows in real-time, checking for duplicate serial numbers across records.",
        "Auto-generate standardized vehicle nomenclature to keep CRM data clean.",
        "Integrate with backend Deluge custom functions via the Zoho JS SDK."
      ],
      approach: "Engineered a custom Zoho CRM Widget using vanilla JavaScript and CSS for minimal bundle overhead, interfacing directly with Zoho's ZDK (JavaScript SDK) to read and mutate CRM records.",
      architecture: "Zoho CRM UI Container → Embedded Iframe Widget (Zoho JS SDK) → Deluge Automation Layer → Zoho CRM Database.",
      technologies: ["Zoho JS SDK", "Deluge Scripting", "JavaScript (ES6+)", "CSS3 Flexbox", "REST APIs"],
      implementation: [
        "Utilized `ZOHO.CRM.API.getRecord` and `ZOHO.CRM.INTERACTION` to exchange data seamlessly with the parent record.",
        "Built a responsive record grid with auto-summing calculations and row duplicate checkers.",
        "Connected the widget with backend Deluge scripts to auto-create standardized record names upon save."
      ],
      challenges: "Zoho SDK async event listeners occasionally failed to hydrate record rows if the CRM page loaded on slower networks.",
      solutions: "Constructed a retry-with-backoff initialization promise ensuring `ZOHO.embeddedApp.init()` resolves completely before triggering record queries.",
      result: "Greatly improved data entry accuracy for sales operations, cut manual formatting mistakes to zero, and saved staff dozens of hours monthly.",
      lessonsLearned: "Custom widgets provide limitless extension capabilities inside SaaS platforms when standard out-of-the-box fields hit their limits."
    }
  },
  {
    id: "hotel-management-system",
    title: "Hotel Reservation & Room System",
    subtitle: "Full-Stack Booking & Operations Platform",
    category: ["Web"],
    featured: false,
    status: "Completed",
    description: "Full-stack reservation and room-tracking application featuring a responsive HTML/CSS/JavaScript front-end and a SQL Server-backed .NET backend supporting comprehensive CRUD operations.",
    techStack: [".NET", "C#", "SQL Server", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    githubUrl: "https://github.com/LEARNERabhi21",
    metrics: [
      { label: "Architecture", value: "N-Tier .NET" },
      { label: "Database", value: "SQL Server" },
      { label: "Operations", value: "Full CRUD" }
    ],
    caseStudy: {
      problem: "Small hospitality operations needed a straightforward, self-hosted system to manage room availability, customer reservations, and check-in/check-out logs without recurring SaaS fees.",
      requirements: [
        "Real-time room occupancy and category status dashboard.",
        "Reliable ACID transactions for booking reservations and invoice creation.",
        "Role-based access for front desk staff and managers."
      ],
      approach: "Built an N-tier application with a C# .NET API handling business logic and SQL Server guaranteeing relational integrity, consumed by a responsive frontend.",
      architecture: "Frontend Client (JS/HTML/CSS) → REST API (.NET Controller Layer) → Data Access Layer (Entity / ADO.NET) → Microsoft SQL Server.",
      technologies: [".NET Framework", "C#", "Microsoft SQL Server", "JavaScript", "HTML5/CSS3"],
      implementation: [
        "Structured normalized database schema covering Rooms, Guests, Bookings, and Payments.",
        "Implemented parameterized stored procedures to secure against SQL injection.",
        "Built a responsive room status board with color-coded status badges."
      ],
      challenges: "Preventing double-booking when two receptionists attempt to assign the same vacant room simultaneously.",
      solutions: "Applied database transaction isolation with optimistic concurrency checking at the booking save phase.",
      result: "A reliable booking application running locally with zero latency and robust relational consistency.",
      lessonsLearned: "Relational database constraints and transactions provide the ultimate safety net for booking and financial operations."
    }
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "zoho-ecosystem",
    title: "Zoho Enterprise Ecosystem",
    description: "Core specialization in enterprise CRM customization, workflow automation, and cross-application data pipelines.",
    iconName: "Workflow",
    skills: [
      { name: "Zoho CRM", description: "Module customization, blueprint, subform logic, layout rules", highlight: true },
      { name: "Deluge Scripting", description: "Custom functions, invokeurl integrations, data manipulation", highlight: true },
      { name: "Zoho Books", description: "Inventory reconciliation, invoice/warehouse sync, REST automation", highlight: true },
      { name: "Zoho Creator", description: "Custom business apps, relational data architecture", highlight: true },
      { name: "Zoho Flow", description: "Webhook orchestration and multi-app integration", highlight: false },
      { name: "Kiosk Studio", description: "Interactive guided CRM user interfaces", highlight: false },
      { name: "Zoho CRM Widgets", description: "Custom JS/HTML/CSS embedded applications", highlight: true },
    ]
  },
  {
    id: "web-development",
    title: "Modern Web & Full-Stack",
    description: "Building fast, type-safe, responsive web applications with modern frontend frameworks and clean architecture.",
    iconName: "Code2",
    skills: [
      { name: "React 18", description: "Hooks, component architecture, state management", highlight: true },
      { name: "TypeScript", description: "Strict typing, interfaces, generics, type-safe APIs", highlight: true },
      { name: "JavaScript (ES6+)", description: "Async/await, DOM APIs, event loop, closures", highlight: true },
      { name: "Vite", description: "High-speed bundling, HMR, modern dev pipeline", highlight: true },
      { name: "Tailwind CSS", description: "Design systems, responsive utilities, dark mode", highlight: true },
      { name: "HTML5 & CSS3", description: "Semantic markup, CSS Grid, Flexbox, Animations", highlight: false },
      { name: "Framer Motion", description: "Micro-interactions, staggered layout transitions", highlight: false },
    ]
  },
  {
    id: "backend-automation",
    title: "Automation, APIs & Backend",
    description: "Serverless logic, programmatic data transformation, and bulletproof transactional workflows.",
    iconName: "Cpu",
    skills: [
      { name: "Google Apps Script", description: "Sheets/Docs automation, LockService, webhooks", highlight: true },
      { name: "Python", description: "Automation scripts, data processing, backend logic", highlight: true },
      { name: "REST APIs & Webhooks", description: "API design, payload parsing, OAuth2, HMAC", highlight: true },
      { name: "invokeurl Automation", description: "Zoho-to-third-party programmatic HTTP calls", highlight: true },
      { name: ".NET / C#", description: "N-tier architecture, backend API endpoints, CRUD", highlight: false },
      { name: "SQL & Relational DBs", description: "SQL Server, queries, transactions, schema design", highlight: true },
      { name: "Supabase & Firebase", description: "Postgres backends, Row-Level Security, Auth", highlight: true },
    ]
  },
  {
    id: "ai-llm",
    title: "AI, LLMs & Emerging Tech",
    description: "Practical engineering of AI-assisted systems, prompt engineering, and conversational tooling.",
    iconName: "Sparkles",
    skills: [
      { name: "LLM Applications", description: "Integrating frontier models into production tools", highlight: true },
      { name: "LangChain", description: "Agent tool calling, prompt chaining, contextual memory", highlight: true },
      { name: "AI Desktop Assistants", description: "Voice & text system automation (Lexis project)", highlight: true },
      { name: "NLP Fundamentals", description: "Text preprocessing, intent recognition, entity extraction", highlight: false },
      { name: "NumPy & Data Stack", description: "Array operations, data modeling, exploratory analysis", highlight: false },
    ]
  },
  {
    id: "tools-devops",
    title: "Engineering Tools & DevOps",
    description: "Modern developer tooling for automated testing, version control, and continuous integration.",
    iconName: "Terminal",
    skills: [
      { name: "Git & GitHub", description: "Branching strategies, PR reviews, merge workflows", highlight: true },
      { name: "GitHub Actions", description: "Automated CI/CD pipelines, test runners, deployment", highlight: true },
      { name: "Automated Testing", description: "Jest, unit tests, mock environments (54+ test suite)", highlight: true },
      { name: "Technical Documentation", description: "Architectural blueprints, API specs, user guides", highlight: false },
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "ratusaria-industries",
    role: "Zoho Developer (Executive Assistant)",
    company: "Ratusaria Industries Private Limited",
    location: "Raipur, Chhattisgarh, India",
    duration: "~1 Year",
    period: "2024 — Present",
    type: "Full-Time",
    summary: "Spearheaded enterprise business automation across Zoho CRM, Books, Creator, and Flow. Engineered custom Deluge functions, repaired critical inventory sync discrepancies, and built customized CRM widgets to eliminate manual reporting.",
    bullets: [
      "Built Zoho CRM automation: developed a Deluge-based Vehicle Detail Record automation that iterated subform rows, ran duplicate checks, and auto-generated standardized record names to maintain pristine CRM hygiene.",
      "Automated Zoho Books workflows: utilized invokeurl (GET/PUT) to programmatically reconcile positive balance quantities across warehouse inventory, improving real-time stock accuracy without manual intervention.",
      "Resolved production integration bugs: systematically diagnosed and fixed four complex defects in an active Zoho Books invoice/warehouse integration script (scoping errors, missing record ID parameters, variable shadowing).",
      "Developed stock update automation: built and iterated the mission-critical Delivery Order stock-update function, handling multi-tier edge cases across record mutations.",
      "Extended CRM functionality: customized Zoho CRM using Kiosk Studio, subform manipulation patterns, and custom Zoho CRM Widgets built with HTML, CSS, and JavaScript.",
      "Optimized cross-suite data flows: translated operational requirements into maintainable Deluge scripts spanning Zoho CRM, Creator, Flow, and Books to maximize system throughput."
    ],
    technologies: ["Zoho CRM", "Zoho Books", "Zoho Creator", "Zoho Flow", "Deluge", "JavaScript", "REST APIs", "Kiosk Studio", "Zoho Widgets"],
    verifiedImpact: [
      "Subform duplicate elimination: 100% reduction in duplicate vehicle records",
      "Automated inventory reconciliation across warehouse facilities",
      "Mission-critical delivery order update function in production"
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "bca-degree",
    name: "Bachelor of Computer Applications (BCA)",
    issuer: "Pt. Ravishankar Shukla University (P.R.S.U.)",
    date: "Class of 2025",
    credentialId: "PRSU-BCA-2025",
    verificationUrl: "https://www.prsu.ac.in",
    category: "Academic",
    skillsCovered: ["Computer Science Fundamentals", "Data Structures & Algorithms", "DBMS & SQL", "Software Engineering", "C & Java"]
  },
  {
    id: "zoho-enterprise-automation",
    name: "Enterprise Zoho CRM & Deluge Automation",
    issuer: "Practical Production Credential (Ratusaria Industries)",
    date: "2024 — 2025",
    credentialId: "ZOHO-DEV-EXP-01",
    category: "Professional Experience",
    skillsCovered: ["Deluge Scripting", "Zoho CRM Widgets", "invokeurl REST Integrations", "Subform Automations", "Zoho Books Sync"]
  },
  {
    id: "senior-secondary",
    name: "Higher Secondary Certificate (12th - 75%)",
    issuer: "Ishwar Public School",
    date: "Completed",
    category: "Academic",
    skillsCovered: ["Mathematics", "Physics", "Computer Science Foundations"]
  }
];

export const learningJourneyData: LearningItem[] = [
  {
    id: "ai-llm-architecture",
    title: "AI & LLM Application Architecture",
    category: "AI & Machine Learning",
    status: "In Progress",
    focus: "LangChain, RAG Pipelines & Agentic Tool Execution",
    description: "Deepening practical capabilities in building autonomous agents and contextual retrieval systems that connect LLMs to real-world business APIs and databases.",
    milestones: [
      "Building custom AI desktop companions with local OS tool integration",
      "Exploring LangChain multi-step agent chaining and memory architectures",
      "Studying RAG evaluation metrics and vector embedding pipelines"
    ],
    technologies: ["Python", "LangChain", "OpenAI APIs", "ChromaDB", "Prompt Engineering"]
  },
  {
    id: "data-science-numpy",
    title: "Python & Numerical Computing Fundamentals",
    category: "Backend & Data Systems",
    status: "Deep Dive",
    focus: "NumPy, Vectorized Computations & Data Pipelines",
    description: "Mastering foundational numerical computation in Python to handle high-volume data transformation, statistical reporting, and preparatory pipelines for machine learning models.",
    milestones: [
      "Vectorized operations and matrix transformations for high-throughput math",
      "Data wrangling for enterprise inventory reconciliation logic",
      "Transitioning business automation scripts into modular Python packages"
    ],
    technologies: ["Python 3.10+", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    id: "modern-cloud-web",
    title: "Cloud-Native React & Scalable Web Architectures",
    category: "Modern Software Architecture",
    status: "In Progress",
    focus: "Supabase, Edge Functions, TypeScript & Performance Engineering",
    description: "Advancing beyond traditional single-page apps into edge-cached, highly secure architectures with Row-Level Security (RLS) and automated CI/CD deployment pipelines.",
    milestones: [
      "Built Avinash Roadways with GitHub Actions CI/CD and Supabase RLS",
      "Created 54-test automated suite for concurrency-proof data entry",
      "Achieving 100/100 Lighthouse metrics across Core Web Vitals"
    ],
    technologies: ["React 18", "TypeScript", "Supabase", "Vite", "Jest", "GitHub Actions"]
  }
];

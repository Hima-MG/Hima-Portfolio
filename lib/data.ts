export const projects = [
  {
    slug: "skilllink",
    title: "SkillLink",
    tag: "Flagship Project",
    tagColor: "blue",
    description:
      "A full-featured learning platform that connects learners with teachers, featuring real-time communication and comprehensive course management.",
    longDescription:
      "SkillLink is a comprehensive learning ecosystem built to bridge the gap between learners and educators. It offers real-time chat, structured course management, gamified skill challenges, and community events — all powered by Firebase for real-time performance at scale.",
    features: [
      "Real-time chat & messaging",
      "Firebase backend & auth",
      "Skill challenge system",
      "Course management",
      "Community events",
      "Student-teacher matchmaking",
    ],
    tech: ["Flutter", "Firebase", "Dart", "Firestore", "Cloud Functions"],
    github: "https://github.com/Hima-MG/SkillLink",
    color: "#3B82F6",
    problem:
      "Learners struggle to find quality teachers and have no structured way to track their learning progress. Traditional platforms are expensive and lack community features.",
    solution:
      "Built a Flutter app with Firebase backend that enables real-time teacher discovery, structured courses, and gamified challenges to keep learners engaged.",
    architecture:
      "Flutter client with Firebase Auth, Firestore for real-time data, Cloud Storage for media, and Cloud Functions for server-side logic.",
    challenges:
      "Managing real-time sync across thousands of concurrent users, optimizing Firestore reads, and building a scalable notification system.",
    results:
      "Fully functional MVP with real-time features, clean UI, and production-ready architecture.",
  },
  {
    slug: "ems-crm",
    title: "EMS & CRM",
    tag: "Business Platform",
    tagColor: "purple",
    description:
      "Integrated business platform for managing employees and customer relationships with real-time dashboards and analytics.",
    longDescription:
      "A complete business management suite combining Employee Management System and Customer Relationship Management into one unified platform. Built for Wincentre to streamline operations and improve productivity.",
    features: [
      "Employee management",
      "Customer relationship tracking",
      "Real-time dashboards",
      "Attendance management",
      "Sales pipeline",
      "Report generation",
    ],
    tech: ["Flutter", "Firebase", "Dart", "Firestore", "Charts"],
    github: "https://github.com/Hima-MG/EMS_CRM",
    color: "#8B5CF6",
    problem:
      "Wincentre managed employees and customers using spreadsheets and manual processes, leading to inefficiency and data loss.",
    solution:
      "Developed a unified Flutter application with Firebase backend that centralizes all employee and customer data with real-time sync.",
    architecture:
      "Flutter multi-module app with Firebase Firestore, role-based access control, and real-time listeners for live dashboard updates.",
    challenges:
      "Designing a flexible data model that handles both EMS and CRM use cases without performance degradation at scale.",
    results:
      "Deployed at Wincentre, reducing administrative overhead by significant margins and providing real-time business insights.",
  },
  {
    slug: "carcare",
    title: "Car Care",
    tag: "Consumer App",
    tagColor: "green",
    description:
      "Smart vehicle maintenance management app that tracks service history, sends reminders, and helps owners stay on top of their car health.",
    longDescription:
      "Car Care is a Flutter application that helps vehicle owners manage maintenance schedules, track service history, and receive timely reminders for upcoming services — making car ownership less stressful.",
    features: [
      "Maintenance scheduling",
      "Service history tracking",
      "Smart reminders",
      "Multi-vehicle support",
      "Cost tracking",
      "Service provider directory",
    ],
    tech: ["Flutter", "Firebase", "Dart", "Local Notifications", "Firestore"],
    github: "https://github.com/Hima-MG/carcare",
    color: "#10B981",
    problem:
      "Vehicle owners often miss maintenance intervals, leading to costly repairs. No simple, elegant app existed to track this end-to-end.",
    solution:
      "Built a clean Flutter app with smart notification scheduling and an intuitive service log interface backed by Firebase.",
    architecture:
      "Flutter app with local notification scheduling, Firebase Firestore for cloud sync, and a clean repository pattern for data management.",
    challenges:
      "Implementing reliable cross-platform local notifications and syncing them with cloud-stored schedules without conflicts.",
    results:
      "Production-ready app with polished UI, smart reminders, and real-time sync across devices.",
  },
  {
    slug: "civilezy",
    title: "Civilezy",
    tag: "Corporate Product",
    tagColor: "orange",
    description:
      "Corporate platform built for civil services, streamlining workflows and providing a modern digital interface for organizational operations.",
    longDescription:
      "Civilezy is a corporate-grade Flutter application designed for civil services organizations. It modernizes legacy workflows, provides digital document management, and enables efficient team coordination.",
    features: [
      "Digital workflow management",
      "Document management",
      "Team coordination",
      "Progress tracking",
      "Reporting system",
      "Admin dashboard",
    ],
    tech: ["Flutter", "Firebase", "Dart", "REST APIs", "Cloud Storage"],
    github: "https://github.com/Hima-MG/Civilezy",
    color: "#F59E0B",
    problem:
      "Civil service organizations relied on manual, paper-based workflows that were slow, error-prone, and impossible to track remotely.",
    solution:
      "Developed a Flutter platform that digitizes core workflows, enables remote access, and provides real-time progress visibility.",
    architecture:
      "Flutter with Firebase backend, REST API integrations, Cloud Storage for document handling, and role-based access control.",
    challenges:
      "Migrating complex manual processes into digital workflows while ensuring the app remained intuitive for non-technical users.",
    results:
      "Successfully deployed as a corporate product with adoption across the organization's workflow management needs.",
  },
];

export const skills = [
  {
    name: "Flutter",
    icon: "📱",
    level: 90,
    description: "Cross-platform mobile development with beautiful, natively compiled apps for iOS and Android from a single codebase.",
    category: "Mobile",
  },
  {
    name: "Dart",
    icon: "🎯",
    level: 88,
    description: "Strongly typed, object-oriented language optimized for Flutter development with async/await patterns.",
    category: "Language",
  },
  {
    name: "Firebase",
    icon: "🔥",
    level: 85,
    description: "Google's real-time backend platform — Firestore, Auth, Cloud Functions, Storage, and Analytics.",
    category: "Backend",
  },
  {
    name: "Next.js",
    icon: "▲",
    level: 75,
    description: "React framework for production-grade web applications with SSR, SSG, and App Router.",
    category: "Web",
  },
  {
    name: "Supabase",
    icon: "⚡",
    level: 70,
    description: "Open-source Firebase alternative with PostgreSQL, real-time subscriptions, and Row Level Security.",
    category: "Backend",
  },
  {
    name: "REST APIs",
    icon: "🔌",
    level: 82,
    description: "Designing and consuming RESTful APIs, HTTP clients, authentication patterns, and JSON serialization.",
    category: "Backend",
  },
  {
    name: "UI/UX Design",
    icon: "🎨",
    level: 80,
    description: "Crafting pixel-perfect interfaces with attention to design systems, motion, and user experience principles.",
    category: "Design",
  },
  {
    name: "Git & GitHub",
    icon: "🐙",
    level: 85,
    description: "Version control workflows, branching strategies, PR reviews, CI/CD pipelines, and collaborative development.",
    category: "Tools",
  },
];

export const experience = [
  {
    company: "Wincentre",
    role: "IT Head",
    period: "2025 – Present",
    location: "Kerala, India",
    type: "Full-time",
    description:
      "Leading technical operations at Wincentre, driving digital transformation through custom software development and IT infrastructure management.",
    highlights: [
      "Architected and developed EMS & CRM platform used across the organization",
      "Led technical decision-making for all digital initiatives",
      "Managed company website and digital presence",
      "Built internal tools reducing operational overhead",
    ],
    tech: ["Flutter", "Firebase", "Next.js", "Git"],
    color: "#3B82F6",
  },
  {
    company: "Irohub Infotech",
    role: "Flutter Developer Intern",
    period: "2024 – 2025",
    location: "Kerala, India",
    type: "Internship",
    description:
      "Gained hands-on Flutter development experience building production mobile applications with Firebase backend and REST API integrations.",
    highlights: [
      "Developed Flutter applications with real-world requirements",
      "Integrated Firebase services for authentication and data management",
      "Consumed and built REST APIs for mobile-backend communication",
      "Collaborated in an agile development environment",
    ],
    tech: ["Flutter", "Firebase", "Dart", "REST APIs"],
    color: "#8B5CF6",
  },
  {
    company: "IPCS Global",
    role: "Customer Relationship Executive",
    period: "2024 – 2025",
    location: "Kerala, India",
    type: "Full-time",
    description:
      "Managed client relationships and service delivery, developing strong communication and problem-solving skills in a professional environment.",
    highlights: [
      "Managed customer portfolios and relationship lifecycle",
      "Resolved technical and service queries efficiently",
      "Contributed to customer satisfaction metrics",
      "Bridged technical and non-technical communication",
    ],
    tech: ["CRM Tools", "Communication", "Problem Solving"],
    color: "#10B981",
  },
];

export const timeline = [
  {
    year: "2021–2024",
    title: "BCA Graduate",
    description: "Completed Bachelor of Computer Applications, building a strong foundation in computer science and software development.",
    icon: "🎓",
  },
  {
    year: "2024–2025",
    title: "First Role: CRE at IPCS Global",
    description: "Entered the professional world, developing communication, CRM, and client management skills.",
    icon: "💼",
  },
  {
    year: "2024–2025",
    title: "Flutter Intern at Irohub",
    description: "Dove deep into Flutter development, building real apps with Firebase and REST APIs in a startup environment.",
    icon: "📱",
  },
  {
    year: "2025–Present",
    title: "IT Head at Wincentre",
    description: "Leading technical direction, shipping production software, and managing the full digital stack of a growing company.",
    icon: "🚀",
  },
  {
    year: "Now",
    title: "Seeking Next Opportunity",
    description: "Looking for a Flutter Developer role at a product company, startup, or international remote team to build impactful products.",
    icon: "⭐",
  },
];

export const certifications = [
  {
    title: "Flutter Development",
    issuer: "Irohub Infotech",
    type: "Internship Certificate",
    description: "Certified completion of Flutter Developer internship with hands-on project experience.",
    icon: "📱",
    color: "#3B82F6",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    type: "Cloud Certification",
    description: "Foundational cloud concepts, Azure services, security, privacy, compliance, and trust.",
    icon: "☁️",
    color: "#8B5CF6",
  },
];

export const githubRepos = [
  {
    name: "SkillLink",
    description: "Learning platform connecting learners and teachers with real-time features",
    url: "https://github.com/Hima-MG/SkillLink",
    tech: ["Flutter", "Firebase", "Dart"],
    featured: true,
  },
  {
    name: "EMS_CRM",
    description: "Integrated Employee Management System and CRM platform",
    url: "https://github.com/Hima-MG/EMS_CRM",
    tech: ["Flutter", "Firebase", "Dart"],
    featured: true,
  },
  {
    name: "carcare",
    description: "Vehicle maintenance management application",
    url: "https://github.com/Hima-MG/carcare",
    tech: ["Flutter", "Firebase", "Dart"],
    featured: true,
  },
  {
    name: "Civilezy",
    description: "Corporate product platform for civil services",
    url: "https://github.com/Hima-MG/Civilezy",
    tech: ["Flutter", "Firebase", "Dart"],
    featured: true,
  },
];

/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * File ini adalah pusat data untuk seluruh konten portofolio Anda.
 *
 * CARA MENGEDIT / MENAMBAH KONTEN:
 * 1. Tambah Project Baru:
 *    Cukup salin salah satu objek di array `projects`, lalu ubah id, title, category,
 *    description, keyFeatures, techStack, dan links (github / live).
 *
 * 2. Tambah Tech Stack / Skill:
 *    Tambahkan item baru ke array `techStack` di bawah kategori yang sesuai.
 *
 * 3. Tambah Work Experience:
 *    Tambahkan objek baru ke array `experiences` dengan rincian peran, perusahaan, tanggal,
 *    dan poin-poin pencapaian.
 *
 * 4. Ganti Kontak / Profil:
 *    Ubah data pada objek `personalInfo`.
 * ==============================================================================
 */

export const personalInfo = {
  name: "Ahmad Yazid Munif",
  shortName: "AYazid",
  initials: "AY",
  role: "Software Engineer",
  headline: "Software Engineer",
  heroTitlePrefix: "Backend Architecture &",
  heroTitleHighlight: "Enterprise Solutions",
  statusBadge: "Available for Enterprise & Backend Roles",
  statusActive: true,
  location: "Surabaya, Indonesia",
  phone: "+6282234436644",
  email: "ayazidmunif.29@gmail.com",
  socials: {
    github: "https://github.com/yazid29",
    linkedin: "https://www.linkedin.com/in/ahmad-yazid-munif/",
    email: "mailto:ayazidmunif.29@gmail.com",
  },
  resumeUrl: "#contact", // Bisa diarahkan ke file PDF resume atau form kontak
  bioGreeting: "Hi, I'm Ahmad Yazid Munif.",
  bioHeadline:
    "Software Engineer | Backend Architecture & Enterprise Solutions",
  bioSubheadline:
    "Enjoy building modern applications with a strong focus on code quality, scalability, and user experience. Bridging the gap between writing code and shipping it reliably to production.",
  aboutParagraphs: [
    "With over 3 years of professional experience delivering robust enterprise applications across banking, insurance, and telecommunications sectors, I build software that solves real business problems. My expertise spans the full software development lifecycle—from engineering secure RESTful APIs and customizing complex Salesforce CRM architectures to ensuring high code coverage and scalable frontend interfaces.",
    "Today, writing code is only half the challenge. That's why I complement my core development skills in C#, Python, and React with active implementation of DevOps practices, Docker containerization, and CI/CD pipelines. My goal is to ensure seamless, reliable software delivery for production environments.",
    "I actively collaborate with Business Analysts (BA) and QA teams, conduct rigorous peer code reviews, and mentor team members to ensure engineering excellence, system stability, and smooth production releases.",
  ],
  pilarTech: [".NET", "Python", "Docker CI/CD", "PostgreSQL", "Salesforce"],
  stats: [
    {
      value: "3+",
      label: "Years Experience",
      description: "Delivering enterprise-scale software",
    },
    {
      value: "4+",
      label: "Enterprise Domains",
      description: "Banking, Insurance, Telco & EdTech",
    },
    {
      value: "10+",
      label: "Systems & Services",
      description: "Engineered and deployed into production",
    },
    {
      value: "99.9%",
      label: "Pipeline Reliability",
      description: "Automated CI/CD & zero-downtime releases",
    },
  ],
};

/**
 * Hero Code Editor / Terminal Snippets
 * Menampilkan kode teknis enterprise dalam tab interaktif di bagian Hero
 */
export const heroTerminalSnippets = [
  {
    id: "csharp",
    fileName: "CategoryRepository.cs",
    language: "C# (.NET Core)",
    badge: ".NET 10",
    code: `namespace MoneyMate.API.Repositories.Categories;

public class CategoryRepository(MoneyMateDbContext context) : BaseRepository<Category>(context), ICategoryRepository
{
    public async Task<IEnumerable<Category>> GetCategoriesByUserIdAsync(Guid userId, CancellationToken cancellationToken = default)
    {
        return await _context.Categories
            .AsNoTracking()
            .Where(c => c.UserId == userId && !c.IsTransfer)
            .OrderBy(c => c.Type)
            .ThenBy(c => c.Name)
            .ToListAsync(cancellationToken);
    }
}`,
  },
  {
    id: "python",
    fileName: "ai_service.py",
    language: "Python (FastAPI)",
    badge: "FastAPI + Gemini LLM",
    code: `from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel, Field
import google.generativeai as genai

app = FastAPI(title="MoneyMate AI Intelligence", version="2.4.0")

class ReceiptPayload(BaseModel):
    user_id: str = Field(..., example="usr_9281")
    image_base64: str
    currency: str = "IDR"

@app.post("/api/v1/extract-receipt")
async def analyze_receipt(payload: ReceiptPayload) -> dict:
    """Async endpoint analyzing receipt metadata with Gemini AI."""
    model = genai.GenerativeModel("gemini-1.5-flash")
    result = await model.generate_content_async(
        f"Parse merchant, total amount, category in JSON: {payload.image_base64[:50]}..."
    )
    return {"status": "success", "data": result.text, "cached": True}`,
  },
  {
    id: "cicd",
    fileName: "deploy-pipeline.yml",
    language: "GitHub Actions",
    badge: "Automated CI/CD",
    code: `name: Deploy MoneyMate BE
on:
  push:
    tags:
      - 'v*'

env:
  IMAGE_NAME: moneymate-backend
  APP_PATH: /home/devops/apps/MoneyMate-API
  
jobs:
  build-deploy:
    name: Build & Deploy
    runs-on: [self-hosted, linux, X64]

    steps:
      - name: Checkout
        uses: actions/checkout@v4`,
  },
];

/**
 * 4 Pilar Utama ("What I Do")
 */
export const whatIDo = [
  {
    id: "backend",
    iconName: "Server",
    title: "Backend & API Engineering",
    subtitle: "Arsitektur tangguh untuk skala enterprise",
    description:
      "Merancang dan membangun logika bisnis sisi peladen (server-side) yang aman dan berkinerja tinggi. Ahli dalam mengembangkan RESTful API dan arsitektur microservices menggunakan C# (.NET Core) dan Python untuk memastikan pertukaran data yang lancar di industri keuangan dan telekomunikasi.",
    highlights: [
      "Clean Architecture & Dependency Injection (.NET Core)",
      "RESTful API & Microservices berkinerja tinggi",
      "Penyimpanan data relasional aman (PostgreSQL, SQL Server)",
      "High code coverage melalui automated unit testing",
    ],
  },
  {
    id: "fullstack-crm",
    iconName: "Code2",
    title: "Enterprise Full-Stack & CRM",
    subtitle: "Antarmuka responsif & kustomisasi sistem inti",
    description:
      "Membangun antarmuka pengguna sisi klien yang mulus menggunakan React.js dan mengintegrasikannya dengan ekosistem CRM skala besar. Berpengalaman tinggi dalam menyesuaikan arsitektur Salesforce (Apex, LWC) agar sesuai dengan proses bisnis klien yang paling kompleks.",
    highlights: [
      "Modern React.js frontend interfaces & state management",
      "Salesforce Apex Classes, Triggers & Flows Automation",
      "Lightning Web Components (LWC) untuk enterprise CRM",
      "Integrasi API middleware dua arah (two-way sync)",
    ],
  },
  {
    id: "devops",
    iconName: "Cpu",
    title: "DevOps & Cloud Deployment",
    subtitle: "Menjembatani kode dan production",
    description:
      "Saya tidak hanya menulis kode, saya memastikan kode tersebut berjalan stabil di server. Memanfaatkan praktik DevOps modern, saya mengemas aplikasi menggunakan Docker dan merancang otomatisasi rilis kode (CI/CD pipelines) mandiri menggunakan GitHub Actions untuk deployment tanpa hambatan.",
    highlights: [
      "Multi-stage Docker containerization & alpine images",
      "Automated CI/CD pipelines dengan GitHub Actions",
      "Linux server management, Nginx reverse proxy",
      "Zero-downtime deployment & production health monitoring",
    ],
  },
  {
    id: "ai-data",
    iconName: "BrainCircuit",
    title: "AI Integration & Data Engineering",
    subtitle: "Membawa kecerdasan buatan ke dunia nyata",
    description:
      "Mengintegrasikan kapabilitas Large Language Models (LLM) seperti Gemini AI dan vector embeddings ke dalam aplikasi production (seperti fitur pemindaian struk otomatis). Berpengalaman membangun pipeline ekstraksi data web (Selenium) dan model Machine Learning untuk analisis data.",
    highlights: [
      "Gemini AI LLM integration untuk ekstraksi data cerdas",
      "Vector embeddings semantic search & intelligent caching",
      "Automated web data scraping pipelines dengan Selenium",
      "Time-series financial forecasting & NLP text classification",
    ],
  },
];

/**
 * Kategori Tech Stack & Skills
 * Format: name, level/tag, category, icon
 */
export const techStackCategories = [
  { id: "all", label: "All Technologies" },
  { id: "backend", label: "Backend & API" },
  { id: "frontend-crm", label: "Frontend & CRM" },
  { id: "database", label: "Database & Data" },
  { id: "devops", label: "DevOps & Infra" },
  { id: "ai", label: "AI & ML" },
];

export const techStack = [
  // Backend & Architecture
  {
    name: "C# / .NET Core",
    category: "backend",
    tag: "Primary Enterprise",
    icon: "SiDotnet",
    level: "Advanced",
  },
  {
    name: "Python",
    category: "backend",
    tag: "FastAPI / Scripts",
    icon: "SiPython",
    level: "Advanced",
  },
  {
    name: "FastAPI",
    category: "backend",
    tag: "Async Microservice",
    icon: "SiFastapi",
    level: "Proficient",
  },
  {
    name: "Express.js",
    category: "backend",
    tag: "Node.js REST APIs",
    icon: "SiExpress",
    level: "Proficient",
  },
  {
    name: "RESTful APIs",
    category: "backend",
    tag: "Architecture & Security",
    icon: "SiPostman",
    level: "Advanced",
  },
  {
    name: "Clean Architecture",
    category: "backend",
    tag: "SOLID / DI Pattern",
    icon: "Server",
    level: "Advanced",
  },

  // Frontend & CRM
  {
    name: "React.js",
    category: "frontend-crm",
    tag: "UI Development",
    icon: "SiReact",
    level: "Advanced",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend-crm",
    tag: "Core Language",
    icon: "SiJavascript",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    category: "frontend-crm",
    tag: "Type-Safe Frontend",
    icon: "SiTypescript",
    level: "Proficient",
  },
  {
    name: "Salesforce APEX",
    category: "frontend-crm",
    tag: "CRM Core Logic",
    icon: "SiSalesforce",
    level: "Advanced",
  },
  {
    name: "Lightning Components (LWC)",
    category: "frontend-crm",
    tag: "Salesforce UI",
    icon: "SiSalesforce",
    level: "Advanced",
  },
  {
    name: "Salesforce Flows",
    category: "frontend-crm",
    tag: "Process Automation",
    icon: "Workflow",
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    category: "frontend-crm",
    tag: "Utility Styling",
    icon: "SiTailwindcss",
    level: "Advanced",
  },

  // Database & Storage
  {
    name: "PostgreSQL",
    category: "database",
    tag: "Relational Database",
    icon: "SiPostgresql",
    level: "Advanced",
  },
  {
    name: "SQL Server",
    category: "database",
    tag: "Enterprise T-SQL",
    icon: "Database",
    level: "Advanced",
  },
  {
    name: "MySQL",
    category: "database",
    tag: "Relational Storage",
    icon: "SiMysql",
    level: "Proficient",
  },
  {
    name: "Data Pipelines",
    category: "database",
    tag: "ETL & Cleaning",
    icon: "Database",
    level: "Proficient",
  },

  // DevOps & Infrastructure
  {
    name: "Docker",
    category: "devops",
    tag: "Containerization",
    icon: "SiDocker",
    level: "Advanced",
  },
  {
    name: "GitHub Actions",
    category: "devops",
    tag: "Automated CI/CD",
    icon: "SiGithubactions",
    level: "Proficient",
  },
  {
    name: "Git & GitHub",
    category: "devops",
    tag: "Version Control / PR",
    icon: "SiGit",
    level: "Advanced",
  },
  {
    name: "Linux / Ubuntu",
    category: "devops",
    tag: "Server Administration",
    icon: "SiLinux",
    level: "Proficient",
  },
  {
    name: "Nginx",
    category: "devops",
    tag: "Reverse Proxy",
    icon: "SiNginx",
    level: "Intermediate",
  },

  // AI & Machine Learning
  {
    name: "Gemini AI LLM",
    category: "ai",
    tag: "Generative AI API",
    icon: "SiGoogle",
    level: "Proficient",
  },
  {
    name: "Vector Embeddings",
    category: "ai",
    tag: "Semantic Caching",
    icon: "BrainCircuit",
    level: "Proficient",
  },
  {
    name: "Selenium",
    category: "ai",
    tag: "Web Data Crawling",
    icon: "SiSelenium",
    level: "Advanced",
  },
  {
    name: "NLP & ML Models",
    category: "ai",
    tag: "Text & Time-Series",
    icon: "SiTensorflow",
    level: "Proficient",
  },
];

/**
 * Work Experience (Timeline)
 */
export const experiences = [
  {
    company: "PT Mitra Integrasi Informatika",
    location: "Jakarta, Indonesia (Hybrid)",
    role: "Application Developer Jr.",
    period: "Sep 2023 – Present",
    badge: "Current Role",
    type: "Enterprise IT Consulting",
    description:
      "Assigned to top-tier enterprise clients across banking, insurance, and telecommunications sectors to design, develop, and maintain robust business systems and microservices.",
    achievements: [
      "Architected backend business logic and secure RESTful APIs utilizing Salesforce Apex Classes, Triggers, Salesforce Flows, C# (.NET Core), and JavaScript (Express.js).",
      "Built scalable frontend interfaces using JavaScript including Lightning Web Components (LWC) and React.js for seamless enterprise operations.",
      "Implemented and integrated internal company API systems, enabling reliable data synchronization across multiple core banking and insurance services.",
      "Collaborated closely with Business Analysts (BA) and QA teams; served as technical reference point and mentor for new team members.",
      "Conducted automated/manual unit testing and wrote rigorous Apex test classes to guarantee high code coverage and deployment readiness.",
      "Enforced code quality standards by conducting peer code reviews, refactoring legacy codebases, and managing GitHub Pull Requests for zero-downtime production releases.",
    ],
    technologies: [
      "C# (.NET Core)",
      "Salesforce Apex",
      "LWC",
      "React.js",
      "Express.js",
      "SQL Server",
      "REST API",
      "Git/GitHub",
    ],
  },
  {
    company: "Freelance Software & Machine Learning Engineer",
    location: "Surabaya, Indonesia",
    role: "Freelance Software & ML Engineer",
    period: "Mar 2021 – Apr 2023",
    badge: "Self-Employed",
    type: "Consulting & ML Engineering",
    description:
      "Delivered custom end-to-end software solutions, Machine Learning, Deep Learning, and NLP analytical tools for diverse external clients and academic research projects.",
    achievements: [
      "Engineered automated Python data collection pipelines using Selenium to scrape web data, building custom cleaning logic to filter noise and spam.",
      "Built time-series forecasting models to analyze and predict financial exchange rate trends (USD/IDR) using deep learning algorithms.",
      "Developed NLP text classification tools and custom data pipelines to analyze sentiment and filter irrelevant attributes.",
      "Architected and maintained web applications using Python (Flask) and PHP (Laravel & CodeIgniter 3) with secure relational databases.",
    ],
    technologies: [
      "Python",
      "FastAPI / Flask",
      "Selenium",
      "TensorFlow",
      "Time-Series ML",
      "NLP",
      "MySQL",
      "PHP",
    ],
  },
  {
    company: "SMA Negeri 19 Surabaya",
    location: "Surabaya, Indonesia",
    role: "Web Developer Internship",
    period: "Aug 2019 – Oct 2020",
    badge: "Internship",
    type: "Institutional Systems",
    description:
      "Managed the complete Software Development Life Cycle (SDLC) from initial requirement analysis to successful delivery of core administrative web platforms.",
    achievements: [
      "Built two core full-stack web applications from scratch: a Performance Evaluation System to digitize paper appraisals and an Internal Resource Booking portal.",
      "Developed full-stack web applications using JavaScript, jQuery, CSS, and PHP with CodeIgniter 3 framework.",
      "Executed comprehensive application testing, debugging, and database schema validation to ensure stability before institutional deployment.",
      "Assisted internal IT support with local network configurations, switches, and server troubleshooting.",
    ],
    technologies: [
      "PHP",
      "CodeIgniter 3",
      "JavaScript",
      "MySQL",
      "Bootstrap",
      "Networking",
    ],
  },
];

/**
 * Featured Projects
 * Tambahkan atau modifikasi project di sini dengan mudah!
 */
export const projects = [
  {
    id: "moneymate",
    title: "MoneyMate",
    subtitle: "Self-Hosted CI/CD & AI LLM Personal Finance Microservice",
    category: "enterprise-backend",
    featured: true,
    badge: "Microservice Architecture",
    description:
      "A personal finance microservice application integrated with Gemini AI for intelligent receipt scanning, semantic caching, and real-time expense analytics. Engineered with clean separation between core API and AI worker services.",
    keyFeatures: [
      "Multi-service architecture: Core API (.NET Core) + AI Service (Python FastAPI)",
      "Gemini AI integration for automatic invoice and receipt OCR extraction",
      "Semantic caching via vector embeddings to minimize AI token usage",
      "Fully containerized with Docker and deployed using self-hosted automated CI/CD pipelines",
    ],
    techStack: [
      ".NET Core",
      "Python FastAPI",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Gemini AI",
    ],
    links: {
      github: "https://github.com/yazid29",
      demo: "https://yazid29.github.io/",
    },
  },
  {
    id: "enterprise-crm",
    title: "Enterprise CRM & Banking API Integration",
    subtitle: "Core Systems for Banking & Telecom (MII Experience - NDA Safe)",
    category: "enterprise-backend",
    featured: true,
    badge: "Enterprise Scale",
    description:
      "Architected secure backend business logic and scalable frontend components for major financial, insurance, and telecommunications institutions, handling high-volume customer data securely.",
    keyFeatures: [
      "Developed complex Salesforce Apex Classes, Triggers, and Lightning Web Components (LWC)",
      "Integrated internal company API systems with bidirectional synchronization",
      "High test coverage with rigorous Apex test classes ensuring reliable deployment",
      "Peer review enforcement and PR management for smooth production releases",
    ],
    techStack: [
      "Salesforce Apex",
      "LWC",
      "C# (.NET Core)",
      "Express.js",
      "SQL Server",
      "REST API",
    ],
    links: {
      github: "https://github.com/yazid29",
    },
  },
  {
    id: "forecasting-nlp",
    title: "Financial Time-Series Forecasting & NLP",
    subtitle:
      "Automated Data Crawling, Deep Learning & Sentiment Classification",
    category: "ai-data",
    featured: true,
    badge: "Machine Learning",
    description:
      "Custom analytical tools built for external clients to predict currency exchange rate trends (USD/IDR) and classify Indonesian social media content for sentiment and sarcasm detection.",
    keyFeatures: [
      "Engineered automated web data collection pipelines using Selenium with noise filtering",
      "Time-series deep learning forecasting models evaluating historical macroeconomic trends",
      "NLP text classification engine with custom semantic preprocessing",
      "Interactive Flask web dashboard for real-time inference visualization",
    ],
    techStack: ["Python", "Selenium", "TensorFlow", "NLP", "Flask", "MySQL"],
    links: {
      github: "https://github.com/yazid29",
    },
  },
  {
    id: "pmis",
    title: "PMIS - Project Management Information System",
    subtitle: "Vendor Management Platform for Indosat Ooredoo Hutchison",
    category: "fullstack",
    featured: false,
    badge: "Enterprise Client",
    description:
      "A project management application developed for vendors of PT Indosat Ooredoo Hutchison (IOH) to track project milestones, document submissions, and approval workflows.",
    keyFeatures: [
      "Responsive React.js interface with role-based access control (RBAC)",
      "Express.js RESTful API handling transactional submissions",
      "PostgreSQL relational database schema optimized for query performance",
    ],
    techStack: [
      "React.js",
      "Express.js",
      "JavaScript",
      "PostgreSQL",
      "REST API",
    ],
    links: {
      github: "https://github.com/yazid29",
    },
  },
  {
    id: "evora",
    title: "EVORA - Event Management Platform",
    subtitle: "Metrodata Full-Stack .NET Bootcamp Final Project",
    category: "enterprise-backend",
    featured: false,
    badge: "Bootcamp Capstone",
    description:
      "An end-to-end event organizer web application allowing administrators and attendees to manage events, ticket bookings, and attendee rosters with secure authentication.",
    keyFeatures: [
      "Built with ASP.NET Core Web API following Clean Architecture and Repository Pattern",
      "Secure token-based authentication (JWT) and role-based permissions",
      "Relational data model with Entity Framework Core migrations",
    ],
    techStack: [".NET Core", "C#", "SQL Server", "JavaScript", "REST API"],
    links: {
      github: "https://github.com/yazid29",
    },
  },
  {
    id: "employee-assessment",
    title: "Institutional Appraisal & Booking Portal",
    subtitle: "Digitizing Paper Workflows for SMAN 19 Surabaya",
    category: "fullstack",
    featured: false,
    badge: "Production Intern",
    description:
      "Full-stack institutional web application that replaced legacy paper-based employee appraisals and created a digitized agenda & resource booking schedule.",
    keyFeatures: [
      "Digitized appraisal scoring matrices and automated weighted evaluation scores",
      "Calendar-based resource booking system preventing schedule conflicts",
      "Delivered end-to-end SDLC from requirement gathering to on-premise deployment",
    ],
    techStack: ["PHP", "CodeIgniter 3", "MySQL", "JavaScript", "Bootstrap"],
    links: {
      github: "https://github.com/yazid29",
    },
  },
];

/**
 * Certifications & Training
 */
export const certifications = [
  {
    title: "Full-Stack Developer Bootcamp (.NET)",
    issuer: "METRODATA",
    date: "November 2023",
    credentialId: "1957065840-268/FGA/BLSDM.Kominfo/2023",
    badge: ".NET Enterprise",
    icon: "Code",
  },
  {
    title: "Cyber Novice Ethical Hacking",
    issuer: "EC-COUNCIL",
    date: "June 2023",
    credentialId: "1956527840-478/FGA/BLSDM.Kominfo/2023",
    badge: "Security",
    icon: "ShieldCheck",
  },
  {
    title: "Big Data using Python",
    issuer: "CISCO",
    date: "October 2021",
    credentialId: "01123956151-94/DTS/BLSDM.KOMINFO/10/2021",
    badge: "Data & Python",
    icon: "Binary",
  },
  {
    title: "DevOps Series: Linux & Networking",
    issuer: "DevOps Fundamentals",
    date: "August 2024",
    credentialId: "Linux Commands, Package Mgmt & Networking Essentials",
    badge: "Cloud / DevOps",
    icon: "Terminal",
  },
];

/**
 * Education
 */
export const education = {
  degree: "Bachelor of Information Technology (S.Kom.)",
  university: "Trunojoyo University Madura",
  period: "August 2016 – February 2023",
  gpa: "3.41 / 4.00",
  highlights: [
    "Focused on Software Engineering, Database Systems, and Machine Learning.",
    "Undergraduate thesis focused on Natural Language Processing (NLP) deep learning classification.",
  ],
};

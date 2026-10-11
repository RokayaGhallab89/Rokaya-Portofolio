export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  url: string;
  screenshot: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const DEVELOPER_PROFILE = {
  name: 'Rokaya Ghallab',
  officialName: 'Rokaya Ali Mubarak Mohamed',
  title: 'Front-End Developer',
  experienceYears: '2 Years',
  headline: 'Building digital experiences that feel different.',
  summary:
    "I'm Rokaya, a Front-End Developer specializing in React, Next.js, and WordPress. I build responsive, intuitive, and visually engaging digital experiences.",
  aboutDetailed:
    "Frontend Developer with progressive experience building responsive, high-performance websites and web applications using Next.js, React.js, JavaScript, and WordPress. Experienced in translating UI/UX designs into reusable components, integrating REST APIs, customizing WordPress and WooCommerce, and optimizing websites for speed, SEO, accessibility, and cross-browser compatibility. Strong Computer Science foundation with additional experience in hosting, domains, troubleshooting, and production support. Focused on clean code, scalable interfaces, polished user experiences, and reliable delivery.",
  specializations: ['React.js', 'Next.js', 'WordPress'] as const,
  stats: [
    { label: 'Years Experience', value: '02+' },
    { label: 'Featured Projects', value: '15' },
    { label: 'Core Specializations', value: '03' },
  ],
  contact: {
    email: 'Rokayaghallab4@gmail.com',
    phone: '+20 103 290 7055',
    whatsapp: '01032907055',
    whatsappNumber: '201032907055',
    whatsappUrl: 'https://wa.me/201032907055',
    location: 'Nasr City, Cairo, Egypt',
    github: 'https://github.com/RokayaGhallab89',
    noticePeriod: "15 days' notice",
    languages: [
      { name: 'Arabic', level: 'Native' },
      { name: 'English', level: 'Intermediate' },
    ],
  },
  cvUrl: '/Rokaya-Ghallab-CV.pdf',
  portraitUrl: '/images/portrait.jpg',
};

export const PROJECTS: Project[] = [
  {
    id: 'zayam-rock',
    number: '01 / 15',
    title: 'Zayam Rock',
    category: 'Architectural Surfaces & Engineered Stone',
    url: 'https://dev.zayamrock.com/',
    screenshot: '/projects/zayam-rock.jpg',
    description:
      'Immersive digital showcase platform presenting luxury engineered rock finishes, stone collections, and contemporary architectural surface solutions.',
    technologies: ['React.js', 'Tailwind CSS', 'Responsive UI', 'Modern Aesthetics'],
    featured: true,
  },
  {
    id: 'cannata',
    number: '02 / 15',
    title: 'Cannata Logistics',
    category: 'Freight Forwarding & Cargo Services · UAE',
    url: 'https://cannata.ae/',
    screenshot: '/projects/cannata.jpg',
    description:
      'Corporate UAE logistics platform designed for international cargo operations, freight forwarding services, and enterprise customer inquiries.',
    technologies: ['WordPress', 'Custom Themes', 'JavaScript', 'Core Web Vitals'],
  },
  {
    id: 'movinz',
    number: '03 / 15',
    title: 'Movinz',
    category: 'Relocation & International Moving Platform',
    url: 'https://movinz.com/',
    screenshot: '/projects/movinz.jpg',
    description:
      'Comprehensive moving and relocation portal featuring automated quote requests, streamlined booking funnels, and responsive navigation.',
    technologies: ['WordPress', 'WooCommerce', 'Elementor', 'Performance Optimization'],
  },
  {
    id: 'servix-agency',
    number: '04 / 15',
    title: 'Servix Agency',
    category: 'Full-Service Digital Agency · KSA',
    url: 'https://servix.agency/',
    screenshot: '/projects/servix-agency.jpg',
    description:
      'Flagship digital portal for a leading Saudi digital agency, highlighting tailored technology solutions, branding initiatives, and strategic services.',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'WordPress'],
  },
  {
    id: 'mg-store',
    number: '05 / 15',
    title: 'MG Store',
    category: 'Kitchenware & Modern Appliances E-Commerce',
    url: 'https://mg-store.shop/',
    screenshot: '/projects/mg-store.jpg',
    description:
      'High-conversion e-commerce storefront for household appliances, built with responsive product catalogs, optimized filtering, and swift mobile checkout.',
    technologies: ['WordPress', 'WooCommerce', 'Mobile-First UX', 'Custom Styling'],
  },
  {
    id: 'fire-fit-ems',
    number: '06 / 15',
    title: 'Fire Fit EMS',
    category: 'Fitness Studio & EMS Training Technology',
    url: 'https://firefitems.com/',
    screenshot: '/projects/fire-fit-ems.jpg',
    description:
      'Dynamic fitness landing experience presenting innovative 20-minute EMS body transformation sessions, pricing packages, and booking forms.',
    technologies: ['WordPress', 'Custom Page Layouts', 'Forms & Validation', 'Lead Gen'],
  },
  {
    id: 'el-hedaya',
    number: '07 / 15',
    title: 'El Hedaya Dairy',
    category: 'Industrial Dairy Manufacturing & Distribution',
    url: 'https://elhedaya.net/',
    screenshot: '/projects/el-hedaya.jpg',
    description:
      'Corporate portal for El Hedaya dairy manufacturing, showcasing dairy product lines, quality assurance certifications, and supply chain availability.',
    technologies: ['WordPress', 'Elementor', 'Product Catalog', 'Technical SEO'],
  },
  {
    id: 'belmondo-beauty',
    number: '08 / 15',
    title: 'Belmondo Beauty USA',
    category: 'Luxury Bio-Cellulose Skincare & Cosmetics',
    url: 'https://belmondobeautyusa.com/',
    screenshot: '/projects/belmondo-beauty.jpg',
    description:
      'Refined US beauty brand website specializing in premium bio-cellulose sheet masks, science-backed skincare narratives, and ingredient transparency.',
    technologies: ['WordPress', 'WooCommerce', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    id: 'servix-growth',
    number: '09 / 15',
    title: 'Servix Growth Platform',
    category: 'Next.js Digital Business & Conversion Engine',
    url: 'https://blanchedalmond-eel-746160.hostingersite.com/ar',
    screenshot: '/projects/servix-growth.jpg',
    description:
      'Next.js web application built for Servix Agency to transform inbound visitor traffic into sustainable business momentum through structured digital pillars.',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'REST API Integration'],
  },
  {
    id: 'kemokono',
    number: '10 / 15',
    title: 'Karim Mohamed Cinematography',
    category: 'Film Direction & Cinematographer Portfolio',
    url: 'https://kemokono.com/',
    screenshot: '/projects/kemokono.jpg',
    description:
      'High-impact editorial portfolio for professional cinematographer Karim Mohamed, showcasing high-profile commercial films, behind-the-scenes projects, and video archives.',
    technologies: ['WordPress', 'Elementor', 'Video UI', 'Responsive Design'],
  },
  {
    id: 'orthopaedia-crme',
    number: '11 / 15',
    title: 'Orthopaedia CME',
    category: 'Continuing Medical Education & Clinical Platform',
    url: 'https://orthopaediacrme.vercel.app/',
    screenshot: '/projects/orthopaedia-crme.jpg',
    description:
      'Specialized continuing medical education portal for orthopedic surgeons and medical professionals, delivering conference agendas, registrations, and learning modules.',
    technologies: ['React.js', 'Tailwind CSS', 'Component Systems', 'Interactive UI'],
  },
  {
    id: 'servix-services',
    number: '12 / 15',
    title: 'Servix Services Platform',
    category: 'Digital Business Transformation & SaaS Portal',
    url: 'https://servixservices.vercel.app/',
    screenshot: '/projects/servix-services.jpg',
    description:
      'Comprehensive Arabic digital transformation platform by Servix Agency, designed with structured business roadmaps, service catalogs, and corporate client onboarding.',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Modern Architecture'],
  },
  {
    id: 'nexus-crm',
    number: '13 / 15',
    title: 'NexusCRM Enterprise',
    category: 'Enterprise CRM & Customer Intelligence',
    url: 'https://crm-system-mauve.vercel.app/#/',
    screenshot: '/projects/nexus-crm.jpg',
    description:
      'Production-grade customer relationship management system featuring interactive pipeline views, dynamic contact filters, analytics tables, and client workflow automation.',
    technologies: ['React.js', 'SPA Architecture', 'Dynamic Tables', 'REST APIs'],
  },
 
  {
    id: 'sealtec',
    number: '15 / 15',
    title: 'SEALTEC Saudi Arabia',
    category: 'Engineered Surfaces & Industrial Materials',
    url: 'https://sealtec-projectt.vercel.app/',
    screenshot: '/projects/sealtec.jpg',
    description:
      'Official corporate web portal for SEALTEC Saudi Arabia, uniting high-performance industrial coatings, surface engineering solutions, and architectural infrastructure.',
    technologies: ['Next.js', 'Tailwind CSS', 'Industrial UX', 'Responsive Design'],
  },
];

export const CORE_SPECIALIZATIONS = [
  {
    id: 'react',
    title: 'React.js',
    shortRole: 'Interactive UI Architecture',
    description:
      'Component-based interfaces, scalable state management, clean hooks, and seamless interactive user experiences with high rendering efficiency.',
    highlights: ['Component-Based Design', 'Custom Hooks & State', 'Dynamic User Flows'],
  },
  {
    id: 'next',
    title: 'Next.js',
    shortRole: 'Modern Full-Stack React',
    description:
      'Modern React applications with App Router, server-rendered and static architectures, optimized Core Web Vitals, and performance-focused delivery.',
    highlights: ['App Router & Routing', 'Speed & Web Vitals', 'REST API Integration'],
  },
  {
    id: 'wordpress',
    title: 'WordPress',
    shortRole: 'Custom CMS & WooCommerce',
    description:
      'Flexible, responsive, and maintainable website experiences. Theme customization, WooCommerce checkout workflows, and content management.',
    highlights: ['Theme & Page Customization', 'WooCommerce Workflows', 'Client-Friendly Setup'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Architecture & Frameworks',
    description: 'Component systems, routing paradigms, and reactive state',
    skills: [
      'Next.js (App Router, Rendering, Routing)',
      'React.js (Reusable UI Architecture, Hooks)',
      'JavaScript (ES6+)',
      'HTML5 Semantic Markup',
      'CSS3 & Modern CSS',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'CMS & E-Commerce Engineering',
    description: 'Robust content platforms and commercial checkout funnels',
    skills: [
      'WordPress Theme & Page Customization',
      'WooCommerce Store Architecture',
      'Elementor Page Builder',
      'Product Pages & Custom Styling',
      'Checkout Workflows & Forms',
    ],
  },
  {
    title: 'Data, Integration & API Workflows',
    description: 'Asynchronous services and backend connectivity',
    skills: [
      'REST API Integration',
      'Dynamic Data Handling',
      'Interactive User Flows & Loading States',
      'Form Validation & Error Handling',
    ],
  },
  {
    title: 'Performance, Quality & Operations',
    description: 'Delivering fast, accessible, production-stable web experiences',
    skills: [
      'Responsive Web Design (Mobile-First)',
      'Core Web Vitals & Speed Optimization',
      'Image Optimization',
      'On-Page Technical SEO',
      'Accessibility & Cross-Browser Consistency',
      'Git / GitHub Version Control',
      'Hosting & Domain Deployment Support',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'Jan 2026 – Present',
    role: 'Frontend Developer | Next.js & React.js',
    company: 'Servix Agency',
    bullets: [
      'Build responsive, production-ready web interfaces using Next.js, React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.',
      'Translate UI/UX designs into reusable components and responsive layouts with consistent behaviour across desktop, tablet, and mobile.',
      'Integrate REST APIs and dynamic data, implementing forms, validation, loading states, error handling, and interactive user flows.',
      'Maintain and customize WordPress and WooCommerce websites, including page layouts, product experiences, checkout enhancements, and custom styling.',
      'Improve page speed, Core Web Vitals, accessibility, technical SEO, and cross-browser compatibility while supporting deployment and production fixes.',
    ],
  },
  {
    period: 'Jan 2025 – Dec 2025',
    role: 'Frontend & WordPress Developer',
    company: 'Roaa PDA',
    bullets: [
      'Developed responsive websites and landing pages using WordPress, Elementor, HTML, CSS, and JavaScript.',
      'Customized themes, page templates, navigation, forms, and reusable content sections to match brand and user-experience requirements.',
      'Maintained website content and functionality, resolved frontend issues, and improved mobile responsiveness and cross-browser consistency.',
      'Supported hosting, domain, deployment, backup, and website maintenance tasks to keep digital platforms stable and available.',
    ],
  },
  {
    period: 'Jan 2024 – Dec 2024',
    role: 'Web & WordPress Developer',
    company: 'Namaa Foundation',
    bullets: [
      'Built and maintained responsive WordPress pages for organisational programmes, campaigns, news, and public-facing information.',
      'Implemented frontend updates using HTML, CSS, JavaScript, and WordPress page-building tools while following established brand guidelines.',
      'Optimized page structure, images, navigation, and mobile layouts to improve usability, performance, accessibility, and search visibility.',
      'Handled website troubleshooting, content updates, forms, backups, hosting coordination, and day-to-day technical website support.',
    ],
  },
  {
    period: 'Jan 2023 – Dec 2023',
    role: 'Frontend Developer | React.js',
    company: 'CodeSoft',
    bullets: [
      'Developed responsive frontend interfaces for business and ERP-related web applications using React.js, JavaScript, HTML, and CSS.',
      'Built reusable components, forms, tables, and data-driven UI elements and connected them with backend services through REST APIs.',
      'Debugged interface issues, improved usability and responsiveness, and collaborated on feature testing and production-ready releases.',
    ],
  },
  {
    period: 'Jan 2022 – Dec 2022',
    role: 'Junior Frontend & WordPress Developer',
    company: 'SoftKhana',
    bullets: [
      'Created responsive landing pages and website sections using HTML5, CSS3, JavaScript, and WordPress.',
      'Customized WordPress themes, styling, page layouts, and content while supporting domain, hosting, and website deployment tasks.',
      'Tested websites across devices and browsers, fixed layout and functionality issues, and provided ongoing website maintenance support.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: 'South Valley University',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'MERN Stack Development',
    issuer: 'ITI (Information Technology Institute)',
  },
  {
    title: 'Front-End Development',
    issuer: 'Route Academy',
  },
];

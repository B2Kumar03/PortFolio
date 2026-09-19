/**
 * Central portfolio configuration.
 * Personal projects only — no employer-owned product case studies.
 */

export const siteConfig = {
  // TODO: Replace with your live domain (used for canonical, OG, sitemap)
  domain: 'https://your-domain.com',
  // TODO: Add a 1200×630 social preview image path (e.g. /og-image.png)
  ogImage: '',
  title: 'Bittu Kumar — Software Engineer | Full-Stack & Mobile Developer',
  description:
    'Software Engineer building production-ready web, backend and mobile applications with React, Next.js, Node.js, PostgreSQL and Flutter.',
  themeColor: '#090b10',
  locale: 'en_IN',
}

export const personal = {
  name: 'Bittu Kumar',
  monogram: 'BK',
  role: 'Software Engineer | Full-Stack & Mobile Developer',
  currentRole: 'Junior Software Developer',
  location: 'Bihar, India',
  timezone: 'Asia/Kolkata',
  availability: 'Open to full-time opportunities and willing to relocate',
  available: true,
  email: 'bk7355583@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bittu-k-2b54b0267/',
  github: 'https://github.com/B2Kumar03',
  // TODO: Add a public résumé PDF/URL (e.g. /resume.pdf or Google Drive link)
  resumeUrl: '',
  photo: '/profilePic/profile_pic.jpg',
  headline: 'Software Engineer focused on production web, backend and mobile systems.',
  supporting:
    'Building production-ready web, backend and mobile applications with React, Next.js, Node.js, PostgreSQL and Flutter.',
  introduction:
    'I’m Bittu Kumar, a software engineer working across web, backend and mobile. I build practical products with React, Next.js, Node.js, PostgreSQL and Flutter, and I care about how those systems behave in real use.',
  hero: {
    eyebrow: 'Software Engineer',
    heading: 'Building software that solves real problems.',
    paragraph:
      'I build production-ready web, backend and mobile applications with React, Next.js, Node.js, PostgreSQL and Flutter.',
    primaryCta: 'View My Work',
    secondaryCta: 'Download Resume',
    techLine: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Flutter'],
    meta: [
      { label: 'Bihar, India' },
      { label: 'Open to relocation' },
      { label: 'Available for opportunities' },
    ],
  },
  about: {
    heading: 'A software engineer who likes shipping useful systems.',
    who: 'I’m Bittu Kumar, a Junior Software Developer from Bihar, India. I work on production web and mobile applications, and I also build personal products to learn how real systems fit together.',
    work: 'Day to day I work across frontend, backend and mobile — React, Node.js, PostgreSQL, Flutter and React Native — including APIs, authentication, data models and device-specific debugging.',
    enjoy:
      'I enjoy products with real workflows: visitor approvals, activity tracking, dashboards and small tools that remove friction. Portl, AI Step Coach and my browser extensions came from that instinct.',
    learning:
      'I’m currently deepening my work in production systems — clearer APIs, better data models, and mobile features that hold up after they ship.',
    paragraphs: [
      'I’m Bittu Kumar, a Junior Software Developer from Bihar, India. I work on production web and mobile applications, and I also build personal products to learn how real systems fit together.',
      'Day to day I work across frontend, backend and mobile — React, Node.js, PostgreSQL, Flutter and React Native — including APIs, authentication, data models and device-specific debugging.',
      'I enjoy products with real workflows: visitor approvals, activity tracking, dashboards and small tools that remove friction. Portl, AI Step Coach and my browser extensions came from that instinct.',
      'I’m currently deepening my work in production systems — clearer APIs, better data models, and mobile features that hold up after they ship.',
    ],
  },
  contact: {
    heading: "Let's build something useful.",
    supporting:
      "I'm open to software engineering opportunities, interesting products and collaborations.",
    cta: 'Email Me',
  },
  loader: {
    tagline: 'Software Engineer · Full-stack & mobile',
    stages: ['Loading'],
  },
  footer: {
    credit: 'Bittu Kumar',
    role: 'Software Engineer | Full-Stack & Mobile Developer',
    builtWith: 'Designed and developed by Bittu Kumar',
  },
}

export const navigation = [
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'about', label: 'About', href: '#about' },
]

export const projects = [
  {
    id: 'portl',
    slug: 'portl',
    number: '01',
    title: 'Portl',
    type: 'Hackathon Project',
    category: 'Mobile',
    categories: ['Mobile', 'Backend'],
    label: 'Hackathon Project · Full-Stack Mobile Application',
    hackathonName: '',
    teamMembers: [],
    headline: 'One society. Three roles. One connected experience.',
    shortDescription:
      'A centralized society platform for residents, guards and administrators — visitor flow, operations and community workflows in one system.',
    summary:
      'Portl connects Residents, Security Guards and Society Administrators through a real-time platform for visitor management, community operations, amenities, billing and support.',
    problem:
      'Managing society operations, residents and complaints can become difficult when information is spread across gate registers, phone calls, messaging groups and manual office processes. Residents lack visibility, guards wait for confirmation and administrators manage important information across disconnected channels.',
    solution:
      'Portl provides one role-based, real-time platform for Residents, Guards and Admins. Each role receives an experience designed around its responsibilities while sharing the same visitor, society and notification data.',
    role: 'Full-stack mobile product development across Expo React Native and Node.js backend.',
    challenge:
      'Designing one shared data model and real-time visitor flow that stays clear for three very different user roles.',
    overview:
      'Portl unifies society operations into a role-aware mobile product for residents, guards and administrators—with visitor approvals, QR passes, complaints, amenities, notices and maintenance in one system.',
    contribution:
      'Built the connected mobile and backend experience spanning authentication, role-based interfaces, visitor workflows, real-time updates and operational society features.',
    contributionItems: [
      'Role-based mobile interfaces for Resident, Guard and Admin',
      'REST API integration',
      'Authentication and authorization',
      'Real-time visitor workflows',
      'PostgreSQL and Prisma data model',
      'QR pass generation and scanning',
    ],
    coverImage: '/projects/portl/resident/residetn-dashboard.webp',
    coverAlt: 'Portl resident dashboard showing society operations at a glance',
    roles: {
      resident: {
        title: 'Resident',
        description: 'Approve visitors, manage guest passes and stay connected to society operations.',
        count: 13,
        features: [
          'Approve or reject visitors',
          'View visitor requests',
          'Pre-approve guests',
          'Generate QR visitor passes',
          'View visitor history',
          'Access community notices',
          'Participate in polls',
          'Submit help-desk complaints',
          'Book amenities',
          'Review bookings and bills',
          'Manage profile',
        ],
      },
      guard: {
        title: 'Guard',
        description: 'Handle the gate queue, scan passes and keep visitor status live.',
        count: 9,
        features: [
          'View expected visitors',
          'Register visitors',
          'Track waiting and pending visitors',
          'Check visitors in and out',
          'Request Resident approval',
          'Scan QR passes',
          'View scan results',
          'Handle network reconnection',
          'Manage Guard profile',
        ],
      },
      admin: {
        title: 'Admin',
        description: 'Oversee residents, activity, notices, amenities and society-level operations.',
        count: 22,
        features: [
          'View Command Center',
          'View analytics',
          'Manage Residents',
          'Manage towers and flats',
          'Manage amenities',
          'Manage bookings',
          'Manage billing',
          'Review invoices',
          'Manage complaints',
          'Publish notices',
          'Create polls',
          'Review approvals',
          'Handle emergencies',
          'Review resolved emergencies',
        ],
      },
    },
    visitorJourney: [
      'Guard registers a visitor',
      'Resident receives a real-time approval request',
      'Resident approves or rejects the visitor',
      'Guard receives the updated result',
      'Visitor checks in',
      'Visitor checks out',
      'The activity appears in visitor history',
    ],
    architecture:
      'React Native clients communicate with a Node.js API backed by PostgreSQL. Socket.IO and push notifications keep Resident, Guard and Admin experiences synchronized.',
    features: [
      'Role-based authentication and authorization',
      'Visitor approval and rejection',
      'Guest pre-approval',
      'QR pass generation and scanning',
      'Guard check-in and check-out',
      'Visitor history',
      'Real-time Socket.IO updates',
      'Push notifications',
      'Complaints and helpdesk',
      'Amenity booking',
      'Notices and polls',
      'Maintenance billing',
      'Offline and reconnection feedback',
      'Secure token storage',
    ],
    challenges: [
      'Keeping three role experiences coherent on one shared backend',
      'Reliable real-time approval updates at the gate',
      'QR pass generation and scanning under real usage conditions',
      'Offline and reconnection feedback for guards',
      'Clear permission boundaries across resident, guard and admin',
    ],
    primaryTech: [
      'React Native',
      'Expo',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Socket.IO',
    ],
    fullTech: {
      mobile: [
        'Expo SDK 55',
        'React Native',
        'TypeScript',
        'Expo Router',
        'TanStack Query',
        'Zustand',
        'React Hook Form',
        'Zod',
        'Axios',
        'Socket.IO Client',
        'Expo Notifications',
        'Expo Camera',
        'Expo Secure Store',
        'MMKV',
      ],
      backend: [
        'Node.js',
        'Express',
        'TypeScript',
        'PostgreSQL',
        'Prisma',
        'JWT',
        'bcrypt',
        'Zod',
        'Socket.IO',
        'Firebase Admin',
        'Cloudinary',
        'Multer',
        'Helmet',
        'Rate limiting',
        'Swagger',
      ],
    },
    mediaType: 'mobile-stack',
    screenVariant: 'portl',
    theme: '#D87E36',
    featured: true,
    layout: 'featured',
    galleryUrl: 'https://demoscreensort.vercel.app/',
    apkUrl:
      'https://drive.google.com/file/d/1w5zWMDS2GTV14Q9quS_S4dvaXgITFFtq/view?usp=sharing',
    demoVideoUrl: 'https://www.youtube.com/embed/D_z1-hZjCWU',
    githubUrl: '',
    liveUrl: '',
    caseStudyUrl: '',
    outcome:
      'A role-aware society product that connects visitor flow, approvals and society operations through one real-time mobile system.',
  },
  {
    id: 'ai-step-coach',
    slug: 'ai-step-coach',
    number: '02',
    title: 'AI Step Coach',
    type: 'Personal Project',
    category: 'Mobile',
    categories: ['Mobile', 'Backend', 'AI'],
    label: 'Personal Project · Mobile Health Application',
    headline: 'A step-tracking application that notices inactivity and motivates users to move.',
    shortDescription:
      'A mobile fitness app that tracks steps, notices inactivity and sends coach-style prompts when activity drops.',
    summary:
      'A mobile fitness application combining step tracking, activity awareness and an AI-style coach that motivates users when they remain inactive.',
    problem:
      'Step tracking alone is not always enough—users benefit from timely motivation when activity drops during the day.',
    solution:
      'A mobile fitness experience combining step progress, inactivity detection and coach-style prompts.',
    role: 'Personal product design and mobile development.',
    challenge: 'Detecting inactivity usefully without turning motivation into noise.',
    overview:
      'A personal mobile product focused on step tracking, progress awareness and coach-style prompts when inactivity is detected.',
    contribution:
      'Designed and built the mobile experience around activity progress, inactivity detection, coaching prompts and a health-focused dashboard.',
    contributionItems: [
      'Mobile product design',
      'Step tracking and progress UI',
      'Inactivity detection',
      'Coach-style prompts and notifications',
      'Authentication',
      'Health-focused dashboard',
    ],
    coverImage: '/projects/ai-step-coach/home-screen.jpeg',
    coverAlt: 'AI Step Coach home dashboard with daily step progress',
    features: [
      'Step tracking',
      'Daily progress',
      'Goal management',
      'Inactivity detection',
      'Coach messages',
      'Persistent notifications',
      'Authentication',
      'Weekly activity view',
    ],
    challenges: [
      'Activity awareness across the day',
      'Inactivity detection without noisy alerts',
      'Clear progress feedback on a mobile-first interface',
    ],
    primaryTech: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Firebase'],
    fullTech: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Firebase'],
    mediaType: 'mobile',
    screenVariant: 'ai-step-coach',
    screenshots: [
      {
        id: 'home',
        name: 'Home',
        src: '/projects/ai-step-coach/home-screen.jpeg',
        alt: 'AI Step Coach home dashboard with daily step progress',
      },
      {
        id: 'goals',
        name: 'Goals',
        src: '/projects/ai-step-coach/goals-screen.jpeg',
        alt: 'AI Step Coach goals screen',
      },
      {
        id: 'challenges',
        name: 'Challenges',
        src: '/projects/ai-step-coach/challenges.jpeg',
        alt: 'AI Step Coach challenges screen',
      },
    ],
    theme: '#D87E36',
    featured: true,
    layout: 'text-left',
    liveUrl: '',
    githubUrl: '',
    apkUrl: '',
    demoVideoUrl: '',
    caseStudyUrl: '',
    outcome:
      'A personal product exploring activity tracking, coaching prompts and mobile-first health UX.',
  },
  {
    id: 'browser-extensions',
    slug: 'browser-extensions',
    number: '03',
    title: 'Browser Extensions',
    type: 'Personal Projects',
    category: 'Web',
    categories: ['Web'],
    label: 'Personal Projects · Chrome Extensions',
    headline: 'Small tools for everyday browser friction.',
    shortDescription:
      'Two focused Chrome extensions: instant QR codes for the current tab, and typing practice directly in the browser.',
    summary:
      'A pair of lightweight Chrome extensions focused on QR sharing and typing practice directly in the browser.',
    problem:
      'Small friction points in the browser—sharing the current tab and practising typing—can be improved with focused lightweight tools.',
    solution:
      'Two focused Chrome extensions: QR Wave for instant QR codes and Type Anywhere for in-browser typing practice.',
    role: 'Designed and built browser extensions with focused UI and local storage.',
    challenge: 'Keeping each tool lightweight while remaining useful immediately.',
    overview:
      'QR Wave and Type Anywhere are lightweight Chrome extensions for everyday browser productivity.',
    contribution:
      'Built and iterated on browser extensions using Chrome Extension APIs, local storage and focused popup UI.',
    contributionItems: [
      'Chrome Extension APIs',
      'Popup UI',
      'Local storage',
      'QR generation and customization',
      'In-browser typing practice',
    ],
    coverImage: '',
    coverAlt: '',
    visualType: 'extension',
    extensions: [
      {
        id: 'qr-wave',
        title: 'QR Wave',
        description:
          'A Chrome extension that instantly creates a customizable QR code for the current browser tab.',
        features: ['QR preview', 'Size options', 'Color controls', 'Download action', 'Copy URL action'],
      },
      {
        id: 'type-anywhere',
        title: 'Type Anywhere',
        description:
          'A lightweight browser extension for practising and improving typing directly inside the browser.',
        features: ['Typing speed setting', 'Practice state', 'Simple progress feedback'],
      },
    ],
    features: ['QR Wave', 'Type Anywhere'],
    challenges: [
      'Keeping tools lightweight and purposeful',
      'Working within Chrome Extension constraints',
      'Useful defaults with minimal setup',
    ],
    primaryTech: ['JavaScript', 'Chrome Extension APIs', 'HTML', 'CSS'],
    fullTech: ['JavaScript', 'Chrome Extension APIs', 'HTML', 'CSS', 'Browser Storage'],
    mediaType: 'extension',
    screenVariant: 'browser-tools',
    screenshots: { primary: null },
    theme: '#9CA3AF',
    featured: true,
    layout: 'media-left',
    liveUrl: '',
    githubUrl: '',
    apkUrl: '',
    demoVideoUrl: '',
    caseStudyUrl: '',
    outcome: 'Practical browser tools for everyday productivity workflows.',
  },
]

const FILTER_ORDER = ['Web', 'Mobile', 'Backend', 'AI']

export const projectFilters = [
  'All',
  ...FILTER_ORDER.filter((category) =>
    projects.some((project) => project.categories?.includes(category)),
  ),
]

export const experience = [
  {
    company: 'ResolveBiz Services & Apps Pvt. Ltd.',
    role: 'Junior Software Developer',
    period: 'August 2025 — Present',
    current: true,
    description:
      'Working on production web and mobile applications across frontend, backend and database layers.',
    contributions: [
      'Flutter and React Native mobile development',
      'MERN-stack and Node.js backend work',
      'REST API integration',
      'PostgreSQL data workflows',
      'Android and iOS debugging',
      'Production support and cross-platform testing',
    ],
    technologies: [
      'Flutter',
      'React Native',
      'React',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
    ],
    focusAreas: [
      {
        id: 'mobile',
        title: 'Mobile development',
        text: 'Building Flutter and React Native experiences for Android and iOS.',
      },
      {
        id: 'mern',
        title: 'Full-stack & APIs',
        text: 'Working with MongoDB, Express, React and Node.js for full-stack product flows.',
      },
      {
        id: 'data',
        title: 'PostgreSQL & data',
        text: 'Designing and integrating PostgreSQL-backed APIs and application data flows.',
      },
      {
        id: 'delivery',
        title: 'Debugging & delivery',
        text: 'Investigating device-specific issues and supporting stable releases.',
      },
    ],
  },
]

export const highlights = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    text: 'Designing APIs, authentication, business logic and integrations with Node.js, Express and JWT.',
  },
  {
    id: 'mobile',
    title: 'Mobile Engineering',
    text: 'Building Flutter and React Native applications involving APIs, notifications and device capabilities.',
  },
  {
    id: 'database',
    title: 'Database Engineering',
    text: 'Working with PostgreSQL, MongoDB, Prisma and relational data models.',
  },
  {
    id: 'production',
    title: 'Production Systems',
    text: 'Debugging, testing and supporting production web and mobile applications across Android and iOS.',
  },
]

export const currentlyBuilding = {
  status: 'Currently building',
  title: 'Production web and mobile applications',
  description:
    'At ResolveBiz I work on production web and mobile applications across frontend, backend and database layers — including Flutter, React Native, Node.js and PostgreSQL.',
  context: 'Professional work',
  technologies: ['Flutter', 'React Native', 'Node.js', 'PostgreSQL'],
}

export const capabilities = [
  {
    id: 'mobile',
    title: 'Mobile engineering',
    items: [
      'Flutter and Dart',
      'React Native and Expo',
      'Android and iOS',
      'Push notifications',
      'Device-specific debugging',
      'Mobile-first UX',
    ],
  },
  {
    id: 'mern',
    title: 'Full-stack web',
    items: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'REST APIs',
      'Authentication and authorization',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend engineering',
    items: [
      'React',
      'JavaScript and TypeScript',
      'Next.js',
      'Responsive interfaces',
      'Component architecture',
      'API-driven UI',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & databases',
    items: [
      'Node.js and Express',
      'PostgreSQL',
      'MongoDB',
      'Prisma',
      'REST APIs',
      'Secure data handling',
    ],
  },
]

export const systemDiagram = [
  'Mobile / React client',
  'Node.js API',
  'Business logic',
  'PostgreSQL / MongoDB',
  'Realtime & notifications',
]

export const technologyGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Authentication'],
  },
  {
    id: 'database',
    label: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Prisma', 'SQL'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    items: ['Flutter', 'React Native', 'Expo', 'Dart'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'GitHub', 'Firebase', 'Socket.IO'],
  },
]

export const technologies = technologyGroups.flatMap((group) => group.items)

export const education = {
  degree: 'Bachelor of Computer Applications',
  college: 'T.N.B. College, Bhagalpur',
  university: 'T.M. Bhagalpur University',
  session: '2021–2024',
}

export const journey = [
  {
    title: 'BCA foundation',
    description: 'Built core computer science and programming foundations during BCA.',
  },
  {
    title: 'Started building web and mobile applications',
    description: 'Began shipping personal and learning projects across web and mobile.',
  },
  {
    title: 'Joined ResolveBiz as Junior Software Developer',
    description: 'Started contributing across mobile and backend development.',
  },
  {
    title: 'Built Portl as a full-stack mobile society product',
    description: 'Explored real-time visitor workflows across resident, guard and admin roles.',
  },
  {
    title: 'Continuing to grow toward full-stack product engineering',
    description: 'Expanding across mobile, frontend, backend and product delivery.',
  },
]

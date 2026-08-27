/**
 * Central portfolio configuration.
 * Personal projects only — no employer-owned product case studies.
 */

export const siteConfig = {
  // TODO: Replace with your live domain (used for canonical, OG, sitemap)
  domain: 'https://your-domain.com',
  // TODO: Add a 1200×630 social preview image path (e.g. /og-image.png)
  ogImage: '',
  title: 'Bittu Kumar | Mobile & Full-Stack Developer',
  description:
    'Portfolio of Bittu Kumar, a Mobile and Full-Stack Developer skilled in the MERN stack, Flutter, React Native and PostgreSQL.',
  themeColor: '#07090D',
  locale: 'en_IN',
}

export const personal = {
  name: 'Bittu Kumar',
  monogram: 'BK',
  role: 'Mobile & Full-Stack Developer',
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
  // Public profile photo (served from /public)
  photo: '/profilePic/profile_pic.jpg',
  headline: 'Mobile & Full-Stack Developer focused on MERN, Flutter and React Native.',
  supporting:
    'I build practical mobile apps and full-stack systems with MongoDB, Express, React, Node.js, Flutter, React Native and PostgreSQL.',
  introduction:
    'I’m Bittu Kumar, a software developer focused on MERN-stack web apps and cross-platform mobile products with Flutter and React Native. I enjoy building reliable APIs, clean interfaces and database-backed workflows with PostgreSQL.',
  hero: {
    eyebrow: 'Bittu Kumar — Mobile & Full-Stack Developer',
    headingLines: ['I build mobile products', 'and full-stack systems', 'for real-world problems.'],
    highlightWords: ['mobile', 'products', 'full-stack', 'systems'],
    paragraph:
      'I create practical mobile experiences and scalable backend systems using React Native, Flutter, React, Node.js and PostgreSQL.',
    primaryCta: 'Explore selected work',
    secondaryCta: 'Download résumé',
    meta: [
      { label: 'Bihar, India' },
      { label: 'Open to relocation' },
      { label: 'Available for opportunities' },
    ],
    floatingLabels: ['Resident', 'Guard', 'Admin'],
    supportLabels: ['React Native', 'Flutter', 'Node.js', 'PostgreSQL'],
  },
  about: {
    heading: 'Developer by profession. Problem solver by mindset.',
    paragraphs: [
      'I’m a software developer from Bihar, India, focused on full-stack and mobile development. My core stack is MERN — MongoDB, Express, React and Node.js — along with Flutter, React Native and PostgreSQL for mobile and data-driven products.',
      'Outside of work I build personal products like Portl, AI Step Coach and browser extensions that help me sharpen real product skills across mobile and backend systems.',
      'I enjoy understanding how a feature behaves outside the happy path—when the network is unstable, a device behaves differently or a workflow becomes complex.',
    ],
    values: [
      {
        title: 'Reliability over shortcuts',
        description: 'Prefer durable solutions that hold up in real usage over quick patches.',
      },
      {
        title: 'Learn by building',
        description: 'Grow skills through shipping real products, debugging hard cases, and iterating.',
      },
      {
        title: 'Simplicity after complexity',
        description: 'Understand the hard parts first, then design interfaces and systems that feel clear.',
      },
    ],
  },
  contact: {
    heading: 'Have a real problem worth building for?',
    supporting:
      'I’m open to software development opportunities where I can contribute to meaningful mobile and full-stack products.',
    cta: 'Let’s talk',
  },
  loader: {
    tagline: 'Mobile products / Full-stack systems.',
    stages: ['Designing', 'Building', 'Testing', 'Shipping'],
  },
  footer: {
    credit: 'Designed and developed by Bittu Kumar',
    builtWith: 'Built with React, GSAP and curiosity',
  },
}

export const navigation = [
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    id: 'portl',
    slug: 'portl',
    number: '01',
    title: 'Portl',
    type: 'Hackathon Project',
    label: 'Hackathon Project · Full-Stack Mobile Application',
    // TODO: Add hackathon name when available
    hackathonName: '',
    // TODO: Add team members when available
    teamMembers: [],
    headline: 'One society. Three roles. One connected experience.',
    summary:
      'Portl connects Residents, Security Guards and Society Administrators through a real-time platform for visitor management, community operations, amenities, billing and support.',
    problem:
      'Society operations are often spread across gate registers, phone calls, messaging groups and manual office processes. Residents lack visibility, guards wait for confirmation and administrators manage important information across disconnected channels.',
    solution:
      'Portl provides one role-based, real-time platform for Residents, Guards and Admins. Each role receives an experience designed around its responsibilities while sharing the same visitor, society and notification data.',
    role: 'Full-stack mobile product development across Expo React Native and Node.js backend.',
    challenge:
      'Designing one shared data model and real-time visitor flow that stays clear for three very different user roles.',
    overview:
      'Portl unifies society operations into a role-aware mobile product for residents, guards and administrators—with visitor approvals, QR passes, complaints, amenities, notices and maintenance in one system.',
    contribution:
      'Built the connected mobile and backend experience spanning authentication, role-based interfaces, visitor workflows, real-time updates and operational society features.',
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
      'Delivered a role-aware society product that connects visitor flow, approvals and society operations through one real-time mobile system.',
  },
  {
    id: 'ai-step-coach',
    slug: 'ai-step-coach',
    number: '02',
    title: 'AI Step Coach',
    type: 'Personal Project',
    label: 'Personal Project · Mobile Health Application',
    headline: 'A step-tracking application that notices inactivity and motivates users to move.',
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
      'Built a personal product exploring activity tracking, coaching prompts and mobile-first health UX.',
  },
  {
    id: 'browser-extensions',
    slug: 'browser-extensions',
    number: '03',
    title: 'Browser Extensions',
    type: 'Personal Projects',
    label: 'Personal Projects · Chrome Extensions',
    headline: 'Small tools for everyday browser friction.',
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
    // TODO: Add real extension screenshots under src/assets/projects/browser-tools/
    screenshots: { primary: null },
    theme: '#9CA3AF',
    featured: true,
    layout: 'media-left',
    liveUrl: '',
    githubUrl: '',
    apkUrl: '',
    demoVideoUrl: '',
    caseStudyUrl: '',
    outcome:
      'Shipped practical browser tools for everyday productivity workflows.',
  },
]

export const experience = {
  company: 'ResolveBiz Services & Apps Pvt. Ltd.',
  role: 'Junior Software Developer',
  period: 'August 2025 — Present',
  description: 'Working across mobile and backend development with Flutter, React Native, Node.js and PostgreSQL.',
  contributions: [
    'Flutter and React Native mobile development',
    'MERN-stack and Node.js backend work',
    'REST API integration',
    'PostgreSQL data workflows',
    'Android and iOS debugging',
    'Production support and cross-platform testing',
  ],
  focusAreas: [
    {
      id: 'mobile',
      title: 'Mobile development',
      text: 'Building Flutter and React Native experiences for Android and iOS.',
    },
    {
      id: 'mern',
      title: 'MERN & APIs',
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
    title: 'MERN stack',
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
    id: 'mobile',
    label: 'Mobile',
    items: ['React Native', 'Expo', 'Flutter', 'Dart', 'Android', 'iOS'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'MongoDB'],
  },
  {
    id: 'data',
    label: 'Data & Infrastructure',
    items: ['PostgreSQL', 'Prisma', 'Firebase', 'Redis', 'Azure'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'Socket.IO'],
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

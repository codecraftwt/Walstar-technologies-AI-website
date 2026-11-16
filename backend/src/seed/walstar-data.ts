export const INITIAL_SITE_SETTING = {
  siteName: 'Walstar Technologies',
  logoAccentText: 'TECHNOLOGIES',
  footerLogoAccentText: 'TECHNOLOGIES PVT. LTD.',
  topbarEmail: 'sales@walstartechnologies.com',
  topbarPhone: '+919657764560',
  socialLinks: [
    { platform: 'LinkedIn', href: '#cta' },
    { platform: 'X', href: '#cta' },
    { platform: 'Facebook', href: '#cta' },
    { platform: 'Instagram', href: '#cta' },
  ],
  navLinks: [
    { label: 'Home', href: '/', hasDropdown: false },
    { label: 'Services', href: '/service-1', hasDropdown: true },
    { label: 'Industries', href: '/#prod', hasDropdown: false },
    { label: 'Our Work', href: '/#case', hasDropdown: false },
    { label: 'About Us', href: '/about-us', hasDropdown: false },
    { label: 'Contact', href: '/contact', hasDropdown: false },
  ],
  headerCtaLabel: 'Book a strategy call ↗',
  headerCtaHref: '/contact',
  tagline: 'AI-Powered Innovation • Digital Solutions • Business Growth',
  heroTitle: 'Transform Your Business With The Power of AI.',
  heroSubtitle:
    'We combine artificial intelligence, intelligent automation, and modern software engineering to help brands work smarter, innovate faster, and scale with confidence.',
  contactEmail: 'info@walstartechnologies.com',
  footerAbout:
    'Results-driven digital agency building secure, scalable solutions for global businesses.',
  footerNewsletterTitle: 'Have Project in mind?',
  footerNewsletterSubtitle: "Let's create something great",
  footerNewsletterButtonLabel: 'Free Consultation ↗',
  footerBigPrefix: 'Build',
  footerBigSerif: 'AI Products',
  footerBigSuffix: 'that actually Ships.',
  footerCtaLabel: 'Contact Now ↗',
  footerCtaHref: '/contact',
  footerPrimaryLinks: [
    { label: 'Home', href: '/', hasDropdown: false },
    { label: 'About', href: '/about-us', hasDropdown: false },
    { label: 'Blog', href: '/welcome', hasDropdown: false },
    { label: 'Portfolio', href: '/#case', hasDropdown: false },
  ],
  footerSecondaryLinks: [
    { label: 'Services', href: '/service-1', hasDropdown: false },
    { label: 'Career', href: '/about-us', hasDropdown: false },
    { label: 'Contact', href: '/contact', hasDropdown: false },
    { label: 'Events & Programs', href: '/#prod', hasDropdown: false },
  ],
  officeAddress:
    '2103/47 E, Rukmini Nagar, Front of Datta Mandir Kolhapur, Maharashtra 416005',
  officePhones: '+91 9665764568\n+44 787 791 0843\n+18178109184',
  copyrightText:
    'Copyright © 2028 All Rights Reserved, Terms of Use and Privacy Policy',
};

const SHARED_PARTNER_LOGOS = [
  { name: 'BIGCOMMERCE' },
  { name: '◆ shopify partner' },
  { name: 'BLACKSMITH' },
  { name: 'Razorpay' },
  { name: '◉ Certified' },
  { name: '■ Clutch' },
];

const SHARED_TRUSTED_LOGOS = [
  { name: 'LEON' },
  { name: 'Meridian' },
  { name: 'LEXOPULUS' },
  { name: 'CENTURY' },
  { name: '—' },
  { name: 'GLN' },
  { name: '▲ HOT' },
  { name: 'WebWorks' },
];

const SHARED_PROCESS_STEPS = [
  {
    stepNumber: 1,
    title: 'Discovery & AI Audit',
    description:
      'Mapping your workflows, data and tools to find the AI use cases with the highest return.',
    isHighlighted: false,
  },
  {
    stepNumber: 2,
    title: 'Solution Design & Prototyping',
    description:
      'Rapid prototypes and model selection, tailored to your data, stack and compliance needs.',
    isHighlighted: false,
  },
  {
    stepNumber: 3,
    title: 'Build, Train & Integrate',
    description:
      'Building agents, fine-tuning models and wiring them into the tools your team already uses.',
    isHighlighted: true,
  },
  {
    stepNumber: 4,
    title: 'Launch, Monitor & Improve',
    description:
      'Continuous evaluation, monitoring and retraining to keep accuracy high and costs low.',
    isHighlighted: false,
  },
];

const SHARED_BEFORE_AFTER = {
  __component: 'sections.before-after' as const,
  beforeEyebrow: 'BEFORE',
  beforeTitle: 'Your Team Today',
  beforeCaption: '40 hrs / week of manual work',
  afterEyebrow: 'AFTER',
  afterTitle: 'With Walstar AI',
  afterCaption: '85% less manual effort. 05 hrs / week',
};

const SHARED_CTA_BAND = {
  __component: 'sections.cta-band' as const,
  pill: 'CTA',
  heading: 'For Instant Support, Please Contact Us',
  subheading: 'Have a project in mind?',
  buttonLabel: 'Connect With Us ↗',
  buttonHref: '#footer-consultation',
};

const CONTACT_INTEREST_OPTIONS = [
  'ERP & CRM Development',
  'Web Development',
  'AI & Automation Solutions',
  'Cyber security',
  'Digital Marketing',
  'Maintenance & Support',
  'UX Design',
  'Mobile App Development',
  'Amazon Service',
].map((label) => ({ label }));

const CONTACT_BUDGET_OPTIONS = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not sure yet',
].map((label) => ({ label }));

const SHARED_GLOBAL_OFFICES = {
  __component: 'sections.global-offices' as const,
  pill: 'Areas we serve',
  headingPrefix: 'Our Global',
  headingSerif: 'Offices',
  showWorldMap: true,
  mapPins: [
    {
      label: 'Dallas, TX USA',
      latitude: 33.1972,
      longitude: -96.6398,
      leftPercent: 23,
      topPx: 45,
      flagVariant: 'us' as const,
    },
    {
      label: 'Burgess Hill, England UK',
      latitude: 50.9536,
      longitude: -0.1264,
      leftPercent: 50,
      topPx: 25,
      flagVariant: 'uk' as const,
    },
    {
      label: 'Kolhapur | Pune, India',
      latitude: 16.7050,
      longitude: 74.2433,
      leftPercent: 70,
      topPx: 60,
      flagVariant: 'in' as const,
    },
    {
      label: 'Brisbane, QLD Australia',
      latitude: -27.5028,
      longitude: 153.1009,
      leftPercent: 92,
      topPx: 125,
      flagVariant: 'au' as const,
    },
  ],
  offices: [
    {
      regionLabel: 'India · HQ',
      title: 'SHIVAJI PARK',
      cityRegion: 'Kolhapur, Maharashtra',
      address:
        '2103/47 E, Rukmini Nagar, Back side of Sayaji Hotel, Kolhapur, Maharashtra 416005',
      latitude: 16.7050,
      longitude: 74.2433,
      isHeadquarters: true,
    },
    {
      regionLabel: 'USA',
      title: 'McKinney',
      cityRegion: 'Dallas, Texas',
      address: '5860 Collin McKinney Pkwy, St# 601, McKinney TX 75070 USA',
      latitude: 33.1972,
      longitude: -96.6398,
      isHeadquarters: false,
    },
    {
      regionLabel: 'USA',
      title: 'Silicon Valley',
      cityRegion: 'San Jose, California',
      address: '100 Enterprise Way, Suite 400, San Jose CA 95110 USA',
      latitude: 37.3382,
      longitude: -121.8863,
      isHeadquarters: false,
    },
    {
      regionLabel: 'Australia',
      title: 'Carindale',
      cityRegion: 'Queensland, Australia',
      address: '105 Bridgnorth Street, Carindale Qld 4152, Australia',
      latitude: -27.5028,
      longitude: 153.1009,
      isHeadquarters: false,
    },
    {
      regionLabel: 'UK',
      title: 'Burgess Hill',
      cityRegion: 'England, UK',
      address: 'Wolstonbury Court Burgess Hill, RH15',
      latitude: 50.9536,
      longitude: -0.1264,
      isHeadquarters: false,
    },
    {
      regionLabel: 'India',
      title: 'Warje',
      cityRegion: 'Pune, Maharashtra',
      address:
        'Wallstreet 24, Above Mc-Donald, Mumbai-Banglore Highway. Warje, Pune 411058',
      latitude: 18.4800,
      longitude: 73.8000,
      isHeadquarters: false,
    },
  ],
};

export const INITIAL_SERVICES = [
  {
    title: 'AI Solutions & Business Automation',
    slug: 'ai-solutions-business-automation',
    description:
      'We build AI chatbots, process automation, and intelligent digital solutions that streamline operations, boost efficiency, and deliver smarter, modern experiences.',
    icon: '✦',
    themeVariant: 'a' as const,
    order: 1,
  },
  {
    title: 'Digital Marketing & Performance Growth',
    slug: 'digital-marketing-performance-growth',
    description:
      'Improve AI-search visibility, attract relevant visitors, generate qualified leads, and optimize digital campaigns using measurable performance data.',
    icon: '◀',
    themeVariant: 'b' as const,
    order: 2,
  },
  {
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    description:
      'Simplify business operations with custom ERP systems, CRM platforms, inventory management, automated workflows, and connected business applications.',
    icon: '▣',
    themeVariant: 'c' as const,
    order: 3,
  },
  {
    title: 'Web & SaaS Product Development',
    slug: 'web-saas-product-development',
    description:
      'Fast, secure, search-friendly websites and scalable SaaS platforms, built on modern technology with performance and SEO included from day one.',
    icon: '◉',
    themeVariant: 'd' as const,
    order: 4,
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description:
      'Reach customers wherever they are with intuitive Android and iOS apps, dependable integrations, and a scalable foundation.',
    icon: '📱',
    themeVariant: 'a' as const,
    order: 5,
  },
  {
    title: 'ECommerce & Shopify Solutions',
    slug: 'ecommerce-shopify-solutions',
    description:
      'Create smooth digital shopping experiences with B2B portals and the payment, shipping, and inventory tools you need.',
    icon: '🛍',
    themeVariant: 'b' as const,
    order: 6,
  },
  {
    title: 'Cloud, DevOps & Platform Engineering',
    slug: 'cloud-devops-platform-engineering',
    description:
      'Ship with confidence using secure cloud foundations and smarter deployments that keep applications fast, stable.',
    icon: '☁',
    themeVariant: 'c' as const,
    order: 7,
  },
  {
    title: 'Cybersecurity & Managed IT',
    slug: 'cybersecurity-managed-it',
    description:
      'Protect your systems and keep applications healthy, secure, and reliable with responsive ongoing technical support.',
    icon: '🛡',
    themeVariant: 'd' as const,
    order: 8,
  },
  {
    title: 'UI/UX & Product Design',
    slug: 'ui-ux-product-design',
    description:
      'Turn user research and testing into clear, on-brand experiences designed to earn sign-ups, sales.',
    icon: '✏',
    themeVariant: 'a' as const,
    order: 9,
  },
  {
    title: 'White-Label Development & Dedicated Teams',
    slug: 'white-label-development-dedicated-teams',
    description:
      'Extend your team without the hiring burden. Work with us as a confidential delivery partner, or add dedicated developers to your own workflow.',
    icon: '👥',
    themeVariant: 'b' as const,
    order: 10,
  },
];

export const INITIAL_PRODUCTS = [
  {
    name: 'NRI Circle',
    slug: 'nri-circle',
    tagline: 'NRI Service Management Platform',
    description:
      'NRI Circle is a digital service-management platform designed to help Indians living abroad manage their families, properties, and everyday responsibilities in India.',
    isFeatured: true,
    accentGradient: 'linear-gradient(135deg,#0d1230,#1a2b6b 60%,#2f80ff)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/nri-circle',
    order: 1,
  },
  {
    name: 'Talk2site',
    slug: 'talk2site',
    tagline: 'Turn Website Visitors into AI Sales',
    description:
      'Talk2Site is an AI-powered sales assistant platform that transforms traditional business websites into autonomous revenue engines.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#fff,#ffd9c2)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/talk2site',
    order: 2,
  },
  {
    name: 'Panchayat Pro',
    slug: 'panchayat-pro',
    tagline: 'Digital governance and citizen services',
    description:
      'Panchayat Pro is a digital Panchayat management platform designed to modernize village-level administration.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#5b8a4a,#2e3d2c)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/panchayat-pro',
    order: 3,
  },
  {
    name: 'Smart Aptitude',
    slug: 'smart-aptitude',
    tagline: 'Tests for Modern Institutions',
    description:
      'Create, manage, and analyze aptitude exams with a powerful multi-tenant SaaS platform. Go from setup to results fast.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#1a1a1a,#c9a227)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/smart-aptitude',
    order: 4,
  },
  {
    name: 'Multispecialty Hospital',
    slug: 'multispecialty-hospital',
    tagline: 'Management System',
    description:
      'All-in-One Hospital Software: EMR, Billing, Appointments, Labs, Pharmacy, Analytics. For Hospital Management.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#0b2d52,#2fb5d9)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/multispecialty-hospital',
    order: 5,
  },
  {
    name: 'Swift Reach',
    slug: 'swift-reach',
    tagline: 'Vehicle Service App',
    description:
      'Smart vehicle service platform with Booking, Payments, Tracking and Automation. Streamline operations and more.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#8aa0a8,#2c3a40)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/swift-reach',
    order: 6,
  },
  {
    name: 'Chat Walstargroup',
    slug: 'chat-walstargroup',
    tagline: 'WhatsApp Automation Tool',
    description:
      'WhatsApp marketing platform with chatbots, drip campaigns, and CRM integration. Automate engagement.',
    isFeatured: false,
    accentGradient: 'linear-gradient(135deg,#7a8a8f,#d6dde0)',
    ctaLabel: 'Read More ↗',
    ctaUrl: '/products/chat-walstargroup',
    order: 7,
  },
];

export const INITIAL_CASE_STUDIES = [
  {
    title: 'Jockey Australia.Website Revamp',
    slug: 'jockey-australia-website-revamp',
    category: 'E-commerce',
    metaOneLabel: 'CLIENT',
    metaOneValue: 'LCG ( Leon Capital Group)',
    metaTwoLabel: 'REGION',
    metaTwoValue: 'United States',
    metaThreeLabel: 'PROJECT TYPE',
    metaThreeValue: 'B2B Saas, Financial services',
    summary:
      'Modernized storefront architecture, performance optimization, and high-converting checkout flows for Jockey Australia.',
    content:
      'Walstar Technologies partnered with Leon Capital Group to deliver a high-speed commerce revamp focused on mobile UX, catalog scalability, and conversion performance.',
    themeVariant: 'a' as const,
    order: 1,
  },
  {
    title: 'Building A High-Conversion Patient Financing Website',
    slug: 'high-conversion-patient-financing-website',
    category: 'Healthcare',
    metaOneLabel: '',
    metaOneValue: '',
    metaTwoLabel: '',
    metaTwoValue: '',
    metaThreeLabel: '',
    metaThreeValue: '',
    summary:
      'Engineered an accessible patient financing portal integrating provider onboarding, eligibility workflows, and measurable funnel analytics.',
    content:
      'Designed and built an enterprise healthcare financing experience combining trust-driven UX, fast API integrations, and automated lead capture.',
    themeVariant: 'b' as const,
    order: 2,
  },
];

export const INITIAL_TESTIMONIALS = [
  {
    authorName: 'Nathan Fowler',
    quote:
      'Walstar Technologies Pvt Ltd has delivered working websites that drive engagement, strengthen brands, and support business growth.',
    companyName: 'Company name',
    rating: 5,
    isHighlighted: false,
    order: 1,
  },
  {
    authorName: 'Fred Fuller',
    quote:
      'I was impressed with their communications, knowledge, and fair pricing, along with their professionalism, commitment to delivering quality results.',
    companyName: 'Company name',
    rating: 5,
    isHighlighted: true,
    order: 2,
  },
  {
    authorName: 'Derek Campbell',
    quote:
      'Working with Walstar Technologies was a great experience. Their team provided excellent support throughout the project.',
    companyName: 'Company name',
    rating: 5,
    isHighlighted: false,
    order: 3,
  },
];

export const INITIAL_PAGES = [
  {
    title: 'Homepage',
    slug: 'home',
    isHomepage: true,
    pageType: 'homepage' as const,
    order: 1,
    summary:
      'Primary Walstar Technologies landing page controlled via Strapi Dynamic Zone sections.',
    content:
      'Edit or reorder the Dynamic Zone sections below inside Strapi Admin to customize the Walstar Technologies homepage.',
    seo: {
      metaTitle: 'Walstar Technologies | AI, Automation & Software',
      metaDescription:
        'AI-powered innovation, intelligent automation, and modern software engineering powered by Next.js, Strapi CMS, and PostgreSQL.',
    },
    sections: [
      {
        __component: 'sections.hero' as const,
        chip: 'AI-Powered Innovation • Digital Solutions • Business Growth',
        headlinePrefix: 'Transform Your Business\nWith',
        headlineSerif: 'The Power',
        headlineSuffix: 'of AI.',
        description:
          'We combine artificial intelligence, intelligent automation, and modern software\nengineering to help businesses work smarter, innovate faster, and\nscale with confidence.',
        primaryCtaLabel: 'Explore AI Solutions ↗',
        primaryCtaHref: '#cap',
        secondaryCtaLabel: 'Discover your Project ↗',
        secondaryCtaHref: '#case',
      },
      {
        __component: 'sections.partner-strip' as const,
        ariaLabel: 'Partners',
        animationDurationSeconds: 24,
        scrollDirection: 'left' as const,
        logos: SHARED_PARTNER_LOGOS,
      },
      {
        __component: 'sections.about' as const,
        tag: 'About us',
        headingPrefix: 'The team behind',
        headingSerif: 'smarter',
        headingSuffix: 'automation',
        description:
          'From intelligent agents to connected business workflows, we design\nand implement practical AI solutions that help businesses save time,\nimprove decisions, and deliver better customer experiences.',
        highlightTitle: 'Engineering an Intelligent Future',
        highlightDescription:
          'We specialize in designing & deploying production AI systems that combine security, cost efficiency and lasting performance.',
        ctaLabel: 'More About Us ↗',
        ctaHref: '/about-us',
      },
      {
        __component: 'sections.capabilities' as const,
        pill: 'Capabilities',
        headingPrefix: 'What we',
        headingSerif: 'do',
        subtitle:
          'End-to-end AI services engineered for performance, data security',
        ctaLabel: 'View Services ↗',
        ctaHref: '/service-1',
        showAllServices: true,
        showProcess: true,
        processPill: 'What we do',
        processHeadingPrefix: 'From',
        processHeadingSerif: 'idea',
        processHeadingSuffix: 'to production',
        processNote:
          'Attaining the best, yet through a certain measure of time, it comes about with great labor and pain. Indeed, even to the slightest degree.',
        processVideoLabel: 'Video Presentation',
        processVideoUrl: '#cta',
        processSteps: SHARED_PROCESS_STEPS,
      },
      {
        __component: 'sections.products-showcase' as const,
        tag: 'Our products',
        headingPrefix: 'Everything you need to create',
        headingSerif: 'smarter, faster',
        subtitle: 'Products built to simplify business',
        showAllProducts: true,
      },
      {
        __component: 'sections.trust-banner' as const,
        tag: 'Trust',
        headingPrefix: 'Trusted by 10k+',
        headingSerif: 'fast-growing',
        headingSuffix: 'businesses',
        topRowDurationSeconds: 28,
        topRowDirection: 'left' as const,
        bottomRowDurationSeconds: 42,
        bottomRowDirection: 'right' as const,
        logos: SHARED_TRUSTED_LOGOS,
      },
      {
        __component: 'sections.case-studies' as const,
        tag: 'Case studies',
        headingPrefix: 'A closer look at',
        headingSerif: 'our work',
        subtitle:
          'Selected technology projects built where clean engineering meets measurable business impact, reliability and data-led performance.',
        ctaLabel: 'View All Case Studies ↗',
        ctaHref: '#case',
        showAllCaseStudies: true,
      },
      {
        __component: 'sections.testimonials' as const,
        tag: 'Honest clients',
        headingPrefix: 'Trusted by',
        headingSerif: 'thousands',
        showAllTestimonials: true,
      },
      SHARED_BEFORE_AFTER,
      SHARED_CTA_BAND,
    ],
  },
  {
    title: 'About Us',
    slug: 'about-us',
    isHomepage: false,
    pageType: 'about' as const,
    order: 2,
    summary:
      'Engineering an Intelligent Future through practical AI systems, intelligent automation, and full-stack software delivery.',
    content: [
      'From intelligent agents to connected business workflows, Walstar Technologies designs and implements practical AI solutions that help businesses save time, improve decisions, and deliver better customer experiences every day.',
      '',
      'Headquartered in Pune, India with global delivery capabilities, we partner with fast-growing startups and enterprise teams across e-commerce, healthcare, SaaS, and financial services.',
    ].join('\n'),
    seo: {
      metaTitle: 'About Us | Walstar Technologies',
      metaDescription:
        'Building digital experiences that move business forward. Meet the leadership, engineering teams, and global offices of Walstar Technologies.',
    },
    sections: [
      {
        __component: 'sections.hero' as const,
        variant: 'compact' as const,
        chip: '● About Us',
        headlinePrefix: 'Building Digital',
        headlineSerif: 'Experiences',
        headlineSuffix: '\nThat Move Business Forward.',
      },
      {
        __component: 'sections.who-we-are' as const,
        pill: '● Who we are',
        headingPrefix: 'A trusted partner for\n',
        headingSerif: 'what’s next',
        description: [
          'Founded with a mission to transform digital experiences, Walstar Technologies has grown into a trusted IT partner for startups, SMEs, and enterprises worldwide.',
          'We focus on performance, security, scalability, and user-centric design to maximize engagement and conversions.',
        ].join('\n'),
        ctaLabel: 'See what we do',
        ctaHref: '/service-1',
      },
      {
        __component: 'sections.journey-stats' as const,
        pill: '● The Walstar Way',
        headingPrefix: 'From first idea to\n',
        headingSerif: 'lasting impact',
        description:
          'We combine innovation, technology, and creativity to build solutions that improve user experience, increase online visibility, and boost revenue growth.',
        milestones: [
          {
            era: '2017',
            title: 'Where It Began',
            description:
              'Walstar Technologies was established with a mission to transform digital experiences.',
            isCurrent: false,
          },
          {
            era: 'Today',
            title: 'A Trusted Partner',
            description:
              'Serving startups, SMEs, and enterprises worldwide with secure, scalable solutions.',
            isCurrent: true,
          },
          {
            era: 'NEXT',
            title: 'What Comes Next',
            description:
              'Becoming a global leader in intelligent, secure, and customer-centric IT services.',
            isCurrent: false,
          },
        ],
        stats: [
          { value: '12+', label: 'Years of\nexperience' },
          { value: '1K+', label: 'Projects\ndelivered' },
          { value: '5+', label: 'Global\noffices' },
          { value: '∞', label: 'Ideas\nin motion' },
        ],
      },
      {
        __component: 'sections.solutions-grid' as const,
        pill: '● What we do',
        headingPrefix: 'Digital solutions\nbuilt to',
        headingSerif: 'scale',
        subtitle:
          'Our multi-disciplinary team of designers, developers, strategists, and digital marketers works collaboratively to deliver meaningful outcomes.',
        hasTopOverlap: true,
        direction: 'left' as const,
        speedSeconds: 30,
        items: [
          {
            number: '01',
            title: 'AI & Automation Solutions',
            category: 'AI-Powered Business Automation',
            href: '/services/ai-solutions-business-automation',
          },
          {
            number: '02',
            title: 'Digital Marketing & Performance Growth',
            category: 'Search, Social & Brand Visibility',
            href: '/services/digital-marketing-performance-growth',
          },
          {
            number: '03',
            title: 'Custom Software Development',
            category: 'Digital Growth Solutions',
            href: '/services/custom-software-development',
          },
          {
            number: '04',
            title: 'Web & SaaS Product Development',
            category: 'Websites and SaaS built to scale.',
            href: '/services/web-saas-product-development',
          },
          {
            number: '05',
            title: 'Mobile App Development',
            category: 'Scalable Android and iOS apps.',
            href: '/services/mobile-app-development',
          },
          {
            number: '06',
            title: 'ECommerce & Shopify Solutions',
            category: 'Seamless online shopping solutions',
            href: '/services/ecommerce-shopify-solutions',
          },
          {
            number: '07',
            title: 'Cloud & DevOps Engineering',
            category: 'Scalable Cloud Infrastructure',
            href: '/services/cloud-devops-engineering',
          },
          {
            number: '08',
            title: 'Cybersecurity & Data Protection',
            category: 'Secure enterprise solutions',
            href: '/services/cybersecurity-data-protection',
          },
          {
            number: '09',
            title: 'UI/UX & Product Design',
            category: 'Intuitive user experiences',
            href: '/services/ui-ux-design-branding',
          },
          {
            number: '10',
            title: 'Dedicated Development Teams',
            category: 'Pre-vetted engineering squads',
            href: '/services/dedicated-teams',
          },
        ],
      },
      {
        __component: 'sections.why-choose' as const,
        pill: '● Why choose Walstar',
        headingPrefix: 'Built different. ',
        headingSerif: 'Built\nfor impact.',
        reasons: [
          {
            iconImage: { url: '/images/why-choose/web-app-solutions.png', alternativeText: 'Customized Web And App Solutions' },
            title: 'Customized Web And App Solutions',
            description:
              'We don’t believe in templates. Every website and application is built from scratch based on business objectives and user behavior.',
          },
          {
            iconImage: { url: '/images/why-choose/industry-experience.png', alternativeText: '8+ Years Of Industry Experience' },
            title: '8+ Years Of Industry Experience',
            description:
              'Since 2017, we have successfully delivered 500+ digital projects across multiple industries worldwide.',
          },
          {
            iconImage: { url: '/images/why-choose/cost-effective.png', alternativeText: 'Cost-Effective Development' },
            title: 'Cost-Effective Development',
            description:
              'We provide high-quality web design and software development at competitive pricing without compromising performance.',
          },
          {
            iconImage: { url: '/images/why-choose/conversion-focused.png', alternativeText: 'Conversion-Focused Approach' },
            title: 'Conversion-Focused Approach',
            description:
              'Our websites are not just visually appealing. They are optimized for SEO, speed, and lead generation.',
          },
          {
            iconImage: { url: '/images/why-choose/global-clientele.png', alternativeText: 'Global Clientele' },
            title: 'Global Clientele',
            description:
              'We proudly serve clients across India, the United States, Australia, and the United Kingdom.',
          },
        ],
        tickerItems: [
          {
            label: 'Improve User Experience',
            iconImage: { url: '/images/why-choose/ticker-badge.png', alternativeText: 'Improve User Experience Badge' },
          },
          {
            label: 'Increase Online Visibility',
            iconImage: { url: '/images/why-choose/ticker-badge.png', alternativeText: 'Increase Online Visibility Badge' },
          },
          {
            label: 'Generate Qualified Leads',
            iconImage: { url: '/images/why-choose/ticker-badge.png', alternativeText: 'Generate Qualified Leads Badge' },
          },
          {
            label: 'Boost Revenue Growth',
            iconImage: { url: '/images/why-choose/ticker-badge.png', alternativeText: 'Boost Revenue Growth Badge' },
          },
        ],
      },
      {
        __component: 'sections.vision-mission' as const,
        pill: '● Our Purpose',
        headingPrefix: 'Shaping the',
        headingSerif: 'future',
        headingSuffix: '\ntogether',
        visionIcon: '◎',
        visionTitle: 'Our Vision',
        visionDescription:
          'To become a trusted global technology partner by delivering innovative digital solutions that shape the future of businesses.',
        visionCtaLabel: 'Work With Us ↗',
        visionCtaHref: '/contact',
        missionIcon: '◎',
        missionTitle: 'Our Mission',
        missionDescription:
          'Our mission is to empower businesses with reliable, scalable technology solutions. We combine creativity, innovation, and expertise to build digital experiences that help clients grow.',
      },
      {
        __component: 'sections.team-showcase' as const,
        pill: '● Our Leadership',
        headingPrefix: 'We do things that\n',
        headingSerif: 'matter',
        executiveLabel: 'Executive Team',
        executiveQuote: '“Quality Is Not Optional. It Is Our Foundation.”',
        executiveQuoteAuthor: '-Walstar Technologies',
        executives: [
          { role: 'Executive' },
          { role: 'Executive' },
          { role: 'Executive' },
        ],
        advisoryTitle: 'Global Advisory Panel',
        advisoryMembers: [
          {
            name: 'Vasant Manwadkar',
            role: 'Advisor',
            linkedinUrl: '#cta',
          },
          {},
          {},
        ],
        salesTitle: 'Global Sales Leadership',
        salesMembers: [
          {
            name: 'James Turner',
            role: 'Regional Sales\nManager (USA)',
            linkedinUrl: '#cta',
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
      },
      {
        __component: 'sections.global-offices' as const,
        pill: '● Global Reach',
        headingPrefix: 'Our global',
        headingSerif: 'offices',
        showWorldMap: true,
        mapPins: [
          {
            label: 'Dallas, TX USA',
            latitude: 33.1972,
            longitude: -96.6398,
            leftPercent: 23,
            topPx: 45,
            flagVariant: 'us' as const,
          },
          {
            label: 'Burgess Hill, England UK',
            latitude: 50.9536,
            longitude: -0.1264,
            leftPercent: 50,
            topPx: 25,
            flagVariant: 'uk' as const,
          },
          {
            label: 'Kolhapur | Pune, India',
            latitude: 16.7050,
            longitude: 74.2433,
            leftPercent: 70,
            topPx: 60,
            flagVariant: 'in' as const,
          },
          {
            label: 'Brisbane, QLD Australia',
            latitude: -27.5028,
            longitude: 153.1009,
            leftPercent: 92,
            topPx: 125,
            flagVariant: 'au' as const,
          },
        ],
        offices: [
          {
            regionLabel: 'India · HQ',
            title: 'SHIVAJI PARK',
            cityRegion: 'Kolhapur, Maharashtra',
            address:
              '2103/47 E, Rukmini Nagar, Back side of Sayaji Hotel, Kolhapur, Maharashtra 416005',
            latitude: 16.7050,
            longitude: 74.2433,
            isHeadquarters: true,
          },
          {
            regionLabel: 'USA',
            title: 'McKinney',
            cityRegion: 'Dallas, Texas',
            address:
              '5860 Collin McKinney Pkwy, St# 601, McKinney TX 75070 USA',
            latitude: 33.1972,
            longitude: -96.6398,
            isHeadquarters: false,
          },
          {
            regionLabel: 'USA',
            title: 'Silicon Valley',
            cityRegion: 'San Jose, California',
            address:
              '100 Enterprise Way, Suite 400, San Jose CA 95110 USA',
            latitude: 37.3382,
            longitude: -121.8863,
            isHeadquarters: false,
          },
          {
            regionLabel: 'Australia',
            title: 'Carindale',
            cityRegion: 'Queensland, Australia',
            address: '105 Bridgnorth Street, Carindale Qld 4152, Australia',
            latitude: -27.5028,
            longitude: 153.1009,
            isHeadquarters: false,
          },
          {
            regionLabel: 'UK',
            title: 'Burgess Hill',
            cityRegion: 'England, UK',
            address: 'Wolstonbury Court Burgess Hill, RH15',
            latitude: 50.9536,
            longitude: -0.1264,
            isHeadquarters: false,
          },
          {
            regionLabel: 'India',
            title: 'Warje',
            cityRegion: 'Pune, Maharashtra',
            address:
              'Wallstreet 24, Above Mc-Donald, Mumbai-Banglore Highway. Warje, Pune 411058',
            latitude: 18.4800,
            longitude: 73.8000,
            isHeadquarters: false,
          },
        ],
      },
      {
        ...SHARED_CTA_BAND,
        pill: '● CTA',
        heading: 'Ready to make your next move?',
        subheading: 'Walstar Technologies is ready to power your digital growth.',
        buttonLabel: 'Connect With Us ↗',
        buttonHref: '/contact',
      },
    ],
  },
  {
    title: 'Contact',
    slug: 'contact',
    isHomepage: false,
    pageType: 'contact' as const,
    order: 3,
    summary:
      'Connect with Walstar Technologies for AI solutions, automation audits, and custom software engineering.',
    content:
      'Reach our engineering leadership team in Pune or UK/global offices to schedule your AI & product discovery session.',
    seo: {
      metaTitle: 'Contact Us | Walstar Technologies',
      metaDescription:
        'Book a strategy call or send a project inquiry to Walstar Technologies.',
    },
    sections: [
      {
        __component: 'sections.hero' as const,
        chip: 'Contact Walstar',
        headlinePrefix: 'Your Next',
        headlineSerif: 'Digital Journey',
        headlineSuffix: '\nStarts Here',
        variant: 'compact' as const,
      },
      {
        __component: 'sections.contact-interest' as const,
        tag: 'Contact Walstar',
        headingPrefix: "Let's build something\n",
        headingSerif: 'great',
        headingSuffix: 'together',
        subtitle:
          'Have an idea, project, or challenge in mind? Let’s connect and turn it into something impactful.',
        options: CONTACT_INTEREST_OPTIONS,
      },
      {
        __component: 'sections.contact-section' as const,
        tag: "Let's talk about your business",
        headingPrefix: 'Reach out',
        headingSerif: 'directly',
        subtitle:
          "Prefer a quick conversation? We're just a call or email away.",
        showOfficeDetails: true,
        callLabel: 'Call Us :',
        callPhones: '+91 9665784568\n+44 7877 910843\n+1 617 610 9184',
        emailLabel: 'Email Us :',
        emailAddresses:
          'career@walstartechnologies.com\nsales@walstartechnologies.com',
        formTitle: "Let's Get Started",
        formSubtitle:
          'Receive a free consultation for your project to discuss ideas, solutions, and next steps.',
        formButtonLabel: 'Send Message ↗',
        formSource: 'contact-page',
        budgetOptions: CONTACT_BUDGET_OPTIONS,
        serviceOptions: CONTACT_INTEREST_OPTIONS,
      },
      SHARED_GLOBAL_OFFICES,
      {
        ...SHARED_CTA_BAND,
        pill: 'CTA',
        heading: 'Ready to make your next move?',
        subheading: 'Walstar Technologies is ready to power your digital growth.',
        buttonLabel: 'Connect With Us ↗',
        buttonHref: '#contact-form',
      },
    ],
  },
  {
    title: 'Service 1',
    slug: 'service-1',
    isHomepage: false,
    pageType: 'service' as const,
    order: 4,
    summary:
      'AI Solutions, Business Automation, Custom Software, and SaaS Product Engineering capabilities.',
    content:
      'Comprehensive technical services spanning AI agents, workflow automation, web/SaaS engineering, and conversion-focused digital growth.',
    seo: {
      metaTitle: 'Service 1 - AI Solutions & Automation | Walstar Technologies',
      metaDescription:
        'Discover Walstar Technologies AI engineering, automation workflows, and production software delivery process.',
    },
    sections: [
      {
        __component: 'sections.hero' as const,
        variant: 'compact' as const,
        chip: '● Services',
        headlinePrefix: '',
        headlineSerif: 'AI',
        headlineSuffix: 'Solutions &\nBusiness Automation',
        description:
          'From autonomous customer agents and ERP integrations to cloud SaaS architecture, we engineer end-to-end systems that ship smoothly into production.',
      },
      {
        __component: 'sections.svc-intro' as const,
        pill: '● AI Solutions & Business Automation',
        headingPrefix: 'AI Agents and Automation that cut',
        headingSerif: 'Manual Work',
        headingSuffix: 'and bring in more Leads',
        description:
          'Walstar is an AI development company in India helping startups, SMEs and enterprises build AI chatbots, AI agents and workflow automation that respond faster, work around the clock and turn your data into decisions.',
        ctaLabel: 'Get a Free AI Consultation ↗',
        ctaHref: '#contact-form',
      },
      {
        __component: 'sections.svc-challenges' as const,
        pill: '● AI Solutions & Business Automation',
        headingPrefix: 'Turn everyday Business challenges\ninto',
        headingSerif: 'Intelligent Solutions',
        bodyOne:
          'Most businesses lose time and leads to the same problems: slow replies, repeated manual tasks, scattered data and processes that depend on one person. AI can fix much of this, but only when it is built around how your business actually runs.',
        bodyTwo:
          "Walstar designs and builds AI solutions that connect to your website, CRM, WhatsApp and internal tools. We don't sell AI as a buzzword. We start with a business problem, such as missed leads or hours of manual data entry, and build the smallest solution that solves it. Because we also build and run our own AI products, we know what works in real businesses and what only works in a demo.",
        challengeItems: [
          {
            icon: '◷',
            title: 'Slow replies',
            description: 'Leads go cold while they wait for an answer.',
          },
          {
            icon: '⚙',
            title: 'Repeated manual tasks',
            description: 'Hours lost to data entry and routine follow-ups.',
          },
          {
            icon: '✲',
            title: 'Scattered data',
            description: 'Information spread across tools and teams.',
          },
          {
            icon: '☻',
            title: 'Processes that depend on one person',
            description: 'Work stops when that person is unavailable.',
          },
        ],
      },
      {
        __component: 'sections.svc-capabilities' as const,
        pill: '● Capabilities',
        headingPrefix: 'What we',
        headingSerif: 'Build',
        capabilityItems: [
          {
            icon: '⚙',
            title: 'AI Chatbots & Virtual Assistants',
            description:
              'Deliver faster, more consistent customer support with AI-powered assistants that answer common questions, guide users, qualify leads, and help customers find the information they need.',
          },
          {
            icon: '⚙',
            title: 'Business Process Automation',
            description:
              'Reduce repetitive manual work by automating routine business tasks, approvals, notifications, data entry, and other workflows.',
          },
          {
            icon: '⚙',
            title: 'AI Workflow Automation & Integration',
            description:
              'Connect your business applications and automate processes across CRM systems, ERP platforms, websites, eCommerce stores, and third-party tools.',
          },
          {
            icon: '⚙',
            title: 'Custom AI Development',
            description:
              'Build AI-powered applications, intelligent features, and tailored solutions designed around your business requirements, data, and operational challenges.',
          },
          {
            icon: '⚙',
            title: 'AI Data Processing & Intelligent Analytics',
            description:
              'Turn business data into useful insights with automated data processing, intelligent reporting, pattern analysis, and decision-support tools.',
          },
          {
            icon: '⚙',
            title: 'WhatsApp Business Automation',
            description:
              'Streamline customer communication through automated replies, lead qualification, inquiry management, notifications, and conversational workflows on WhatsApp.',
          },
          {
            icon: '⚙',
            title: 'Generative AI & Business Assistants',
            description:
              'Explore AI-powered assistants that help teams find information, summarize documents, generate content, and work with business knowledge more efficiently.',
          },
          {
            icon: '⚙',
            title: 'AI Integration for Existing Software',
            description:
              'Enhance your current websites, mobile apps, and business software with AI capabilities without necessarily rebuilding your entire technology platform.',
          },
        ],
      },
      {
        __component: 'sections.svc-benefits' as const,
        pill: '● Benefits',
        headingPrefix: 'What an AI Automation do',
        headingSerif: 'for Your Business?',
        benefitItems: [
          {
            icon: '◷',
            title: 'Save Time on Repetitive Tasks',
            description:
              'Automate routine activities and reduce the need for manual intervention across everyday workflows.',
            isDark: false,
          },
          {
            icon: '☺',
            title: 'Improve Customer Engagement',
            description:
              'Automate routine activities and reduce the need for manual intervention across everyday workflows.',
            isDark: true,
          },
          {
            icon: '◎',
            title: 'Streamline Business Operations',
            description:
              'Connect systems, reduce unnecessary handoffs, and make business processes more consistent.',
            isDark: false,
          },
          {
            icon: '◍',
            title: 'Make Better-Informed Decisions',
            description:
              'Use available business data to identify patterns, generate insights, and support decision-making.',
            isDark: false,
          },
          {
            icon: '▣',
            title: 'Scale With Greater Efficiency',
            description:
              'Build automation workflows that can adapt as your business, customer base, and operational needs grow.',
            isDark: false,
          },
        ],
      },
      {
        __component: 'sections.svc-process' as const,
        pill: '● How we work',
        headingPrefix: 'Our AI Development &',
        headingSerif: 'Automation Process',
        steps: [
          {
            number: '01',
            title: 'Discovery & Business Analysis',
            description:
              'We learn about your goals, current workflows, challenges, and existing technology to identify suitable AI opportunities.',
          },
          {
            number: '02',
            title: 'AI Strategy & Solution Planning',
            description:
              'We define the scope, select appropriate technologies, and create a practical implementation roadmap aligned with your business priorities.',
          },
          {
            number: '03',
            title: 'Design and Development',
            description:
              'We build your AI solution, automation workflows, and required integrations around your use cases and technical environment.',
          },
          {
            number: '04',
            title: 'Integration & Testing',
            description:
              'We test functionality, validate outputs, review security considerations, and check how the solution works with your existing systems.',
          },
          {
            number: '05',
            title: 'Deployment & Improvement',
            description:
              'We help deploy the solution, monitor its performance, and identify opportunities for ongoing improvements and support.',
          },
        ],
      },
      {
        __component: 'sections.svc-approach' as const,
        pill: '● Our Approach',
        headingPrefix: 'AI Solutions Built Around',
        headingSerif: 'Your Business',
        bodyOne:
          'Every business has different processes, customers, and technology requirements. We take a practical approach to AI development, focusing on solutions that address real operational needs rather than adding AI simply for the sake of innovation.',
        bodyTwo:
          'Our team can help you assess automation opportunities, integrate AI into your existing systems, and develop custom solutions that can evolve with your business.',
        getBoxTitle: 'What you get?',
        getBoxItems: [
          { label: 'Business-focused AI strategy and implementation' },
          { label: 'Integration with existing business applications' },
          { label: 'Solutions designed for scalability and maintainability' },
          { label: 'Appropriate data privacy and security considerations' },
          { label: 'Ongoing optimization and technical support' },
        ],
      },
      {
        __component: 'sections.svc-cta' as const,
        pill: "● Let's Talk",
        headingPrefix: 'Ready to Make Your',
        headingSerif: 'Business Smarter?',
        bodyOne:
          'Discover how AI solutions and business automation can help simplify your operations, improve customer experiences, and unlock new opportunities for growth.',
        bodyTwo:
          "Let's discuss your goals and find the right solution for your business.",
        ctaLabel: 'Discuss Your AI Project ↗',
        ctaHref: '#contact-form',
      },
      {
        ...SHARED_CTA_BAND,
        pill: '● CTA',
        heading: 'Have a Project? Please Contact Us',
        subheading: "Let's talk about your next move.",
        buttonLabel: 'Get in Touch ↗',
        buttonHref: '/contact',
      },
    ],
  },
  {
    title: 'Welcome to Walstar Technologies',
    slug: 'welcome',
    isHomepage: false,
    pageType: 'standard' as const,
    order: 5,
    summary:
      'Explore how Next.js, Strapi v5, and PostgreSQL power dynamic content across the Walstar platform.',
    content: [
      'Your full-stack platform is powered by Next.js App Router on the frontend and Strapi v5 + PostgreSQL on the backend.',
      '',
      'Manage homepage sections, About Us, Contact, Service 1, products, case studies, testimonials, and custom CMS pages directly inside Strapi Admin.',
    ].join('\n'),
    seo: {
      metaTitle: 'Welcome | Walstar Technologies CMS',
      metaDescription:
        'Dynamic page architecture powered by Strapi v5 Page Collection and Next.js.',
    },
    sections: [
      {
        __component: 'sections.rich-content' as const,
        tag: 'CMS Powered',
        headingPrefix: 'Manage every page from',
        headingSerif: 'Strapi Admin',
        body: [
          'Every route under the Page collection (`home`, `about-us`, `contact`, `service-1`, and any additional pages you create later) is composed from reusable Dynamic Zone sections.',
          '',
          'Add, reorder, or customize sections inside Strapi Content Manager -> Page, publish your changes, and Next.js automatically renders the updated layout.',
        ].join('\n'),
        ctaLabel: 'Back to Homepage ↗',
        ctaHref: '/',
      },
      {
        ...SHARED_CTA_BAND,
        buttonHref: '/contact',
      },
    ],
  },
];

export const INITIAL_NAVBAR = {
  name: 'Primary Navbar',
  slug: 'main',
  isDefault: true,
  logoHref: '/',
  items: [
    {
      label: 'Home',
      route: '/',
      hasDropdown: false,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [],
    },
    {
      label: 'Services',
      route: '/service-1',
      hasDropdown: true,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [
        {
          label: 'AI Solutions & Automation',
          description: 'AI agents, chatbots & workflow automation',
          route: '/service-1',
          badge: 'Service 1',
          openInNewTab: false,
        },
        {
          label: 'Digital Marketing & Growth',
          description: 'AI-search visibility & qualified lead growth',
          route: '/services/digital-marketing-performance-growth',
          openInNewTab: false,
        },
        {
          label: 'Custom Software & ERP',
          description: 'Connected ERPs, CRMs & enterprise systems',
          route: '/services/custom-software-development',
          openInNewTab: false,
        },
        {
          label: 'Web & SaaS Product Engineering',
          description: 'Fast, secure multi-tenant SaaS platforms',
          route: '/services/web-saas-product-development',
          openInNewTab: false,
        },
      ],
    },
    {
      label: 'Industries',
      route: '/#prod',
      hasDropdown: false,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [],
    },
    {
      label: 'Our Work',
      route: '/#case',
      hasDropdown: false,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [],
    },
    {
      label: 'About Us',
      route: '/about-us',
      hasDropdown: false,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [],
    },
    {
      label: 'Contact',
      route: '/contact',
      hasDropdown: false,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [],
    },
  ],
  ctaShow: true,
  ctaLabel: 'Book a strategy call',
  ctaRoute: '/contact',
  ctaOpenInNewTab: false,
};

export const INITIAL_FOOTER = {
  name: 'Primary Footer',
  slug: 'primary-footer',
  isDefault: true,
  logoAccentText: 'TECHNOLOGIES PVT. LTD.',
  aboutText:
    'Results-driven digital agency building secure, scalable solutions for global businesses.',
  consultationShow: true,
  consultationTitle: 'Have Project in mind?',
  consultationSubtitle: "Let's create something great",
  consultationButtonLabel: 'Free Consultation ↗',
  headlinePrefix: 'Build',
  headlineSerif: 'AI Products',
  headlineSuffix: 'that actually Ships.',
  ctaLabel: 'Contact Now ↗',
  ctaRoute: '/contact',
  ctaOpenInNewTab: false,
  linkColumns: [
    {
      title: 'Company',
      links: [
        { label: 'Home', route: '/', openInNewTab: false },
        { label: 'About', route: '/about-us', openInNewTab: false },
        { label: 'Blog', route: '/welcome', openInNewTab: false },
        { label: 'Portfolio', route: '/#case', openInNewTab: false },
      ],
    },
    {
      title: 'Explore',
      links: [
        { label: 'Services', route: '/service-1', openInNewTab: false },
        { label: 'Career', route: '/about-us', openInNewTab: false },
        { label: 'Contact', route: '/contact', openInNewTab: false },
        { label: 'Events & Programs', route: '/#prod', openInNewTab: false },
      ],
    },
  ],
  officeAddress:
    '2103/47 E, Rukmini Nagar, Front of Datta Mandir Kolhapur, Maharashtra 416005',
  officePhones: '+91 9665784568\n+44 787 791 0843\n+16178109184',
  contactEmail: 'sales@walstartechnologies.com',
  socialLinks: [
    { platform: 'X', href: '#cta' },
    { platform: 'Instagram', href: '#cta' },
    { platform: 'Facebook', href: '#cta' },
  ],
  copyrightText:
    'Copyright © 2028 All Rights Reserved, Terms of Use and Privacy Policy',
};

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
    { label: 'Services', href: '/services', hasDropdown: true },
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
    { label: 'Services', href: '/services', hasDropdown: false },
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
  {
    name: 'BIGCOMMERCE',
    image: { url: '/images/partners/bigcommerce.png', alternativeText: 'BIGCOMMERCE' },
  },
  {
    name: '◆ shopify partner',
    image: { url: '/images/partners/shopify.png', alternativeText: 'Shopify Partner' },
  },
  {
    name: 'BLACKSMITH',
    image: { url: '/images/partners/blacksmith.png', alternativeText: 'BLACKSMITH' },
  },
  {
    name: 'Razorpay',
    image: { url: '/images/partners/razorpay.png', alternativeText: 'Razorpay' },
  },
  {
    name: '◉ Certified',
    image: { url: '/images/partners/certified.png', alternativeText: 'Certified' },
  },
  {
    name: '■ Clutch',
    image: { url: '/images/partners/clutch.png', alternativeText: 'Clutch' },
  },
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
    tag: 'Work smarter',
    more: 'Explore AI solutions',
    isWide: true,
    description:
      'Build AI-powered applications, intelligent agents, chatbots, and automated workflows that reduce repetitive work and improve business efficiency.',
    icon: '✦',
    image: {
      url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794897929/Collaborative_AI_in_a_Modern_Office_1_59e5ed1401.png',
      alternativeText: 'AI Solutions & Business Automation',
    },
    themeVariant: 'a' as const,
    order: 1,
  },
  {
    title: 'Digital Marketing & Performance Growth',
    slug: 'digital-marketing-performance-growth',
    tag: 'Grow with intent',
    more: 'Explore digital growth',
    isWide: false,
    description:
      'Get discovered, attract the right visitors, and turn measurable campaign performance into qualified leads.',
    icon: '◀',
    themeVariant: 'b' as const,
    order: 2,
  },
  {
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    tag: 'Built around you',
    more: 'Explore business software',
    isWide: false,
    description:
      'Make complex operations feel simple with custom ERP, CRM, inventory, and connected business systems.',
    icon: '▣',
    themeVariant: 'c' as const,
    order: 3,
  },
  {
    title: 'Web & SaaS Product Development',
    slug: 'web-saas-product-development',
    tag: 'Made to scale',
    more: 'Web & SaaS development',
    isWide: false,
    description:
      'Launch fast, secure websites and scalable SaaS products, with visibility and performance built in from day one.',
    icon: '◉',
    themeVariant: 'd' as const,
    order: 4,
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    tag: 'Made for people',
    more: 'Explore mobile apps',
    isWide: false,
    description:
      'Reach customers wherever they are with intuitive Android and iOS apps, dependable integrations, and a scalable foundation.',
    icon: '📱',
    themeVariant: 'a' as const,
    order: 5,
  },
  {
    title: 'ECommerce & Shopify Solutions',
    slug: 'ecommerce-shopify-solutions',
    tag: 'Sell seamlessly',
    more: 'Explore eCommerce',
    isWide: false,
    description:
      'Create smooth digital shopping experiences with B2B portals and the payment, shipping, and inventory tools you need.',
    icon: '🛍',
    themeVariant: 'b' as const,
    order: 6,
  },
  {
    title: 'Cloud, DevOps & Platform Engineering',
    slug: 'cloud-devops-platform-engineering',
    tag: 'Scale confidently',
    more: 'Explore cloud solutions',
    isWide: false,
    description:
      'Ship with confidence using secure cloud foundations and smarter deployments that keep applications fast, stable.',
    icon: '☁',
    themeVariant: 'c' as const,
    order: 7,
  },
  {
    title: 'Cybersecurity & Managed IT',
    slug: 'cybersecurity-managed-it',
    tag: 'Stay protected',
    more: 'Explore security & support',
    isWide: false,
    description:
      'Protect your systems and keep applications healthy, secure, and reliable with responsive ongoing technical support.',
    icon: '🛡',
    themeVariant: 'd' as const,
    order: 8,
  },
  {
    title: 'UI/UX & Product Design',
    slug: 'ui-ux-product-design',
    tag: 'Design that works',
    more: 'Explore product design',
    isWide: false,
    description:
      'Turn user research and testing into clear, on-brand experiences designed to earn sign-ups, sales.',
    icon: '✏',
    themeVariant: 'a' as const,
    order: 9,
  },
  {
    title: 'White-Label Development & Dedicated Teams',
    slug: 'white-label-development-dedicated-teams',
    tag: 'Build together',
    more: 'Explore team partnerships',
    isWide: false,
    description:
      'Extend your team without the hiring burden. Work with us as a confidential delivery partner, or add dedicated developers to your own workflow.',
    icon: '👥',
    themeVariant: 'b' as const,
    order: 10,
  },
  {
    title: 'Amazon EBC & Brand Content',
    slug: 'amazon-ebc-brand-content',
    tag: 'Make your brand stand out',
    more: 'Explore Amazon EBC Services',
    isWide: false,
    description:
      'Enhance your Amazon product listings with compelling A+ Content, engaging Brand Stories, and professional Brand Stores that build trust, showcase your brand, and drive more conversions.',
    icon: '🛍',
    themeVariant: 'a' as const,
    order: 11,
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
    image: {
      url: '/images/placeholder.png',
      alternativeText: 'NRI Circle Platform',
    },
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
    image: {
      url: '/images/placeholder.png',
      alternativeText: 'Talk2site Platform',
    },
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
    image: {
      url: '/images/placeholder.png',
      alternativeText: 'Panchayat Pro Platform',
    },
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
    image: {
      url: '/images/placeholder.png',
      alternativeText: 'Smart Aptitude Platform',
    },
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
    image: {
      url: '/images/placeholder.png',
      alternativeText: 'Multispecialty Hospital Management System',
    },
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
    image: {
      url: '/images/placeholder.png',
      alternativeText: 'Swift Reach Vehicle Service App',
    },
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
    image: {
      url: '/images/placeholder.png',
      alternativeText: 'Chat Walstargroup WhatsApp Automation Tool',
    },
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
    coverImage: {
      url: '/images/placeholder.png',
      alternativeText: 'Jockey Australia.Website Revamp',
    },
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
    coverImage: {
      url: '/images/placeholder.png',
      alternativeText: 'Building A High-Conversion Patient Financing Website',
    },
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
    avatar: {
      url: '/images/testimonials/nathan-fowler.png',
      alternativeText: 'Nathan Fowler',
    },
    isHighlighted: false,
    order: 1,
  },
  {
    authorName: 'Fred Fuller',
    quote:
      'I was impressed with their communications, knowledge, and fair pricing, along with their professionalism, commitment to delivering quality results.',
    companyName: 'Company name',
    rating: 5,
    avatar: {
      url: '/images/testimonials/fred-fuller.png',
      alternativeText: 'Fred Fuller',
    },
    isHighlighted: true,
    order: 2,
  },
  {
    authorName: 'Derek Campbell',
    quote:
      'Working with Walstar Technologies was a great experience. Their team provided excellent support throughout the project.',
    companyName: 'Company name',
    rating: 5,
    avatar: {
      url: '/images/testimonials/derek-campbell.png',
      alternativeText: 'Derek Campbell',
    },
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
        headingPrefix: 'Technology Expertise.\nBusiness-First Thinking.',
        headingSerif: 'Reliable Delivery.',
        headingSuffix: '',
        description:
          'Since 2017, Walstar Technologies has helped businesses turn ideas into\ndigital products and technology solutions. From custom software and\nmobile applications to AI-powered automation and digital growth, we\ncombine engineering, design, and strategy to support your business goals.',
        ratingStars: 5,
        ratingLabel: 'Rated 5/5 on',
        ratingPlatforms: [
          {
            name: 'Clutch',
            logo: { url: '/images/about/rating-clutch.svg', alternativeText: 'Clutch' },
          },
          {
            name: 'Google',
            logo: { url: '/images/about/rating-google.svg', alternativeText: 'Google' },
          },
          {
            name: 'GoodFirms',
            logo: { url: '/images/about/rating-goodfirms.svg', alternativeText: 'GoodFirms' },
          },
        ],
        stats: [
          { value: '08', label: 'Products\nDeveloped' },
          { value: '10', label: 'Core Service\nCategories' },
          { value: '02', label: 'ISO Quality\nCertifications' },
          { value: '12', label: 'Industries\nServed' },
        ],
        primaryImage: {
          url: '/images/about/about-primary.png',
          alternativeText: 'About Walstar Technologies',
        },
        secondaryImage: {
          url: '/images/about/about-secondary.png',
          alternativeText: 'Walstar Team',
        },
        ctaLabel: null,
        ctaHref: '/about-us',
      },
      {
        __component: 'sections.capabilities' as const,
        pill: 'Capabilities',
        headingPrefix: 'Custom Software, AI, Cloud, Security\nand Digital Growth',
        headingSerif: 'Under One Roof',
        subtitle:
          'From AI-driven automation to custom enterprise software, we deliver digital solutions that solve real problems, streamline operations, and help businesses scale.',
        ctaLabel: 'View Services ↗',
        ctaHref: '/services',
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
        ctaBannerTitle: "Have a Project in Mind? Let's Build It Together.",
        ctaBannerDescription:
          "Whether you're planning an AI solution, developing custom business software, modernizing an existing application, or improving your digital growth, Walstar Technologies can help you explore the right approach. Tell us what you want to achieve. We'll discuss your requirements and the next steps.",
        ctaBannerLabel: 'Discuss Your Project ↗',
        ctaBannerHref: '/contact',
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
        topRowDurationSeconds: 70,
        topRowDirection: 'left' as const,
        bottomRowDurationSeconds: 140,
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
        ctaBannerTitle: "Let's Turn Your Idea Into Something Exceptional.",
        ctaBannerDescription:
          'Whether you need an AI-powered solution, custom software, a modern website, or a digital growth strategy, Walstar Technologies can help you plan, build, and scale with confidence.',
        ctaBannerLabel: 'Discuss Your Project',
        ctaBannerHref: '/contact',
      },
      {
        __component: 'sections.digital-solutions' as const,
        tag: 'Digital Solutions',
        headingPrefix: 'Digital Solutions For Different',
        headingSerif: 'Business Needs',
        description:
          'From healthcare and retail to logistics and SaaS, we build software, AI and digital growth solutions that fit how your industry actually works.',
        items: [
          { title: 'Healthcare', color: 'bg-[#DFF1FF]' },
          { title: 'eCommerce & Retail', color: 'bg-[#DFF1FF]' },
          { title: 'Fashion & Apparel', color: 'bg-[#F8F6EF]' },
          { title: 'Education & E-Learning', color: 'bg-[#F8F6EF]' },
          { title: 'Real Estate', color: 'bg-[#F8F6EF]' },
          { title: 'Logistics & Transportation', color: 'bg-[#F8F6EF]' },
          { title: 'Hospitality & Travel', color: 'bg-[#DFF1FF]' },
          { title: 'SaaS & Technology', color: 'bg-[#F8F6EF]' },
          { title: 'Manufacturing', color: 'bg-[#F8F6EF]' },
          { title: 'Finance & Business Services', color: 'bg-[#DFF1FF]' },
          { title: 'Legal Services', color: 'bg-[#F8F6EF]' },
          { title: 'Startups & SMEs', color: 'bg-[#DFF1FF]' },
        ],
      },
      {
        __component: 'sections.testimonials' as const,
        tag: 'Honest clients',
        headingPrefix: 'Trusted by',
        headingSerif: 'thousands',
        description:
          'Real feedback from businesses across the USA, UK, Australia and India that trust us with their software, AI and digital growth.',
        showAllTestimonials: true,
      },
      {
        __component: 'sections.faq-section' as const,
        badgeText: 'FAQ',
        heading: 'Common Questions About\nWorking',
        headingAccent: 'With Walstar',
        items: [
          {
            question: 'What services does Walstar Technologies offer?',
            answer:
              'We offer AI development and automation, cloud and DevOps, cybersecurity and IT management, IT and digital transformation, mobile app development, custom ERP and CRM software, eCommerce, web and SaaS development, UI/UX design, and white-label or dedicated development teams.',
            defaultOpen: true,
          },
          {
            question: 'Who do you work with?',
            answer:
              'We work with startups, small and medium-sized businesses, enterprises, and agencies looking for reliable technology and digital solutions.',
            defaultOpen: false,
          },
          {
            question: 'Can you add AI to our existing website or software?',
            answer:
              'Yes. We can integrate AI-powered features, intelligent automation, chatbots, and custom AI solutions into your existing website, applications, and business software.',
            defaultOpen: false,
          },
          {
            question: 'Can you work as a white-label partner for our agency?',
            answer:
              'Yes. We provide white-label development services, allowing agencies to deliver technology solutions to their clients under their own brand.',
            defaultOpen: false,
          },
          {
            question: 'Do you work across time zones?',
            answer:
              'Yes. We collaborate with clients across different countries and time zones, with flexible communication and project coordination.',
            defaultOpen: false,
          },
        ],
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
        ctaHref: '/services/ai-solutions-business-automation',
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
        headingPrefix: 'Digital solutions',
        headingSerif: 'Scale',
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
          {
            name: 'Pratap Patil',
            role: 'CEO',
            linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
          },
          {
            name: 'Pramod Gaikwad',
            role: 'CTO',
            linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
          },
          {
            name: 'Megha Patil',
            role: 'Director',
            linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
          },
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
    title: 'Our Services',
    slug: 'services',
    isHomepage: false,
    pageType: 'standard' as const,
    order: 4,
    summary:
      'AI, digital marketing, software, web, mobile, ecommerce, cloud, security and design services from Walstar Technologies.',
    content:
      'Comprehensive digital services including AI solutions, digital marketing, custom software, web & SaaS, mobile apps, ecommerce, cloud, cybersecurity, UI/UX design, dedicated teams, and Amazon EBC.',
    seo: {
      metaTitle: 'Our Services | Walstar Technologies',
      metaDescription:
        'AI, digital marketing, software, web, mobile, ecommerce, cloud, security and design services from Walstar Technologies.',
    },
    sections: [
      {
        __component: 'sections.hero' as const,
        variant: 'compact' as const,
        chip: 'Our Expertise',
        headlinePrefix: 'Smart Digital Solutions That\nMove',
        headlineSerif: 'Your Business Forward.',
        headlineSuffix: '',
      },
      {
        __component: 'sections.service-grid' as const,
        pill: 'Services',
        headingPrefix: '',
        headingSerif: 'Solutions',
        headingSuffix: 'We Deliver',
        description:
          'We offer a comprehensive range of digital services designed to meet your evolving business needs. From web and software development to digital marketing, AI-powered solutions, and business automation, our expertise helps streamline operations, enhance customer experiences, improve efficiency, and create new opportunities for sustainable business growth.',
        showAllServices: true,
      },
      {
        ...SHARED_CTA_BAND,
        pill: 'CTA',
        heading: 'For Instant Support, Please Contact Us',
        subheading: 'Have a project in mind?',
        buttonLabel: 'Connect With Us ↗',
        buttonHref: '/contact',
      },
    ],
  },
  {
    title: 'AI Solutions & Business Automation',
    slug: 'ai-solutions-business-automation',
    isHomepage: false,
    pageType: 'service' as const,
    order: 4,
    summary:
      'AI Solutions, Business Automation, Custom Software, and SaaS Product Engineering capabilities.',
    content:
      'Comprehensive technical services spanning AI agents, workflow automation, web/SaaS engineering, and conversion-focused digital growth.',
    seo: {
      metaTitle: 'AI Solutions & Automation | Walstar Technologies',
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
        image: {
          url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794897929/Collaborative_AI_in_a_Modern_Office_1_59e5ed1401.png',
          alternativeText: 'AI Solutions & Business Automation',
        },
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
            icon: 'robot',
            title: 'AI Chatbots & Virtual Assistants',
            description:
              'Deliver faster, more consistent customer support with AI-powered assistants that answer common questions, guide users, qualify leads, and help customers find the information they need.',
          },
          {
            icon: 'clipboard',
            title: 'Business Process Automation',
            description:
              'Reduce repetitive manual work by automating routine business tasks, approvals, notifications, data entry, and other workflows.',
          },
          {
            icon: 'flow',
            title: 'AI Workflow Automation & Integration',
            description:
              'Connect your business applications and automate processes across CRM systems, ERP platforms, websites, eCommerce stores, and third-party tools.',
          },
          {
            icon: 'brain',
            title: 'Custom AI Development',
            description:
              'Build AI-powered applications, intelligent features, and tailored solutions designed around your business requirements, data, and operational challenges.',
          },
          {
            icon: 'chart',
            title: 'AI Data Processing & Intelligent Analytics',
            description:
              'Turn business data into useful insights with automated data processing, intelligent reporting, pattern analysis, and decision-support tools.',
          },
          {
            icon: 'chat',
            title: 'WhatsApp Business Automation',
            description:
              'Streamline customer communication through automated replies, lead qualification, inquiry management, notifications, and conversational workflows on WhatsApp.',
          },
          {
            icon: 'sparkles',
            title: 'Generative AI & Business Assistants',
            description:
              'Explore AI-powered assistants that help teams find information, summarize documents, generate content, and work with business knowledge more efficiently.',
          },
          {
            icon: 'plug',
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
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    isHomepage: false,
    pageType: 'service' as const,
    order: 5,
    summary:
      'Custom ERPs, CRMs, inventory systems, workflow automation, and enterprise application integration designed around your business.',
    content:
      'From business management systems to workflow automation, we develop scalable software solutions designed to simplify operations and improve productivity.',
    seo: {
      metaTitle: 'Custom Software Development | Walstar Technologies',
      metaDescription:
        'From business management systems to workflow automation, we develop scalable software solutions designed to simplify operations and improve productivity.',
    },
    sections: [
      {
        __component: 'sections.hero' as const,
        variant: 'compact' as const,
        chip: '● Services',
        headlinePrefix: 'Custom Software Built',
        headlineSerif: 'for Your Business',
        headlineSuffix: '',
        description: '',
      },
      {
        __component: 'sections.svc-intro' as const,
        pill: '● Designed to Scale',
        headingPrefix: 'Build ',
        headingSerif: 'Custom Software',
        headingSuffix: ' That\nWorks the Way Your Business\nWorks',
        description:
          'From business management systems to workflow automation, we develop scalable software solutions designed to simplify operations and improve productivity.',
        image: {
          url: '/images/placeholder.png',
          alternativeText: 'Custom Software Built for Your Business',
        },
        ctaLabel: 'Discuss Your Software Project ↗',
        ctaHref: '#cta',
      },
      {
        __component: 'sections.svc-capabilities' as const,
        pill: '● Services',
        headingPrefix: 'Custom Software Solutions for\nBetter',
        headingSerif: 'Business Management',
        headingSuffix: '',
        description:
          'Every business has its own processes, challenges, and operational requirements. Off-the-<br class="d">shelf software may not always provide the flexibility or functionality you need.<br class="d"> Our custom software development services help businesses build applications that fit their<br class="d"> workflows, connect their systems, and support their long-term goals.',
        capabilityItems: [
          {
            icon: 'layers',
            title: 'Custom ERP Software Development',
            description:
              'Manage finance, sales, inventory, purchasing, and employees with customized ERP solutions that streamline business operations and reporting.',
          },
          {
            icon: 'users',
            title: 'CRM Software Development',
            description:
              'Build stronger customer relationships with custom CRM solutions for managing leads, sales, communication, follow-ups, and business opportunities.',
          },
          {
            icon: 'box',
            title: 'Inventory & Stock Management Systems',
            description:
              'Gain inventory control with stock tracking, purchase orders, warehouse management, supplier coordination, and real-time reporting.',
          },
          {
            icon: 'flow',
            title: 'Business Process & Workflow Automation',
            description:
              'Automate approvals, notifications, data entry, and task assignments to reduce manual work and improve operational efficiency.',
          },
          {
            icon: 'grid',
            title: 'Custom Business Applications',
            description:
              'Build custom web applications tailored to business needs, streamlining internal management, operations, and specialized workflows.',
          },
          {
            icon: 'plug',
            title: 'Enterprise Application Integration',
            description:
              'Connect software, databases, and business applications for seamless data sharing and smoother, more efficient workflows.',
          },
          {
            icon: 'chart',
            title: 'Reporting & Business Intelligence Solutions',
            description:
              'Gain business insights through customized dashboards, reports, and data visualizations that support smarter decision-making.',
          },
          {
            icon: 'bolt',
            title: 'Ready to Build Software Around Your Business?',
            description: '',
            isDark: true,
            ctaLabel: 'Discuss Your Project ↗',
            ctaHref: '#contact-form',
          },
        ],
      },
      {
        __component: 'sections.svc-benefits' as const,
        pill: '● Benefits',
        headingPrefix: 'How Custom Software\n',
        headingSerif: 'Helps Your Business',
        benefitItems: [
          {
            icon: 'target',
            title: 'Reach More Relevant<br class="d"> Customers',
            description:
              'Improve your visibility where potential customers search for products, services, and solutions like yours.',
            isDark: false,
          },
          {
            icon: 'sliders',
            title: 'Simplify Daily<br class="d"> Operations',
            description:
              'Bring important business processes into organized systems and reduce the complexity of managing multiple tools.',
            isDark: false,
          },
          {
            icon: 'bolt',
            title: 'Improve<br class="d"> Productivity',
            description:
              'Automate repetitive activities and give your team more time to focus on important business tasks.',
            isDark: false,
          },
          {
            icon: 'db',
            title: 'Centralize Business<br class="d"> Information',
            description:
              'Manage customer, inventory, sales, and operational information through connected systems.',
            isDark: false,
          },
          {
            icon: 'bars',
            title: 'Improve Business<br class="d"> Visibility',
            description:
              'Use dashboards and reports to understand performance, identify issues, and make informed decisions.',
            isDark: false,
          },
          {
            icon: 'sliders',
            title: 'Adapt to Your<br class="d"> Business Needs',
            description:
              'Build software around your processes, with the flexibility to introduce new features as your business evolves.',
            isDark: false,
          },
          {
            icon: 'net',
            title: 'Connect Your Existing Systems',
            description:
              'Integrate business applications and reduce unnecessary manual data<br class="d"> transfers between platforms.',
            isDark: true,
          },
        ],
      },
      {
        __component: 'sections.svc-process' as const,
        pill: '● Process',
        headingPrefix: 'Our Custom Software\n',
        headingSerif: 'Development Process',
        steps: [
          {
            number: '01',
            title: 'Requirement Analysis<br class="d"> & Discovery',
            description:
              'We understand your operations, challenges,<br class="d"> objectives, users, and functional requirements<br class="d"> to define the right software solution.',
          },
          {
            number: '02',
            title: 'Planning & Solution<br class="d"> Architecture',
            description:
              'We identify the required features, application<br class="d"> structure, technology stack, integrations, and<br class="d"> development roadmap.',
          },
          {
            number: '03',
            title: 'UI/UX Design &<br class="d"> Prototyping',
            description:
              'We design intuitive user interfaces and<br class="d"> application workflows that make your<br class="d"> software easier to use and manage.',
          },
          {
            number: '04',
            title: 'Development &<br class="d"> Integration',
            description:
              'Our development team builds the application,<br class="d"> implements required functionality, and<br class="d"> connects it with relevant business systems.',
          },
          {
            number: '05',
            title: 'Testing & Quality<br class="d"> Assurance',
            description:
              'We test application functionality,<br class="d"> performance, usability, and integrations to<br class="d"> identify and resolve issues before deployment.',
          },
          {
            number: '06',
            title: 'Deployment &<br class="d"> Ongoing Support',
            description:
              'We help launch your software and provide<br class="d"> maintenance, technical support, and<br class="d"> enhancements based on your requirements.',
          },
        ],
      },
      {
        __component: 'sections.svc-approach' as const,
        pill: '● Our Approach',
        headingPrefix: 'Software Designed Around\n',
        headingSerif: 'Your Business Requirements',
        bodyOne:
          'We believe business software should solve real operational challenges rather<br class="d"> than force your team to change the way everything works.<br class="d"> Our approach focuses on understanding your requirements and building<br class="d"> solutions that are practical, reliable, and adaptable.',
        getBoxItems: [
          { label: 'Customized features and business workflows', icon: 'target' },
          { label: 'User-friendly interfaces and application experiences', icon: 'monitor' },
          { label: 'Scalable application architecture', icon: 'net' },
          { label: 'Integration with existing business systems', icon: 'plug' },
          { label: 'Role-based access and permission management', icon: 'shield' },
          { label: 'Data management and reporting capabilities', icon: 'bars' },
          { label: 'Ongoing maintenance and technical support', icon: 'head' },
        ],
      },
      {
        __component: 'sections.svc-cta' as const,
        pill: "● Let's Talk",
        headingPrefix: 'Ready to Build Software\n',
        headingSerif: 'Around Your Business?',
        bodyOne:
          'Let\'s discuss your business challenges, understand your requirements, and explore<br class="d"> how custom software can simplify your operations and support your growth.',
        ctaLabel: 'Discuss Your Software Project ↗',
        ctaHref: '#cta',
      },
      {
        ...SHARED_CTA_BAND,
        pill: '● CTA',
        heading: 'For Instant Support, Please Contact Us',
        subheading: 'Have a project in mind?',
        buttonLabel: 'Connect With Us ↗',
        buttonHref: '#cta',
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
  {
    title: 'Digital Marketing & Performance Growth',
    slug: 'digital-marketing-performance-growth',
    isHomepage: false,
    pageType: 'service' as const,
    order: 6,
    summary:
      'SEO, AI search visibility and performance marketing services from Walstar Technologies.',
    seo: {
      metaTitle: 'Digital Marketing & Performance Growth | Walstar Technologies',
      metaDescription:
        'SEO, AI search visibility and performance marketing services from Walstar Technologies.',
    },
    sections: [
      {
        __component: 'sections.hero',
        variant: 'compact',
        chip: '● Services',
        headlinePrefix: 'Digital Marketing &',
        headlineSerif: 'Performance Growth',
        headlineSuffix: '',
        description: null,
      },
      {
        __component: 'sections.svc-intro',
        pill: '● Growth & Visibility',
        headingPrefix: 'SEO, AI Search Visibility &',
        headingSerif: 'Performance Marketing',
        headingSuffix: '',
        description:
          'From business management systems to workflow automation, we\ndevelop scalable software solutions designed to simplify operations and\nimprove productivity.',
        image: {
          url: '/images/services/digital-marketing.png',
          alternativeText: 'Marketing team reviewing performance dashboards',
        },
        ctaLabel: 'Free AI & SEO Audit ↗',
        ctaHref: '#contact',
      },
      {
        __component: 'sections.svc-capabilities',
        pill: '● What we do',
        headingPrefix: 'Digital Strategies Designed to\n',
        headingSerif: 'Drive Business Growth',
        headingSuffix: '',
        capabilityItems: [
          {
            icon: 'search',
            title: 'Search Engine Optimization (SEO)',
            description:
              'Technical fixes, keyword research,\non-page optimization and link\nbuilding that lift your rankings for the\nsearches your buyers actually make.',
          },
          {
            icon: 'robot',
            title: 'AI-Search Optimization',
            description:
              'Clear, well-structured, expert\ncontent with schema markup, so\nChatGPT, Gemini and Google AI\nOverviews can find, understand and\ncite your business.',
          },
          {
            icon: 'location-pin',
            title: 'Local SEO and Listing Optimization',
            description:
              'Google Business Profile setup,\nconsistent listings and location-\nfocused content that put you in front\nof nearby customers.',
          },
          {
            icon: 'document-list',
            title: 'Content Marketing and Strategy',
            description:
              'Articles, guides and pages built\naround real buyer questions,\ndesigned to earn trust, rank in search\nand support the sales process.',
          },
          {
            icon: 'megaphone',
            title: 'Paid Advertising and PPC',
            description:
              'Build custom web applications\ntailored to business needs,\nstreamlining internal management,\noperations, and specialized\nworkflows.',
          },
          {
            icon: 'share',
            title: 'Social Media Marketing',
            description:
              'A consistent, platform-specific\ncontent plan that builds\nawareness and engages the right\naudience, with performance\ntracked.',
          },
          {
            icon: 'email',
            title: 'Email Marketing and Automation',
            description:
              'Targeted email and follow-up\nsequences that nurture leads and\nturn subscribers into customers.',
          },
          {
            icon: 'funnel',
            title: 'Lead Generation and Conversion Optimization',
            description:
              'Gain business insights through\ncustomized dashboards, reports,\nand data visualizations that support\nsmarter decision-making.',
          },
          {
            icon: 'shopping-cart',
            title: 'eCommerce Marketing',
            description:
              'Product page SEO, shopping and\nretargeting campaigns, and\nretention marketing to grow online\nstore sales.',
          },
          {
            icon: 'analytics-bars',
            title: 'Analytics and Performance Tracking',
            description:
              'GA4, conversion tracking and CRM\nconnection, with reports that show\nwhich channels bring real leads\nand revenue.',
          },
          {
            icon: 'bolt',
            title: 'Ready to Accelerate Your Digital Growth?',
            description:
              "Let's grow your online presence and generate more qualified leads.",
            isDark: true,
            ctaLabel: 'Get Started ↗',
            ctaHref: '#contact-form',
          },
        ],
      },
      {
        __component: 'sections.svc-benefits',
        pill: '● Benefits',
        headingPrefix: 'How Digital Marketing Helps\nYour Business ',
        headingSerif: 'Grow',
        benefitItems: [
          {
            icon: 'users-group',
            title: 'Reach More\nRelevant Customers',
            description:
              'Improve your visibility\nwhere potential customers\nsearch for products,\nservices, and solutions like\nyours.',
            isDark: false,
          },
          {
            icon: 'target',
            title: 'Generate Better-\nQualified Leads',
            description:
              'Align your content,\ntargeting, and landing\npages with the needs and\nintent of your ideal\ncustomers.',
            isDark: true,
          },
          {
            icon: 'growth-chart',
            title: 'Improve Marketing\nEfficiency',
            description:
              'Use data to identify\nunderperforming\ncampaigns, refine targeting,\nand make informed\nmarketing decisions.',
            isDark: false,
          },
          {
            icon: 'cursor-click',
            title: 'Turn More Visitors\nInto Inquiries',
            description:
              'Reduce friction in the\ncustomer journey with\nclearer messaging, better\nlanding pages, and\nstronger calls to action.',
            isDark: false,
          },
          {
            icon: 'growth-chart',
            title: 'Build Long-Term\nOnline Visibility',
            description:
              'Develop a sustainable\ndigital presence through\nuseful content, sound SEO\npractices, and consistent\noptimization.',
            isDark: false,
          },
        ],
      },
      {
        __component: 'sections.svc-process',
        pill: '● How we work',
        headingPrefix: 'Our Digital Marketing\n',
        headingSerif: 'Process',
        steps: [
          {
            number: '01',
            title: 'Discovery & Goal\nSetting',
            description:
              'Understand your business,\ntarget audience,\ncompetitors, current digital\npresence, and growth\nobjectives.',
          },
          {
            number: '02',
            title: 'Research &\nStrategy',
            description:
              'Identify relevant search\nopportunities, audience needs,\ncontent priorities, suitable\nmarketing channels, and\nperformance indicators.',
          },
          {
            number: '03',
            title: 'Implementation &\nCampaign Launch',
            description:
              'Execute the agreed strategy\nacross SEO, content, paid\ncampaigns, conversion\noptimization, and other\nselected channels.',
          },
          {
            number: '04',
            title: 'Measurement &\nAnalysis',
            description:
              'Review available analytics and\ncampaign data to understand\naudience behavior, lead\nquality, conversions, and\nmarketing performance.',
          },
          {
            number: '05',
            title: 'Optimization &\nGrowth',
            description:
              'Refine campaigns, content,\ntargeting, and website\nexperiences based on\nperformance insights and\nchanging business priorities.',
          },
        ],
      },
      {
        __component: 'sections.svc-approach',
        pill: '● Your goals first',
        headingPrefix: 'Digital Growth Strategies\nTailored to ',
        headingSerif: 'Your Business',
        bodyOne:
          'Every business has different audiences, competition, budgets, and growth\nobjectives. We develop digital marketing strategies around your specific\nneeds rather than applying the same approach to every business.',
        bodyTwo:
          'Whether you want to improve organic search rankings, increase qualified\ninquiries, strengthen AI-search visibility, or get more value from paid\ncampaigns, we help identify practical opportunities and build a strategy\naligned with your goals.\n\nOur approach emphasizes useful content, sound technical foundations,\nrelevant audience targeting, transparent reporting, and continuous\nimprovement.',
        getBoxItems: [
          { label: 'Useful Content', icon: 'document-text' },
          { label: 'Sound Technical Foundations', icon: 'gear' },
          { label: 'Relevant Audience Targeting', icon: 'target-arrow' },
          { label: 'Transparent Reporting', icon: 'growth-chart' },
          { label: 'Continuous Improvement', icon: 'trending-up' },
        ],
      },
      {
        __component: 'sections.svc-cta',
        pill: '● Let’s talk',
        headingPrefix: 'Ready to Turn Your Digital\nPresence Into ',
        headingSerif: 'Business Growth?',
        bodyOne:
          "Let's identify the right opportunities to improve your online visibility, reach your\ntarget audience, and generate more meaningful business inquiries.",
        ctaLabel: 'Discuss Your Growth Strategy ↗',
        ctaHref: '#contact',
      },
      {
        ...SHARED_CTA_BAND,
        buttonHref: '/contact',
      },
    ],
  },
  {
    title: 'Web & SaaS Product Development',
    slug: 'web-saas-product-development',
    isHomepage: false,
    pageType: 'service' as const,
    order: 7,
    summary:
      'Custom website, web application and SaaS product development from Walstar Technologies.',
    seo: {
      metaTitle: 'Web & SaaS Product Development | Walstar Technologies',
      metaDescription:
        'Custom website, web application and SaaS product development from Walstar Technologies.',
    },
    sections: [
      {
        __component: 'sections.hero',
        variant: 'compact',
        chip: '● Services',
        headlinePrefix: 'Web & SaaS\n',
        headlineSerif: 'Product Development',
        headlineSuffix: '',
        description: null,
      },
      {
        __component: 'sections.svc-intro',
        pill: '● Web & SaaS',
        headingPrefix: 'Build Powerful Web Experiences\n and ',
        headingSerif: 'Scalable SaaS Products',
        headingSuffix: '',
        description:
          'From business management systems to workflow automation, we\ndevelop scalable software solutions designed to simplify operations and\nimprove productivity.',
        image: {
          url: '/images/services/web-saas.png',
          alternativeText: 'Team working with web application dashboards',
        },
        ctaLabel: 'Discuss Your Web Project ↗',
        ctaHref: '#contact',
      },
      {
        __component: 'sections.svc-capabilities',
        pill: '● Capabilities',
        headingPrefix: 'Web & SaaS Solutions\n Designed for ',
        headingSerif: 'Your Business',
        headingSuffix: '',
        description:
          'Every digital product has a purpose. Your website needs to communicate your value, your web application\n needs to solve a problem, and your SaaS platform needs to deliver a consistent experience as it grows.\n Our web and SaaS development services focus on building reliable, user-friendly, and scalable digital\n solutions aligned with your business objectives.',
        capabilityItems: [
          {
            tag: 'Custom Websites',
            icon: 'monitor',
            title: 'Custom Website\n Development',
            description:
              'Build a professional online\n presence with custom-\n designed websites that\n communicate your brand,\n showcase your services, and\n create meaningful experiences\n for visitors.',
          },
          {
            tag: 'Smarter Operations',
            icon: 'monitor-settings',
            title: 'Web Application\n Development',
            description:
              'Develop powerful web-based\n applications tailored to your\n business requirements,\n including interactive\n dashboards, customer portals,\n management platforms, and\n specialized business tools.',
          },
          {
            tag: 'Workflow AI',
            icon: 'cloud-gear',
            title: 'SaaS Product\n Development',
            description:
              'Turn your software idea into a\n market-ready SaaS product\n with subscription-based\n access, user management,\n application dashboards, and\n scalable product architecture.',
          },
          {
            tag: 'Tailored AI',
            icon: 'network-nodes',
            title: 'SaaS MVP\n Development',
            description:
              'Validate your product idea with\n a Minimum Viable Product\n (MVP) that focuses on essential\n features, core functionality, and\n early user feedback before\n expanding into a full-scale\n platform.',
          },
          {
            tag: 'UI/UX Design',
            icon: 'ui-layout',
            title: 'UI/UX Design &\n Product Experience',
            description:
              'Create intuitive digital\n experiences through user\n research, wireframes,\n interactive prototypes, and\n modern interface design that\n make your products easier to\n use.',
          },
          {
            tag: 'Admin Dashboards',
            icon: 'api-plug',
            title: 'API Development\n & Third-Party\n Integrations',
            description:
              'Connect your digital products\n with external services, payment\n gateways, communication\n platforms, business\n applications, and other systems\n through suitable APIs and\n integrations.',
          },
          {
            tag: 'Smart Assistance',
            icon: 'robot',
            title: 'Generative AI &\n Business Assistants',
            description:
              'Explore AI-powered assistants\n that help teams find\n information, summarize\n documents, generate content,\n and work with business\n knowledge more efficiently.',
          },
          {
            tag: 'App Modernization',
            icon: 'browser-window',
            title: 'SaaS Modernization &\n Product Enhancement',
            description:
              'Improve existing web\n applications and SaaS\n platforms with updated\n interfaces, enhanced\n functionality, better\n performance, and maintainable\n architecture.',
          },
        ],
      },
      {
        __component: 'sections.svc-benefits',
        pill: '● Benefits',
        headingPrefix: 'How Web & SaaS Development\n Helps Your ',
        headingSerif: 'Business Grow',
        benefitItems: [
          {
            icon: 'phone',
            title: 'Create Better\n Digital\n Experiences',
            description:
              'Deliver modern, responsive,\n and user-friendly\n experiences that help\n customers interact with\n your business across\n devices.',
            isDark: false,
          },
          {
            icon: 'rocket',
            title: 'Turn Ideas Into\n Digital\n Products',
            description:
              'Transform your software\n concept into a functional\n product through\n structured planning,\n design, development,\n and testing.',
            isDark: true,
          },
          {
            icon: 'refresh',
            title: 'Build Recurring\n Revenue\n Opportunities',
            description:
              'Develop subscription-based\n software platforms with\n suitable plans, user access,\n and billing integrations to\n support your business\n model.',
            isDark: false,
          },
          {
            icon: 'network-nodes',
            title: 'Scale With\n Your\n Business',
            description:
              'Build flexible software\n architecture that can\n accommodate new\n users, features,\n integrations, and\n changing requirements.',
            isDark: false,
          },
          {
            icon: 'cloud-upload',
            title: 'Reach Customers\n Beyond Your\n Location',
            description:
              'Make your services and\n digital products\n accessible through web-\n based platforms that\n customers can use from\n different locations.',
            isDark: false,
          },
        ],
      },
      {
        __component: 'sections.svc-process',
        pill: '● Process',
        headingPrefix: 'Our Web & SaaS Product\n',
        headingSerif: 'Development Process',
        steps: [
          {
            number: '01',
            title: 'Discovery & Product\n Planning',
            description:
              'We understand your business objectives,\n target audience, product idea, functional\n requirements, and expected outcomes to\n define the project scope.',
          },
          {
            number: '02',
            title: 'Strategy & Technical\n Architecture',
            description:
              'We plan the application structure, technology\n stack, database architecture, integrations,\n and development roadmap based on your\n product requirements.',
          },
          {
            number: '03',
            title: 'UI/UX Design &\n Prototyping',
            description:
              'We create wireframes, user journeys, and\n interactive designs to establish a clear and\n intuitive product experience before\n development begins.',
          },
          {
            number: '04',
            title: 'Development &\n Integration',
            description:
              'Our developers build the website, web\n application, or SaaS platform with the\n required features, functionality, and third-\n party integrations.',
          },
          {
            number: '05',
            title: 'Testing & Quality\n Assurance',
            description:
              'We evaluate functionality, usability,\n responsiveness, performance, and security\n considerations to prepare the product for\n launch.',
          },
          {
            number: '06',
            title: 'Deployment &\n Ongoing Support',
            description:
              'We support deployment, monitor the product\n after launch, and help introduce\n improvements, new features, and technical\n enhancements as your requirements evolve.',
          },
        ],
      },
      {
        __component: 'sections.svc-approach',
        pill: '● Our Approach',
        headingPrefix: 'Built for Performance,\n',
        headingSerif: 'Flexibility & Growth',
        bodyOne:
          'A successful website or SaaS product needs more than attractive design. It\n requires a strong technical foundation, a smooth user experience, and the\n flexibility to adapt as business needs change.\n At Walstar Technologies, we focus on building digital products with:',
        getBoxItems: [
          { label: 'Responsive and user-friendly interfaces', icon: 'layout-grid' },
          { label: 'Scalable and maintainable application architecture', icon: 'network-nodes' },
          { label: 'Performance-focused development', icon: 'bolt' },
          { label: 'Secure authentication and access management', icon: 'shield-lock' },
          { label: 'API and third-party service integrations', icon: 'gear' },
          { label: 'Flexible product features and functionality', icon: 'gear' },
          { label: 'Ongoing technical maintenance and improvements', icon: 'wrench' },
        ],
      },
      {
        __component: 'sections.svc-cta',
        pill: '● Let’s talk',
        headingPrefix: 'Have an Idea for Your\n Next ',
        headingSerif: 'Digital Product?',
        bodyOne:
          "Whether you're planning a new website, launching a SaaS startup, or improving an existing web application,\n Walstar Technologies can help turn your idea into a functional digital product.\n Let's discuss your vision, explore the possibilities, and plan the right development approach for your business.",
        ctaLabel: 'Discuss Your Project ↗',
        ctaHref: '#contact',
      },
      {
        ...SHARED_CTA_BAND,
        buttonHref: '/contact',
      },
    ],
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    isHomepage: false,
    pageType: 'service' as const,
    order: 8,
    summary:
      'Android, iOS and cross-platform mobile app development from Walstar Technologies.',
    seo: {
      metaTitle: 'Mobile App Development | Walstar Technologies',
      metaDescription:
        'Android, iOS and cross-platform mobile app development from Walstar Technologies.',
    },
    sections: [
      {
        __component: 'sections.hero',
        variant: 'compact',
        chip: '● Services',
        headlinePrefix: 'Mobile App\n',
        headlineSerif: 'Development',
        headlineSuffix: '',
        description: null,
      },
      {
        __component: 'sections.svc-intro',
        pill: '● Mobile App Development',
        headingPrefix: 'Build Powerful Mobile Apps That\n Connect ',
        headingSerif: 'Your Business With\n',
        headingSuffix: 'Customers',
        description:
          'We design and develop user-friendly, high-performance mobile\n applications that help businesses improve customer engagement,\n simplify operations, and grow digitally.',
        image: {
          url: '/images/services/mobile-app.png',
          alternativeText: 'Person holding a smartphone showing app analytics',
        },
        ctaLabel: 'Discuss Your App Project ↗',
        ctaHref: '#contact',
      },
      {
        __component: 'sections.svc-capabilities',
        pill: '● Capabilities',
        headingPrefix: 'Mobile App Solutions Designed\n Around ',
        headingSerif: 'Your Business',
        headingSuffix: '',
        description:
          'Every mobile application serves a different purpose. Whether you want to reach more customers, improve\n internal operations, or launch a new digital product, we develop mobile solutions tailored to your business\n goals and user requirements.',
        capabilityItems: [
          {
            tag: 'Android Development',
            icon: 'smartphone-tablet',
            title: 'Android App\n Development',
            description:
              'Reach a wider audience with custom Android\n applications designed for performance,\n usability, and compatibility across supported\n Android devices.',
          },
          {
            tag: 'IOS Development',
            icon: 'apple',
            title: 'IOS App\n Development',
            description:
              'Deliver seamless experiences to Apple users\n with custom iPhone and iPad applications\n designed around your product requirements\n and platform guidelines.',
          },
          {
            tag: 'Multi-Platform Apps',
            icon: 'settings-target',
            title: 'Cross-Platform App\n Development',
            description:
              'Build Android and iOS apps using Flutter and\n React Native with a shared codebase,\n consistent experiences, and faster\n development across platforms.',
          },
          {
            tag: 'Mobile UI/UX',
            icon: 'palette',
            title: 'UI/UX Design For\n Mobile Apps',
            description:
              'Create intuitive and engaging mobile\n experiences through user research,\n wireframes, interactive prototypes, and user-\n focused interface design.',
          },
          {
            tag: 'Briefcase-Business',
            icon: 'users-group',
            title: 'Business & Enterprise\n Mobile Applications',
            description:
              'Simplify business operations with mobile\n applications for employee management, field\n operations, customer communication, service\n management, and internal workflows.',
          },
          {
            tag: 'Mobile Commerce',
            icon: 'shopping-cart',
            title: 'ECommerce & MCommerce\n App Development',
            description:
              'Make shopping more convenient with mobile\n commerce applications that support product\n browsing, customer accounts, shopping carts,\n payment integrations.',
          },
          {
            tag: 'Progressive Web Apps',
            icon: 'layout-grid',
            title: 'Progressive Web App\n (PWA) Development',
            description:
              'Create web applications that offer app-like\n experiences through modern browser\n technologies, responsive interfaces, and\n installable functionality where supported.',
          },
          {
            tag: 'App Integration',
            icon: 'api-plug',
            title: 'App Integration &\n API Development',
            description:
              'Connect mobile applications with existing\n business software, CRM and ERP systems,\n payment gateways, maps, communication\n tools, and other third-party services.',
          },
          {
            tag: 'App Maintenance',
            icon: 'tools',
            title: 'App Maintenance\n & Support',
            description:
              'Keep your application updated and reliable\n through bug fixes, compatibility updates,\n performance improvements, technical\n support, and feature enhancements.',
          },
        ],
      },
      {
        __component: 'sections.svc-benefits',
        pill: '● Benefits',
        headingPrefix: 'Our Mobile App\n',
        headingSerif: 'Development Process',
        benefitItems: [
          {
            icon: 'globe',
            title: 'Improve\n Customer\n Engagement',
            description:
              'Give customers a\n convenient way to access\n your products, services, and\n business information\n directly from their mobile\n devices.',
            isDark: false,
          },
          {
            icon: 'megaphone',
            title: 'Strengthen\n Your Digital\n Presence',
            description:
              'Extend your brand\n experience beyond your\n website and create\n more opportunities to\n connect with\n customers.',
            isDark: true,
          },
          {
            icon: 'users-group',
            title: 'Simplify\n Business\n Operations',
            description:
              'Support internal teams\n with mobile tools that\n streamline workflows,\n communication, and\n everyday business\n activities.',
            isDark: false,
          },
          {
            icon: 'cursor-click',
            title: 'Deliver Better\n User\n Experiences',
            description:
              'Make important\n services and features\n easier to access\n through intuitive\n navigation and user-\n friendly interfaces.',
            isDark: false,
          },
          {
            icon: 'growth-chart',
            title: 'Support\n Business\n Growth',
            description:
              'Build flexible mobile\n applications that can\n evolve with new features,\n integrations, and\n changing customer\n requirements.',
            isDark: false,
          },
        ],
      },
      {
        __component: 'sections.svc-process',
        pill: '● Process',
        headingPrefix: 'Our Mobile App\n',
        headingSerif: 'Development Process',
        steps: [
          {
            number: '01',
            title: 'Discovery &\n Requirement Analysis',
            description:
              'We understand your business objectives,\n target users, application idea, expected\n features, and technical requirements to\n define the project scope.',
          },
          {
            number: '02',
            title: 'Strategy &\n Technology Selection',
            description:
              'We identify the appropriate development\n approach, whether native Android, native\n iOS, or cross-platform, based on your\n requirements, budget, and project goals.',
          },
          {
            number: '03',
            title: 'UI/UX Design &\n Prototyping',
            description:
              'We create wireframes, user journeys, and\n application designs that focus on usability,\n accessibility, and a consistent user\n experience.',
          },
          {
            number: '04',
            title: 'App Development\n & Integration',
            description:
              'Our developers build the application,\n implement its features, and integrate the\n required APIs, databases, payment gateways,\n and third-party services.',
          },
          {
            number: '05',
            title: 'Testing & Quality\n Assurance',
            description:
              'We test application functionality, performance,\n compatibility, usability, and security\n considerations across supported devices and\n operating system versions.',
          },
          {
            number: '06',
            title: 'Deployment & App\n Store Submission',
            description:
              'We prepare the application for release and\n assist with publishing it to the Google Play\n Store and Apple App Store, subject to their\n respective review and approval processes.',
          },
          {
            number: '07',
            title: 'Maintenance &\n Continuous Improvement',
            description:
              'After launch, we provide technical support,\n bug fixes, updates, and feature enhancements\n to help your application evolve over time.',
          },
        ],
        ctaCard: {
          title: 'Ready to Launch\n Your Mobile App?',
          description:
            'Turn your idea into a powerful\n mobile app built for your\n business goals.',
          ctaLabel: 'Have an App Idea? ↗',
          ctaHref: '#contact',
        },
      },
      {
        __component: 'sections.svc-approach',
        pill: '● Our Approach',
        headingPrefix: 'Built for Performance,\n',
        headingSerif: 'Usability & Scalability',
        bodyOne:
          'A successful mobile application needs more than attractive screens. It should\n provide a reliable experience, work smoothly across supported devices, and\n adapt as your business grows.\n\nWe select the development technologies and architecture based on the\n application’s functionality, target platforms, and long-term requirements.',
        getBoxItems: [
          { label: 'Intuitive and user-friendly interfaces', icon: 'layout-grid' },
          { label: 'Responsive experiences across supported devices', icon: 'responsive-devices' },
          { label: 'Performance-focused application development', icon: 'gauge' },
          { label: 'Secure authentication and data handling', icon: 'shield-lock' },
          { label: 'API and third-party service integrations', icon: 'api-plug' },
          { label: 'Scalable application architecture', icon: 'layers' },
          { label: 'Testing and quality assurance', icon: 'clipboard-check' },
          { label: 'Ongoing maintenance and technical support', icon: 'wrench' },
        ],
      },
      {
        __component: 'sections.svc-cta',
        pill: '● Let’s talk',
        headingPrefix: 'Have an Idea for a\n',
        headingSerif: 'Mobile App?',
        bodyOne:
          "Let's turn your idea into a mobile experience that helps your business connect\n with customers, simplify operations, and create new opportunities for growth.",
        ctaLabel: 'Discuss Your Project ↗',
        ctaHref: '#contact',
        secondaryCtaLabel: 'Contact Our Team ↗',
        secondaryCtaHref: '#contact',
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
      route: '/services',
      hasDropdown: true,
      isHighlighted: false,
      openInNewTab: false,
      subItems: [
        {
          label: 'AI Solutions & Automation',
          description: 'AI agents, chatbots & workflow automation',
          route: '/services/ai-solutions-business-automation',
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
        {
          label: 'Mobile App Development',
          description: 'Native iOS, Android & cross-platform mobile apps',
          route: '/services/mobile-app-development',
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
        { label: 'Services', route: '/services', openInNewTab: false },
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

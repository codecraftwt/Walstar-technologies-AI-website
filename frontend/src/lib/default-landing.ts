import type {
  CaseStudyItem,
  FooterData,
  LandingPayload,
  NavbarData,
  PageItem,
  PartnerLogo,
  ProcessStep,
  ProductItem,
  ServiceItem,
  SiteSetting,
  TestimonialItem,
} from '@/types/strapi';

export const DEFAULT_SITE_SETTING: SiteSetting = {
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
  contactEmail: 'info@walstartechnologies.com',
  footerAbout:
    'Results-driven digital agency building secure,\nscalable solutions for global businesses.',
  footerAboutLogo: {
    url: '/images/about/walstar-origami.gif',
    alternativeText: 'Walstar Technologies Origami Star',
    width: 44,
    height: 44,
  },
  footerNewsletterTitle: 'Have Project in mind ?',
  footerNewsletterSubtitle: 'Let’s create something great.',
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
  officePhones: '+91 9665784568\n+44 787 791 0843\n+16178109184',
  copyrightText:
    'Copyright © 2028 All Rights Reserved, Terms of Use and Privacy Policy',
};

const DEFAULT_PARTNER_LOGOS: PartnerLogo[] = [
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

const DEFAULT_TRUSTED_LOGOS: PartnerLogo[] = [
  {
    name: 'LEON',
    image: {
      url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794485597/image_59_fe1d171275.png',
      alternativeText: 'LEON',
    },
  },
  {
    name: 'Mathew Trutman',
    image: {
      url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794485603/mayhewtrautman_logo_1024x293_1_2_6fc1cfacb0.png',
      alternativeText: 'Mathew Trutman',
    },
  },
  {
    name: 'LEXOPULUS',
    image: {
      url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794485599/image_60_91c2a2e862.png',
      alternativeText: 'LEXOPULUS',
    },
  },
  {
    name: '24G',
    image: {
      url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794485595/image_58_07aed9cfea.png',
      alternativeText: '24G',
    },
  },
  {
    name: 'CENTURY',
    image: {
      url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794485601/image_61_bd37f94998.png',
      alternativeText: 'CENTURY',
    },
  },
  {
    name: 'LifeSpring',
    image: {
      url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794896780/image_49_da5c5b2c18.png',
      alternativeText: 'LifeSpring',
    },
  },
  {
    name: 'GLN',
    image: {
      url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794896785/image_50_f96a42b6f3.png',
      alternativeText: 'GLN',
    },
  },
  {
    name: 'JOCKEY',
    image: {
      url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794896793/image_51_67482fd13b.png',
      alternativeText: 'JOCKEY',
    },
  },
  {
    name: 'NEXT LEVEL US',
    image: {
      url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794896799/image_52_5a4964d13e.png',
      alternativeText: 'NEXT LEVEL US',
    },
  },
  {
    name: 'WebWorks89',
    image: {
      url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794896804/Mask_group_d42e22c6a3.png',
      alternativeText: 'WebWorks89',
    },
  },
];

export const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
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

export const DEFAULT_SERVICES: ServiceItem[] = [
  {
    documentId: 'seed-service-1',
    title: 'AI Solutions & Business Automation',
    slug: 'ai-solutions-business-automation',
    tag: 'Work smarter',
    more: 'Explore AI solutions',
    isWide: true,
    description:
      'Build AI-powered applications, intelligent agents, chatbots, and automated workflows that reduce repetitive work and improve business efficiency.',
    icon: '✦',
    iconImage: {
      url: '/images/capabilities/ai-solutions.png',
    },
    image: {
      url: '/images/placeholder.png',
      alternativeText: 'AI Solutions & Business Automation',
    },
    themeVariant: 'a',
    order: 1,
  },
  {
    documentId: 'seed-service-2',
    title: 'Digital Marketing & Performance Growth',
    slug: 'digital-marketing-performance-growth',
    tag: 'Grow with intent',
    more: 'Explore digital growth',
    isWide: false,
    description:
      'Get discovered, attract the right visitors, and turn measurable campaign performance into qualified leads.',
    icon: '◀',
    iconImage: {
      url: '/images/capabilities/digital-marketing.png',
    },
    image: {
      url: '/images/placeholder.png',
      alternativeText: 'Digital Marketing & Performance Growth',
    },
    themeVariant: 'b',
    order: 2,
  },
  {
    documentId: 'seed-service-3',
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    tag: 'Built around you',
    more: 'Explore business software',
    isWide: false,
    description:
      'Make complex operations feel simple with custom ERP, CRM, inventory, and connected business systems.',
    icon: '▣',
    iconImage: {
      url: '/images/capabilities/custom-software.png',
    },
    image: {
      url: '/images/placeholder.png',
      alternativeText: 'Custom Software Development',
    },
    themeVariant: 'c',
    order: 3,
  },
  {
    documentId: 'seed-service-4',
    title: 'Web & SaaS Product Development',
    slug: 'web-saas-product-development',
    tag: 'Made to scale',
    more: 'Web & SaaS development',
    isWide: false,
    description:
      'Launch fast, secure websites and scalable SaaS products, with visibility and performance built in from day one.',
    icon: '◉',
    iconImage: {
      url: '/images/capabilities/web-saas.png',
    },
    image: {
      url: '/images/placeholder.png',
      alternativeText: 'Web & SaaS Product Development',
    },
    themeVariant: 'd',
    order: 4,
  },
  {
    documentId: 'seed-service-5',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    tag: 'Made for people',
    more: 'Explore mobile apps',
    isWide: false,
    description:
      'Reach customers wherever they are with intuitive Android and iOS apps, dependable integrations, and a scalable foundation.',
    icon: '📱',
    iconImage: {
      url: '/images/capabilities/mobile-app.png',
    },
    themeVariant: 'a',
    order: 5,
  },
  {
    documentId: 'seed-service-6',
    title: 'ECommerce & Shopify Solutions',
    slug: 'ecommerce-shopify-solutions',
    tag: 'Sell seamlessly',
    more: 'Explore eCommerce',
    isWide: false,
    description:
      'Create smooth digital shopping experiences with B2B portals and the payment, shipping, and inventory tools you need.',
    icon: '🛍',
    iconImage: {
      url: '/images/capabilities/ecommerce.png',
    },
    themeVariant: 'b',
    order: 6,
  },
  {
    documentId: 'seed-service-7',
    title: 'Cloud, DevOps & Platform Engineering',
    slug: 'cloud-devops-platform-engineering',
    tag: 'Scale confidently',
    more: 'Explore cloud solutions',
    isWide: false,
    description:
      'Ship with confidence using secure cloud foundations and smarter deployments that keep applications fast, stable.',
    icon: '☁',
    iconImage: {
      url: '/images/capabilities/cloud-devops.png',
    },
    themeVariant: 'c',
    order: 7,
  },
  {
    documentId: 'seed-service-8',
    title: 'Cybersecurity & Managed IT',
    slug: 'cybersecurity-managed-it',
    tag: 'Stay protected',
    more: 'Explore security & support',
    isWide: false,
    description:
      'Protect your systems and keep applications healthy, secure, and reliable with responsive ongoing technical support.',
    icon: '🛡',
    iconImage: {
      url: '/images/capabilities/cybersecurity.png',
    },
    themeVariant: 'd',
    order: 8,
  },
  {
    documentId: 'seed-service-9',
    title: 'UI/UX & Product Design',
    slug: 'ui-ux-product-design',
    tag: 'Design that works',
    more: 'Explore product design',
    isWide: false,
    description:
      'Turn user research and testing into clear, on-brand experiences designed to earn sign-ups, sales.',
    icon: '✏',
    iconImage: {
      url: '/images/capabilities/ui-ux-design.png',
    },
    themeVariant: 'a',
    order: 9,
  },
  {
    documentId: 'seed-service-10',
    title: 'White-Label Development & Dedicated Teams',
    slug: 'white-label-development-dedicated-teams',
    tag: 'Build together',
    more: 'Explore team partnerships',
    isWide: false,
    description:
      'Extend your team without the hiring burden. Work with us as a confidential delivery partner, or add dedicated developers to your own workflow.',
    icon: '👥',
    iconImage: {
      url: '/images/capabilities/dedicated-teams.png',
    },
    themeVariant: 'b',
    order: 10,
  },
  {
    documentId: 'seed-service-11',
    title: 'Amazon EBC & Brand Content',
    slug: 'amazon-ebc-brand-content',
    tag: 'Make your brand stand out',
    more: 'Explore Amazon EBC Services',
    isWide: false,
    description:
      'Enhance your Amazon product listings with compelling A+ Content, engaging Brand Stories, and professional Brand Stores that build trust, showcase your brand, and drive more conversions.',
    icon: '🛍',
    iconImage: {
      url: '/images/capabilities/ecommerce.png',
    },
    themeVariant: 'a',
    order: 11,
  },
];

export const DEFAULT_PRODUCTS: ProductItem[] = [
  {
    documentId: 'seed-prod-1',
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
    documentId: 'seed-prod-2',
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
    documentId: 'seed-prod-3',
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
    documentId: 'seed-prod-4',
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
    documentId: 'seed-prod-5',
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
    documentId: 'seed-prod-6',
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
    documentId: 'seed-prod-7',
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

export const DEFAULT_CASE_STUDIES: CaseStudyItem[] = [
  {
    documentId: 'seed-cs-1',
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
    coverImage: {
      url: '/images/placeholder.png',
      alternativeText: 'Jockey Australia.Website Revamp',
    },
    themeVariant: 'a',
    order: 1,
  },
  {
    documentId: 'seed-cs-2',
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
    coverImage: {
      url: '/images/placeholder.png',
      alternativeText: 'Building A High-Conversion Patient Financing Website',
    },
    themeVariant: 'b',
    order: 2,
  },
];

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    documentId: 'seed-tm-1',
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
    documentId: 'seed-tm-2',
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
    documentId: 'seed-tm-3',
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

export const DEFAULT_PAGES: PageItem[] = [
  {
    documentId: 'seed-page-home',
    title: 'Homepage',
    slug: 'home',
    isHomepage: true,
    pageType: 'homepage',
    order: 1,
    summary:
      'Primary Walstar Technologies landing page controlled via Strapi Dynamic Zone sections.',
    seo: {
      metaTitle: 'Walstar Technologies | AI, Automation & Software',
      metaDescription:
        'AI-powered innovation, intelligent automation, and modern software engineering powered by Next.js, Strapi CMS, and PostgreSQL.',
    },
    sections: [
      {
        __component: 'sections.hero',
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
        __component: 'sections.partner-strip',
        ariaLabel: 'Partners',
        animationDurationSeconds: 24,
        scrollDirection: 'left',
        logos: DEFAULT_PARTNER_LOGOS,
      },
      {
        __component: 'sections.about',
        tag: 'About us',
        headingPrefix: 'The team behind',
        headingSerif: 'smarter',
        headingSuffix: 'automation',
        description:
          'From intelligent agents to connected business workflows, we design\nand implement practical AI solutions that help businesses save time,\nimprove decisions, and deliver better customer experiences.',
        highlightTitle: 'Engineering an Intelligent Future',
        highlightDescription:
          'We specialize in designing & deploying production AI systems that combine security, cost efficiency and lasting performance.',
        primaryImage: {
          url: '/images/about/about-primary.png',
          alternativeText: 'About Walstar Technologies',
        },
        secondaryImage: {
          url: '/images/about/about-secondary.png',
          alternativeText: 'Walstar Team',
        },
        highlightIcon: {
          url: '/images/about/about-highlight-icon.png',
          alternativeText: 'Engineering an Intelligent Future',
        },
        ctaLabel: 'More About Us ↗',
        ctaHref: '/about-us',
      },
      {
        __component: 'sections.capabilities',
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
        processSteps: DEFAULT_PROCESS_STEPS,
      },
      {
        __component: 'sections.products-showcase',
        tag: 'Our products',
        headingPrefix: 'Everything you need to create',
        headingSerif: 'smarter, faster',
        subtitle: 'Products built to simplify business',
        showAllProducts: true,
      },
      {
        __component: 'sections.trust-banner',
        tag: 'Trust',
        headingPrefix: 'Trusted by 10k+',
        headingSerif: 'fast-growing',
        headingSuffix: 'businesses',
        topRowDurationSeconds: 70,
        topRowDirection: 'left',
        bottomRowDurationSeconds: 140,
        bottomRowDirection: 'right',
        topRowLogos: DEFAULT_TRUSTED_LOGOS.slice(0, 5),
        bottomRowLogos: DEFAULT_TRUSTED_LOGOS.slice(5),
        logos: DEFAULT_TRUSTED_LOGOS,
      },
      {
        __component: 'sections.case-studies',
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
        __component: 'sections.testimonials',
        tag: 'Honest clients',
        headingPrefix: 'Trusted by',
        headingSerif: 'thousands',
        showAllTestimonials: true,
      },
      {
        __component: 'sections.before-after',
        beforeEyebrow: 'BEFORE',
        beforeTitle: 'Your Team Today',
        beforeCaption: '40 hrs / week of manual work',
        beforeImage: {
          url: '/images/before-after/before.webp',
          alternativeText: 'Your Team Today',
        },
        afterEyebrow: 'AFTER',
        afterTitle: 'With Walstar AI',
        afterCaption: '85% less manual effort. 05 hrs / week',
        afterImage: {
          url: '/images/before-after/after.webp',
          alternativeText: 'With Walstar AI',
        },
      },
      SHARED_CTA_BAND,
    ],
  },
  {
    documentId: 'seed-page-about',
    title: 'About Us',
    slug: 'about-us',
    isHomepage: false,
    pageType: 'about',
    order: 2,
    summary:
      'Building digital experiences that move business forward. Meet the leadership, engineering teams, and global offices of Walstar Technologies.',
    seo: {
      metaTitle: 'About Us | Walstar Technologies',
      metaDescription:
        'Building digital experiences that move business forward. Meet the leadership, engineering teams, and global offices of Walstar Technologies.',
    },
    sections: [
      {
        __component: 'sections.hero',
        variant: 'compact',
        chip: '● About Us',
        headlinePrefix: 'Building Digital',
        headlineSerif: 'Experiences',
        headlineSuffix: '\nThat Move Business Forward.',
      },
      {
        __component: 'sections.who-we-are',
        pill: '● Who we are',
        headingPrefix: 'A trusted partner for\n',
        headingSerif: 'what’s next',
        description: [
          'Founded with a mission to transform digital experiences, Walstar Technologies has grown into a trusted IT partner for startups, SMEs, and enterprises worldwide.',
          'We focus on performance, security, scalability, and user-centric design to maximize engagement and conversions.',
        ].join('\n'),
        ctaLabel: 'See what we do',
        ctaHref: '/service-1',
        image: {
          url: '/images/about/who-we-are.jpg',
          alternativeText: 'Who We Are',
        },
      },
      {
        __component: 'sections.journey-stats',
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
        __component: 'sections.solutions-grid',
        pill: '● What we do',
        headingPrefix: 'Digital solutions',
        headingSerif: 'Scale',
        subtitle:
          'Our multi-disciplinary team of designers, developers, strategists, and digital marketers works collaboratively to deliver meaningful outcomes.',
        hasTopOverlap: true,
        direction: 'left',
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
        __component: 'sections.why-choose',
        pill: '● Why choose Walstar',
        headingPrefix: 'Built different. ',
        headingSerif: 'Built\nfor impact.',
        reasons: [
          {
            icon: '▭',
            iconImage: { url: '/images/why-choose/web-app-solutions.png', alternativeText: 'Customized Web And App Solutions' },
            title: 'Customized Web And App Solutions',
            description:
              'We don’t believe in templates. Every website and application is built from scratch based on business objectives and user behavior.',
          },
          {
            icon: '✪',
            iconImage: { url: '/images/why-choose/industry-experience.png', alternativeText: '8+ Years Of Industry Experience' },
            title: '8+ Years Of Industry Experience',
            description:
              'Since 2017, we have successfully delivered 500+ digital projects across multiple industries worldwide.',
          },
          {
            icon: '▤',
            iconImage: { url: '/images/why-choose/cost-effective.png', alternativeText: 'Cost-Effective Development' },
            title: 'Cost-Effective Development',
            description:
              'We provide high-quality web design and software development at competitive pricing without compromising performance.',
          },
          {
            icon: '▥',
            iconImage: { url: '/images/why-choose/conversion-focused.png', alternativeText: 'Conversion-Focused Approach' },
            title: 'Conversion-Focused Approach',
            description:
              'Our websites are not just visually appealing. They are optimized for SEO, speed, and lead generation.',
          },
          {
            icon: '◍',
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
        __component: 'sections.vision-mission',
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
        __component: 'sections.team-showcase',
        pill: '● Our Leadership',
        headingPrefix: 'We do things that\n',
        headingSerif: 'matter',
        executiveLabel: 'Executive Team',
        executiveQuote: '“Quality Is Not Optional. It Is Our Foundation.”',
        executiveQuoteAuthor: '-Walstar Technologies',
        executives: [
          {
            name: 'Ashish Manwadkar',
            role: 'Founder & Managing Director',
            linkedinUrl: '#cta',
          },
          {
            name: 'Chetan Patil',
            role: 'Co-Founder & CEO',
            linkedinUrl: '#cta',
          },
          {
            name: 'Snehal Manwadkar',
            role: 'Co-Founder & Director',
            linkedinUrl: '#cta',
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
        __component: 'sections.global-offices',
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
    documentId: 'seed-page-contact',
    title: 'Contact',
    slug: 'contact',
    isHomepage: false,
    pageType: 'contact',
    order: 3,
    summary:
      'Connect with Walstar Technologies for AI solutions, automation audits, and custom software engineering.',
    seo: {
      metaTitle: 'Contact Us | Walstar Technologies',
      metaDescription:
        'Book a strategy call or send a project inquiry to Walstar Technologies.',
    },
    sections: [
      {
        __component: 'sections.hero',
        chip: 'Contact Walstar',
        headlinePrefix: 'Your Next',
        headlineSerif: 'Digital Journey',
        headlineSuffix: '\nStarts Here',
        variant: 'compact',
      },
      {
        __component: 'sections.contact-interest',
        tag: 'Contact Walstar',
        headingPrefix: "Let's build something\n",
        headingSerif: 'great',
        headingSuffix: 'together',
        subtitle:
          'Have an idea, project, or challenge in mind? Let’s connect and turn it into something impactful.',
        image: {
          url: '/images/contact-keyboard.jpg',
          alternativeText: 'Contact Walstar',
        },
        options: CONTACT_INTEREST_OPTIONS,
      },
      {
        __component: 'sections.contact-section',
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
    documentId: 'seed-page-service-1',
    title: 'AI Solutions & Business Automation',
    slug: 'service-1',
    isHomepage: false,
    pageType: 'service',
    order: 4,
    summary:
      'AI Solutions, Business Automation, Custom Software, and SaaS Product Engineering capabilities.',
    sections: [
      {
        __component: 'sections.hero',
        variant: 'compact',
        chip: '● Services',
        headlinePrefix: '',
        headlineSerif: 'AI',
        headlineSuffix: 'Solutions &\nBusiness Automation',
        description:
          'From autonomous customer agents and ERP integrations to cloud SaaS architecture, we engineer end-to-end systems that ship smoothly into production.',
      },
      {
        __component: 'sections.svc-intro',
        pill: '● AI Solutions & Business Automation',
        headingPrefix: 'AI Agents and Automation that cut',
        headingSerif: 'Manual Work',
        headingSuffix: 'and bring in more Leads',
        description:
          'Walstar is an AI development company in India helping startups, SMEs and enterprises build AI chatbots, AI agents and workflow automation that respond faster, work around the clock and turn your data into decisions.',
        image: {
          url: '/images/service-team-ai.png',
          alternativeText: 'AI Solutions & Business Automation',
        },
        ctaLabel: 'Get a Free AI Consultation ↗',
        ctaHref: '#contact-form',
      },
      {
        __component: 'sections.svc-challenges',
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
        __component: 'sections.svc-capabilities',
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
        __component: 'sections.svc-benefits',
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
        __component: 'sections.svc-process',
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
        __component: 'sections.svc-approach',
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
        __component: 'sections.svc-cta',
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
    documentId: 'seed-page-service-2',
    title: 'Custom Software Development',
    slug: 'service-2',
    isHomepage: false,
    pageType: 'service',
    order: 5,
    summary:
      'Custom ERPs, CRMs, inventory systems, workflow automation, and enterprise application integration designed around your business.',
    sections: [
      {
        __component: 'sections.hero',
        variant: 'compact',
        chip: '● Services',
        headlinePrefix: 'Custom Software Built',
        headlineSerif: 'for Your Business',
        headlineSuffix: '',
        description: null,
      },
      {
        __component: 'sections.svc-intro',
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
        __component: 'sections.svc-capabilities',
        pill: '● Services',
        headingPrefix: 'Custom Software Solutions for\nBetter ',
        headingSerif: 'Business Management',
        headingSuffix: '',
        description:
          'Every business has its own processes, challenges, and operational requirements. Off-the-<br class="d">shelf software may not always provide the flexibility or functionality you need.<br class="d"> Our custom software development services help businesses build applications that fit their<br class="d"> workflows, connect their systems, and support their long-term goals.',
        capabilityItems: [
          {
            icon: 'layers',
            title: 'Custom ERP Software<br class="d"> Development',
            description:
              'Manage finance, sales, inventory, purchasing, and employees with customized ERP solutions that streamline business operations and reporting.',
          },
          {
            icon: 'users',
            title: 'CRM Software<br class="d"> Development',
            description:
              'Build stronger customer relationships with custom CRM solutions for managing leads, sales, communication, follow-ups, and business opportunities.',
          },
          {
            icon: 'box',
            title: 'Inventory & Stock<br class="d"> Management Systems',
            description:
              'Gain inventory control with stock tracking, purchase orders, warehouse management, supplier coordination, and real-time reporting.',
          },
          {
            icon: 'flow',
            title: 'Business Process &<br class="d"> Workflow Automation',
            description:
              'Automate approvals, notifications, data entry, and task assignments to reduce manual work and improve operational efficiency.',
          },
          {
            icon: 'grid',
            title: 'Custom Business<br class="d"> Applications',
            description:
              'Build custom web applications tailored to business needs, streamlining internal management, operations, and specialized workflows.',
          },
          {
            icon: 'plug',
            title: 'Enterprise Application<br class="d"> Integration',
            description:
              'Connect software, databases, and business applications for seamless data sharing and smoother, more efficient workflows.',
          },
          {
            icon: 'bars',
            title: 'Reporting & Business<br class="d"> Intelligence Solutions',
            description:
              'Gain business insights through customized dashboards, reports, and data visualizations that support smarter decision-making.',
          },
          {
            icon: 'bolt',
            title: 'Ready to Build<br class="d"> Software Around Your<br class="d"> Business?',
            description: '',
            isDark: true,
            ctaLabel: 'Discuss Your Project ↗',
            ctaHref: '#cta',
          },
        ],
      },
      {
        __component: 'sections.svc-benefits',
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
        __component: 'sections.svc-process',
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
        __component: 'sections.svc-approach',
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
        __component: 'sections.svc-cta',
        pill: "● Let's Talk",
        headingPrefix: 'Ready to Build Software\n',
        headingSerif: 'Around Your Business?',
        bodyOne:
          "Let's discuss your business challenges, understand your requirements, and explore<br class=\"d\"> how custom software can simplify your operations and support your growth.",
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
    documentId: 'seed-page-service-3',
    title: 'Digital Marketing & Performance Growth',
    slug: 'service-3',
    isHomepage: false,
    pageType: 'service',
    order: 6,
    summary:
      'SEO, AI search visibility and performance marketing services from Walstar Technologies.',
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
            title: 'Search Engine\nOptimization (SEO)',
            description:
              'Technical fixes, keyword research,\non-page optimization and link\nbuilding that lift your rankings for the\nsearches your buyers actually make.',
          },
          {
            icon: 'robot',
            title: 'AI-Search\nOptimization',
            description:
              'Clear, well-structured, expert\ncontent with schema markup, so\nChatGPT, Gemini and Google AI\nOverviews can find, understand and\ncite your business.',
          },
          {
            icon: 'location-pin',
            title: 'Local SEO and Listing\nOptimization',
            description:
              'Google Business Profile setup,\nconsistent listings and location-\nfocused content that put you in front\nof nearby customers.',
          },
          {
            icon: 'document-list',
            title: 'Content Marketing and\nStrategy',
            description:
              'Articles, guides and pages built\naround real buyer questions,\ndesigned to earn trust, rank in search\nand support the sales process.',
          },
          {
            icon: 'megaphone',
            title: 'Paid Advertising\nand PPC',
            description:
              'Build custom web applications\ntailored to business needs,\nstreamlining internal management,\noperations, and specialized\nworkflows.',
          },
          {
            icon: 'share',
            title: 'Social Media\nMarketing',
            description:
              'A consistent, platform-specific\ncontent plan that builds\nawareness and engages the right\naudience, with performance\ntracked.',
          },
          {
            icon: 'email',
            title: 'Email Marketing and\nAutomation',
            description:
              'Targeted email and follow-up\nsequences that nurture leads and\nturn subscribers into customers.',
          },
          {
            icon: 'funnel',
            title: 'Lead Generation and\nConversion\nOptimization',
            description:
              'Gain business insights through\ncustomized dashboards, reports,\nand data visualizations that support\nsmarter decision-making.',
          },
          {
            icon: 'shopping-cart',
            title: 'eCommerce\nMarketing',
            description:
              'Product page SEO, shopping and\nretargeting campaigns, and\nretention marketing to grow online\nstore sales.',
          },
          {
            icon: 'analytics-bars',
            title: 'Analytics and\nPerformance\nTracking',
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
            ctaHref: '#contact',
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
        pill: '● CTA',
        heading: 'For Instant Support, Please Contact Us',
        subheading: 'Have a project in mind?',
        buttonLabel: 'Connect With Us ↗',
        buttonHref: '#contact',
      },
    ],
  },
  {
    documentId: 'seed-page-welcome',
    title: 'Welcome to Walstar Technologies',
    slug: 'welcome',
    isHomepage: false,
    pageType: 'standard',
    order: 5,
    summary:
      'Explore how Next.js, Strapi v5, and PostgreSQL power dynamic content across the Walstar platform.',
    sections: [
      {
        __component: 'sections.rich-content',
        tag: 'CMS Powered',
        headingPrefix: 'Manage every page from',
        headingSerif: 'Strapi Admin',
        body: [
          'Every route under the Page collection (home, about-us, contact, service-1, and any additional pages you create later) is composed from reusable Dynamic Zone sections.',
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

export const DEFAULT_HOMEPAGE_PAGE = DEFAULT_PAGES[0];

export const DEFAULT_NAVBAR: NavbarData = {
  documentId: 'seed-navbar-main',
  name: 'Primary Navbar',
  slug: 'main',
  isDefault: true,
  logoHref: '/',
  logoImage: {
    url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794482840/Logo_38ef472bf8.png',
    alternativeText: 'Walstar Technologies',
    width: 210,
    height: 71,
  },
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

export const DEFAULT_FOOTER: FooterData = {
  documentId: 'seed-footer',
  name: 'Primary Footer',
  slug: 'primary-footer',
  isDefault: true,
  logoAccentText: 'TECHNOLOGIES PVT. LTD.',
  logoImage: {
    url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794482840/Logo_38ef472bf8.png',
    alternativeText: 'Walstar Technologies',
    width: 210,
    height: 71,
  },
  aboutText:
    'Results-driven digital agency building secure,\nscalable solutions for global businesses.',
  aboutLogo: {
    url: '/images/about/walstar-origami.gif',
    alternativeText: 'Walstar Technologies Origami Star',
    width: 44,
    height: 44,
  },
  consultationShow: true,
  consultationTitle: 'Have Project in mind ?',
  consultationSubtitle: 'Let’s create something great.',
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
    { platform: 'Twitter', href: '#cta' },
    { platform: 'Instagram', href: '#cta' },
    { platform: 'Facebook', href: '#cta' },
  ],
  copyrightText:
    'Copyright © 2028 All Rights Reserved, Terms of Use and Privacy Policy',
};

export function getDefaultPageBySlug(slug: string): PageItem | null {
  if (slug === 'home') return DEFAULT_HOMEPAGE_PAGE;
  if (slug === 'service-3' || slug === 'digital-marketing-performance-growth') {
    return (
      DEFAULT_PAGES.find(
        (page) => page.slug === 'service-3' || page.slug === 'digital-marketing-performance-growth'
      ) ?? null
    );
  }
  if (slug === 'service-2' || slug === 'custom-software-development') {
    return (
      DEFAULT_PAGES.find(
        (page) => page.slug === 'service-2' || page.slug === 'custom-software-development'
      ) ?? null
    );
  }
  if (slug === 'service-1' || slug === 'ai-solutions-business-automation') {
    return (
      DEFAULT_PAGES.find(
        (page) => page.slug === 'service-1' || page.slug === 'ai-solutions-business-automation'
      ) ?? null
    );
  }
  return DEFAULT_PAGES.find((page) => page.slug === slug) ?? null;
}

export const DEFAULT_LANDING_DATA: LandingPayload = {
  navbar: DEFAULT_NAVBAR,
  footer: DEFAULT_FOOTER,
  siteSetting: DEFAULT_SITE_SETTING,
  page: DEFAULT_HOMEPAGE_PAGE,
  services: DEFAULT_SERVICES,
  products: DEFAULT_PRODUCTS,
  caseStudies: DEFAULT_CASE_STUDIES,
  testimonials: DEFAULT_TESTIMONIALS,
  pages: DEFAULT_PAGES.map(({ documentId, title, slug, pageType, isHomepage, order }) => ({
    documentId,
    title,
    slug,
    pageType,
    isHomepage,
    order,
  })),
};
